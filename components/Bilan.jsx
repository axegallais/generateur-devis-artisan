import React, { useState, useEffect } from 'react';
import { useAuth } from '@supabase/auth-helpers-react';

export default function Bilan() {
  const { session } = useAuth();
  const [type, setType] = useState('mensuel');
  const [mois, setMois] = useState(new Date().toISOString().slice(0, 7));
  const [annee, setAnnee] = useState(new Date().getFullYear());
  const [bilan, setBilan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBilan = async () => {
    if (!session?.access_token) {
      setError('Non authentifié');
      return;
    }

    setLoading(true);
    setError(null);
    setBilan(null);

    try {
      let url = '/api/bilan?type=' + type;
      if (type === 'mensuel') url += '&mois=' + mois;
      else url += '&annee=' + annee;

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Erreur lors de la récupération du bilan');
      }

      const data = await res.json();
      setBilan(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.access_token) {
      fetchBilan();
    }
  }, [type, mois, annee, session]);

  if (!session) {
    return <div className="p-4 text-red-600">Veuillez vous connecter</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Bilan Entreprise</h1>

      <div className="mb-6 flex gap-4">
        <label>
          <input
            type="radio"
            value="mensuel"
            checked={type === 'mensuel'}
            onChange={(e) => setType(e.target.value)}
          />
          {' '}Mensuel
        </label>
        <label>
          <input
            type="radio"
            value="annuel"
            checked={type === 'annuel'}
            onChange={(e) => setType(e.target.value)}
          />
          {' '}Annuel
        </label>
      </div>

      <div className="mb-6 flex gap-4">
        {type === 'mensuel' && (
          <input
            type="month"
            value={mois}
            onChange={(e) => setMois(e.target.value)}
            className="px-3 py-2 border rounded"
          />
        )}
        {type === 'annuel' && (
          <input
            type="number"
            min="2020"
            max={new Date().getFullYear() + 1}
            value={annee}
            onChange={(e) => setAnnee(parseInt(e.target.value))}
            className="px-3 py-2 border rounded w-24"
          />
        )}
      </div>

      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded mb-6">
          {error}
        </div>
      )}

      {loading && <div className="text-center py-8">Chargement du bilan...</div>}

      {bilan && (
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Chiffre d'Affaires</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded">
                <div className="text-gray-600 text-sm">Total HT</div>
                <div className="text-2xl font-bold">
                  {(bilan.bilan?.chiffre_affaires?.total_ht || 0).toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <div className="text-gray-600 text-sm">Total TTC</div>
                <div className="text-2xl font-bold">
                  {(bilan.bilan?.chiffre_affaires?.total_ttc || 0).toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <div className="text-gray-600 text-sm">TVA Collectée</div>
                <div className="text-2xl font-bold">
                  {(bilan.bilan?.chiffre_affaires?.tva_collectee || 0).toLocaleString('fr-FR', {
                    style: 'currency',
                    currency: 'EUR',
                  })}
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <div className="text-gray-600 text-sm">Nb Factures</div>
                <div className="text-2xl font-bold">
                  {bilan.bilan?.chiffre_affaires?.nombre_factures || 0}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Devis</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-yellow-50 p-4 rounded">
                <div className="text-gray-600 text-sm">Envoyés</div>
                <div className="text-2xl font-bold">
                  {bilan.bilan?.devis?.envoyes || 0}
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <div className="text-gray-600 text-sm">Acceptés</div>
                <div className="text-2xl font-bold">
                  {bilan.bilan?.devis?.acceptes || 0}
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <div className="text-gray-600 text-sm">Taux de Conversion</div>
                <div className="text-2xl font-bold">
                  {(bilan.bilan?.devis?.taux_conversion || 0).toFixed(1)}%
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <div className="text-gray-600 text-sm">En Attente</div>
                <div className="text-2xl font-bold">
                  {bilan.bilan?.devis?.en_attente || 0}
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-gray-600 text-sm">Brouillons</div>
                <div className="text-2xl font-bold">
                  {bilan.bilan?.devis?.brouillons || 0}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Paiements Factures</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-green-50 p-4 rounded">
                <div className="text-gray-600 text-sm">Payées</div>
                <div className="text-2xl font-bold">
                  {bilan.bilan?.factures_paiement?.payees || 0}
                </div>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <div className="text-gray-600 text-sm">Impayées</div>
                <div className="text-2xl font-bold">
                  {bilan.bilan?.factures_paiement?.impayees || 0}
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded">
                <div className="text-gray-600 text-sm">Montant Impayé TTC</div>
                <div className="text-2xl font-bold">
                  {(bilan.bilan?.factures_paiement?.montant_impaye_ttc || 0).toLocaleString(
                    'fr-FR',
                    { style: 'currency', currency: 'EUR' }
                  )}
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <div className="text-gray-600 text-sm">Délai Moyen (jours)</div>
                <div className="text-2xl font-bold">
                  {bilan.bilan?.factures_paiement?.delai_moyen_paiement_jours || 'N/A'}
                </div>
              </div>
            </div>
          </section>

          {bilan.bilan?.top_clients && bilan.bilan.top_clients.length > 0 && (
            <section className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Top 5 Clients</h2>
              <table className="w-full text-left">
                <thead className="border-b">
                  <tr>
                    <th className="pb-2">Client</th>
                    <th className="pb-2">CA TTC</th>
                    <th className="pb-2">Nb Factures</th>
                  </tr>
                </thead>
                <tbody>
                  {bilan.bilan.top_clients.map((client, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-3">{client.client_nom}</td>
                      <td className="py-3">
                        {parseFloat(client.ca_ttc).toLocaleString('fr-FR', {
                          style: 'currency',
                          currency: 'EUR',
                        })}
                      </td>
                      <td className="py-3">{client.nb_factures}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {type === 'annuel' && bilan.par_mois && (
            <section className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Évolution Mensuelle {annee}</h2>
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="pb-2 px-2">Mois</th>
                    <th className="pb-2 px-2">CA HT</th>
                    <th className="pb-2 px-2">CA TTC</th>
                    <th className="pb-2 px-2">TVA</th>
                    <th className="pb-2 px-2">Devis</th>
                    <th className="pb-2 px-2">Factures Payées</th>
                    <th className="pb-2 px-2">Factures Impayées</th>
                  </tr>
                </thead>
                <tbody>
                  {bilan.par_mois.map((m, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-2 font-semibold">{m.mois}</td>
                      <td className="py-2 px-2">
                        {parseFloat(m.ca_ht).toLocaleString('fr-FR', {
                          style: 'currency',
                          currency: 'EUR',
                        })}
                      </td>
                      <td className="py-2 px-2">
                        {parseFloat(m.ca_ttc).toLocaleString('fr-FR', {
                          style: 'currency',
                          currency: 'EUR',
                        })}
                      </td>
