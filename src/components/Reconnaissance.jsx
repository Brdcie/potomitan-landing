import React from 'react';
import { Cpu, Users, Building2, Newspaper } from 'lucide-react';
import './Reconnaissance.css';

const VALIDATION_BLOCKS = [
  {
    id: 'technique',
    icon: Cpu,
    title: 'Maturité technique',
    items: [
      '3000 expressions validées par locuteurs natifs guadeloupéens',
      'Traduction bidirectionnelle français ↔ créole',
      'Architecture offline fonctionnelle',
      'Temps de réponse < 2 secondes'
    ]
  },
  {
    id: 'communautaire',
    icon: Users,
    title: 'Ancrage communautaire',
    items: [
      'VwaKréyòl : plateforme de contribution communautaire active',
      'Validation linguistique par locuteurs natifs',
      'Sessions Maké Kréyòl (marquage collaboratif)'
    ]
  },
  {
    id: 'institutionnel',
    icon: Building2,
    title: 'Reconnaissance institutionnelle',
    items: [
      "Lab'An Nou (Préfecture de Guadeloupe) : soutien au projet",
      "Orange Antilles-Guyane : capsule de présentation commandée pour évaluation complémentarité SafetyCase"
    ]
  },
  {
    id: 'mediatique',
    icon: Newspaper,
    title: 'Visibilité médiatique',
    items: [
      'France-Antilles : couverture du projet',
      'Couverture médias locaux guadeloupéens'
    ]
  }
];

const Reconnaissance = () => {
  return (
    <section id="reconnaissance" className="section reconnaissance-section">
      <h2 className="section-title">Ce qui valide POTOMITAN</h2>

      <div className="validation-grid">
        {VALIDATION_BLOCKS.map((block) => {
          const IconComponent = block.icon;
          return (
            <div key={block.id} className="validation-block">
              <div className="validation-icon">
                <IconComponent size={32} strokeWidth={1.5} />
              </div>
              <h3 className="validation-title">{block.title}</h3>
              <ul className="validation-list">
                {block.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="reconnaissance-footer">
        POTOMITAN est actuellement en discussion avec plusieurs services publics
        et collectivités territoriales pour des déploiements pilotes en 2026.
      </p>
    </section>
  );
};

export default Reconnaissance;
