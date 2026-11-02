import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h2>Se comprendre en créole, aux urgences comme à la mairie</h2>
        <p className="hero-subtitle">
          Traduction français ↔ créole guadeloupéen pour les urgences, l'accueil
          et les services publics, même sans réseau.
        </p>

        {/* Primary CTA */}
        <div className="hero-cta-primary">
          <a href="https://traducteur.potomitan.io" className="btn btn-primary-large">
            Tester maintenant
          </a>
        </div>

        {/* Secondary CTAs as text links */}
        <div className="hero-cta-secondary">
          <a href="#nous-contacter" className="btn btn-institutional">
            Vous êtes une institution ? Nous contacter
          </a>
          <a href="https://vwakreol.potomitan.io" className="btn btn-contribuer">
            🎙️ Vous parlez créole ? Contribuer
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
