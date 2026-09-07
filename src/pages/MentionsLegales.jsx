import React from 'react';
import './LegalPage.css';
import { Link } from 'react-router-dom';

const MentionsLegales = () => {
  return (
    <div className="legal-container">
      <div className="legal-hero">
        <Link to="/" className="back-link">← Retour à l'accueil</Link>
        <h1>Mentions légales</h1>
      </div>

      <div className="legal-content">
        <p className="maj">Dernière mise à jour : 7 septembre 2026</p>

        <h2>1. Éditeur du site</h2>
        <p>
          Le site <a href="https://potomitan.io">potomitan.io</a> est édité par <strong>SAS
          POTOMITAN</strong>, société par actions simplifiée immatriculée au Registre du Commerce
          et des Sociétés de Pointe-à-Pitre.
        </p>
        <ul>
          <li>Siège social : 12 rue de la République, 97110 Pointe-à-Pitre</li>
          <li>SIREN : 102 850 518</li>
          <li>Directrice de la publication : Brigitte Démocrite, présidente de SAS POTOMITAN</li>
          <li>Contact : <a href="mailto:contact@potomitan.io">contact@potomitan.io</a></li>
        </ul>

        <h2>2. Hébergement</h2>
        <p>Le site est hébergé par :</p>
        <ul>
          <li>Vercel Inc.</li>
          <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
          <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
        </ul>

        <h2>3. Propriété intellectuelle</h2>
        <p>
          La structure générale du site, les textes, logos, images et éléments graphiques qui le
          composent sont la propriété de SAS POTOMITAN, sauf mention contraire, et sont protégés
          par le Code de la propriété intellectuelle. Toute reproduction non autorisée est
          susceptible de constituer une contrefaçon.
        </p>

        <h2>4. Protection des données personnelles</h2>
        <p>
          Le site potomitan.io est une vitrine institutionnelle : il ne comporte aucun formulaire
          de collecte, aucun compte utilisateur et aucun traceur de mesure d'audience. Il renvoie
          vers d'autres services de l'écosystème POTOMITAN (traducteur, VwaKréyòl), chacun régi par
          ses propres conditions générales d'utilisation et modalités de traitement des données.
          Conformément au Règlement général sur la protection des données (RGPD) et à la loi
          Informatique et Libertés, toute question peut être adressée à
          <a href="mailto:contact@potomitan.io"> contact@potomitan.io</a>.
        </p>

        <h2>5. Liens vers d'autres sites</h2>
        <p>
          Le site renvoie vers des services tiers de l'écosystème POTOMITAN
          (<a href="https://traducteur.potomitan.io">traducteur.potomitan.io</a>,
          <a href="https://vwakreol.potomitan.io"> vwakreol.potomitan.io</a>) ainsi que vers des
          plateformes tierces (Google Play). Chacun de ces services applique ses propres
          conditions et sa propre politique de confidentialité.
        </p>

        <h2>6. Contact</h2>
        <p>
          Pour toute question relative aux présentes mentions légales, vous pouvez contacter
          POTOMITAN à l'adresse <a href="mailto:contact@potomitan.io">contact@potomitan.io</a>.
        </p>
      </div>
    </div>
  );
};

export default MentionsLegales;
