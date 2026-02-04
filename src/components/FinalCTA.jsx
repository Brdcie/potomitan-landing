import React from 'react';
import './FinalCTA.css';

const CTA_BUTTONS = [
  {
    id: 'test',
    text: 'Tester le traducteur',
    href: 'https://traducteur.potomitan.io',
    variant: 'green'
  },
  {
    id: 'deploy',
    text: 'Déployer dans votre structure',
    href: 'mailto:contact@potomitan.io?subject=Demande de déploiement POTOMITAN',
    variant: 'blue'
  },
  {
    id: 'contribute',
    text: 'Enrichir le corpus créole',
    href: 'https://vwakreol.potomitan.io',
    variant: 'orange'
  }
];

const FinalCTA = () => {
  return (
    <section className="section final-cta-section">
      <h2 className="final-cta-title">Prêt à agir ?</h2>

      <div className="final-cta-buttons">
        {CTA_BUTTONS.map((cta) => (
          <a
            key={cta.id}
            href={cta.href}
            className={`final-cta-btn final-cta-${cta.variant}`}
            target={cta.href.startsWith('http') ? '_blank' : undefined}
            rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {cta.text}
          </a>
        ))}
      </div>

      <div className="final-cta-contact">
        <p>Vous avez d'autres questions ?</p>
        <a href="mailto:contact@potomitan.io">
          Contactez-nous : contact@potomitan.io
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
