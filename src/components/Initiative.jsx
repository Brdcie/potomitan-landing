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
            communiquent principalement en créole</strong>, leur langue maternelle. 
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
            Architecture hybride combinant une base de données validée de <strong>+2100 expressions 
            d'urgence</strong> traduites par des locuteurs natifs et une IA spécialisée pour le créole guadeloupéen.
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
              <div className="stat-number">+2100</div>
              <div className="stat-label">Expressions validées</div>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            Inclusion citoyenne, préservation du patrimoine linguistique créole, 
            et renforcement du lien entre citoyens et services publics.
          </p>
        </div>
        <div className="initiative-block">
  <h3>Notre Vision</h3>
  <p>
    La Guadeloupe est notre <strong>territoire pilote</strong>, le fondement d'une technologie 
    d'inclusion linguistique qui peut servir l'ensemble des territoires créolophones.
  </p>
  <p style={{ marginTop: '1rem' }}>
    Martinique, Guyane, Réunion, Saint-Martin, Saint-Barthélemy, Haïti, Maurice... <strong>Plus de 30 millions de créolophones </strong> 
    à base française et anglaise pourraient bénéficier de cette innovation. L'architecture développée 
    pour le créole guadeloupéen est conçue pour s'adapter aux autres créoles.
  </p>
</div>
      </div>
    </section>
  );
};

export default Initiative;
