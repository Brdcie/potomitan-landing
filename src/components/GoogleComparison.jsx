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

const GoogleComparison = () => {
  return (
    <section className="google-comparison section">
      <h2 className="section-title">Pourquoi POTOMITAN plutôt que Google Translate ?</h2>

      <div className="comparison-table">
        <div className="comparison-header">
          <div className="comparison-col">Phrase créole</div>
          <div className="comparison-col">Google Translate</div>
          <div className="comparison-col">POTOMITAN</div>
        </div>

        {COMPARISON_EXAMPLES.map((example) => (
          <div key={example.id} className="comparison-row">
            <div className="comparison-cell creole-phrase">
              {example.creole}
            </div>
            <div className="comparison-cell google-translation">
              <span className="error-icon">❌</span>
              <span>{example.google}</span>
            </div>
            <div className="comparison-cell potomitan-translation">
              <span className="success-icon">✅</span>
              <span>{example.potomitan}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="comparison-explanation">
        Google Translate traduit mot à mot. POTOMITAN comprend le créole, sa syntaxe, ses nuances.
      </p>

      <div className="offline-highlight">
        <strong>Et surtout :</strong> POTOMITAN fonctionne offline. Pendant un cyclone,
        quand les réseaux tombent, Google Translate ne sert à rien. POTOMITAN reste opérationnel.
      </div>
    </section>
  );
};

export default GoogleComparison;
