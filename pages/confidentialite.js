import Head from 'next/head';

export default function Confidentialite() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité (RGPD) — DEV-IX</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles du service DEV-IX." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Slab:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          :root { --creme:#F5F1E8; --papier:#FDFBF9; --bois:#8B6F47; --noyer:#5C4033; --encre:#2C2C2A; --sauge:#2C5F63; --rouille:#B5651D; --trait:#E3DCCB; }
          * { box-sizing: border-box; }
          body { margin:0; background:var(--creme); color:var(--encre); font-family:'Inter', sans-serif; line-height:1.65; }
          h1,h2 { font-family:'Roboto Slab', serif; color:var(--noyer); }
          h1 { font-size:28px; margin:0 0 8px; }
          h2 { font-size:18px; margin:32px 0 10px; }
          a { color: var(--noyer); }
          .conteneur { max-width: 760px; margin: 0 auto; padding: 40px 24px 80px; }
          header.entete { display:flex; align-items:center; justify-content:space-between; padding:22px 24px; max-width:1080px; margin:0 auto; }
          .logo-devix { font-family:'Roboto Slab', serif; font-weight:700; letter-spacing:1px; color:var(--noyer); font-size:22px; display:flex; align-items:baseline; gap:8px; text-decoration:none; }
          .logo-devix .tiret { color: var(--rouille); font-weight: 400; opacity: 0.85; }
          .logo-devix .x { color: var(--rouille); }
          .retour { text-decoration:none; font-size:14px; font-weight:500; color:var(--noyer); border-bottom:1.5px solid var(--bois); padding-bottom:2px; }
          .maj { font-size:13px; color:#8A7A64; margin-bottom:28px; }
          p, li { color:#4A3327; }
          ul { padding-left: 20px; }
          table { width:100%; border-collapse:collapse; margin:12px 0 20px; font-size:14px; }
          th, td { text-align:left; padding:8px 10px; border-bottom:1px solid var(--trait); vertical-align:top; }
          th { color: var(--noyer); font-family:'Roboto Slab', serif; font-size:13px; }
          footer.piedbas { padding:32px 24px 44px; text-align:center; font-size:12px; color:#8A7A64; }
          footer.piedbas a { color:#8A7A64; margin:0 6px; }
        `}</style>
      </Head>
      <header className="entete">
        <a className="logo-devix" href="/">DEV<span className="tiret">-</span><span className="x">IX</span></a>
        <a className="retour" href="/">← Retour à l'accueil</a>
      </header>
      <div className="conteneur">
        <h1>Politique de confidentialité</h1>
        <p className="maj">Conforme au RGPD — Dernière mise à jour : 2026</p>

        <h2>1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données à caractère personnel collectées sur DEV-IX est l'éditeur du site,
          identifié dans les <a href="/mentions-legales">Mentions légales</a>. Pour toute question relative à vos données,
          contactez <a href="mailto:notifications@dev-ix.fr">notifications@dev-ix.fr</a>.
        </p>

        <h2>2. Données collectées</h2>
        <table>
          <tbody>
            <tr><th>Catégorie</th><th>Exemples</th></tr>
            <tr><td>Compte utilisateur</td><td>Email, mot de passe (stocké de façon chiffrée)</td></tr>
            <tr><td>Entreprise de l'utilisateur</td><td>Nom, adresse, SIRET, coordonnées bancaires, logo</td></tr>
            <tr><td>Clients de l'utilisateur</td><td>Nom, email, adresse, téléphone renseignés par l'utilisateur</td></tr>
            <tr><td>Documents générés</td><td>Devis, factures, avoirs et leur contenu</td></tr>
            <tr><td>Retours d'usage</td><td>Avis, notes et messages envoyés volontairement via les formulaires de retour</td></tr>
          </tbody>
        </table>

        <h2>3. Finalités du traitement</h2>
        <ul>
          <li>Fournir l'accès au service et à votre espace personnel ;</li>
          <li>Générer, archiver et permettre de retrouver vos devis, factures et avoirs ;</li>
          <li>Vous envoyer des emails transactionnels (envoi de documents, relances) ;</li>
          <li>Améliorer le service à partir de vos retours et avis ;</li>
          <li>Respecter nos obligations légales de conservation comptable.</li>
        </ul>

        <h2>4. Base légale</h2>
        <p>
          Le traitement repose sur l'exécution du contrat qui vous lie à DEV-IX (fourniture du service), sur le respect d'obligations légales
          (conservation des factures) et, pour les retours d'usage optionnels, sur votre consentement.
        </p>

        <h2>5. Destinataires des données</h2>
        <p>Vos données sont traitées par l'éditeur et par les sous-traitants techniques suivants, nécessaires au fonctionnement du service :</p>
        <ul>
          <li><strong>Supabase</strong> — hébergement de la base de données ;</li>
          <li><strong>Vercel</strong> — hébergement du site et de l'application ;</li>
          <li><strong>Resend</strong> — envoi des emails transactionnels.</li>
        </ul>
        <p>Vos données ne sont jamais vendues ni utilisées à des fins publicitaires.</p>

        <h2>6. Durée de conservation</h2>
        <ul>
          <li>Factures et avoirs : conservés <strong>10 ans</strong>, conformément à l'obligation légale de conservation des pièces comptables ;</li>
          <li>Données de compte et devis : conservés tant que votre compte est actif, puis supprimés dans un délai raisonnable après suppression du compte, sous réserve des obligations légales ci-dessus ;</li>
          <li>Avis et retours d'usage : conservés le temps nécessaire à l'amélioration du service.</li>
        </ul>

        <h2>7. Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité
          de vos données. Vous pouvez exercer ces droits en écrivant à <a href="mailto:notifications@dev-ix.fr">notifications@dev-ix.fr</a>.
          Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">www.cnil.fr</a>).
        </p>

        <h2>8. Sécurité</h2>
        <p>
          L'accès à vos données est protégé par authentification et par des règles de sécurité au niveau de la base de données (chaque utilisateur
          n'a accès qu'aux données de sa propre entreprise). Des mesures techniques raisonnables sont mises en œuvre pour protéger vos données
          contre tout accès non autorisé, perte ou altération.
        </p>

        <h2>9. Cookies et stockage local</h2>
        <p>
          DEV-IX n'utilise pas de cookies publicitaires ni de traceurs tiers. L'application utilise le stockage local de votre navigateur
          (localStorage) uniquement pour mémoriser vos préférences d'affichage (thème, brouillon en cours) sur votre propre appareil.
        </p>
      </div>
      <footer className="piedbas">
        <a href="/mentions-legales">Mentions légales</a>·
        <a href="/cgu">CGU</a>·
        <a href="/cgv">CGV</a>·
        <a href="/confidentialite">Confidentialité (RGPD)</a>
        <p style={{marginTop:'8px'}}>Générateur de Devis — outil indépendant pour artisans, freelances et créateurs</p>
      </footer>
    </>
  );
}
