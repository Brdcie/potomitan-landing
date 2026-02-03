import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Brigitte Démocrite',
      role: 'Fondatrice, Directrice Générale et Chef de Projet',
      description: 'Je pilote POTOMITAN depuis sa conception jusqu\'à sa mise en œuvre opérationnelle. Mon rôle couvre la direction stratégique, la gestion de projet technique, le développement des partenariats institutionnels et la structuration financière de l\'entreprise. Vingt ans de direction de projets IT internationaux, dont plusieurs années comme Directrice de projets IT chez BNP Paribas, m\'ont donné une maîtrise des architectures techniques complexes et du dialogue avec les décideurs institutionnels.',
      photo: '/photo-brigitte.jpg'
    },
    {
      name: 'Monique Famibelle',
      role: 'Co-fondatrice, Ambassadrice Communautaire et Développement Territorial',
      description: 'J\'assure bénévolement le développement des partenariats territoriaux en Guadeloupe et l\'animation de la communauté de contributeurs VwaKréyòl. Secrétaire générale de l\'association Zyé a mangrov\'la, mon ancrage territorial profond et mon réseau étendu dans le tissu associatif, éducatif et institutionnel guadeloupéen facilitent l\'identification des besoins réels des utilisateurs finaux et la validation linguistique du corpus.',
      photo: '/photo-monique.jpeg'
    },
    {
      name: 'Yisselda Rhoc',
      role: 'Co-fondatrice et Référente Architecture Numérique',
      description: 'Je pilote l\'architecture technique et la stratégie numérique de POTOMITAN. Vice-Présidente Ingénieure Senior chez BBR Partners (New York), j\'apporte plus de dix ans d\'expertise en ingénierie logicielle et architecture de systèmes critiques. Titulaire d\'un Master en Informatique spécialisé en Intelligence Artificielle de Sorbonne Université, je valide les choix d\'architecture majeurs et garantis la robustesse technique de la solution.',
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
