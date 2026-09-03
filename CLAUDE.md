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

## Historique des sessions

### Session 2026-03-17

- Responsive mobile : header Navbar en colonne sur petits écrans (logo + liens en dessous)
- Hero : lien texte "Vous parlez créole ? Contribuer" remplacé par bouton orange visible (`btn-contribuer`)
- Fichiers modifiés : `src/index.css`, `src/components/Hero.jsx`, `src/components/Hero.css`
- Commit `49947da`

### Session 2026-07-21

- Hero : lien texte "Vous êtes une institution ? En savoir plus" ne ressortait pas comme un bouton — il utilisait `hero-link` (simple lien souligné) alors que la classe `btn-institutional` (bordure blanche, fond translucide) existait déjà en CSS sans être utilisée nulle part. Remplacé par `className="btn btn-institutional"`.
- Fichier modifié : `src/components/Hero.jsx`
- Commit `c7a4983`, déployé sur Vercel
- `node_modules`/`package-lock.json` régénérés en local suite à un bug npm connu (`@rollup/rollup-darwin-arm64` manquant) — `package-lock.json` volontairement non commité (diff de résolution de versions sans rapport avec le changement)

### Session 2026-07-23

- Reconnaissance : ajout d'un paragraphe d'intro ("infrastructure d'inclusion linguistique") avant la grille de validation, pour relier le cas d'usage urgences à l'orientation, l'accès aux droits et l'insertion professionnelle
- Fichiers modifiés : `src/components/Reconnaissance.jsx`, `src/components/Reconnaissance.css` (nouvelle classe `.reconnaissance-intro`)

## ✅ Corrigé le 02/09/2026 — chiffres périmés (site en local, pas encore déployé)

Repéré via l'analyse du site public par un rapport stratégique Accio Work (candidature Alibaba
CoCreate Pitch 2026), qui a détecté ces incohérences sans accès aux fichiers internes du projet.

- **`Impact93Seconds.jsx`** — repositionné sur le go-to-market du rapport stratégique (promesse
  « communication essentielle en créole guadeloupéen, même lorsque le réseau ne répond plus », 3
  scénarios contrôlés). Le chiffre « 93 secondes » est retiré définitivement (règle du 30/07/2026,
  voir `CLAUDE.md` maître) et remplacé par les métriques à jour : 4 958 expressions, 1,3M+ personnes
  maîtrisant un créole à base française en Guadeloupe/Martinique/Réunion (sourcé DGLFLF, Ministère de
  la Culture, Chiffres clés 2022 — recherche du 02/09/2026), ligne « Vision 2027 : 2M+ créolophones
  servis » séparée et explicitement labellisée comme ambition, pas comme chiffre d'usage actuel.
- **`Reconnaissance.jsx`** — « 3000 expressions » → 4 958.
- **`Applications.jsx`** — « 1 800 expressions » → 4 958.
- **`Actualites.jsx`** — « 93 secondes » remplacé par l'objectif Samu-Urgences de France (DREES
  *Études et Résultats* n°1325). Le chiffre « 2100 expressions » est volontairement **laissé tel
  quel** : il correspond à l'état réel du corpus à la date de publication de cet article (nov. 2025),
  ce n'est pas une erreur.

## 🔜 Points ouverts pour la prochaine session (pause du 02/09/2026)

- **Incohérences déployées sciemment le 03/09/2026 — à corriger dans une prochaine session** (Brigitte
  a choisi de committer/déployer sans les corriger, décision assumée) :
  - `Initiative.jsx` cite « plus de 15 millions » de créolophones mondiaux, `Impact93Seconds.jsx` cite
    « Vision 2027 : 2 M+ créolophones servis » — deux chiffres différents sans lien ni explication
    entre eux sur la même landing page.
  - `Initiative.jsx` inclut La Réunion dans le chiffre « 1,3M+ » présenté comme un territoire
    aujourd'hui couvert, alors que le rapport stratégique CoCreate Pitch (`Appels à projet/
    CoCreate_Pitch/Rapport_Strategique_Potomitan.md`, § extensibilité) dit explicitement que le
    réunionnais n'a que « quelques tests exploratoires », pas une couverture démontrée — à harmoniser.
- **Sources et méthodes des chiffres du site** — pas encore d'endroit centralisé. Le « 1,3M+ » est
  sourcé inline dans son label (DGLFLF 2022), mais à trancher : garder ce système partout, ou créer
  une note/page dédiée type § 11 du rapport stratégique Accio Work (`Appels à projet/CoCreate_Pitch/
  Rapport strategique-Potomitan.md`) ?
- **Modèle économique absent de la candidature CoCreate Pitch** (relevé par le rapport stratégique :
  « Aucun coût fournisseur, prix client, contrat, taux de conversion ou résultat de test de précision
  n'a été fourni »). Décision déjà prise de ne pas publier de tarifs sur le site public (stratégie
  B2G, négociation directe par institution). Reste à trancher : faut-il au moins préparer une fiche
  tarifs/pricing interne prête à l'oral (pitch, jury, partenaire), même sans la publier ? Base
  déjà disponible : tarifs i-Lab28 (15-25 k€/an, 18-32 jours à 800 €/j) et fourchettes du rapport
  stratégique § 6 (pilote 15-30 k€, licence annuelle 24-60 k€/an).
- **Edge AI — statut clarifié le 03/09/2026** : R&D/exploration en cours (confirmé par Brigitte),
  pas une capacité fonctionnelle acquise. Déjà documenté comme réflexion architecturale dans
  `POTOMITAN_Vision/potomitan_specifications.md` § 6 (« Contraintes Techniques du Mode Cyclone »).
  À ne présenter, dans toute candidature ou pitch, qu'au conditionnel/futur (« nous explorons une
  architecture Edge AI... ») — jamais comme un système déjà fonctionnel. Une reformulation de
  candidature proposée le 03/09 l'affirmait au présent comme acquis ; écartée pour cette raison,
  entre autres (voir aussi pilotes présentés comme « engagés » alors qu'aucun n'est confirmé par
  écrit — voir `CLAUDE.md` maître, section Expérimentations).

## ✅ Corrigé le 03/09/2026 — Initiative.jsx (chiffres sourcés + vocabulaire)

**« 30 millions de créolophones à base française et anglaise »** retiré — **non défendable**,
aucune source ne s'en approche (recherche du 03/09/2026, voir sources ci-dessous). Remplacé par
« plus de 15 millions » (créoles à base française uniquement) + un chiffre régional 1,3M+ déjà
sourcé, et le vocabulaire aligné sur « infrastructure d'inclusion linguistique » (cohérent avec
`Impact93Seconds.jsx` et la candidature CoCreate Pitch).

**« 75% des personnes en situation de stress communiquent en créole »** retiré — non sourcé, aucune
étude comportementale retrouvée. Remplacé par une observation qualitative (réflexe en situation de
stress, terrain) + le chiffre de maîtrise générale du créole en Guadeloupe (87%, DGLFLF 2022).

### Sources — chiffres créolophones (à reprendre sur le site si une page méthodologie est créée)

**Régional (Guadeloupe, Martinique, Réunion) — 1,3M+, fiable :**
- DGLFLF (Délégation générale à la langue française et aux langues de France), Ministère de la
  Culture, *« Chiffres clés 2022 — Langues et usages des langues en France »* : maîtrise déclarée
  90% Martinique, 88% Guadeloupe, 80% Réunion.
- Insee Analyses Guadeloupe n°52 (2019-2020) — https://www.insee.fr/fr/statistiques/5544022 — 87%
  maîtrisent le créole, 73% le pratiquent au quotidien.
- Insee Analyses Martinique n°48 (19/10/2021) — https://www.insee.fr/fr/statistiques/5544035.
- Insee Analyses Réunion n°70 — https://www.insee.fr/fr/statistiques/6469054 — 81% de maîtrise.
- Calcul : (384 160 × 0,88) + (360 630 × 0,90) + (889 700 × 0,80) ≈ 1,37 million (populations
  légales Insee au 1er janvier 2023).
- **Guyane volontairement exclue** : coexistence de plusieurs créoles distincts (créole guyanais
  ~20% pratique quotidienne, créole haïtien ~10%), chiffre agrégé trop composite pour être présenté
  simplement (Insee Analyses Guyane n°54 — https://www.insee.fr/fr/statistiques/5543889).
- **Saint-Martin/Saint-Barthélemy exclus** : créole à base anglaise, langue distincte, aucun chiffre
  officiel exploitable trouvé.

**Mondial — 15M+, ordre de grandeur, pas une statistique certifiée :**
- Haïti (créole haïtien, le plus parlé au monde) : ordre de grandeur 10-13 millions de locuteurs.
  Consensus de plusieurs sources secondaires (Britannica, Ebsco, presse), mais **pas de recensement
  linguistique haïtien récent identifié** — le chiffre Ethnologue circulant daterait de 2007.
  Formulation prudente recommandée : « plus de 10 millions », pas « 13 millions ».
- Maurice (créole morisien) : ~1,3-1,5 million de locuteurs (Ethnologue/UNSD, chiffre 2016 le plus
  citable : 1 335 000).
- Seychelles (créole seychellois) : ~85 000-127 000 locuteurs (petit contingent, cohérent avec la
  population totale du pays).
- Total recoupé (DOM + Haïti + Maurice + Seychelles) : de l'ordre de 15-17 millions, cohérent avec
  le chiffre « 15,5 millions » qui circule sur Wikipedia (« French-based creole languages ») —
  **mais ce chiffre agrégé n'a pas de source primaire vérifiée avec chaîne de citation propre**
  (pas de rapport OIF nommé et daté retrouvé). À traiter comme ordre de grandeur défendable, pas
  comme statistique certifiée si un jury ou partenaire demande la source exacte.
- **Créoles à base anglaise (patois jamaïcain ~3M, créole trinidadien ~1M) : sciemment exclus** de
  ce total — famille linguistique différente (base lexicale anglaise), hors périmètre POTOMITAN
  aujourd'hui. Ne jamais les additionner aux chiffres français sans le préciser explicitement.

## Notes importantes

- Le déploiement est automatique sur Vercel après push sur `main`
- Les photos d'équipe sont dans `/public/` (photo-brigitte.jpg, photo-monique.jpeg, photo-yisselda.jpg)
- Les styles de chaque composant sont dans des fichiers `.css` séparés (ex: Hero.css, Team.css)
- Le style global `btn-secondary` dans index.css peut être surchargé par les styles locaux (utiliser sélecteurs spécifiques ou !important si nécessaire)
