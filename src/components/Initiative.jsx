import React from 'react';
import './Initiative.css';

const Initiative = () => {
  return (
    <section id="initiative" className="initiative-section">
      <div className="initiative-container">
        <span className="section-label section-label-light">Notre vision</span>

        <div className="initiative-blocks">
          <div className="initiative-block-narrative">
            <h3>La Problématique</h3>
            <p>
              Lors d'urgences en Guadeloupe, <strong>75% des personnes en situation de stress
              communiquent principalement en créole</strong>, leur langue maternelle.
              Cette réalité crée un obstacle critique entre citoyens et services publics.
            </p>
            <p>
              Au-delà des urgences, cette barrière linguistique affecte l'accès aux droits,
              à l'emploi et aux services administratifs pour toute une population.
            </p>
          </div>

          <hr className="initiative-separator initiative-separator-leaf" />

          <div className="initiative-block-narrative">
            <h3>Notre Approche</h3>
            <p>
              POTOMITAN est né d'une <strong>co-construction communautaire</strong> : chaque expression
              est validée par des locuteurs natifs guadeloupéens, garantissant authenticité et pertinence.
            </p>
            <p>
              Notre technologie est conçue <strong>par et pour les communautés créoles</strong>,
              pas imposée de l'extérieur.
            </p>
          </div>

          <hr className="initiative-separator initiative-separator-ember" />

          <div className="initiative-block-narrative">
            <h3>Impact Social</h3>
            <p>
              <strong>Inclusion citoyenne</strong> : permettre à chacun de communiquer dans sa langue
              avec les services essentiels.
            </p>
            <p>
              <strong>Valorisation linguistique</strong> : documenter le créole guadeloupéen
              comme patrimoine vivant.
            </p>
            <p>
              <strong>Égalité territoriale</strong> : réduire la fracture entre territoires hexagonaux
              et ultramarins.
            </p>
          </div>

          <hr className="initiative-separator initiative-separator-leaf" />

          <div className="initiative-block-narrative">
            <h3>Notre Vision</h3>
            <p>
              La Guadeloupe est notre <strong>territoire pilote</strong>, le fondement d'une technologie
              d'inclusion linguistique qui peut servir l'ensemble des territoires créolophones.
            </p>
            <p>
              Martinique, Guyane, Réunion, puis Haïti, Maurice...
            </p>
            <span className="initiative-big-number">30 millions</span>
            <span className="initiative-big-label">
              de créolophones à base française et anglaise pourraient bénéficier de cette innovation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiative;
