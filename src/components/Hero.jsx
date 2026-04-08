import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Screen 1: The quote */}
      <div className="hero-screen hero-screen-quote">
        <blockquote className="hero-quote">
          "Lè ou malad, sé an kréyòl ou ka kriyé"
        </blockquote>
        <p className="hero-quote-translation">
          — Quand tu souffres, c'est en créole que tu appelles
        </p>
        <a href="#comparaison" className="hero-scroll-indicator" aria-label="Découvrir la suite">
          <span className="hero-scroll-text">Découvrir</span>
          <span className="hero-chevron">↓</span>
        </a>
      </div>

      {/* Screen 2: The product */}
      <div className="hero-screen hero-screen-product">
        <div className="hero-product-content">
          <h1 className="hero-product-title">Potomitan</h1>
          <p className="hero-product-subtitle">
            Traduction instantanée français ↔ créole guadeloupéen
          </p>
          <p className="hero-product-description">
            Fonctionne sans connexion. Validé par des locuteurs natifs.
            Pour les urgences, les services publics et l'emploi.
          </p>
          <div className="hero-cta-primary">
            <a href="https://traducteur.potomitan.io" className="btn btn-primary hero-btn-primary">
              Tester maintenant
            </a>
          </div>
          <div className="hero-cta-secondary">
            <a href="#reconnaissance" className="hero-link">
              Vous êtes une institution ? En savoir plus
            </a>
            <a href="https://vwakreol.potomitan.io" className="btn hero-btn-contribuer" target="_blank" rel="noopener noreferrer">
              Vous parlez créole ? Contribuer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
