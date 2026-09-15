import Head from 'next/head';

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions légales — DEV-IX</title>
        <meta name="description" content="Mentions légales du site DEV-IX, générateur de devis et factures." />
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
          p { color:#4A3327; }
          .placeholder { background:#FBEFD9; border:1px dashed var(--rouille); padding:2px 6px; border-radius:4px; color:#8B5A20; font-size:14px; }
          footer.piedbas { padding:32px 24px 44px; text-align:center; font-size:12px; color:#8A7A64; }
          footer.piedbas a { color:#8A7A64; margin:0 6px; }
        `}</style>
      </Head>
      <header className="entete">
        <a className="logo-devix" href="/"><span className="x" style={{color:'var(--rouille)'}}></span>DEV<span className="tiret">-</span><span className="x">IX</span></a>
        <a className="retour" href="/">← Retour à l'accueil</a>
      </header>
      <div className="conteneur">
        <h1>Mentions légales</h1>
        <p className="maj">Dernière mise à jour : 2026</p>

        <h2>1. Éditeur du site</h2>
        <p>
          Le site DEV-IX (accessible à l'adresse dev-ix.fr) est édité par :<br />
          <span className="placeholder">[Nom / raison sociale à compléter]</span><br />
          <span className="placeholder">[Statut juridique — entreprise individuelle, auto-entrepreneur, société...]</span><br />
          <span className="placeholder">[Adresse postale]</span><br />
          SIRET : <span className="placeholder">[À compléter]</span><br />
          Email de contact : <a href="mailto:notifications@dev-ix.fr">notifications@dev-ix.fr</a>
        </p>
        <p>Directeur de la publication : <span className="placeholder">[Nom du responsable]</span>.</p>

        <h2>2. Hébergement</h2>
        <p>
          Le site et l'application sont hébergés par :<br />
          Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>
        </p>
        <p>
          Les données (comptes, entreprises, clients, devis, factures) sont stockées via Supabase (Supabase Inc.), et les emails transactionnels sont envoyés via Resend (Resend Inc.).
        </p>

        <h2>3. Propriété intellectuelle</h2>
        <p>
          L'ensemble des éléments du site (textes, logo « DEV-IX », mise en page, code source) est protégé au titre du droit d'auteur.
          Toute reproduction ou représentation, totale ou partielle, sans autorisation préalable, est interdite.
          Les documents (devis, factures, avoirs) que vous générez avec l'outil vous appartiennent entièrement : vous en êtes seul propriétaire et responsable.
        </p>

        <h2>4. Liens hypertextes</h2>
        <p>Le site peut contenir des liens vers des sites tiers (polices Google Fonts, prestataires techniques). DEV-IX n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>

        <h2>5. Responsabilité</h2>
        <p>
          DEV-IX met à disposition un outil facilitant la création de devis et factures conformes aux mentions légales en vigueur, à titre indicatif.
          Il ne remplace pas l'avis d'un expert-comptable ou d'un avocat. L'utilisateur reste seul responsable de l'exactitude, de la conformité
          et du contenu des documents qu'il émet via l'outil.
        </p>

        <h2>6. Droit applicable</h2>
        <p>Les présentes mentions légales sont soumises au droit français. Tout litige relève de la compétence des tribunaux français.</p>
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
