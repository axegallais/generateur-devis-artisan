import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Générateur de Devis — Devis et factures conformes pour indépendants</title>
        <meta name="description" content="Crée des devis et factures conformes à la loi française en quelques minutes. Gratuit, pensé pour les artisans, freelances et créateurs." />
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
            --sauge: #2C5F63;
            --rouille: #B5651D;
            --alerte: #A32D2D;
            --trait: #E3DCCB;
          }
          * { box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          body {
            margin: 0;
            background: var(--creme);
            color: var(--encre);
            font-family: 'Inter', sans-serif;
            line-height: 1.5;
          }
          h1, h2, h3 { font-family: 'Roboto Slab', serif; color: var(--noyer); margin: 0; }
          a { color: inherit; }
          .conteneur { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
          .conteneur-etroit { max-width: 640px; }
          header.entete { display: flex; align-items: center; justify-content: space-between; padding: 22px 24px; max-width: 1080px; margin: 0 auto; }
          .logo-devix { font-family: 'Roboto Slab', serif; font-weight: 700; letter-spacing: 0.5px; color: var(--noyer); font-size: 22px; display: flex; align-items: baseline; gap: 8px; }
          .logo-devix .x { color: var(--rouille); }
          .logo-devix .sous-nom { font-family: 'Inter', sans-serif; font-weight: 500; font-size: 11.5px; color: #8A7A64; letter-spacing: 0; }
          .lien-connexion { text-decoration: none; font-size: 14px; font-weight: 500; color: var(--noyer); border-bottom: 1.5px solid var(--bois); padding-bottom: 2px; }
          .hero { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 56px; align-items: center; padding: 48px 24px 88px; max-width: 1080px; margin: 0 auto; }
          @media (max-width: 860px) { .hero { grid-template-columns: 1fr; padding-bottom: 56px; } }
          .hero h1 { font-size: clamp(32px, 4.4vw, 46px); font-weight: 600; line-height: 1.14; letter-spacing: -0.01em; }
          .hero p.chapo { font-size: 17px; color: #6B5A47; margin: 22px 0 30px; max-width: 46ch; }
          .cta-principal { display: inline-flex; align-items: center; gap: 10px; background: var(--noyer); color: #FBF8F3; text-decoration: none; padding: 14px 26px; border-radius: 7px; font-size: 15.5px; font-weight: 600; }
          .cta-principal:hover { background: #4A3327; }
          .rassurance { margin-top: 14px; font-size: 13px; color: #8A7A64; }
          .maquette { background: var(--papier); border-radius: 10px; border-top: 4px solid var(--rouille); box-shadow: 0 18px 40px -14px rgba(92, 64, 51, 0.35); padding: 26px 26px 22px; transform: rotate(1.2deg); font-size: 12px; }
          .maquette-entete { display: flex; justify-content: space-between; border-bottom: 2px solid var(--bois); padding-bottom: 12px; margin-bottom: 14px; }
          .maquette-entete .titre-doc { font-family: 'Roboto Slab', serif; font-weight: 600; font-size: 15px; color: var(--noyer); }
          .maquette-entete .num { color: #8A7A64; font-size: 11px; margin-top: 3px; }
          .maquette-entete .qui { text-align: right; font-size: 11px; color: #8A7A64; }
          .maquette-entete .qui strong { display: block; color: var(--noyer); font-size: 12.5px; margin-bottom: 2px; }
          .maquette table { width: 100%; border-collapse: collapse; }
          .maquette th { text-align: left; font-size: 10px; color: var(--bois); font-weight: 600; padding-bottom: 6px; border-bottom: 1.5px solid var(--bois); }
          .maquette th:last-child, .maquette td:last-child { text-align: right; }
          .maquette td { padding: 8px 0; border-bottom: 1px solid var(--trait); color: #4A3327; }
          .maquette .total { display: flex; justify-content: space-between; margin-top: 14px; padding-top: 12px; border-top: 2px solid var(--bois); font-weight: 600; color: var(--noyer); font-size: 13.5px; }
          .maquette .badge-conforme { position: absolute; margin-top: -80px; margin-left: 210px; background: var(--sauge); color: white; font-size: 11px; font-weight: 600; padding: 6px 12px; border-radius: 20px; box-shadow: 0 6px 14px -4px rgba(44,95,99,0.5); }
          @media (max-width: 860px) { .maquette { transform: none; } .maquette .badge-conforme { display: none; } }
          .bandeau-probleme { background: var(--noyer); color: #F1E9DC; padding: 44px 24px; }
          .bandeau-probleme .conteneur { text-align: left; }
          .bandeau-probleme p { font-size: 19px; line-height: 1.55; max-width: 62ch; margin: 0; font-family: 'Roboto Slab', serif; font-weight: 400; }
          .bandeau-probleme p strong { color: #F2C199; font-weight: 600; }
          .section-fonctions { padding: 88px 24px 72px; }
          .section-fonctions .intro { max-width: 52ch; margin-bottom: 36px; }
          .section-fonctions .intro h2 { font-size: 28px; margin-bottom: 12px; }
          .section-fonctions .intro p { color: #6B5A47; font-size: 15.5px; }
          .section-audiences { padding: 8px 24px 72px; }
          .section-audiences .intro { max-width: 46ch; margin: 0 auto 40px; text-align: center; }
          .section-audiences .intro h2 { font-size: 28px; }
          .cartes-audiences { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; max-width: 1080px; margin: 0 auto; }
          @media (max-width: 780px) { .cartes-audiences { grid-template-columns: 1fr; } }
          .carte-audience { background: var(--papier); border-radius: 12px; padding: 26px 24px; border: 1px solid var(--trait); display: flex; flex-direction: column; gap: 12px; }
          .carte-audience .icone { width: 46px; height: 46px; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
          .carte-audience .icone svg { width: 24px; height: 24px; }
          .carte-audience:nth-child(1) .icone { background: #E8DEC9; }
          .carte-audience:nth-child(1) .icone svg { color: var(--bois); }
          .carte-audience:nth-child(2) .icone { background: #DCE8E6; }
          .carte-audience:nth-child(2) .icone svg { color: var(--sauge); }
          .carte-audience:nth-child(3) .icone { background: #F3DCC4; }
          .carte-audience:nth-child(3) .icone svg { color: var(--rouille); }
          .carte-audience h3 { font-size: 16px; margin-bottom: 2px; }
          .carte-audience p { margin: 0; font-size: 13.5px; color: #6B5A47; line-height: 1.55; }
          .carte-audience ul { margin: 4px 0 0; padding: 0 0 0 16px; font-size: 12.5px; color: #6B5A47; line-height: 1.7; }
          .devis-fonctions { background: var(--papier); border-radius: 10px; border-top: 4px solid var(--bois); box-shadow: 0 1px 3px rgba(0,0,0,0.06); padding: 8px 0; }
          .ligne-fonction { display: grid; grid-template-columns: 40px 1fr auto; align-items: flex-start; gap: 18px; padding: 20px 28px; border-bottom: 1px solid var(--trait); }
          .ligne-fonction:last-child { border-bottom: none; }
          .ligne-fonction .puce { font-size: 20px; line-height: 1.4; }
          .ligne-fonction h3 { font-size: 15.5px; font-weight: 600; margin-bottom: 4px; }
          .ligne-fonction p { margin: 0; font-size: 13.5px; color: #6B5A47; max-width: 52ch; }
          .ligne-fonction .statut { font-size: 12px; font-weight: 600; color: var(--sauge); white-space: nowrap; padding-top: 2px; }
          @media (max-width: 640px) { .ligne-fonction { grid-template-columns: 32px 1fr; } .ligne-fonction .statut { grid-column: 2; padding-top: 6px; } }
          .section-etapes { padding: 72px 24px 88px; background: #EFE8D8; }
          .section-etapes .intro { max-width: 46ch; margin: 0 auto 44px; text-align: center; }
          .section-etapes .intro h2 { font-size: 28px; }
          .etapes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; max-width: 1080px; margin: 0 auto; }
          @media (max-width: 760px) { .etapes { grid-template-columns: 1fr; } }
          .etape .marqueur { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-family: 'Roboto Slab', serif; font-weight: 600; font-size: 15px; margin-bottom: 16px; }
          .etape:nth-child(1) .marqueur { background: var(--sauge); }
          .etape:nth-child(2) .marqueur { background: var(--bois); }
          .etape:nth-child(3) .marqueur { background: var(--alerte); }
          .etape h3 { font-size: 16.5px; margin-bottom: 8px; }
          .etape p { font-size: 14px; color: #6B5A47; margin: 0; }
          .section-conformite { padding: 80px 24px; }
          .conformite-grille { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
          @media (max-width: 760px) { .conformite-grille { grid-template-columns: 1fr; gap: 28px; } }
          .conformite-grille h2 { font-size: 26px; margin-bottom: 16px; max-width: 16ch; }
          .conformite-grille .colonne-texte p { color: #6B5A47; font-size: 15px; }
          .liste-conformite { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 14px; }
          .liste-conformite li { display: flex; gap: 12px; font-size: 14.5px; color: #4A3327; }
          .liste-conformite li::before { content: "✓"; color: var(--sauge); font-weight: 700; flex-shrink: 0; }
          .note-legale { margin-top: 20px; font-size: 12px; color: #8A7A64; font-style: italic; }
          .cta-finale { background: var(--rouille); color: #FFF7EE; padding: 64px 24px; text-align: center; }
          .cta-finale h2 { color: #FFF7EE; font-size: 28px; margin-bottom: 12px; }
          .cta-finale p { font-size: 15.5px; color: #FBE4CE; margin: 0 0 26px; }
          .cta-finale .cta-principal { background: var(--noyer); }
          .cta-finale .cta-principal:hover { background: #3E2A20; }
          footer { padding: 32px 24px 44px; text-align: center; }
          footer p { font-size: 12.5px; color: #8A7A64; margin: 0; }
        `}</style>
      </Head>

      <header className="entete">
        <div className="logo-devix">
          <span className="copeau" style={{ width: 9, height: 20, background: 'var(--rouille)', borderRadius: '2px 6px 2px 6px', flexShrink: 0 }}></span>
          DEV<span className="x">IX</span><span className="sous-nom">Devis &amp; factures</span>
        </div>
        <a className="lien-connexion" href="/app.html">Se connecter</a>
      </header>

      <section className="hero">
        <div>
          <h1>Des devis et factures pros, faits pour ceux qui travaillent seuls.</h1>
          <p className="chapo">Artisan, freelance ou créateur : mentions légales à jour, clients enregistrés, PDF nickel partout — sans y passer ta soirée. Gratuit.</p>
          <a className="cta-principal" href="/app.html">Créer mon premier devis</a>
          <p className="rassurance">Aucune carte bancaire. Ton compte se crée en 30 secondes.</p>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="maquette">
            <div className="maquette-entete">
              <div><div className="titre-doc">DEVIS</div><div className="num">DEV-2026-014</div></div>
              <div className="qui"><strong>Atelier Dubois</strong>M. Lefèvre — 3 semaines</div>
            </div>
            <table>
              <tbody>
                <tr><th>Description</th><th>Qté</th><th>Prix Unitaire</th><th>Total HT</th></tr>
                <tr><td>Meuble chêne massif</td><td>1</td><td>680,00€</td><td>680,00€</td></tr>
                <tr><td>Fournitures (bois)</td><td>15 m³</td><td>45,00€</td><td>675,00€</td></tr>
                <tr><td>Main-d&apos;œuvre</td><td>20 h</td><td>50,00€</td><td>1 000,00€</td></tr>
              </tbody>
            </table>
            <div className="total"><span>Total TTC</span><span>2 826,00€</span></div>
          </div>
          <div className="badge-conforme">✓ Conforme 2026</div>
        </div>
      </section>

      <section className="section-audiences">
        <div className="intro"><h2>Pour qui ?</h2></div>
        <div className="cartes-audiences">
          <div className="carte-audience">
            <div className="icone"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a4 4 0 0 1-4.9 4.9L7 20l-3-3 8.9-8.9a4 4 0 0 1 4.9-4.9l-3.1 3.1z"/></svg></div>
            <h3>Artisan</h3>
            <p>Menuisier, plombier, électricien, maçon... des devis chantier qui tiennent la route juridiquement.</p>
            <ul><li>Assurance décennale</li><li>Main-d&apos;œuvre / fournitures séparées</li><li>Numéro RM ou RCS</li></ul>
          </div>
          <div className="carte-audience">
            <div className="icone"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M2 20h20M9 20l1-4h4l1 4"/></svg></div>
            <h3>Freelance</h3>
            <p>Graphiste, développeur, consultant... des factures de prestation propres, envoyées en deux clics.</p>
            <ul><li>Franchise en base de TVA</li><li>Conditions de règlement claires</li><li>Relances automatiques</li></ul>
          </div>
          <div className="carte-audience">
            <div className="icone"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg></div>
            <h3>Créateur</h3>
            <p>Couturière, céramiste, bijoutier... des petites factures soignées, sans y perdre ta soirée d&apos;atelier.</p>
            <ul><li>Fiches clients réutilisables</li><li>PDF identique partout</li><li>Historique conservé 10 ans</li></ul>
          </div>
        </div>
      </section>

      <div className="bandeau-probleme">
        <div className="conteneur"><p>Entre les <strong>mentions obligatoires</strong> qui changent chaque année, la numérotation qui ne doit jamais se dédoubler et les clients éparpillés entre un carnet et un tableur, un document propre prend vite plus de temps que le travail lui-même.</p></div>
      </div>

      <section className="section-fonctions">
        <div className="conteneur">
          <div className="intro"><h2>Ce que l&apos;outil fait pour toi</h2><p>Présenté comme le reste : à la ligne, sans surprise.</p></div>
          <div className="devis-fonctions">
            <div className="ligne-fonction"><div className="puce">📋</div><div><h3>Mentions légales à jour</h3><p>SIRET, TVA, assurances, nouvelles règles 2026 — tout est déjà prévu dans le formulaire.</p></div><div className="statut">Inclus</div></div>
            <div className="ligne-fonction"><div className="puce">🔢</div><div><h3>Numérotation automatique</h3><p>Devis, factures et avoirs numérotés dans l&apos;ordre, sans doublon possible.</p></div><div className="statut">Inclus</div></div>
            <div className="ligne-fonction"><div className="puce">👤</div><div><h3>Fiches clients</h3><p>Enregistre chaque client une fois, réutilise ses infos sur tous ses devis et factures.</p></div><div className="statut">Inclus</div></div>
            <div className="ligne-fonction"><div className="puce">📄</div><div><h3>PDF identique partout</h3><p>Le rendu ne bouge pas d&apos;un navigateur ou d&apos;une imprimante à l&apos;autre.</p></div><div className="statut">Inclus</div></div>
            <div className="ligne-fonction"><div className="puce">🔔</div><div><h3>Relances automatiques</h3><p>L&apos;outil te signale les devis restés sans réponse, prêts à relancer en un clic.</p></div><div className="statut">Inclus</div></div>
            <div className="ligne-fonction"><div className="puce">🔒</div><div><h3>Archive conforme 10 ans</h3><p>Tes factures et avoirs restent consultables et protégés, comme la loi l&apos;impose.</p></div><div className="statut">Inclus</div></div>
          </div>
        </div>
      </section>

      <section className="section-etapes">
        <div className="intro"><h2>De zéro à devis envoyé</h2></div>
        <div className="etapes">
          <div className="etape"><div className="marqueur">1</div><h3>Renseigne ton entreprise</h3><p>Nom, SIRET, TVA, coordonnées bancaires — une seule fois, réutilisé partout ensuite.</p></div>
          <div className="etape"><div className="marqueur">2</div><h3>Ajoute tes prestations</h3><p>Décris ta prestation, ajoute tes lignes, choisis ou crée ton client.</p></div>
          <div className="etape"><div className="marqueur">3</div><h3>Télécharge et envoie</h3><p>PDF prêt en un clic, envoyé par email directement depuis l&apos;outil.</p></div>
        </div>
      </section>

      <section className="section-conformite">
        <div className="conteneur conformite-grille">
          <div><h2>Pensé pour la conformité, pas en option</h2><div className="colonne-texte"><p>La réglementation sur les devis et factures évolue régulièrement. Cet outil intègre les mentions à jour dès la création du document, pour que tu n&apos;aies pas à les chercher toi-même.</p></div></div>
          <ul className="liste-conformite">
            <li>Mentions obligatoires devis et facture (loi du 01/09/2026 incluse)</li>
            <li>Assurance décennale et RC pro affichées si concerné</li>
            <li>Conditions de règlement, pénalités et indemnité de recouvrement</li>
            <li>Numérotation séquentielle sans rupture</li>
            <li>Conservation légale des factures et avoirs</li>
          </ul>
        </div>
        <p className="note-legale conteneur">Cet outil facilite la mise en conformité mais ne remplace pas l&apos;avis d&apos;un expert-comptable ou d&apos;un avocat. Tu restes seul responsable de l&apos;exactitude des documents que tu émets.</p>
      </section>

      <div className="cta-finale">
        <h2>Ton prochain devis, prêt en moins de 10 minutes</h2>
        <p>Gratuit. Sans engagement. Tes données t&apos;appartiennent.</p>
        <a className="cta-principal" href="/app.html">Commencer maintenant</a>
      </div>

      <footer><p>Générateur de Devis — outil indépendant pour artisans, freelances et créateurs</p></footer>
    </>
  );
}
