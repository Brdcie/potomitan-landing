import React from 'react';

const Initiative = () => {
  return (
    <section id="initiative" className="section initiative">
      <h2 className="section-title">L'Initiative Potomitan</h2>
      <p className="section-subtitle">
        Une solution d'inclusion linguistique pour l'égalité territoriale en Guadeloupe
      </p>

      <div className="initiative-content">
        <div className="initiative-block">
          <h3>La Problématique</h3>
          <p>
            Lors d'urgences en Guadeloupe, <strong>75% des personnes en situation de stress 
            communiquent principalement en créole</strong>, leur langue maternelle naturelle. 
            Cette réalité crée un obstacle critique pour les services d'urgence.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>93 secondes perdues</strong> en moyenne par intervention à cause de 
            la barrière linguistique. Après le cyclone Maria, le Lieutenant R. Mérion (SDIS) 
            rapportait plus de 3 minutes perdues par intervention.
          </p>
        </div>

        <div className="initiative-block">
          <h3>Notre Solution</h3>
          <p>
            Architecture hybride combinant une base de données validée de <strong>1805 phrases 
            d'urgence</strong> traduites par des locuteurs natifs et une IA spécialisée (fine-tuning 
            NLLB-200 Meta) pour le créole guadeloupéen.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Fonctionnement offline</strong> crucial pour les connexions instables, 
            avec un temps de réponse garanti de moins de 2 secondes.
          </p>
        </div>

        <div className="initiative-block">
          <h3>Impact Mesurable</h3>
          <div className="initiative-stats">
            <div className="stat">
              <div className="stat-number">2,5-5 M€</div>
              <div className="stat-label">Économies annuelles potentielles</div>
            </div>
            <div className="stat">
              <div className="stat-number">93s</div>
              <div className="stat-label">Gagnées par intervention</div>
            </div>
            <div className="stat">
              <div className="stat-number">1805</div>
              <div className="stat-label">Phrases validées</div>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            Inclusion citoyenne, préservation du patrimoine linguistique créole, 
            et renforcement du lien entre citoyens et services publics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Initiative;
