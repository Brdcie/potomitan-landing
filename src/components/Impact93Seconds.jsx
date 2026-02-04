import React from 'react';
import './Impact93Seconds.css';

const SECONDARY_METRICS = [
  { id: 'expressions', number: '3000', label: 'expressions validées par locuteurs natifs' },
  { id: 'reach', number: '2M+', label: 'créolophones dans les 4 DOM' },
  { id: 'speed', number: '<2s', label: 'temps de traduction' }
];

const Impact93Seconds = () => {
  return (
    <section id="impact" className="section impact-section">
      <div className="impact-main">
        <h2 className="impact-title">
          <span className="impact-number">93 secondes</span>
          <span className="impact-subtitle">perdues par intervention d'urgence</span>
        </h2>

        <p className="impact-explanation">
          À cause de la barrière linguistique français-créole, chaque intervention d'urgence
          en Guadeloupe perd en moyenne 93 secondes. Dans un contexte médical critique,
          ces secondes peuvent faire la différence entre la vie et la mort.
        </p>

        <p className="impact-solution">
          <strong>POTOMITAN traduit en moins de 2 secondes</strong> et fonctionne même sans connexion.
        </p>
      </div>

      <div className="impact-metrics">
        {SECONDARY_METRICS.map((metric) => (
          <div key={metric.id} className="impact-metric">
            <span className="metric-number">{metric.number}</span>
            <span className="metric-label">{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact93Seconds;
