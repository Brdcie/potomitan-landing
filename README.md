# Potomitan™ Landing - Site Vitrine

Site vitrine pour Potomitan - Traduction français ↔ créole guadeloupéen pour les urgences sociétales.

## Fonctionnalités

- **Progressive Web App (PWA)** : Installation possible sur mobile/desktop, fonctionne hors ligne
- **Navigation optimisée** : Highlight visuel pour les sections ciblées via ancres
- **Design responsive** : Optimisé pour tous les écrans
- **Performance** : Build optimisé avec Vite
- **Accessibilité** : Support complet ARIA et navigation clavier

## Démarrage rapide

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

1. Cloner le repository
```bash
git clone https://github.com/votre-username/potomitan-landing.git
cd potomitan-landing
```

2. Installer les dépendances
```bash
npm install
```

3. Ajouter le logo
Placez le fichier `logo-potomitan.svg` dans le dossier `public/`

4. Lancer en mode développement
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Build pour production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

### Preview du build

```bash
npm run preview
```

## Déploiement sur Vercel

1. Push votre code sur GitHub
2. Connectez-vous sur [vercel.com](https://vercel.com)
3. Cliquez sur "Import Project"
4. Sélectionnez votre repository `potomitan-landing`
5. Vercel détectera automatiquement Vite et configurera le build
6. Cliquez sur "Deploy"

### Configuration du domaine

Une fois déployé sur Vercel :
1. Allez dans les settings de votre projet
2. Section "Domains"
3. Ajoutez `potomitan.io`
4. Suivez les instructions pour configurer vos DNS

## Structure du projet

```
potomitan-landing/
├── public/
│   ├── manifest.json                    # Configuration PWA
│   ├── sw.js                            # Service Worker (cache offline)
│   ├── icon-192.png                     # Icône PWA 192x192
│   ├── icon-512.png                     # Icône PWA 512x512
│   ├── logo-potomitan.svg               # Logo principal
│   ├── logo-potomitan-fond-blanc.svg    # Logo fond blanc
│   ├── logo-potomitan-ref.svg           # Logo référence
│   └── banniereklavyie1024x500.png      # Bannière Klavyé Kréyòl
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Barre de navigation
│   │   ├── Hero.jsx              # Section héro
│   │   ├── Applications.jsx      # Section applications avec icônes personnalisées
│   │   ├── Initiative.jsx        # Section initiative
│   │   ├── Team.jsx              # Section équipe
│   │   └── Footer.jsx            # Pied de page
│   ├── App.jsx                   # Composant principal
│   ├── main.jsx                  # Point d'entrée + enregistrement Service Worker
│   └── index.css                 # Styles globaux + CSS custom properties
├── index.html                    # HTML principal avec meta tags PWA
├── package.json
├── vite.config.js
└── README.md
```

## Progressive Web App (PWA)

La landing page est une PWA complète avec les fonctionnalités suivantes :

### Mode Offline
- Le Service Worker (`public/sw.js`) met en cache les ressources essentielles
- Stratégie Network First avec fallback vers le cache
- Fonctionne entièrement hors ligne après la première visite

### Installation
- Peut être installée sur mobile et desktop comme une application native
- Icônes optimisées : 192x192 et 512x512
- Support iOS (apple-touch-icon) et Android

### Configuration
- **Manifest** : `public/manifest.json` - Configuration de l'app (nom, icônes, couleurs)
- **Service Worker** : `public/sw.js` - Gestion du cache et mode offline
- **Enregistrement** : `src/main.jsx` - Enregistrement automatique du SW au chargement

## Personnalisation

### Couleurs
Les couleurs sont définies dans `src/index.css` avec des variables CSS :
- `--primary-orange`: #FF8C42
- `--primary-green`: #2ECC71
- `--primary-blue`: #3498DB
- `--dark-blue`: #2C3E50
- `--yellow`: #F1C40F

### Navigation par ancres
Les sections ciblées via ancres (ex: `#urgence`, `#catalogue`) affichent un highlight visuel :
- Animation de fond temporaire (2 secondes)
- Bordure permanente pour identifier la section active
- Scroll automatique avec offset pour le header sticky

### Applications
Section `Applications.jsx` avec 6 cartes personnalisées :
- **App complète** : Logo Potomitan (fond vert)
- **Urgence** : Logo Potomitan (fond orange) → `traducteur.potomitan.io#urgence`
- **Catalogue** : Icône livre + Logo (fond bleu) → `traducteur.potomitan.io#catalogue`
- **Klavyé Kréyòl** : Bannière pleine largeur
- **Validation transcriptions** : Icône stylo + Logo (fond bleu)
- **VwaKréyòl** : Icône micro + Logo (fond jaune)

### Contenu
Modifiez les composants dans `src/components/` pour ajuster le contenu.

## Liens externes

- **Traducteur** : https://traducteur.potomitan.io
- **Application de contribution** : https://app.potomitan.io/contribuer
- **VwaKréyòl** : https://vwakreol.potomitan.io
- **Klavyé Kréyòl** : https://famibelle.github.io/KreyolKeyb/

## Contact

contact@potomitan.io

## Licence

© 2025 Potomitan™ - Tous droits réservés
