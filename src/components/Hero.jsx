import React from 'react';
import './Hero.css';

const HERO_CTAS = [
  {
    id: 'translate',
    text: 'Traduire instantanément',
    href: 'https://traducteur.potomitan.io',
    variant: 'primary'
  },
  {
    id: 'deploy',
    text: 'Déployer dans votre structure',
    href: '#initiative',
    variant: 'institutional'
  },
  {
    id: 'contribute',
    text: 'Enrichir le corpus créole',
    href: 'https://vwakreol.potomitan.io',
    variant: 'secondary'
  }
];

const PARTNER_LOGOS = [
  {
    id: 'orange',
    name: 'Orange Antilles-Guyane',
    image: null, // TODO: Ajouter /logo-orange.svg
    placeholder: 'Orange Antilles-Guyane'
  },
  {
    id: 'france-travail',
    name: 'France Travail',
    image: null, // TODO: Ajouter /logo-france-travail.svg
    placeholder: 'France Travail'
  },
  {
    id: 'laban-nou',
    name: "Lab'An Nou",
    image: null, // TODO: Ajouter /logo-laban-nou.svg
    placeholder: "Lab'An Nou"
  }
];

const IMPACT_METRICS = [
  { id: 'speed', number: '93s', label: 'gagnées en urgence' },
  { id: 'reach', number: '2M+', label: 'créolophones' },
  { id: 'corpus', number: '2100+', label: 'expressions validées' }
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h2>Potomitan™</h2>
        <p className="hero-subtitle">L'inclusion linguistique pour la Guadeloupe</p>

        <p>
          L'urgence parle créole. Une IA au service de l'inclusion linguistique en Guadeloupe.
        </p>

        {/* 3 CTA buttons */}
        <div className="hero-cta">
          {HERO_CTAS.map((cta) => (
            <a key={cta.id} href={cta.href} className={`btn btn-${cta.variant}`}>
              {cta.text}
            </a>
          ))}
        </div>

        {/* Credibility Block */}
        <div className="hero-credibility">
          {/* Partner Logos */}
          <div className="hero-partners">
            <p className="hero-partners-label">Ils nous font confiance</p>
            <div className="hero-partners-grid">
              {PARTNER_LOGOS.map((partner) => (
                <div key={partner.id} className="hero-partner-logo">
                  {partner.image ? (
                    <img src={partner.image} alt={partner.name} />
                  ) : (
                    <div className="hero-partner-placeholder">
                      {partner.placeholder}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Impact Stats */}
          <div className="hero-stats">
            {IMPACT_METRICS.map((metric) => (
              <div key={metric.id} className="hero-stat">
                <div className="hero-stat-number">{metric.number}</div>
                <div className="hero-stat-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Existing mobile hint */}
        <div className="hero-hint">
          📱 Applications mobiles installables sur Android et iPhone
        </div>
      </div>
    </section>
  );
};

export default Hero;
