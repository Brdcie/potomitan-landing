import React from 'react';
import './LegalPage.css';
import { Link } from 'react-router-dom';

const CGU = () => {
  return (
    <div className="legal-container">
      <div className="legal-hero">
        <Link to="/" className="back-link">← Retour à l'accueil</Link>
        <h1>Conditions générales d'utilisation</h1>
      </div>

      <div className="legal-content">
        <p className="maj">Dernière mise à jour : 7 septembre 2026</p>

        <h2>1. Objet</h2>
        <p>
          Le site <a href="https://potomitan.io">potomitan.io</a> est un site vitrine édité par
          <strong> SAS POTOMITAN</strong> (siège social : 12 rue de la République, 97110
          Pointe-à-Pitre), présentant le projet POTOMITAN de traduction français ↔ créole
          guadeloupéen et donnant accès aux différents services de son écosystème. Les présentes
          conditions générales d'utilisation (CGU) régissent l'accès et l'usage de ce site.
        </p>
        <p>La navigation sur le site implique l'acceptation pleine et entière des présentes CGU.</p>

        <h2>2. Description du site</h2>
        <p>
          Le site présente le projet POTOMITAN, son équipe, ses partenaires et ses résultats, et
          donne accès à ses différents services :
        </p>
        <ul>
          <li>le traducteur, sur <a href="https://traducteur.potomitan.io">traducteur.potomitan.io</a> ;</li>
          <li>la collecte de voix VwaKréyòl, sur <a href="https://vwakreol.potomitan.io">vwakreol.potomitan.io</a> ;</li>
          <li>le clavier créole Klavyé Kréyòl, disponible sur Google Play.</li>
        </ul>
        <p>
          Chacun de ces services est régi par ses propres conditions générales d'utilisation,
          distinctes des présentes CGU.
        </p>

        <h2>3. Données collectées</h2>
        <p>
          Le site potomitan.io ne comporte aucun formulaire, aucun compte utilisateur et aucun
          traceur de mesure d'audience. Il ne collecte ni ne conserve aucune donnée personnelle
          relative à sa consultation.
        </p>

        <h2>4. Propriété intellectuelle</h2>
        <p>
          Les textes, logos, images et éléments graphiques du site sont la propriété de SAS
          POTOMITAN, sauf mention contraire, et protégés par le Code de la propriété
          intellectuelle. Toute reproduction ou réutilisation non autorisée est susceptible de
          constituer une contrefaçon.
        </p>

        <h2>5. Responsabilité</h2>
        <p>
          POTOMITAN met tout en œuvre pour assurer la disponibilité et l'exactitude des
          informations publiées sur le site, sans garantie de continuité absolue. POTOMITAN ne
          saurait être tenue responsable des interruptions ou dysfonctionnements techniques liés à
          des causes hors de son contrôle, ni du contenu des sites tiers accessibles par lien
          depuis ce site.
        </p>

        <h2>6. Modification des CGU</h2>
        <p>
          POTOMITAN se réserve le droit de modifier les présentes CGU à tout moment, notamment pour
          les adapter aux évolutions du site ou de la réglementation. La version en vigueur est
          celle publiée sur cette page.
        </p>

        <h2>7. Droit applicable</h2>
        <p>
          Les présentes CGU sont soumises au droit français. En cas de litige, et à défaut de
          résolution amiable, les tribunaux compétents seront ceux du ressort du siège social de
          POTOMITAN.
        </p>
        <p>
          Les mentions légales du site sont disponibles sur la page
          <Link to="/mentions-legales"> Mentions légales</Link>.
        </p>

        <h2>8. Contact</h2>
        <p>
          Pour toute question relative aux présentes CGU, vous pouvez contacter POTOMITAN à
          l'adresse <a href="mailto:contact@potomitan.io">contact@potomitan.io</a>.
        </p>
      </div>
    </div>
  );
};

export default CGU;
