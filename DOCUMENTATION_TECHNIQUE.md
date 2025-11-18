# Documentation Technique - Déploiement Site Vitrine Potomitan

**Date :** 20 octobre 2025  
**Auteur :** Brigitte Démocrite  
**Objectif :** Documentation des changements d'infrastructure pour le déploiement du nouveau site vitrine

---

## 📋 Vue d'ensemble

### Avant
```
potomitan.io → DigitalOcean (209.38.106.147)
└── Application VUE principale
```

### Après
```
potomitan.io → Vercel (76.76.21.21)
└── Site vitrine (présentation des applications)

app.potomitan.io → DigitalOcean (209.38.106.147)
└── Application Vue principale (anciennement sur potomitan.io)

vwakreol.potomitan.io → DigitalOcean (209.38.106.147)
└── Application VwaKréyòl

dev.potomitan.io → DigitalOcean (209.38.106.147)
└── Environnement de développement
```

---

## 🗂️ Nouveau Repository GitHub

**Repository créé :** `potomitan-landing`
- **URL :** https://github.com/Brdcie/potomitan-landing
- **Visibilité :** Public
- **Licence :** MIT License
- **Description :** Site vitrine Potomitan - Traduction français ↔ créole guadeloupéen

### Structure du projet
```
potomitan-landing/
├── public/
│   ├── logo-potomitan.svg           # Logo avec fond blanc arrondi
│   ├── banniereklavyie1024x500.png  # Bannière Klavyé Kréyòl
│   ├── google-play-badge-fr.svg     # Badge Google Play officiel français
│   ├── photo-brigitte.jpg           # Photo Brigitte Démocrite
│   ├── photo-monique.jpeg           # Photo Monique Famibelle
│   ├── photo-medhi.jpeg             # Photo Médhi Famibelle
│   ├── photo-julien.jpg             # Photo Julien Noyer
│   ├── icon-192.png                 # Icône PWA 192x192
│   └── icon-512.png                 # Icône PWA 512x512
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Navigation avec logo
│   │   ├── Hero.jsx                 # Section d'accueil
│   │   ├── Applications.jsx         # 6 applications (4 utilisateurs + 2 contributeurs)
│   │   ├── Initiative.jsx           # Présentation de l'initiative
│   │   ├── Team.jsx                 # 4 membres de l'équipe avec photos
│   │   └── Footer.jsx               # Pied de page avec liens
│   ├── App.jsx                      # Composant principal
│   ├── main.jsx                     # Point d'entrée
│   └── index.css                    # Styles avec charte graphique
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── DEPLOYMENT.md
```

### Technologies utilisées
- **Framework :** React 18.3.1
- **Build Tool :** Vite 5.3.4
- **Icônes :** Lucide React 0.263.1
- **Styling :** CSS pur (pas de framework CSS)
- **Déploiement :** Vercel

### Charte graphique
```css
--primary-orange: #FF8C42    /* Urgence */
--primary-green: #2ECC71     /* Brand Potomitan */
--primary-blue: #3498DB      /* Information */
--dark-blue: #2C3E50         /* Navbar */
--light-green: #8BC34A       /* Secours */
--light-blue: #7EC8E3        /* Information secondaire */
--yellow: #F1C40F            /* Accent */
--red: #E74C3C               /* Alerte */
```

### Système de badges
Les applications peuvent avoir des badges de type :
- **Texte** : `{ text: 'Disponible', type: 'auth' }` - Badge avec texte coloré
- **Image** : `{ type: 'google-play', image: '/google-play-badge-fr.svg' }` - Badge avec image (ex: Google Play)

Types de badges texte disponibles :
- `badge-auth` : Rouge (#E74C3C) - Authentification requise
- `badge-soon` : Jaune (#F1C40F) - Bientôt disponible
- `badge-open` : Vert (#2ECC71) - Libre accès
- `badge-google-play` : Transparent - Pour les images (Google Play, App Store, etc.)

---

## 🔧 Changements Infrastructure

### 1. Configuration DNS (OVH)

**Zone DNS modifiée pour potomitan.io :**

| Sous-domaine | Type | Ancienne valeur | Nouvelle valeur | Raison |
|--------------|------|-----------------|-----------------|--------|
| @ (racine) | A | 209.38.106.147 | 76.76.21.21 | Pointer vers Vercel |
| www | A | 209.38.106.147 | 76.76.21.21 | Pointer vers Vercel |
| app | A | N/A (nouveau) | 209.38.106.147 | Conserver l'app actuelle |

**Enregistrements DNS inchangés :**
- `dev.potomitan.io` → 209.38.106.147
- `vwakreol.potomitan.io` → 209.38.106.147
- `dev.vwakreol.potomitan.io` → 209.38.106.147
- Enregistrements MX (emails)
- Enregistrements TXT, SPF, etc.

**Serveurs DNS utilisés :**
- ns100.ovh.net
- dns100.ovh.net
(Les nameservers OVH sont conservés, pas de migration vers Vercel DNS)

---

### 2. Configuration Nginx (DigitalOcean - 209.38.106.147)

**Fichier modifié :** `/etc/nginx/sites-available/potomitan.io`

**Changement effectué :**
```nginx
# AVANT
server_name potomitan.io;

# APRÈS
server_name potomitan.io www.potomitan.io app.potomitan.io;
```

**Certificats SSL générés :**
```bash
# Nouveau certificat pour app.potomitan.io
certbot --nginx -d app.potomitan.io

# Résultat :
# Certificat : /etc/letsencrypt/live/app.potomitan.io/fullchain.pem
# Clé privée : /etc/letsencrypt/live/app.potomitan.io/privkey.pem
# Expiration : 18 janvier 2026
# Renouvellement automatique : Configuré
```

**Commandes exécutées :**
```bash
# Test de la configuration
nginx -t

# Rechargement de Nginx
systemctl reload nginx
```

---

### 3. Déploiement Vercel

**Projet Vercel créé :** `potomitan-landing`
- **URL de production :** https://potomitan-landing.vercel.app
- **Domaines configurés :**
  - potomitan.io (Production)
  - www.potomitan.io (Production)

**Configuration Vercel automatique :**
- Framework détecté : Vite
- Build Command : `vite build`
- Output Directory : `dist`
- Install Command : `npm install`

**CI/CD automatique :**
- Chaque push sur `main` → Déploiement production automatique
- Chaque Pull Request → Déploiement preview automatique

---

## 🌐 URLs et Architecture Finale

### Production
| URL | Hébergement | Application | Statut |
|-----|-------------|-------------|--------|
| https://potomitan.io | Vercel | Site vitrine | ✅ Actif |
| https://www.potomitan.io | Vercel | Site vitrine (redirection) | ✅ Actif |
| https://app.potomitan.io | DigitalOcean | App React principale | ✅ Actif |
| https://potomitan.io/phrases | DigitalOcean | App urgences (legacy) | ✅ Actif |
| https://potomitan.io/contribuer | DigitalOcean | Hub contributeurs | ✅ Actif |
| https://vwakreol.potomitan.io | DigitalOcean | VwaKréyòl standalone | ✅ Actif |

### Développement
| URL | Hébergement | Application | Statut |
|-----|-------------|-------------|--------|
| https://dev.potomitan.io | DigitalOcean | Env de développement | ✅ Actif |
| https://potomitan-landing.vercel.app | Vercel | Preview site vitrine | ✅ Actif |

---

## 📝 Contenu du Site Vitrine

### Sections

**1. Hero Section**
- Titre : "Potomitan"
- Sous-titre : "L'inclusion linguistique pour la Guadeloupe"
- Description : Traduction français ↔ créole pour urgences sociétales
- CTA : "Utiliser l'application" + "Contribuer"

**2. Nos Applications (6 applications)**

**UTILISER (4 apps) :**
1. **App complète** → https://app.potomitan.io
   - Interface complète avec traducteur, catégories d'urgence
   
2. **Urgence** → https://app.potomitan.io/phrases
   - Accès rapide phrases d'urgence critiques
   
3. **Traducteur** → https://app.potomitan.io/traducteur
   - Badge : "Bientôt disponible"
   - Traducteur standalone basé sur API existante
   
4. **Klavyé Kréyòl** → https://play.google.com/store/apps/details?id=com.potomitan.kreyolkeyboard
   - Badge : Badge Google Play Store officiel (image SVG)
   - Disponible sur Android, développement iOS à venir

**CONTRIBUER (2 apps) :**
5. **Validation transcriptions** → https://app.potomitan.io/contribuer
   - Badge : "Authentification requise"
   
6. **VwaKréyòl** → https://vwakreol.potomitan.io
   - Badge : "Libre accès"
   - Enrichissement corpus audio + nouvelles traductions

**3. L'Initiative Potomitan**
- Problématique : 93 secondes perdues par intervention
- Solution : 1805 phrases validées, IA spécialisée, fonctionnement offline
- Impact : 2,5-5 M€ économies annuelles, vies sauvées

**4. L'Équipe**
- Brigitte Démocrite - Fondatrice & Experte IA (avec photo)
- Monique Famibelle - Ambassadrice & Communication (avec photo)
- Médhi Famibelle - Expert IA, Développeur Klavyé Kréyòl (avec photo)
- Julien Noyer - Développeur Full-stack & UX (avec photo)
- Photos circulaires (150px) avec bordure verte

**5. Footer**
- Liens vers toutes les applications
- Contact : contact@potomitan.io
- Copyright © 2025 Potomitan™

---

## 🔄 Workflow de Mise à Jour

### Mettre à jour le site vitrine

```bash
# 1. Cloner le repo (si pas déjà fait)
git clone https://github.com/Brdcie/potomitan-landing.git
cd potomitan-landing

# 2. Créer une branche pour les modifications
git checkout -b feature/nouvelle-fonctionnalite

# 3. Faire les modifications
# Éditer les fichiers dans src/components/

# 4. Tester en local
npm install
npm run dev
# Ouvrir http://localhost:5173

# 5. Commit et push
git add .
git commit -m "Description des changements"
git push origin feature/nouvelle-fonctionnalite

# 6. Créer une Pull Request sur GitHub
# Vercel créera automatiquement un déploiement preview

# 7. Merger sur main
# Le déploiement en production se fait automatiquement
```

### Modifier le contenu

**Équipe :** Éditer `src/components/Team.jsx`
- Ajouter des photos dans `public/` (format: photo-prenom.jpg ou .jpeg)
- Référencer les photos dans le tableau `teamMembers`
- Style des photos : `.team-member-photo` dans `src/index.css`

**Applications :** Éditer `src/components/Applications.jsx`
- Pour ajouter un badge texte : `badge: { text: 'Mon texte', type: 'open' }`
- Pour ajouter un badge image : `badge: { type: 'mon-type', image: '/mon-badge.svg' }`

**Initiative :** Éditer `src/components/Initiative.jsx`

**Couleurs :** Éditer `src/index.css` (variables CSS en haut)

---

## 🔐 Certificats SSL

### Certificats actifs

| Domaine | Émetteur | Expiration | Renouvellement |
|---------|----------|------------|----------------|
| potomitan.io | Let's Encrypt | Variable | Auto (Vercel) |
| www.potomitan.io | Let's Encrypt | Variable | Auto (Vercel) |
| app.potomitan.io | Let's Encrypt | 18/01/2026 | Auto (Certbot) |
| vwakreol.potomitan.io | Let's Encrypt | Variable | Auto (Certbot) |
| dev.potomitan.io | Let's Encrypt | Variable | Auto (Certbot) |

### Renouvellement automatique (DigitalOcean)

Certbot est configuré pour renouveler automatiquement tous les certificats.

**Vérifier le renouvellement automatique :**
```bash
# Sur le serveur DigitalOcean
systemctl status certbot.timer
certbot renew --dry-run
```

---

## 🧪 Tests de Validation

### Tests effectués

✅ **Site vitrine Vercel**
```bash
curl -I https://potomitan.io
# HTTP/2 200 
# server: Vercel
```

✅ **Application principale DigitalOcean**
```bash
curl -I https://app.potomitan.io
# HTTP/1.1 200 OK
# server: nginx/1.26.0 (Ubuntu)
```

✅ **SSL valides**
```bash
# Tous les domaines ont des certificats SSL valides
openssl s_client -connect potomitan.io:443 -servername potomitan.io
openssl s_client -connect app.potomitan.io:443 -servername app.potomitan.io
```

✅ **Responsive design**
- Testé sur mobile, tablette, desktop
- Navigation fonctionnelle
- Images et logo affichés correctement

✅ **Performance**
- Temps de chargement : < 2 secondes
- Score Lighthouse : 90+
- Hébergement CDN Vercel (rapide mondialement)

---

## 📊 Métriques et Monitoring

### Vercel Analytics (disponible)
- Temps de chargement
- Visiteurs uniques
- Pages vues
- Géolocalisation des visiteurs

### À configurer (optionnel)
- Google Analytics
- Hotjar pour analyse comportementale
- Sentry pour monitoring erreurs

---

## 🆘 Dépannage

### Problème : Le site vitrine ne s'affiche pas

**Vérifications :**
```bash
# 1. Vérifier que le DNS pointe vers Vercel
dig potomitan.io
# Doit retourner : 76.76.21.21

# 2. Vérifier le statut Vercel
# Aller sur : https://vercel.com/status

# 3. Vider le cache du navigateur
# Navigation privée ou Cmd+Shift+R / Ctrl+F5
```

### Problème : app.potomitan.io ne fonctionne plus

**Vérifications :**
```bash
# 1. Vérifier que le DNS pointe vers DigitalOcean
dig app.potomitan.io
# Doit retourner : 209.38.106.147

# 2. Vérifier que Nginx tourne
ssh root@209.38.106.147
systemctl status nginx

# 3. Vérifier les logs Nginx
tail -f /var/log/nginx/error.log
```

### Problème : Certificat SSL expiré

**Solution :**
```bash
# Sur le serveur DigitalOcean
certbot renew
systemctl reload nginx
```

---

## 🔒 Sécurité

### Accès serveur DigitalOcean
- IP : 209.38.106.147
- Accès SSH configuré
- Nginx 1.26.0 (Ubuntu)
- Certbot installé pour Let's Encrypt

### Secrets et variables d'environnement
- Aucun secret dans le code GitHub (repo public)
- Variables d'environnement sur DigitalOcean (si nécessaire)

---

## 📞 Contacts Techniques

**Infrastructure :**
- Brigitte Démocrite (Fondatrice) - contact@potomitan.io

**Hébergement :**
- Vercel : Site vitrine (potomitan.io)
- DigitalOcean : Applications (app.potomitan.io, vwakreol, etc.)
- OVH : Gestion DNS

**Repositories :**
- GitHub : https://github.com/Brdcie/potomitan-landing

---

## 📅 Historique des Changements

| Date | Changement | Auteur |
|------|------------|--------|
| 18/11/2025 | Ajout photos membres de l'équipe (Team.jsx) | Brigitte Démocrite |
| 18/11/2025 | Badge Google Play pour Klavyé Kréyòl | Brigitte Démocrite |
| 18/11/2025 | Mise à jour lien Klavyé Kréyòl vers Google Play Store | Brigitte Démocrite |
| 20/10/2025 | Création site vitrine + déploiement Vercel | Brigitte Démocrite |
| 20/10/2025 | Migration potomitan.io → Vercel | Brigitte Démocrite |
| 20/10/2025 | Création app.potomitan.io sur DigitalOcean | Brigitte Démocrite |
| 20/10/2025 | Configuration SSL pour app.potomitan.io | Brigitte Démocrite |

---

## ✅ Checklist de Validation

- [x] Repository GitHub créé et configuré
- [x] Site vitrine déployé sur Vercel
- [x] DNS OVH configurés correctement
- [x] app.potomitan.io fonctionnel sur DigitalOcean
- [x] Certificats SSL valides sur tous les domaines
- [x] Tests de navigation effectués
- [x] Performance validée
- [x] Documentation créée

---

**Fin de la documentation technique**

*Dernière mise à jour : 18 novembre 2025*