import React from 'react';
import { AlertCircle, Type, Keyboard, Mic, Users } from 'lucide-react';

const Applications = () => {
  const userApps = [
    {
      title: 'App complète',
      description: 'Interface complète avec traducteur intégré, catégories d\'urgence (Médical, Évacuation, Secours, Information) et phrases essentielles.',
      icon: <AlertCircle size={32} color="white" />,
      iconBg: 'orange',
      link: 'https://app.potomitan.io',
      badge: null
    },
    {
      title: 'Urgence',
      description: 'Accès rapide aux phrases d\'urgence critiques pour situations de crise. Traduction instantanée avec audio.',
      icon: <AlertCircle size={32} color="white" />,
      iconBg: 'orange',
      link: 'https://app.potomitan.io/phrases',
      badge: null
    },
    {
      title: 'Traducteur',
      description: 'Traducteur français ↔ créole guadeloupéen standalone avec API dédiée. Plus de 1818 phrases validées.',
      icon: <Type size={32} color="white" />,
      iconBg: 'blue',
      link: 'https://traducteur.potomitan.io',
      badge: { text: 'Déjà disponible', type: 'soon' }
    },
    {
      title: 'Klavyé Kréyòl',
      description: 'Clavier créole pour saisie facilitée en créole guadeloupéen. Tests utilisateurs en cours sur Android, développement iOS en cours.',
      icon: <Keyboard size={32} color="white" />,
      iconBg: 'green',
      link: 'https://famibelle.github.io/KreyolKeyb/',
      badge: { text: 'Tests en cours', type: 'soon' }
    }
  ];

  const contributorApps = [
    {
      title: 'Validation transcriptions',
      description: 'Validez les transcriptions audio pour améliorer la qualité du corpus. Authentification requise pour garantir la fiabilité.',
      icon: <Mic size={32} color="white" />,
      iconBg: 'blue',
      link: 'https://app.potomitan.io/contribuer',
      badge: { text: 'Auth requise', type: 'auth' }
    },
    {
      title: 'VwaKréyòl',
      description: 'Enrichissez le corpus audio et proposez de nouvelles phrases traduites en créole guadeloupéen. Contribution libre et ouverte.',
      icon: <Users size={32} color="white" />,
      iconBg: 'yellow',
      link: 'https://vwakreol.potomitan.io',
      badge: { text: 'Libre accès', type: 'open' }
    }
  ];

  return (
    <section id="applications" className="section applications">
      <h2 className="section-title">Nos Applications</h2>
      <p className="section-subtitle">
        Un écosystème complet pour utiliser et enrichir le créole guadeloupéen
      </p>

      <div className="apps-category">
        <h3>Utiliser Potomitan</h3>
        <div className="apps-grid">
          {userApps.map((app, index) => (
            <a 
              key={index} 
              href={app.link} 
              className="app-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`app-icon ${app.iconBg}`}>
                {app.icon}
              </div>
              <h4>{app.title}</h4>
              <p>{app.description}</p>
              {app.badge && (
                <span className={`app-badge badge-${app.badge.type}`}>
                  {app.badge.text}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="apps-category">
        <h3>Contribuer à Potomitan</h3>
        <p style={{ marginBottom: '1.5rem', color: '#95A5A6' }}>
          Aidez à enrichir le créole guadeloupéen et à améliorer la qualité des traductions
        </p>
        <div className="apps-grid">
          {contributorApps.map((app, index) => (
            <a 
              key={index} 
              href={app.link} 
              className="app-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`app-icon ${app.iconBg}`}>
                {app.icon}
              </div>
              <h4>{app.title}</h4>
              <p>{app.description}</p>
              {app.badge && (
                <span className={`app-badge badge-${app.badge.type}`}>
                  {app.badge.text}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
