import React from 'react';
import './FinalCTA.css';

const CTA_BUTTONS = [
  {
    id: 'test',
    text: 'Tester le traducteur',
    href: 'https://traducteur.potomitan.io',
    variant: 'leaf'
  },
  {
    id: 'deploy',
    text: 'Déployer dans votre structure',
    href: 'mailto:contact@potomitan.io?subject=Demande de déploiement POTOMITAN',
    variant: 'ember'
  },
  {
    id: 'contribute',
    text: 'Enrichir le corpus créole',
    href: 'https://vwakreol.potomitan.io',
    variant: 'outline'
  }
];

const FinalCTA = () => {
  return (
    <section className="final-cta-section-dark">
      <h2 className="final-cta-title-dark">Prêt à agir ?</h2>

      <div className="final-cta-buttons-dark">
        {CTA_BUTTONS.map((cta) => (
          <a
            key={cta.id}
            href={cta.href}
            className={`final-cta-btn-dark final-cta-${cta.variant}`}
            target={cta.href.startsWith('http') ? '_blank' : undefined}
            rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {cta.text}
          </a>
        ))}
      </div>

      <div className="final-cta-contact-dark">
        <p>Vous avez d'autres questions ?</p>
        <a href="mailto:contact@potomitan.io">contact@potomitan.io</a>
      </div>
    </section>
  );
};

export default FinalCTA;
