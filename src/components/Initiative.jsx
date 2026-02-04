import React from 'react';

const Initiative = () => {
  return (
    <section id="initiative" className="section initiative">
      <h2 className="section-title">L'Initiative Potomitan</h2>
      <p className="section-subtitle">
        Une vision d'inclusion linguistique pour l'égalité territoriale
      </p>

      <div className="initiative-content">
        <div className="initiative-block">
          <h3>La Problématique</h3>
          <p>
            Lors d'urgences en Guadeloupe, <strong>75% des personnes en situation de stress
            communiquent principalement en créole</strong>, leur langue maternelle.
            Cette réalité crée un obstacle critique entre citoyens et services publics.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Au-delà des urgences, cette barrière linguistique affecte l'accès aux droits,
            à l'emploi et aux services administratifs pour toute une population.
          </p>
        </div>

        <div className="initiative-block">
          <h3>Notre Approche</h3>
          <p>
            POTOMITAN est né d'une <strong>co-construction communautaire</strong> : chaque expression
            est validée par des locuteurs natifs guadeloupéens, garantissant authenticité et pertinence.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Notre technologie est conçue <strong>par et pour les communautés créoles</strong>,
            pas imposée de l'extérieur.
          </p>
        </div>

        <div className="initiative-block">
          <h3>Impact Social</h3>
          <p>
            <strong>Inclusion citoyenne</strong> : permettre à chacun de communiquer dans sa langue
            avec les services essentiels.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Préservation linguistique</strong> : valoriser et documenter le créole guadeloupéen
            comme patrimoine vivant.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Égalité territoriale</strong> : réduire la fracture entre territoires hexagonaux
            et ultramarins.
          </p>
        </div>

        <div className="initiative-block">
          <h3>Notre Vision</h3>
          <p>
            La Guadeloupe est notre <strong>territoire pilote</strong>, le fondement d'une technologie
            d'inclusion linguistique qui peut servir l'ensemble des territoires créolophones.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Martinique, Guyane, Réunion, puis Haïti, Maurice... <strong>Plus de 30 millions de créolophones</strong>
            à base française et anglaise pourraient bénéficier de cette innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Initiative;
