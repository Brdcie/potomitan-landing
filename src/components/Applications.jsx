import { BookOpen, Edit, Mic } from 'lucide-react';

const Applications = () => {
  const userApps = [
    {
      title: 'Application complète',
      description: 'Interface complète avec traducteur intégré, catégories d\'urgence (Médical, Évacuation, Secours, Information) et phrases essentielles.',
      icon: <img src="/logo-potomitan.svg" alt="Logo Potomitan" style={{ width: 32, height: 32 }} />,
      iconBg: 'green',
      link: 'https://traducteur.potomitan.io',
      badge: null
    },
    {
      title: 'Urgence',
      description: 'Accès rapide aux phrases d\'urgence critiques pour situations de crise. Traduction instantanée avec audio.',
      icon: <img src="/logo-potomitan.svg" alt="Logo Potomitan" style={{ width: 32, height: 32 }} />,
      iconBg: 'orange',
      link: 'https://traducteur.potomitan.io#urgence',
      badge: null
    },
    {
    title: 'Catalogue',
    description: 'Parcourez les 1818 phrases avec filtres par catégorie et urgence.',
    icon: (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: 'var(--primary-blue)', padding: '1rem', borderRadius: '8px' }}>
        <BookOpen size={64} color="white" />
        <img src="/logo-potomitan.svg" alt="Logo" style={{ width: 100, height: 60 }} />
      </div>
    ),
    iconBg: 'transparent',
    link: 'https://traducteur.potomitan.io#catalogue',
    badge: null
  },
    {
      title: 'Klavyé Kréyòl',
      description: 'Clavier créole pour saisie facilitée en créole guadeloupéen. Tests utilisateurs en cours sur Android, développement iOS en cours.',
      icon: <img src="/banniereklavyie1024x500.png" alt="Klavyé Kréyòl" style={{ width: '100%', height: 'auto' }} />,
      iconBg: 'transparent',
      link: 'https://famibelle.github.io/KreyolKeyb/',
      badge: { text: 'Tests en cours', type: 'soon' }
    }
  ];

  const contributorApps = [
    {
      title: 'Validation transcriptions',
      description: 'Validez les transcriptions audio pour améliorer la qualité du corpus. Authentification requise pour garantir la fiabilité.',
      icon: (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: 'var(--primary-blue)', padding: '1rem', borderRadius: '8px' }}>
          <Edit size={64} color="white" />
          <img src="/logo-potomitan.svg" alt="Logo" style={{ width: 100, height: 60 }} />
        </div>
      ),
      iconBg: 'transparent',
      link: 'https://app.potomitan.io/contribuer',
      badge: { text: 'Disponible', type: 'auth' }
    },
    {
      title: 'VwaKréyòl',
      description: 'Enrichissez le corpus audio et proposez de nouvelles phrases traduites en créole guadeloupéen. Contribution libre et ouverte.',
      icon: (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: 'var(--yellow)', padding: '1rem', borderRadius: '8px' }}>
          <Mic size={64} color="white" />
          <img src="/logo-potomitan.svg" alt="Logo" style={{ width: 100, height: 32 }} />
        </div>
      ),
      iconBg: 'transparent',
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
