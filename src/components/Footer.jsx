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
          <h4>Nos Applications</h4>
          <div className="footer-links">
            <a href="https://traducteur.potomitan.io#urgence" target="_blank" rel="noopener noreferrer">
              Urgence
            </a>
            <a href="https://traducteur.potomitan.io" target="_blank" rel="noopener noreferrer">
              Traducteur bidirectionnel
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.potomitan.kreyolkeyboard&utm_source=emea_Med" target="_blank" rel="noopener noreferrer">
              Klavyé Kréyòl
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contribuer</h4>
          <div className="footer-links">
            <a href="https://vwakreol.potomitan.io" target="_blank" rel="noopener noreferrer">
              VwaKréyòl : Enregistrer des voix créole
            </a>
            <a href="https://transcrire.potomitan.io" target="_blank" rel="noopener noreferrer">
              Valider les transcriptions
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
