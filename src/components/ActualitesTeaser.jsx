import React from 'react';
import './ActualitesTeaser.css';
import { Link } from 'react-router-dom';

const ActualitesTeaser = () => {
  return (
    <section className="actualites-teaser" id="actualites">
      <div className="teaser-header">
        <span className="badge-new">Nouveau</span>
        <span className="teaser-date">Novembre 2025</span>
      </div>
      
      <h2>POTOMITAN™ opérationnel</h2>
      
      <p className="teaser-intro">
        +2100 phrases français-créole validées, traduction &lt;2 secondes, 
        mode offline. L'IA qui brise les barrières linguistiques systémiques 
        est prête à se déployer en Martinique, Guyane, Saint-Martin et servir 
        2M+ créolophones d'ici 2027.
      </p>
      
      <div className="teaser-highlights">
        <div className="highlight-item">
          <strong>93 secondes</strong>
          <span>gagnées par intervention d'urgence</span>
        </div>
        <div className="highlight-item">
          <strong>500K€</strong>
          <span>recherchés pour le déploiement</span>
        </div>
        <div className="highlight-item">
          <strong>2M+</strong>
          <span>créolophones servis d'ici 2027</span>
        </div>
      </div>
      
    <Link to="/actualites" className="btn-read-more">
  Découvrir l'actualité complète →
</Link>
    </section>
  );
};

export default ActualitesTeaser;