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
            <li>+ de 1800 expressions français-créole guadeloupéen validées par locuteurs natifs</li>
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

        <section className="article-section team-section">
          <h4>Équipe :</h4>
          <ul className="team-list">
            <li><strong>Brigitte Démocrite</strong> : Fondatrice &Experte IA, a conçu et développé le système de traduction bidirectionnel créole-français de Potomitan grâce au fine-tuning du modèle NLLB-200. La validation communautaire a été primordiale pour le fonctionnement hors ligne prioritaire.</li>
            <li><strong>Médhi Famibelle</strong> : Expert Transcription & Contribution Communautaire, développe les outils de contribution linguistique : Klavyé Kréyòl (disponible sur Google Play) et interface de transcription audio.</li>
            <li><strong>Monique Famibelle</strong> : Ambassadrice & Relations Communautaires, coordonne l'ancrage territorial de POTOMITAN : elle organise les sessions "Maké Kréyòl" de validation linguistique</li>
           <li><strong>Julien Noyer</strong> : Développeur Full-stack & UX, il a développé le module de transcription audio de POTOMITAN, avec une interface UX optimisée pour la contribution communautaire</li>
           
          </ul>
        </section>

        <section className="article-section vision-section">
          <h4>Vision 2027 :</h4>
          <p className="vision-path">
            Guadeloupe → Martinique → Guyane → Saint-Martin<br/>
            <strong>2M+ créolophones servis</strong>
          </p>
        </section>

        <section className="article-section funding-section">
          <h4>Nous recherchons :</h4>
          <p className="funding-amount">500K€ pour le déploiement territorial et l'extension fonctionnelle</p>
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