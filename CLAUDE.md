# CLAUDE.md - Contexte projet POTOMITAN Landing

## Description

Site vitrine React pour **POTOMITAN**, une IA de traduction français ↔ créole guadeloupéen. Le projet vise l'inclusion linguistique pour les urgences, services publics et l'emploi en Guadeloupe.

## Stack technique

- **Framework** : React 18 + Vite 5
- **Routing** : react-router-dom v7
- **Icônes** : lucide-react
- **Déploiement** : Vercel (auto-deploy sur push main)
- **Styles** : CSS vanilla avec variables CSS (pas de framework CSS)

## Structure du projet

```
src/
├── App.jsx              # Routes et composition page d'accueil
├── main.jsx             # Point d'entrée React
├── index.css            # Styles globaux et variables CSS
├── components/
│   ├── Navbar.jsx       # Navigation
│   ├── Hero.jsx         # Section hero avec CTA principal
│   ├── GoogleComparison.jsx  # Comparaison POTOMITAN vs Google Translate
│   ├── Impact93Seconds.jsx   # Section impact (93 secondes)
│   ├── Reconnaissance.jsx    # Validation (technique, communautaire, institutionnel, médiatique)
│   ├── Applications.jsx      # Écosystème (traducteur, VwaKréyòl, Maké, Klavyé)
│   ├── Team.jsx              # Équipe (3 membres)
│   ├── Initiative.jsx        # Problématique et vision
│   ├── FinalCTA.jsx          # CTAs de fin de page
│   └── Footer.jsx
└── pages/
    └── Actualites.jsx   # Page /actualites
```

## Ordre des sections (page d'accueil)

1. Hero
2. GoogleComparison
3. Impact93Seconds
4. Reconnaissance
5. Applications (écosystème)
6. Team
7. Initiative
8. FinalCTA

## Variables CSS principales

```css
--primary-orange: #FF8C42;
--primary-green: #2ECC71;
--primary-blue: #3498DB;
--dark-blue: #2C3E50;
```

## Commandes

```bash
npm run dev      # Serveur de dev (port 5173 ou 5174)
npm run build    # Build production
npm run preview  # Preview du build
```

## URLs externes

- **Traducteur** : https://traducteur.potomitan.io
- **VwaKréyòl** : https://vwakreol.potomitan.io
- **Repo GitHub** : https://github.com/Brdcie/potomitan-landing

## Équipe actuelle

- Brigitte Démocrite - Fondatrice & CEO
- Monique Famibelle - Co-fondatrice & Ambassadrice Communautaire
- Yisselda Rhoc - Co-fondatrice & Architecture Technique

## Notes importantes

- Le déploiement est automatique sur Vercel après push sur `main`
- Les photos d'équipe sont dans `/public/` (photo-brigitte.jpg, photo-monique.jpeg, photo-yisselda.jpg)
- Les styles de chaque composant sont dans des fichiers `.css` séparés (ex: Hero.css, Team.css)
- Le style global `btn-secondary` dans index.css peut être surchargé par les styles locaux (utiliser sélecteurs spécifiques ou !important si nécessaire)
