import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Brigitte Démocrite',
      role: 'Fondatrice & Experte IA',
      description: 'Développeuse principale et spécialiste IA. À l\'initiative de Potomitan, elle a développé la majeure partie de l\'application et le traducteur bidirectionnel.'
    },
    {
      name: 'Monique Famibelle',
      role: 'Ambassadrice & Communication',
      description: 'Ambassadrice officielle de Potomitan, elle porte la voix du projet auprès des communautés et partenaires.'
    },
    {
      name: 'Médhi Famibelle',
      role: 'Expert IA',
      description: 'Développeur du Klavyé Kréyòl et expert en intelligence artificielle appliquée au créole guadeloupéen.'
    },
    {
      name: 'Julien Noyer',
      role: 'Développeur Full-stack & UX',
      description: 'Développeur du module de transcription.'
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
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribuer avec VwaKréyòl
        </a>
      </div>
    </section>
  );
};

export default Team;
