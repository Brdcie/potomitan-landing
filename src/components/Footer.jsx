import React from 'react';
import { Link } from 'react-router-dom';

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
              VwaKréyòl : Enregistrer des voix créoles
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
          <div className="footer-links">
            <a href="https://www.linkedin.com/company/potomitan" target="_blank" rel="noopener noreferrer">
              Suivre POTOMITAN sur LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Potomitan™ - Tous droits réservés</p>
        <div className="footer-legal-links">
          <Link to="/cgu">CGU</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/mentions-legales">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
