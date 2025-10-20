import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Potomitan</h4>
          <p>
            Traduction français ↔ créole guadeloupéen pour les urgences sociétales.
            L'inclusion linguistique au service de l'égalité territoriale.
          </p>
        </div>

        <div className="footer-section">
          <h4>Applications</h4>
          <div className="footer-links">
            <a href="https://app.potomitan.io" target="_blank" rel="noopener noreferrer">
              App complète
            </a>
            <a href="https://app.potomitan.io/phrases" target="_blank" rel="noopener noreferrer">
              Urgence
            </a>
            <a href="https://app.potomitan.io/traducteur" target="_blank" rel="noopener noreferrer">
              Traducteur
            </a>
            <a href="https://famibelle.github.io/KreyolKeyb/" target="_blank" rel="noopener noreferrer">
              Klavyé Kréyòl
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contribuer</h4>
          <div className="footer-links">
            <a href="https://app.potomitan.io/contribuer" target="_blank" rel="noopener noreferrer">
              Validation transcriptions
            </a>
            <a href="https://vwakreol.potomitan.io" target="_blank" rel="noopener noreferrer">
              VwaKréyòl
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>
            <a href="mailto:contact@potomitan.io">contact@potomitan.io</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Potomitan™ - Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
