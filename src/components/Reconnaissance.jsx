import React from 'react';
import { Languages, HeartHandshake, Landmark, Megaphone, Video, Newspaper } from 'lucide-react';
import './Reconnaissance.css';

const VALIDATION_BLOCKS = [
  {
    id: 'technique',
    icon: Languages,
    title: 'Maturité technique',
    items: [
      '4 958 expressions relues par des créolophones de Guadeloupe',
      'Traduction bidirectionnelle français ↔ créole',
      'Architecture offline fonctionnelle',
      'Temps de réponse < 2 secondes'
    ]
  },
  {
    id: 'communautaire',
    icon: HeartHandshake,
    title: 'Ancrage communautaire',
    items: [
      'VwaKréyòl : plateforme de contribution communautaire active',
      'Validation linguistique par des créolophones',
      'Sessions Maké Kréyòl (marquage collaboratif)'
    ]
  },
  {
    id: 'institutionnel',
    icon: Landmark,
    title: 'Reconnaissance institutionnelle',
    items: [
      "Membre d'honneur de l'initiative KOUDMEN, novembre 2026",
      "Sollicité par les urgences du centre hospitalier de Basse-Terre pour traduire en créole le message d'accueil de leur visiophone, novembre 2026",
      "Présenté au Lab'An Nou (Préfecture) devant le SDIS, le Département, la DEETS et le Rectorat, avril 2026",
      { icon: Video, text: 'Orange Antilles-Guyane : capsule vidéo', link: 'https://youtu.be/zaSrC3ZtZ_c?si=yscQXVXi0AlUqvi_' }
    ]
  },
  {
    id: 'mediatique',
    icon: Megaphone,
    title: 'Visibilité médiatique',
    items: [
      { icon: Newspaper, text: "France-Antilles, 10 novembre 2026 : « Potomitan, l'IA créole pour faciliter l'accès aux droits et aux secours »" },
      { icon: Newspaper, text: 'France-Antilles : couverture du projet', link: 'https://hexagone.franceantilles.fr/actualite/sciences-et-recherche/potomitan-lia-qui-parle-creole-1063339.php' }
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
                <IconComponent size={30} strokeWidth={2} />
              </div>
              <h3 className="validation-title">{block.title}</h3>
              <ul className="validation-list">
                {block.items.map((item, index) => {
                  if (typeof item === 'string') return <li key={index}>{item}</li>;
                  const ItemIcon = item.icon;
                  const content = (
                    <>
                      {ItemIcon && <ItemIcon size={16} strokeWidth={2} className="validation-item-icon" aria-hidden="true" />}
                      {item.text}
                    </>
                  );
                  return (
                    <li key={index}>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="validation-link">
                          {content}
                        </a>
                      ) : content}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="reconnaissance-footer">
        POTOMITAN propose aux services publics et aux collectivités des
        expérimentations à périmètre et durée définis.
      </p>

      <div className="reconnaissance-news">
        <span className="news-label">Dernière actualité :</span>
        <span className="news-title">Article France-Antilles, 10 novembre 2026</span>
        <a href="/actualites" className="news-link">Lire l'article complet →</a>
      </div>
    </section>
  );
};

export default Reconnaissance;
