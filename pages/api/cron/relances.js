import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const RESEND_API_URL = 'https://api.resend.com/emails';

function joursEntre(dateA, dateB) {
  return (dateA.getTime() - dateB.getTime()) / (1000 * 60 * 60 * 24);
}

function formatMontant(valeur) {
  const n = Number(valeur) || 0;
  return n.toFixed(2) + ' €';
}

function formatDate(date) {
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function nomEntreprise(entreprise) {
  return entreprise.nom_commercial || entreprise.nom || 'votre entreprise';
}

async function envoyerEmail({ from, to, cc, replyTo, subject, html }) {
  const reponse = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + process.env.RESEND_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      cc: cc ? [cc] : undefined,
      reply_to: replyTo || undefined,
      subject,
      html,
    }),
  });
  const data = await reponse.json();
  if (!reponse.ok) {
    throw new Error(data.message || ('Erreur Resend (' + reponse.status + ')'));
  }
  return data.id;
}

async function enregistrerRelance({ documentId, entrepriseId, typeRelance, destinataire, succes, erreur, resendId }) {
  await supabaseAdmin.from('relances_automatiques').insert({
    document_id: documentId,
    entreprise_id: entrepriseId,
    type_relance: typeRelance,
    destinataire,
    succes,
    erreur: erreur || null,
    resend_id: resendId || null,
  });
}

export default async function handler(req, res) {
  try {
    const secretAttendu = process.env.CRON_SECRET;
    const autorisation = req.headers.authorization;
    const secretQuery = req.query.secret;
    const autorise = !secretAttendu || autorisation === ('Bearer ' + secretAttendu) || secretQuery === secretAttendu;
    if (!autorise) {
      return res.status(401).json({ error: 'Non autorise' });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL;
    if (!process.env.RESEND_API_KEY || !fromEmail) {
      return res.status(500).json({ error: "RESEND_API_KEY ou RESEND_FROM_EMAIL manquant dans les variables d'environnement." });
    }

    const maintenant = new Date();
    const resultat = { devis_relances: 0, factures_echeance_proche: 0, factures_retard: 0, erreurs: [] };

    const { data: entreprises, error: erreurEntreprises } = await supabaseAdmin
      .from('entreprises')
      .select('id, nom, nom_commercial, email, relance_delai_jours, delai_paiement_jours');
    if (erreurEntreprises) {
      return res.status(500).json({ error: 'entreprises: ' + erreurEntreprises.message });
    }

    for (const entreprise of entreprises) {
      const nomEnt = nomEntreprise(entreprise);

      const { data: devisAReleancer, error: erreurDevis } = await supabaseAdmin
        .from('documents')
        .select('id, numero, client_nom, client_email, total_ttc, envoye_le, derniere_relance_le')
        .eq('entreprise_id', entreprise.id)
        .eq('type', 'devis')
        .in('statut', ['envoye', 'relance'])
        .not('client_email', 'is', null)
        .not('envoye_le', 'is', null);
      if (erreurDevis) {
        resultat.erreurs.push('requete devis (' + nomEnt + '): ' + erreurDevis.message);
      }

      for (const devis of devisAReleancer || []) {
        const delai = entreprise.relance_delai_jours || 7;
        const joursDepuisEnvoi = joursEntre(maintenant, new Date(devis.envoye_le));
        const joursDepuisDerniereRelance = devis.derniere_relance_le
          ? joursEntre(maintenant, new Date(devis.derniere_relance_le))
          : null;
        const doitRelancer =
          joursDepuisEnvoi >= delai &&
          (joursDepuisDerniereRelance === null || joursDepuisDerniereRelance >= delai);
        if (!doitRelancer) continue;

        const sujet = 'Rappel - Devis ' + devis.numero + ' - ' + nomEnt;
        const html =
          '<p>Bonjour ' + (devis.client_nom || '') + ',</p>' +
          '<p>Je me permets de revenir vers vous concernant le devis <strong>' + devis.numero + '</strong>' +
          ' (' + formatMontant(devis.total_ttc) + ' TTC), envoye le ' + formatDate(new Date(devis.envoye_le)) + ', reste sans reponse a ce jour.</p>' +
          '<p>N.hesitez pas a me faire part de votre decision ou de vos eventuelles questions.</p>' +
          '<p>Cordialement,<br>' + nomEnt + '</p>';
        try {
          const resendId = await envoyerEmail({
            from: nomEnt + ' <' + fromEmail + '>',
            to: devis.client_email,
            cc: entreprise.email,
            replyTo: entreprise.email,
            subject: sujet,
            html,
          });
          await supabaseAdmin
            .from('documents')
            .update({ statut: 'relance', derniere_relance_le: maintenant.toISOString() })
            .eq('id', devis.id);
          await enregistrerRelance({
            documentId: devis.id,
            entrepriseId: entreprise.id,
            typeRelance: 'devis_relance',
            destinataire: devis.client_email,
            succes: true,
            resendId,
          });
          resultat.devis_relances++;
        } catch (err) {
          await enregistrerRelance({
            documentId: devis.id,
            entrepriseId: entreprise.id,
            typeRelance: 'devis_relance',
            destinataire: devis.client_email,
            succes: false,
            erreur: err.message,
          });
          resultat.erreurs.push('Devis ' + devis.numero + ': ' + err.message);
        }
      }

      const delaiPaiement = entreprise.delai_paiement_jours || 30;
      const { data: facturesEnCours, error: erreurFactures } = await supabaseAdmin
        .from('documents')
        .select('id, numero, client_nom, client_email, total_ttc, date_document, derniere_relance_le')
        .eq('entreprise_id', entreprise.id)
        .eq('type', 'facture')
        .in('statut', ['envoye', 'facture_emise'])
        .is('date_paiement', null)
        .not('client_email', 'is', null);
      if (erreurFactures) {
        resultat.erreurs.push('requete factures (' + nomEnt + '): ' + erreurFactures.message);
      }

      for (const facture of facturesEnCours || []) {
        const dateEcheance = new Date(facture.date_document + 'T00:00:00');
        dateEcheance.setDate(dateEcheance.getDate() + delaiPaiement);
        const joursAvantEcheance = joursEntre(dateEcheance, maintenant);
        const joursDepuisDerniereRelance = facture.derniere_relance_le
          ? joursEntre(maintenant, new Date(facture.derniere_relance_le))
          : null;

        const echeanceProche = joursAvantEcheance >= 0 && joursAvantEcheance <= 3 && facture.derniere_relance_le === null;
        const enRetard =
          joursAvantEcheance < 0 &&
          (joursDepuisDerniereRelance === null || joursDepuisDerniereRelance >= 7);

        if (!echeanceProche && !enRetard) continue;

        const typeRelance = enRetard ? 'facture_retard' : 'facture_echeance_proche';
        const sujet = enRetard
          ? 'Facture ' + facture.numero + ' en retard de paiement - ' + nomEnt
          : 'Rappel - Facture ' + facture.numero + ' a regler bientot - ' + nomEnt;
        const html = enRetard
          ? '<p>Bonjour ' + (facture.client_nom || '') + ',</p>' +
            '<p>Sauf erreur de notre part, la facture <strong>' + facture.numero + '</strong>' +
            ' (' + formatMontant(facture.total_ttc) + ' TTC), dont l.echeance etait fixee au ' + formatDate(dateEcheance) + ',' +
            ' reste a ce jour impayee.</p>' +
            '<p>Merci de bien vouloir proceder au reglement dans les meilleurs delais, ou de nous contacter en cas de difficulte.</p>' +
            '<p>Cordialement,<br>' + nomEnt + '</p>'
          : '<p>Bonjour ' + (facture.client_nom || '') + ',</p>' +
            '<p>Petit rappel amical : la facture <strong>' + facture.numero + '</strong>' +
            ' (' + formatMontant(facture.total_ttc) + ' TTC) arrive a echeance le ' + formatDate(dateEcheance) + '.</p>' +
            '<p>N.hesitez pas a nous contacter pour toute question.</p>' +
            '<p>Cordialement,<br>' + nomEnt + '</p>';
        try {
          const resendId = await envoyerEmail({
            from: nomEnt + ' <' + fromEmail + '>',
            to: facture.client_email,
            cc: entreprise.email,
            replyTo: entreprise.email,
            subject: sujet,
            html,
          });
          await supabaseAdmin
            .from('documents')
            .update({ derniere_relance_le: maintenant.toISOString() })
            .eq('id', facture.id);
          await enregistrerRelance({
            documentId: facture.id,
            entrepriseId: entreprise.id,
            typeRelance,
            destinataire: facture.client_email,
            succes: true,
            resendId,
          });
          if (enRetard) resultat.factures_retard++;
          else resultat.factures_echeance_proche++;
        } catch (err) {
          await enregistrerRelance({
            documentId: facture.id,
            entrepriseId: entreprise.id,
            typeRelance,
            destinataire: facture.client_email,
            succes: false,
            erreur: err.message,
          });
          resultat.erreurs.push('Facture ' + facture.numero + ': ' + err.message);
        }
      }
    }

    return res.status(200).json(resultat);
  } catch (err) {
    return res.status(500).json({ error: (err && err.message) || String(err), stack: err && err.stack });
  }
}
