import { BookOpen, Edit, Mic, Keyboard } from 'lucide-react';

const Applications = () => {
  const userApps = [
   {
  title: "L'urgence en créole !",
  description: "Interface complète avec traducteur intégré, catégories d'urgence (Médical, Évacuation, Secours, Information) et expressions essentielles.",
  features: [
      "🆘 Phrases d'urgence (médical, évacuation, secours)",
      "📖 Catalogue de 4 958 expressions",
      "⚡ Traduction instantanée"
    ],
  icon: <img src="/logo-potomitan.svg" alt="Logo Potomitan" style={{ width: 32, height: 32 }} />,
  iconBg: 'green',
  link: 'https://traducteur.potomitan.io',
  badge: { text: '📱 Application mobile installable sur IOS et Androïd', type: 'open' }
},

  ];

  const contributorApps = [
    {
      title: 'VwaKréyòl',
      description: 'Enrichissez le corpus audio ou proposez de nouvelles phrases traduites en créole guadeloupéen. Contribution libre et ouverte.',
      icon: Mic,
      iconColor: '#FFC107', // Jaune
      link: 'https://vwakreol.potomitan.io',
      badge: { text: '📱 Application mobile installable sur IOS et Androïd', type: 'open' }
    },
    {
      title: 'Transcrivez le créole - Maké Kréyòl a sa ou tann',
      description: 'Validez les transcriptions audio pour améliorer la qualité du corpus. Authentification requise pour garantir la fiabilité.',
      icon: Edit,
      iconColor: '#3498DB', // Bleu
      link: 'https://transcrire.potomitan.io',
      badge: { text: 'Disponible', type: 'auth' }
    },
    {
      // Lien provisoire vers le catalogue Keyman, à remplacer par annoumake.fr quand la page d'installation existera
      title: 'AnnouMaké',
      description: 'Clavier créole guadeloupéen pour ordinateur (Windows, Mac, Linux), créé par POTOMITAN. Essayez-le dans votre navigateur, sans rien installer.',
      icon: Keyboard,
      iconColor: '#2C3E50',
      link: 'https://keyman.com/fr/keyboards/potomitan_gcf',
      image: { src: '/annoumake-clavier.png', alt: 'Le clavier AnnouMaké affiché dans le navigateur : disposition AZERTY avec les touches è, ò, ù, à, é' },
      badge: { text: 'Écrire en créole sur votre ordinateur', type: 'open' }
    },
    {
      title: 'Klavyé Kréyòl',
      description: "Clavier créole guadeloupéen de Medhi Famibelle, intégré à l'écosystème POTOMITAN. Disponible sur Android.",
      icon: Keyboard,
      iconColor: '#00D1B2', // Vert (ta couleur primaire)
      link: 'https://play.google.com/store/apps/details?id=com.potomitan.kreyolkeyboard&utm_source=emea_Med',
      badge: { type: 'google-play', image: '/google-play-badge-fr.svg' }
    }
  ];

  return (
    <section id="applications" className="section applications">
      <h2 className="section-title">Notre écosystème</h2>
      <p className="section-subtitle">
        Un écosystème complet pour utiliser et enrichir les créoles au quotidien
      </p>
      <div className="apps-category">
        <h3>
  POTOMITAN, l'intelligence artificielle qui parle créole

  <br /> <br></br>
</h3>
       <div className="apps-grid apps-grid-main">
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
               {app.features && (
      <ul className="application-features">
        {app.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    )}
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
          Aidez à enrichir les créoles et à améliorer la qualité des traductions
        </p>
        
        <div className="apps-grid-simple">
          {contributorApps.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <a 
                key={index} 
                href={app.link} 
                className="app-card-simple"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div 
                  className="app-icon-simple" 
                  style={{ backgroundColor: app.iconColor }}
                >
                  <IconComponent size={40} strokeWidth={2} color="white" />
                </div>
                <h4>{app.title}</h4>
                <p>{app.description}</p>
                {app.image && (
                  <img
                    className="app-screenshot"
                    src={app.image.src}
                    alt={app.image.alt}
                    loading="lazy"
                  />
                )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Applications;