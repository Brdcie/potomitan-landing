import React from 'react';
import { Cpu, Users, Building2, Newspaper } from 'lucide-react';
import './Reconnaissance.css';

const VALIDATION_BLOCKS = [
  {
    id: 'technique',
    icon: Cpu,
    title: 'Maturité technique',
    items: [
      '4 958 expressions validées par locuteurs natifs guadeloupéens',
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
      { text: '📹 Orange Antilles-Guyane : capsule vidéo', link: 'https://youtu.be/zaSrC3ZtZ_c?si=yscQXVXi0AlUqvi_' }
    ]
  },
  {
    id: 'mediatique',
    icon: Newspaper,
    title: 'Visibilité médiatique',
    items: [
      { text: '📰 France-Antilles : couverture du projet', link: 'https://hexagone.franceantilles.fr/actualite/sciences-et-recherche/potomitan-lia-qui-parle-creole-1063339.php' }
    ]
  }
];

const Reconnaissance = () => {
  return (
    <section id="reconnaissance" className="section reconnaissance-section">
      <h2 className="section-title">Ce qui valide POTOMITAN</h2>

      <p className="reconnaissance-intro">
        Les urgences sont notre premier cas d'usage. La même infrastructure d'inclusion
        linguistique peut demain servir l'orientation, l'accès aux droits ou l'insertion
        professionnelle — partout où le créole guadeloupéen est aujourd'hui ignoré par les
        outils numériques.
      </p>

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
                  <li key={index}>
                    {typeof item === 'string' ? (
                      item
                    ) : (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="validation-link">
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

      <p className="reconnaissance-footer">
        POTOMITAN est actuellement en discussion avec plusieurs services publics
        et collectivités territoriales pour des déploiements pilotes en 2026.
      </p>

      <div className="reconnaissance-news">
        <span className="news-label">Dernière actualité :</span>
        <span className="news-title">Présentation Dothémare — Lab'An Nou, 27 avril 2026</span>
        <a href="/actualites" className="news-link">Lire l'article complet →</a>
      </div>
    </section>
  );
};

export default Reconnaissance;
