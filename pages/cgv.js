import Head from 'next/head';

export default function CGV() {
  return (
    <>
      <Head>
        <title>Conditions Générales de Vente — DEV-IX</title>
        <meta name="description" content="Conditions Générales de Vente du service DEV-IX." />
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
          .encart { background:var(--papier); border-left:3px solid var(--sauge); padding:14px 18px; border-radius:6px; margin:20px 0; }
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
        <h1>Conditions Générales de Vente</h1>
        <p className="maj">Dernière mise à jour : 2026</p>

        <div className="encart">
          <p style={{margin:0}}>
            À ce jour, DEV-IX est proposé <strong>gratuitement</strong>, sans engagement ni carte bancaire requise.
            Les présentes CGV s'appliquent à toute offre payante qui viendrait à être proposée à l'avenir.
          </p>
        </div>

        <h2>1. Objet</h2>
        <p>
          Les présentes Conditions Générales de Vente (CGV) ont vocation à régir les modalités de vente de toute offre payante
          (abonnement, fonctionnalité premium, etc.) qui pourrait être proposée sur DEV-IX, en complément de l'offre gratuite actuelle.
        </p>

        <h2>2. Prix</h2>
        <p>
          Les prix des éventuelles offres payantes seront indiqués en euros, toutes taxes comprises, sur la page dédiée avant toute souscription.
          L'éditeur se réserve le droit de modifier ses tarifs à tout moment ; les modifications ne s'appliqueront pas aux abonnements déjà souscrits
          jusqu'à leur terme.
        </p>

        <h2>3. Modalités de paiement</h2>
        <p>Le paiement, le cas échéant, s'effectuera en ligne via un prestataire de paiement sécurisé tiers, au moment de la souscription.</p>

        <h2>4. Droit de rétractation</h2>
        <p>
          Conformément à l'article L221-18 du Code de la consommation, tout consommateur dispose d'un délai de 14 jours pour exercer son droit
          de rétractation sur un service payant souscrit à distance, sauf si l'exécution du service a commencé avec son accord exprès avant la fin
          de ce délai, auquel cas le droit de rétractation peut être perdu ou proratisé conformément à la loi.
        </p>

        <h2>5. Durée et résiliation</h2>
        <p>
          Un éventuel abonnement payant serait proposé sans engagement de durée et résiliable à tout moment, l'accès aux fonctionnalités payantes
          restant actif jusqu'à la fin de la période déjà payée.
        </p>

        <h2>6. Responsabilité</h2>
        <p>
          DEV-IX ne saurait être tenu responsable des dommages indirects résultant de l'utilisation du service. Sa responsabilité, si elle
          venait à être engagée, serait limitée au montant effectivement payé par l'utilisateur au titre de l'offre concernée.
        </p>

        <h2>7. Litiges</h2>
        <p>
          En cas de litige, l'utilisateur peut contacter l'éditeur à <a href="mailto:notifications@dev-ix.fr">notifications@dev-ix.fr</a> pour
          rechercher une solution amiable. À défaut, les tribunaux français seront seuls compétents.
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
