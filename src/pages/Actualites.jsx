import React from 'react';
import './Actualites.css';
import { Link } from 'react-router-dom';


const Actualites = () => {
  return (
    <div className="actualites-container">
      <div className="actualites-hero">
        <Link to="/" className="back-link">← Retour à l'accueil</Link>
        <h1>Actualités POTOMITAN™</h1>
        <p className="subtitle">Les dernières avancées de l'IA créole</p>
      </div>

      <article className="actualite-article">
        <div className="article-header">
          <span className="article-date">13 janvier 2026</span>
          <span className="article-tag">Médias</span>
        </div>

        <h2>CAPSULE VIDÉO ORANGE ANTILLES-GUYANE</h2>
        <h3>POTOMITAN présenté dans l'écosystème SafetyCase</h3>

        <p className="intro">
          Orange Antilles-Guyane a commandé une capsule vidéo présentant POTOMITAN et sa complémentarité
          avec SafetyCase, leur solution de communications de crise. Cette reconnaissance par un acteur
          télécoms de premier plan (1300 salariés + 2500 emplois indirects) valide l'approche infrastructure
          critique de POTOMITAN pour les situations d'urgence.
        </p>

        <div className="article-cta">
          <a href="https://youtu.be/zaSrC3ZtZ_c?si=yscQXVXi0AlUqvi_" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Voir la capsule
          </a>
        </div>
      </article>

      <article className="actualite-article">
        <div className="article-header">
          <span className="article-date">31 décembre 2025</span>
          <span className="article-tag">Médias</span>
        </div>

        <h2>COUVERTURE FRANCE-ANTILLES</h2>
        <h3>"POTOMITAN, l'IA qui parle créole"</h3>

        <p className="intro">
          France-Antilles publie un article détaillé sur POTOMITAN, présentant la problématique des
          barrières linguistiques dans les urgences et l'inclusion administrative en Guadeloupe.
          L'article met en lumière l'approche communautaire du projet et son architecture technique offline-first.
        </p>

        <div className="article-cta">
          <a href="https://hexagone.franceantilles.fr/actualite/sciences-et-recherche/potomitan-lia-qui-parle-creole-1063339.php" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Lire l'article
          </a>
        </div>
      </article>

      <article className="actualite-article">
        <div className="article-header">
          <span className="article-date">Novembre 2025</span>
          <span className="article-tag">Opérationnel</span>
        </div>

        <h2>POTOMITAN™ OPÉRATIONNEL</h2>
        <h3>L'IA qui brise les barrières linguistiques systémiques est prête à se déployer</h3>

        <p className="intro">
          Pendant que les grandes IA ignorent 7000+ langues parlées par 40% de la population mondiale, 
          POTOMITAN™ démontre qu'une autre voie est possible.
        </p>

        <section className="article-section">
          <h4>Le prototype est opérationnel :</h4>
          <ul>
            <li>+ de 2100 expressions français-créole guadeloupéen validées par locuteurs natifs</li>
            <li>Traduction &lt;2 secondes</li>
            <li>Mode hors ligne pensé pour les réalités caribéennes (connexions instables, cyclones)</li>
            <li>Écosystème de contribution communautaire (Klavyé Kréyòl disponible sur Google Play)</li>
          </ul>
        </section>

        <section className="article-section">
          <h4>Deux crises systémiques traitées :</h4>
          
          <div className="crisis-block">
            <h5>Urgences vitales</h5>
            <p>
              93 secondes perdues par intervention quand les secours ne comprennent pas le créole. 
              "Kè-la ka bat" → "J'ai des palpitations cardiaques" : chaque seconde compte.
            </p>
          </div>

          <div className="crisis-block">
            <h5>Exclusion administrative</h5>
            <p>
              Démarches CAF abandonnées, prestations non réclamées, formulaires France Travail incompris. 
              La barrière linguistique crée une exclusion massive là où l'aide publique devrait être accessible.
            </p>
          </div>
        </section>

        <section className="article-section">
          <h4>Architecture technique éprouvée :</h4>
          <p>
            Fine-tuning NLLB-200 Meta + validation communautaire + infrastructure offline-first. 
            Une approche hybride IA/humain qui prouve que les langues minorées peuvent être servies 
            avec excellence technique.
          </p>
        </section>

        <section className="article-section funding-section">
          <p className="funding-amount">Phase de financement en cours pour accélérer le déploiement territorial</p>
        </section>

        <div className="article-cta">
          <a href="https://linktr.ee/potomitan.io" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Tester maintenant
          </a>
          <a href="mailto:contact@potomitan.io" className="btn-secondary">
            Financement/partenariats
          </a>
        </div>
      </article>
    </div>
  );
};

export default Actualites;