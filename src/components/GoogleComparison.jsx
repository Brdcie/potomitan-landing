import React from 'react';
import './GoogleComparison.css';

const COMPARISON_EXAMPLES = [
  {
    id: 'palpitations',
    creole: 'Kè-la ka bat',
    google: 'Le cœur bat',
    potomitan: "J'ai des palpitations"
  },
  {
    id: 'agreement',
    creole: 'Bon, pa ni pwoblèm',
    google: 'Bon, pas de problème',
    potomitan: "D'accord, pas de problème"
  }
];

const SECONDARY_METRICS = [
  { id: 'expressions', number: '3000', label: 'expressions validées par locuteurs natifs' },
  { id: 'reach', number: '2M+', label: 'créolophones dans les 4 DOM' },
  { id: 'speed', number: '<2s', label: 'temps de traduction' }
];

const GoogleComparison = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-container">
        {/* Left column: the problem */}
        <div className="comparison-left">
          <span className="section-label section-label-light">Le problème</span>
          <h2 className="comparison-title">
            Google traduit des mots.<br />
            Potomitan comprend une langue.
          </h2>

          <div className="comparison-examples">
            {COMPARISON_EXAMPLES.map((example) => (
              <div key={example.id} className="comparison-example">
                <p className="comparison-creole">{example.creole}</p>
                <div className="comparison-results">
                  <p className="comparison-google">
                    <span className="comparison-icon">❌</span>
                    {example.google}
                  </p>
                  <p className="comparison-potomitan">
                    <span className="comparison-icon">✓</span>
                    {example.potomitan}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="comparison-offline">
            <strong>Et surtout :</strong> POTOMITAN fonctionne offline. Pendant un cyclone,
            quand les réseaux tombent, Google Translate ne sert à rien.
          </p>
        </div>

        {/* Right column: the impact */}
        <div className="comparison-right">
          <div className="impact-inset">
            <span className="impact-number">93</span>
            <span className="impact-label">secondes perdues par intervention d'urgence en Guadeloupe</span>

            <p className="impact-explanation">
              Dans un contexte médical critique, ces secondes peuvent faire la différence entre la vie et la mort.
            </p>

            <div className="impact-metrics">
              {SECONDARY_METRICS.map((metric) => (
                <div key={metric.id} className="impact-metric">
                  <span className="metric-number">{metric.number}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleComparison;
