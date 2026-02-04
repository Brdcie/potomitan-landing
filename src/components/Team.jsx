import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Brigitte Démocrite',
      role: 'Fondatrice & CEO',
      description: '30 ans en gestion de projets IT internationaux (dont direction BNP Paribas). Spécialiste IA conversationnelle et inclusion linguistique.',
      photo: '/photo-brigitte.jpg'
    },
    {
      name: 'Monique Famibelle',
      role: 'Co-fondatrice & Ambassadrice Communautaire',
      description: 'Ancrage territorial en Guadeloupe. Facilite l\'identification linguistique et la validation communautaire auprès des créolophones.',
      photo: '/photo-monique.jpeg'
    },
    {
      name: 'Yisselda Rhoc',
      role: 'Co-fondatrice & Architecture Technique',
      description: 'Architecte de systèmes critiques basée à New York (BBR Partners). Spécialiste infrastructures IA distribuées et solutions offline.',
      photo: '/photo-yisselda.jpg'
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

      <p className="team-tagline">
        Une équipe complémentaire, par et pour les communautés créoles.
      </p>
    </section>
  );
};

export default Team;
