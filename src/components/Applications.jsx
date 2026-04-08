import React from 'react';
import { Mic, Edit, Keyboard } from 'lucide-react';
import './Applications.css';

const contributorApps = [
  {
    title: 'VwaKréyòl',
    description: 'Enrichissez le corpus audio ou proposez de nouvelles phrases traduites en créole guadeloupéen. Contribution libre et ouverte.',
    icon: Mic,
    iconColor: '#FFC107',
    colorName: 'yellow',
    link: 'https://vwakreol.potomitan.io',
    badge: { text: 'Application mobile installable sur IOS et Android', type: 'open' }
  },
  {
    title: 'Maké Kréyòl',
    description: 'Validez les transcriptions audio pour améliorer la qualité du corpus. Authentification requise pour garantir la fiabilité.',
    icon: Edit,
    iconColor: '#3498DB',
    colorName: 'blue',
    link: 'https://transcrire.potomitan.io',
    badge: { text: 'Disponible', type: 'auth' }
  },
  {
    title: 'Klavyé Kréyòl',
    description: 'Clavier créole pour saisie facilitée en créole guadeloupéen. Disponible sur Android.',
    icon: Keyboard,
    iconColor: '#2ecc71',
    colorName: 'green',
    link: 'https://play.google.com/store/apps/details?id=com.potomitan.kreyolkeyboard&utm_source=emea_Med',
    badge: { type: 'google-play', image: '/google-play-badge-fr.svg' }
  }
];

const Applications = () => {
  return (
    <section id="applications" className="applications-section">
      <div className="applications-container">
        <span className="section-label section-label-light">L'écosystème</span>
        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
          POTOMITAN, l'intelligence artificielle qui parle créole
        </h2>

        {/* Main app */}
        <a
          href="https://traducteur.potomitan.io"
          className="app-main-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="app-main-logo">
            <img src="/logo-potomitan.svg" alt="Logo Potomitan" />
            <span className="app-main-badge">Application mobile installable sur IOS et Android</span>
          </div>
          <div className="app-main-content">
            <h3>L'urgence en créole !</h3>
            <p>
              Interface complète avec traducteur intégré, catégories d'urgence
              (Médical, Évacuation, Secours, Information) et expressions essentielles.
            </p>
            <ul className="app-main-features">
              <li>🆘 Phrases d'urgence (médical, évacuation, secours)</li>
              <li>📖 Catalogue de plus de 1 800 expressions</li>
              <li>⚡ Traduction instantanée</li>
            </ul>
            <span className="app-main-cta">Tester maintenant</span>
          </div>
        </a>

        {/* Contributor apps */}
        <span className="section-label section-label-light apps-contributor-label">Contribuer</span>
        <p className="apps-contributor-subtitle">
          Aidez à enrichir les créoles et à améliorer la qualité des traductions
        </p>

        <div className="apps-contributor-grid">
          {contributorApps.map((app) => {
            const IconComponent = app.icon;
            return (
              <a
                key={app.title}
                href={app.link}
                className="app-contributor-card"
                data-color={app.colorName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="app-contributor-icon"
                  style={{ backgroundColor: app.iconColor }}
                >
                  <IconComponent size={28} strokeWidth={2} color="white" />
                </div>
                <h4>{app.title}</h4>
                <p>{app.description}</p>
                {app.badge && (
                  <span className={`app-contributor-badge badge-${app.badge.type}`}>
                    {app.badge.image ? (
                      <img src={app.badge.image} alt="Télécharger sur Google Play" />
                    ) : (
                      app.badge.text
                    )}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Applications;
