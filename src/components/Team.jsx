import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Brigitte Démocrite',
      role: 'Fondatrice & Experte IA',
      description: 'Brigitte a conçu et développé l\'infrastructure technique complète de POTOMITAN : système de traduction bidirectionnel créole-français, fine-tuning NLLB-200, architecture hybride Python/React/JavaScript avec validation communautaire offline-first. Mathématicienne et PM-développeuse (20 ans en projets tech internationaux, spécialisation IA conversationnelle Coursera et Omdena AI for Good), elle orchestre vision produit et développement des composants critiques.',
      photo: '/photo-brigitte.jpg'
    },
    {
      name: 'Monique Famibelle',
      role: 'Ambassadrice & Relations Communautaires',
      description: 'Monique coordonne l\'ancrage territorial de POTOMITAN : elle organise les sessions "Maké Kréyòl" de validation linguistique communautaire, développe les partenariats éducatifs (lycée Baimbridge) et gère les relations presse. Elle assure le lien entre l\'équipe technique et les communautés créolophones.',
      photo: '/photo-monique.jpeg'
    },
    {
      name: 'Médhi Famibelle',
      role: 'Expert Transcription & Contribution Communautaire',
      description: 'Médhi développe les outils de contribution linguistique : Klavyé Kréyòl (disponible sur Google Play) et interface de transcription audio. Formé à Data Science Tech Institute, il coordonne les sessions "Maké Kréyòl" d\'annotation communautaire et assure la collecte des corpus audio créole.',
      photo: '/photo-medhi.jpeg'
    },
    {
      name: 'Julien Noyer',
      role: 'Développeur Full-stack & UX',
      description: 'Julien a développé et mis en production le module de transcription audio de POTOMITAN en Vue.js, avec une interface UX optimisée pour la contribution communautaire. Il représente le projet sur le terrain (intervention lycée Baimbridge) et co-coordonne les sessions "Maké Kréyòl" de validation linguistique.',
      photo: '/photo-julien.jpg'
    }
  ];

  return (
    <section id="equipe" className="section team">
      <h2 className="section-title">L'Équipe Potomitan</h2>
      <p className="section-subtitle">
        Une équipe passionnée au service de l'inclusion linguistique
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            {member.photo && (
              <img
                src={member.photo}
                alt={member.name}
                className="team-member-photo"
              />
            )}
            <h4>{member.name}</h4>
            <p className="role">{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem', color: '#2C3E50' }}>Rejoignez la Communauté</h3>
        <p style={{ color: '#95A5A6', marginBottom: '1.5rem' }}>
          Contribuez à l'enrichissement du créole guadeloupéen via nos applications 
          de contribution communautaire
        </p>
        <a
            href="https://vwakreol.potomitan.io"
            className="btn btn-primary"
          >
            Contribuez avec VwaKréyòl, <br />
            Partager votre voix et vos écrits <br /> 
             <div className="hero-hint">
          📱 Application mobile installable sur Android et iPhone <br />
        </div>
          </a>
          
      </div>
    </section>
  );
};

export default Team;
