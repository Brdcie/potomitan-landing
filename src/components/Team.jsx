import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'Brigitte Démocrite',
    role: 'Fondatrice, Directrice Générale et Chef de Projet',
    description: 'Pilote POTOMITAN depuis sa conception. Vingt ans de direction de projets IT internationaux, dont plusieurs années comme Directrice de projets IT chez BNP Paribas.',
    photo: '/photo-brigitte.jpg'
  },
  {
    name: 'Monique Famibelle',
    role: 'Ambassadrice Communautaire et Développement Territorial',
    description: 'Développement des partenariats territoriaux en Guadeloupe et animation de la communauté VwaKréyòl. Secrétaire générale de l\'association Zyé a mangrov\'la.',
    photo: '/photo-monique.jpeg'
  },
  {
    name: 'Yisselda Rhoc',
    role: 'Co-fondatrice et Référente Architecture Numérique',
    description: 'Architecture technique et stratégie numérique. Vice-Présidente Ingénieure Senior chez BBR Partners (New York), Master IA de Sorbonne Université.',
    photo: '/photo-yisselda.jpg'
  }
];

const Team = () => {
  return (
    <section id="equipe" className="team-section-dark">
      <div className="team-container">
        <div className="team-header">
          <span className="section-label section-label-dark">L'équipe</span>
          <h2 className="team-title">Par et pour les communautés créoles</h2>
        </div>

        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-member-row">
              <img
                src={member.photo}
                alt={member.name}
                className="team-member-photo-dark"
                loading="lazy"
              />
              <div className="team-member-text">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
