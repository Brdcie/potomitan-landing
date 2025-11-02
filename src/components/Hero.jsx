import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h2>Potomitan™</h2>
        <p className="hero-subtitle">L'inclusion linguistique pour la Guadeloupe</p>
        <p>
          Traduction français ↔ créole guadeloupéen pour les urgences sociétales.
          Une solution d'inclusion linguistique au service de l'égalité territoriale.
        </p>
        <div className="hero-cta">
          <a href="https://traducteur.potomitan.io" className="btn btn-primary">
            Utiliser l'application
          </a>
          <a href="https://vwakreol.potomitan.io" className="btn btn-secondary">
            Contribuer
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
