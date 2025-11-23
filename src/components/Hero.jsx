import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h2>Potomitan™</h2>
        <p className="hero-subtitle">L'inclusion linguistique pour la Guadeloupe</p>
        <p>
           L'urgence parle créole. Une IA au service de l'inclusion linguistique en Guadeloupe.
        </p>
        <div className="hero-cta">
          <a href="https://traducteur.potomitan.io" className="btn btn-primary">
            POTOMITAN, l'intelligence artificielle qui parle créole
          </a>
          <a href="https://vwakreol.potomitan.io" className="btn btn-secondary">
            Contribuez avec Vwakréyòl
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
