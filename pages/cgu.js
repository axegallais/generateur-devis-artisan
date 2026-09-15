import Head from 'next/head';

export default function CGU() {
  return (
    <>
      <Head>
        <title>Conditions Générales d'Utilisation — DEV-IX</title>
        <meta name="description" content="Conditions Générales d'Utilisation du service DEV-IX." />
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
          footer.piedbas { padding:32px 24px 44px; text-align:center; font-size:12px; color:#8A7A64; }
          footer.piedbas a { color:#8A7A64; margin:0 6px; }
        `}</style>
      </Head>
      <header className="entete">
        <a className="logo-devix" href="/">DEV<span className="tiret">-</span><span className="x">IX</span></a>
        <a className="retour" href="/">← Retour à l'accueil</a>
      </header>
      <div className="conteneur">
        <h1>Conditions Générales d'Utilisation</h1>
        <p className="maj">Dernière mise à jour : 2026</p>

        <h2>1. Objet</h2>
        <p>
          Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du service DEV-IX,
          un outil en ligne permettant de créer, gérer et archiver des devis, factures et avoirs.
          L'utilisation du service implique l'acceptation pleine et entière des présentes CGU.
        </p>

        <h2>2. Accès au service et compte utilisateur</h2>
        <p>
          L'accès à l'outil nécessite la création d'un compte (email et mot de passe). Vous vous engagez à fournir des informations exactes
          et à assurer la confidentialité de vos identifiants. Vous êtes seul responsable de toute activité effectuée depuis votre compte.
        </p>

        <h2>3. Description du service</h2>
        <p>
          DEV-IX permet de renseigner les informations d'une entreprise, de gérer une base de clients, et de générer des devis, factures
          et avoirs au format PDF, intégrant les mentions légales obligatoires en vigueur. Les documents générés sont archivés automatiquement
          et conservés conformément aux obligations légales de conservation (voir Politique de confidentialité).
        </p>

        <h2>4. Obligations de l'utilisateur</h2>
        <ul>
          <li>Fournir des informations exactes et à jour concernant votre entreprise et vos clients ;</li>
          <li>Vérifier l'exactitude et la conformité des documents générés avant leur envoi ou utilisation ;</li>
          <li>Ne pas utiliser le service à des fins frauduleuses, illégales ou portant atteinte aux droits de tiers ;</li>
          <li>Ne pas tenter de perturber, contourner ou compromettre la sécurité du service.</li>
        </ul>

        <h2>5. Responsabilité</h2>
        <p>
          DEV-IX facilite la mise en conformité des devis et factures mais ne remplace pas l'avis d'un expert-comptable ou d'un avocat.
          L'utilisateur reste seul responsable de l'exactitude, de la conformité légale et fiscale des documents qu'il émet via l'outil.
          DEV-IX ne saurait être tenu responsable des conséquences d'une erreur, d'une omission, ou d'une mauvaise utilisation du service.
        </p>

        <h2>6. Disponibilité du service</h2>
        <p>
          DEV-IX s'efforce d'assurer un accès continu au service, sans garantie de disponibilité absolue. Des interruptions temporaires
          (maintenance, mise à jour, incident technique) peuvent survenir sans engager la responsabilité de l'éditeur.
        </p>

        <h2>7. Propriété intellectuelle</h2>
        <p>
          Les documents que vous générez (devis, factures, avoirs, fiches clients) vous appartiennent intégralement.
          Le code, la marque « DEV-IX » et l'interface du service restent la propriété exclusive de l'éditeur.
        </p>

        <h2>8. Suppression de compte</h2>
        <p>
          Vous pouvez demander la suppression de votre compte à tout moment en écrivant à
          {' '}<a href="mailto:notifications@dev-ix.fr">notifications@dev-ix.fr</a>. Les factures et avoirs déjà émis restent
          conservés pendant la durée légale imposée par la réglementation comptable, même après suppression du compte, sauf disposition contraire de la loi.
        </p>

        <h2>9. Modification des CGU</h2>
        <p>
          L'éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification substantielle.
          La poursuite de l'utilisation du service après modification vaut acceptation des nouvelles CGU.
        </p>

        <h2>10. Droit applicable</h2>
        <p>Les présentes CGU sont soumises au droit français. Tout litige relève de la compétence des tribunaux français.</p>
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
