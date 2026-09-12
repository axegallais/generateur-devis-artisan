import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'Non authentifié' });
    }

    const { data: userData, error: authError } = await supabaseAdmin.auth.getUser(token);
    if (authError || !userData?.user) {
      return res.status(401).json({ error: 'Session invalide' });
    }

    const { data: entreprise, error: entrepriseError } = await supabaseAdmin
      .from('entreprises')
      .select('id')
      .eq('user_id', userData.user.id)
      .single();

    if (entrepriseError || !entreprise) {
      return res.status(404).json({ error: 'Entreprise introuvable' });
    }

    const entrepriseId = entreprise.id;
    const { type, mois, annee } = req.query;

    if (type === 'mensuel') {
      if (!mois || !/^\d{4}-\d{2}$/.test(mois)) {
        return res.status(400).json({ error: "Paramètre 'mois' attendu au format YYYY-MM" });
      }
      const [y, m] = mois.split('-').map(Number);
      const debut = new Date(Date.UTC(y, m - 1, 1)).toISOString().slice(0, 10);
      const fin = new Date(Date.UTC(y, m, 0)).toISOString().slice(0, 10);

      const { data, error } = await supabaseAdmin.rpc('get_bilan_periode', {
        p_entreprise_id: entrepriseId,
        p_debut: debut,
        p_fin: fin,
      });
      if (error) throw error;

      return res.status(200).json({ type: 'mensuel', mois, bilan: data });
    }

    if (type === 'annuel') {
      const annueNum = parseInt(annee, 10) || new Date().getFullYear();
      const debut = `${annueNum}-01-01`;
      const fin = `${annueNum}-12-31`;

      const [{ data: totaux, error: err1 }, { data: parMois, error: err2 }] = await Promise.all([
        supabaseAdmin.rpc('get_bilan_periode', {
          p_entreprise_id: entrepriseId,
          p_debut: debut,
          p_fin: fin,
        }),
        supabaseAdmin.rpc('get_bilan_annuel_par_mois', {
          p_entreprise_id: entrepriseId,
          p_annee: annueNum,
        }),
      ]);
      if (err1) throw err1;
      if (err2) throw err2;

      return res.status(200).json({
        type: 'annuel',
        annee: annueNum,
        totaux,
        par_mois: parMois,
      });
    }

    return res.status(400).json({ error: "Paramètre 'type' attendu : 'mensuel' ou 'annuel'" });
  } catch (err) {
    console.error('Erreur bilan:', err);
    return res.status(500).json({ error: 'Erreur serveur lors du calcul du bilan' });
  }
}
