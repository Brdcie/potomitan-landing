import { BookOpen, Edit, Mic } from 'lucide-react';

const Applications = () => {
  const userApps = [
   {
  title: <h2>L'urgence en créole !</h2>,
  description: "Interface complète avec traducteur intégré, catégories d'urgence (Médical, Évacuation, Secours, Information) et expressions essentielles.",
  icon: <img src="/logo-potomitan.svg" alt="Logo Potomitan" style={{ width: 32, height: 32 }} />,
  iconBg: 'green',
  link: 'https://traducteur.potomitan.io',
  hint: "📱 Application mobile installable",
  badge: null
},

    {
      title: <h2>Urgences</h2>,
      description: 'Accès rapide aux expressions  d\'urgence critiques pour situations de crise. Traduction instantanée avec audio.',
      icon: <img src="/logo-potomitan.svg" alt="Logo Potomitan" style={{ width: 32, height: 32 }} />,
      iconBg: 'orange',
      link: 'https://traducteur.potomitan.io#urgence',
      hint: "📱 Application mobile installable",
      badge: null
    },
    {
    title: <h2>Catalogue</h2>,
    description: 'Parcourez + 1800 expressions et filtrez par catégorie et urgence.',
    icon: (
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: 'var(--primary-blue)', padding: '1rem', borderRadius: '8px' }}>
        <BookOpen size={64} color="white" />
        <img src="/logo-potomitan.svg" alt="Logo" style={{ width: 100, height: 60 }} />
      </div>
    ),
    iconBg: 'transparent',
    link: 'https://traducteur.potomitan.io#catalogue',
    hint: "📱 Application mobile installable",
    badge: null
  }
  ];

  const contributorApps = [
     {
      title: 'VwaKréyòl',
      description: 'Enrichissez le corpus audio ou proposez de nouvelles phrases traduites en créole guadeloupéen. Contribution libre et ouverte.',
      icon: (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: 'var(--yellow)', padding: '1rem', borderRadius: '8px' }}>
          <Mic size={64} color="white" />
          <img src="/logo-potomitan.svg" alt="Logo" style={{ width: 100, height: 32 }} />
        </div>
      ),
      iconBg: 'transparent',
      link: 'https://vwakreol.potomitan.io',
      hint: "📱 Application mobile installable",
      badge: { text: 'Libre accès', type: 'open' }
    },
    {
      title: 'Transcrivez le créole - Maké Kréyòl a sa ou tann',
      description: 'Validez les transcriptions audio pour améliorer la qualité du corpus. Authentification requise pour garantir la fiabilité.',
      icon: (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', backgroundColor: 'var(--primary-blue)', padding: '1rem', borderRadius: '8px' }}>
          <Edit size={64} color="white" />
          <img src="/logo-potomitan.svg" alt="Logo" style={{ width: 100, height: 60 }} />
        </div>
      ),
      iconBg: 'transparent',
      link: 'https://transcrire.potomitan.io',
      badge: { text: 'Disponible', type: 'auth' }
    },
     {
      title: 'Klavyé Kréyòl',
      description: 'Clavier créole pour saisie facilitée en créole guadeloupéen. Disponible sur Android.',
      icon: (<img src="/banniereklavyie1024x500.png" alt="Klavyé Kréyòl" style={{ width: '100%', height: 'auto' }} />),
      iconBg: 'transparent',
      link: 'https://play.google.com/store/apps/details?id=com.potomitan.kreyolkeyboard&utm_source=emea_Med',
      badge: { type: 'google-play', image: '/google-play-badge-fr.svg' }
    }
   
  ];

  return (
    <section id="applications" className="section applications">
      <h2 className="section-title">Notre écosystème</h2>
      <p className="section-subtitle">
        Un écosystème complet pour utiliser et enrichir le créole guadeloupéen au quotidien
      </p>
      <div className="apps-category">
        <h3>
  POTOMITAN, l'intelligence artificielle qui parle créole

  <br /> <br></br>
</h3>
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
                  {app.badge.image ? (
                    <img src={app.badge.image} alt="Badge" />
                  ) : (
                    app.badge.text
                  )}
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
                  {app.badge.image ? (
                    <img src={app.badge.image} alt="Badge" />
                  ) : (
                    app.badge.text
                  )}
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
