# Guide de Déploiement Potomitan Landing

## 📋 Checklist avant déploiement

- [ ] Repository GitHub `potomitan-landing` créé
- [ ] Code cloné en local
- [ ] Tous les fichiers copiés dans le dossier du repo
- [ ] Node.js installé (version 18+)
- [ ] Test local réussi

## 🚀 Étapes détaillées

### 1. Préparation du repository GitHub

```bash
# Créer le repo sur GitHub.com
# Nom: potomitan-landing
# Description: Site vitrine Potomitan - Traduction français ↔ créole guadeloupéen
# Public ou Private selon votre choix

# Cloner le repo (remplacez YOUR-USERNAME)
git clone https://github.com/YOUR-USERNAME/potomitan-landing.git
cd potomitan-landing
```

### 2. Copier les fichiers du projet

Copiez tous les fichiers générés dans le dossier `potomitan-landing` :

```
potomitan-landing/
├── public/
│   └── logo-potomitan.svg
├── src/
│   ├── components/
│   │   ├── Applications.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Initiative.jsx
│   │   ├── Navbar.jsx
│   │   └── Team.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

### 3. Installation et test local

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Ouvrir http://localhost:5173 dans votre navigateur
# Vérifier que tout fonctionne correctement
```

### 4. Commit et push vers GitHub

```bash
# Ajouter tous les fichiers
git add .

# Commit
git commit -m "Initial commit - Site vitrine Potomitan"

# Push vers GitHub
git push origin main
```

### 5. Déploiement sur Vercel

#### Via l'interface web (RECOMMANDÉ)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "Add New..." → "Project"
4. Sélectionnez votre repository `potomitan-landing`
5. Vercel détecte automatiquement Vite
6. Cliquez sur "Deploy"
7. Attendez quelques minutes... ✅ Déployé !

#### Via CLI (ALTERNATIF)

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Pour déployer en production
vercel --prod
```

### 6. Configuration du domaine potomitan.io

Une fois le déploiement réussi :

1. Dans le dashboard Vercel de votre projet
2. Allez dans "Settings" → "Domains"
3. Cliquez sur "Add Domain"
4. Entrez `potomitan.io`
5. Vercel vous donnera les enregistrements DNS à configurer

#### Configuration DNS (chez votre registrar)

Ajoutez ces enregistrements DNS :

**Type A** (pour potomitan.io)
```
Nom: @
Type: A
Valeur: 76.76.21.21
```

**Type CNAME** (pour www)
```
Nom: www
Type: CNAME
Valeur: cname.vercel-dns.com
```

**Attendez la propagation DNS (peut prendre jusqu'à 48h, souvent 1-2h)**

### 7. Configuration des sous-chemins (optionnel)

Si vous voulez rediriger certains chemins vers d'autres services :

Créez un fichier `vercel.json` à la racine :

```json
{
  "rewrites": [
    {
      "source": "/app/:path*",
      "destination": "https://potomitan-app-react.vercel.app/:path*"
    }
  ]
}
```

## 🔄 Mises à jour futures

Pour mettre à jour le site :

```bash
# Modifier les fichiers nécessaires
# Par exemple: src/components/Team.jsx

# Commit et push
git add .
git commit -m "Update: description du changement"
git push

# Vercel déploiera automatiquement ! ✨
```

## 🐛 Dépannage

### Le site ne se charge pas
- Vérifiez que le build a réussi sur Vercel
- Regardez les logs dans le dashboard Vercel

### Erreur 404 sur les routes
- Vérifiez que tous les liens dans les composants sont corrects
- Les liens externes doivent avoir `target="_blank"` et `rel="noopener noreferrer"`

### Logo ne s'affiche pas
- Vérifiez que `logo-potomitan.svg` est bien dans `public/`
- Le chemin dans le code doit être `/logo-potomitan.svg` (avec le slash initial)

### DNS ne fonctionne pas
- Attendez 1-2 heures pour la propagation
- Vérifiez les enregistrements DNS avec `dig potomitan.io`
- Contactez le support Vercel si ça persiste après 48h

## 📞 Support

En cas de problème :
- Documentation Vercel : https://vercel.com/docs
- Documentation Vite : https://vitejs.dev/
- Email : contact@potomitan.io

---

Bon déploiement ! 🚀
