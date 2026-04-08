import React from 'react';
import { Cpu, Users, Building2, Newspaper } from 'lucide-react';
import './Reconnaissance.css';

const VALIDATION_BLOCKS = [
  {
    id: 'technique',
    icon: Cpu,
    title: 'Maturité technique',
    color: 'var(--leaf)',
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
    color: 'var(--ember)',
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
    color: 'var(--gold)',
    items: [
      "Lab'An Nou (Préfecture de Guadeloupe) : soutien au projet",
      { text: 'Orange Antilles-Guyane : capsule vidéo', link: 'https://youtu.be/zaSrC3ZtZ_c?si=yscQXVXi0AlUqvi_' }
    ]
  },
  {
    id: 'mediatique',
    icon: Newspaper,
    title: 'Visibilité médiatique',
    color: 'var(--leaf)',
    items: [
      { text: 'France-Antilles : couverture du projet', link: 'https://hexagone.franceantilles.fr/actualite/sciences-et-recherche/potomitan-lia-qui-parle-creole-1063339.php' }
    ]
  }
];

const Reconnaissance = () => {
  return (
    <section id="reconnaissance" className="reconnaissance-section-dark">
      <div className="reconnaissance-container">
        <span className="section-label section-label-dark">Ce qui valide Potomitan</span>

        <div className="validation-stack">
          {VALIDATION_BLOCKS.map((block) => {
            const IconComponent = block.icon;
            return (
              <div
                key={block.id}
                className="validation-block-dark"
                style={{ borderLeftColor: block.color }}
              >
                <div className="validation-header">
                  <IconComponent size={28} strokeWidth={1.5} className="validation-icon-dark" />
                  <h3 className="validation-title-dark">{block.title}</h3>
                </div>
                <ul className="validation-list-dark">
                  {block.items.map((item, index) => (
                    <li key={index}>
                      {typeof item === 'string' ? (
                        item
                      ) : (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="validation-link-dark">
                          {item.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="reconnaissance-footer-dark">
          POTOMITAN est actuellement en discussion avec plusieurs services publics
          et collectivités territoriales pour des déploiements pilotes en 2026.
        </p>

        <div className="reconnaissance-news-dark">
          <span className="news-badge">Dernière actualité</span>
          <span className="news-text">POTOMITAN opérationnel — Novembre 2025</span>
          <a href="/actualites" className="news-link-dark">Lire l'article complet →</a>
        </div>
      </div>
    </section>
  );
};

export default Reconnaissance;
