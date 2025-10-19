# Potomitan Landing - Site Vitrine

Site vitrine pour Potomitan - Traduction français ↔ créole guadeloupéen pour les urgences sociétales.

## 🚀 Démarrage rapide

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

## 📦 Déploiement sur Vercel

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

## 🏗️ Structure du projet

```
potomitan-landing/
├── public/
│   └── logo-potomitan.svg        # Logo Potomitan (à ajouter)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Barre de navigation
│   │   ├── Hero.jsx              # Section héro
│   │   ├── Applications.jsx      # Section applications
│   │   ├── Initiative.jsx        # Section initiative
│   │   ├── Team.jsx              # Section équipe
│   │   └── Footer.jsx            # Pied de page
│   ├── App.jsx                   # Composant principal
│   ├── main.jsx                  # Point d'entrée
│   └── index.css                 # Styles globaux
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `src/index.css` avec des variables CSS :
- `--primary-orange`: #FF8C42
- `--primary-green`: #2ECC71
- `--primary-blue`: #3498DB
- `--dark-blue`: #2C3E50

### Contenu
Modifiez les composants dans `src/components/` pour ajuster le contenu.

## 📧 Contact

contact@potomitan.io

## 📄 Licence

© 2025 Potomitan™ - Tous droits réservés
