import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { supabase, supabaseConfigOk } from '../lib/supabaseClient';

export default function Connexion() {
  const router = useRouter();
  const [mode, setMode] = useState('connexion'); // 'connexion' ou 'inscription'
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [chargement, setChargement] = useState(false);
  const [erreur, setErreur] = useState('');
  const [messageInfo, setMessageInfo] = useState('');

  async function gererSoumission(e) {
    e.preventDefault();
    setErreur('');
    setMessageInfo('');
    setChargement(true);

    try {
      if (mode === 'connexion') {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password: motDePasse,
        });
        if (error) throw error;
        router.push('/');
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password: motDePasse,
        });
        if (error) throw error;
        setMessageInfo('Compte créé. Vérifie ta boîte mail pour confirmer ton adresse, puis connecte-toi.');
        setMode('connexion');
      }
    } catch (err) {
      setErreur(traduireErreur(err.message));
    } finally {
      setChargement(false);
    }
  }

  function traduireErreur(message) {
    if (!message) return 'Une erreur est survenue.';
    if (message.includes('Invalid login credentials')) return 'Email ou mot de passe incorrect.';
    if (message.includes('User already registered')) return 'Un compte existe déjà avec cet email.';
    if (message.includes('Password should be at least')) return 'Le mot de passe doit contenir au moins 6 caractères.';
    return message;
  }

  return (
    <>
      <Head>
        <title>Connexion — Générateur de Devis</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Slab:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --creme: #F5F1E8;
            --papier: #FDFBF9;
            --bois: #8B6F47;
            --noyer: #5C4033;
            --encre: #2C2C2A;
            --rouille: #B5651D;
            --alerte: #A32D2D;
            --trait: #E3DCCB;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            background: var(--creme);
            color: var(--encre);
            font-family: 'Inter', sans-serif;
          }
          .page-connexion { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 24px; }
          .logo-devix { font-family: 'Roboto Slab', serif; font-weight: 700; letter-spacing: 0.5px; color: var(--noyer); font-size: 22px; display: flex; align-items: baseline; gap: 8px; margin-bottom: 28px; }
          .logo-devix .x { color: var(--rouille); }
          .carte-connexion { background: var(--papier); border-radius: 10px; border-top: 4px solid var(--rouille); box-shadow: 0 18px 40px -14px rgba(92, 64, 51, 0.25); padding: 34px 30px; width: 100%; max-width: 380px; }
          .carte-connexion h1 { font-family: 'Roboto Slab', serif; color: var(--noyer); font-size: 21px; margin: 0 0 22px; text-align: center; }
          .champ { margin-bottom: 16px; }
          .champ label { display: block; font-size: 13px; font-weight: 500; color: var(--noyer); margin-bottom: 6px; }
          .champ input { width: 100%; padding: 10px 12px; border-radius: 6px; border: 1px solid var(--trait); font-size: 14.5px; font-family: inherit; background: white; }
          .champ input:focus { outline: none; border-color: var(--bois); }
          .bouton-principal { width: 100%; background: var(--noyer); color: #FBF8F3; border: none; padding: 12px; border-radius: 7px; font-size: 15px; font-weight: 600; cursor: pointer; margin-top: 6px; }
          .bouton-principal:hover { background: #4A3327; }
          .bouton-principal:disabled { opacity: 0.6; cursor: default; }
          .bascule { text-align: center; margin-top: 18px; font-size: 13.5px; color: #6B5A47; }
          .bascule button { background: none; border: none; color: var(--noyer); font-weight: 600; text-decoration: underline; cursor: pointer; font-size: 13.5px; padding: 0; }
          .message-erreur { background: #FBEAEA; color: var(--alerte); font-size: 13px; padding: 10px 12px; border-radius: 6px; margin-bottom: 16px; }
          .message-info { background: #E4EEE7; color: #2C5F63; font-size: 13px; padding: 10px 12px; border-radius: 6px; margin-bottom: 16px; }
          .lien-retour { margin-top: 22px; font-size: 13px; color: #8A7A64; text-decoration: none; }
        `}</style>
      </Head>

      <div className="page-connexion">
        <a href="/" style={{ textDecoration: 'none' }}>
          <div className="logo-devix">DEV<span className="x">IX</span></div>
        </a>

        <div className="carte-connexion">
          <h1>{mode === 'connexion' ? 'Se connecter' : 'Créer un compte'}</h1>

          {!supabaseConfigOk && (
            <div className="message-erreur">
              Configuration Supabase manquante (NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY). Vérifie les variables d&apos;environnement Vercel.
            </div>
          )}
          {erreur && <div className="message-erreur">{erreur}</div>}
          {messageInfo && <div className="message-info">{messageInfo}</div>}

          <form onSubmit={gererSoumission}>
            <div className="champ">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            <div className="champ">
              <label htmlFor="motDePasse">Mot de passe</label>
              <input
                id="motDePasse"
                type="password"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
                required
                minLength={6}
                autoComplete={mode === 'connexion' ? 'current-password' : 'new-password'}
              />
            </div>
            <button className="bouton-principal" type="submit" disabled={chargement}>
              {chargement ? 'Un instant...' : mode === 'connexion' ? 'Se connecter' : 'Créer mon compte'}
            </button>
          </form>

          <div className="bascule">
            {mode === 'connexion' ? (
              <>Pas encore de compte ? <button onClick={() => { setMode('inscription'); setErreur(''); setMessageInfo(''); }}>Créer un compte</button></>
            ) : (
              <>Déjà un compte ? <button onClick={() => { setMode('connexion'); setErreur(''); setMessageInfo(''); }}>Se connecter</button></>
            )}
          </div>
        </div>

        <a className="lien-retour" href="/">← Retour à l&apos;accueil</a>
      </div>
    </>
  );
}
