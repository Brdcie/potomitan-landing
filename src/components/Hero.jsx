import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h2>Potomitan™</h2>
        <p className="hero-subtitle">L'inclusion linguistique pour la Guadeloupe</p>

        <p className="hero-description">
          POTOMITAN traduit instantanément français-créole pour les urgences,
          les services publics et l'emploi. Fonctionne sans connexion.
        </p>

        {/* Primary CTA */}
        <div className="hero-cta-primary">
          <a href="https://traducteur.potomitan.io" className="btn btn-primary-large">
            Tester maintenant
          </a>
        </div>

        {/* Secondary CTAs as text links */}
        <div className="hero-cta-secondary">
          <a href="#reconnaissance" className="hero-link">
            Vous êtes une institution ? En savoir plus
          </a>
          <a href="https://vwakreol.potomitan.io" className="hero-link">
            Vous parlez créole ? Contribuer
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
