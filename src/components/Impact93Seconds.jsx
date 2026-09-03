import React from 'react';
import './Impact93Seconds.css';

const SECONDARY_METRICS = [
  { id: 'expressions', number: '4 958', label: 'expressions validées par locuteurs natifs' },
  { id: 'reach', number: '1,3M+', label: 'personnes maîtrisant un créole à base française en Guadeloupe, Martinique et à La Réunion (DGLFLF, 2022)' },
  { id: 'speed', number: '<2s', label: 'temps de traduction' }
];

const Impact93Seconds = () => {
  return (
    <section id="impact" className="section impact-section">
      <div className="impact-main">
        <h2 className="impact-title">
          <span className="impact-subtitle">La communication essentielle en créole guadeloupéen,</span>
          <span className="impact-subtitle">même lorsque le réseau ne répond plus.</span>
        </h2>

        <p className="impact-explanation">
          Accueil et triage en urgence, consignes de sécurité en cas de cyclone, orientation
          administrative et accès aux droits : trois situations où l'incompréhension
          linguistique retarde une réponse déjà critique.
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

      <p className="impact-vision">
        Vision 2027 : servir les territoires créolophones, de la Caraïbe à l'Océan Indien.
      </p>
    </section>
  );
};

export default Impact93Seconds;
