# Redesign Tropical Narratif — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic SaaS landing page with a distinctive "Tropical Narratif" identity — cinematic hero, alternating dark/light sections, DM Serif Display typography, asymmetric layouts.

**Architecture:** CSS-driven redesign with JSX structure changes to support new layouts. No new npm dependencies. Google Fonts loaded via `<link>`. Each component gets its own CSS file. Inline styles removed.

**Tech Stack:** React 18, Vite 5, CSS custom properties, Google Fonts (DM Serif Display + Inter), native scroll-snap

---

### Task 1: Design system — fonts and CSS variables

**Files:**
- Modify: `index.html` — add Google Fonts link
- Modify: `src/index.css:1-36` — replace CSS variables and body styles

- [ ] **Step 1: Add Google Fonts to index.html**

In `index.html`, add inside `<head>` before the closing `</head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- [ ] **Step 2: Replace CSS variables in index.css**

Replace the `:root` block and `body` styles (lines 1-36) with:

```css
:root {
  /* Tropical Narratif palette */
  --deep-green: #0d1f15;
  --cream: #faf6f0;
  --gold: #e8d5b7;
  --leaf: #2ecc71;
  --leaf-hover: #27ae60;
  --ember: #FF8C42;
  --ember-hover: #e67e22;
  --mist: rgba(125, 206, 160, 0.4);
  --text-light: rgba(255, 255, 255, 0.6);
  --text-dark: #1a3a2a;
  --text-muted: #666;

  /* Typography */
  --font-heading: 'DM Serif Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-dark);
  background-color: var(--cream);
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 3: Run dev server and verify fonts load**

Run: `pnpm run dev`
Expected: Page loads, browser DevTools Network tab shows DM Serif Display and Inter fonts loading from fonts.googleapis.com. No 404s.

- [ ] **Step 4: Commit**

```bash
git add index.html src/index.css
git commit -m "feat: design system — tropical narratif palette and typography"
```

---

### Task 2: Navbar redesign

**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/index.css` — navbar section (lines 42-95)

- [ ] **Step 1: Update Navbar JSX with React Router links**

Replace `src/components/Navbar.jsx` entirely:

```jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const scrollToSection = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (e, id) => {
    if (isHome) {
      scrollToSection(e, id);
    } else {
      // Navigate home then scroll
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="navbar" aria-label="Navigation principale">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo-potomitan.svg" alt="Logo Potomitan" />
          <h1>POTOMITAN</h1>
        </Link>
        <ul className="navbar-menu">
          <li><a href="#applications" onClick={(e) => handleNavClick(e, 'applications')}>Applications</a></li>
          <li><a href="#initiative" onClick={(e) => handleNavClick(e, 'initiative')}>L'initiative</a></li>
          <li><a href="#equipe" onClick={(e) => handleNavClick(e, 'equipe')}>L'équipe</a></li>
          <li><Link to="/actualites">Actualités</Link></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
```

- [ ] **Step 2: Update navbar CSS in index.css**

Replace the navbar section (lines 42-95) with:

```css
/* Navbar */
.navbar {
  background-color: var(--deep-green);
  color: var(--gold);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.navbar-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: var(--gold);
}

.navbar-logo img {
  height: 50px;
  width: 50px;
}

.navbar-logo h1 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--gold);
}

.navbar-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.navbar-menu a {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.navbar-menu a:hover {
  color: var(--gold);
}
```

- [ ] **Step 3: Verify navbar renders correctly**

Run: `pnpm run dev`
Expected: Navbar has deep green background, POTOMITAN in gold serif, links in muted white that turn gold on hover. Navigation links work on homepage (smooth scroll) and from /actualites (redirect to home).

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar.jsx src/index.css
git commit -m "feat: navbar — gold serif branding, React Router navigation"
```

---

### Task 3: Global styles — buttons, sections, responsive

**Files:**
- Modify: `src/index.css` — buttons (lines 97-131), sections (lines 132-154), responsive (lines 467-514)

- [ ] **Step 1: Replace global button styles**

Replace the buttons section (`.btn` through `.btn-secondary:hover`) with:

```css
/* Buttons (Global) */
.btn {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: var(--font-body);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--leaf);
  color: var(--deep-green);
}

.btn-primary:hover {
  background-color: var(--leaf-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(46, 204, 113, 0.4);
}

.btn-secondary {
  background-color: transparent;
  color: var(--gold);
  border: 1px solid var(--gold);
}

.btn-secondary:hover {
  background-color: rgba(232, 213, 183, 0.1);
  color: var(--gold);
}
```

- [ ] **Step 2: Replace global section styles**

Replace the sections block (`.section` through `.section-subtitle`) with:

```css
/* Sections */
.section {
  padding: 6rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.section-full {
  padding: 6rem 2rem;
  max-width: 100%;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.section-title-light {
  color: var(--gold);
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.section-subtitle-light {
  color: var(--text-light);
}

.section-label {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
}

.section-label-dark {
  color: var(--mist);
}

.section-label-light {
  color: var(--text-muted);
}
```

- [ ] **Step 3: Update responsive section at the bottom**

Replace the `@media (max-width: 768px)` block at the bottom of index.css with:

```css
/* Responsive */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    padding: 0.5rem 0;
  }

  .navbar-logo {
    gap: 0.4rem;
  }

  .navbar-logo img {
    height: 40px;
    width: 40px;
  }

  .navbar-logo h1 {
    font-size: 1.1rem;
  }

  .navbar-menu {
    gap: 0.75rem;
    font-size: 0.85rem;
    flex-wrap: wrap;
  }

  .section {
    padding: 3rem 1.5rem;
  }

  .section-full {
    padding: 3rem 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .btn {
    width: 100%;
    text-align: center;
  }
}
```

- [ ] **Step 4: Verify global styles**

Run: `pnpm run dev`
Expected: Buttons use new colors (leaf green, gold outline). Section titles are DM Serif Display. Labels are uppercase with letter-spacing.

- [ ] **Step 5: Commit**

```bash
git add src/index.css
git commit -m "feat: global styles — buttons, sections, labels for tropical narratif"
```

---

### Task 4: Hero — cinematic two-screen

**Files:**
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/Hero.css` — full rewrite

- [ ] **Step 1: Rewrite Hero JSX**

Replace `src/components/Hero.jsx` entirely:

```jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Screen 1: The quote */}
      <div className="hero-screen hero-screen-quote">
        <blockquote className="hero-quote">
          "Lè ou malad, sé an kréyòl ou ka kriyé"
        </blockquote>
        <p className="hero-quote-translation">
          — Quand tu souffres, c'est en créole que tu appelles
        </p>
        <div className="hero-scroll-indicator" aria-hidden="true">
          <span className="hero-chevron">&#8964;</span>
        </div>
      </div>

      {/* Screen 2: The product */}
      <div className="hero-screen hero-screen-product">
        <div className="hero-product-content">
          <h2 className="hero-product-title">Potomitan</h2>
          <p className="hero-product-subtitle">
            Traduction instantanée français ↔ créole guadeloupéen
          </p>
          <p className="hero-product-description">
            Fonctionne sans connexion. Validé par des locuteurs natifs.
            Pour les urgences, les services publics et l'emploi.
          </p>
          <div className="hero-cta-primary">
            <a href="https://traducteur.potomitan.io" className="btn btn-primary hero-btn-primary">
              Tester maintenant
            </a>
          </div>
          <div className="hero-cta-secondary">
            <a href="#reconnaissance" className="hero-link">
              Vous êtes une institution ? En savoir plus
            </a>
            <a href="https://vwakreol.potomitan.io" className="btn hero-btn-contribuer" target="_blank" rel="noopener noreferrer">
              Vous parlez créole ? Contribuer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 2: Rewrite Hero.css**

Replace `src/components/Hero.css` entirely:

```css
/* Hero — Cinematic two-screen */
.hero {
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  height: 200vh;
}

.hero-screen {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--deep-green);
  padding: 2rem;
}

/* Screen 1: Quote */
.hero-screen-quote {
  text-align: center;
  position: relative;
}

.hero-quote {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 3rem;
  color: var(--gold);
  line-height: 1.3;
  max-width: 800px;
  margin: 0 auto;
}

.hero-quote-translation {
  color: var(--mist);
  font-size: 1rem;
  margin-top: 1.5rem;
  font-style: italic;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 3rem;
  animation: bounce 2s ease-in-out infinite;
}

.hero-chevron {
  color: var(--mist);
  font-size: 2rem;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

/* Screen 2: Product */
.hero-screen-product {
  text-align: center;
}

.hero-product-content {
  max-width: 800px;
}

.hero-product-title {
  font-family: var(--font-heading);
  font-size: 4rem;
  color: var(--gold);
  font-weight: 400;
  margin-bottom: 1rem;
}

.hero-product-subtitle {
  font-size: 1.3rem;
  color: var(--mist);
  margin-bottom: 1rem;
}

.hero-product-description {
  font-size: 1.1rem;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-btn-primary {
  padding: 1.25rem 3rem;
  font-size: 1.3rem;
}

.hero-cta-primary {
  margin-bottom: 1.5rem;
}

.hero-cta-secondary {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.hero-link {
  color: var(--text-light);
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.3);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.hero-link:hover {
  color: var(--gold);
  text-decoration-color: var(--gold);
}

.hero-btn-contribuer {
  background-color: var(--ember);
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.hero-btn-contribuer:hover {
  background-color: var(--ember-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 140, 66, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-quote {
    font-size: 2rem;
  }

  .hero-product-title {
    font-size: 2.5rem;
  }

  .hero-product-subtitle {
    font-size: 1.1rem;
  }

  .hero-product-description {
    font-size: 1rem;
  }

  .hero-btn-primary {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    width: 100%;
  }

  .hero-cta-secondary {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-btn-contribuer {
    width: 100%;
    text-align: center;
  }
}
```

- [ ] **Step 3: Verify hero renders**

Run: `pnpm run dev`
Expected: Two full-screen sections. First shows the Creole quote in gold italic serif with a bouncing chevron. Second shows "Potomitan" in large gold serif with CTAs. Scroll-snap works between the two screens.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.jsx src/components/Hero.css
git commit -m "feat: hero — cinematic two-screen with scroll-snap"
```

---

### Task 5: Comparison + Impact merged section

**Files:**
- Modify: `src/components/GoogleComparison.jsx`
- Modify: `src/components/GoogleComparison.css` — full rewrite
- Modify: `src/App.jsx` — remove Impact93Seconds from HomePage

- [ ] **Step 1: Update App.jsx — remove Impact93Seconds**

In `src/App.jsx`, remove the import of `Impact93Seconds` and remove `<Impact93Seconds />` from the `HomePage` component. The data will be merged into GoogleComparison.

Replace the HomePage component:

```jsx
const HomePage = () => (
  <>
    <Hero />
    <GoogleComparison />
    <Reconnaissance />
    <Applications />
    <Team />
    <Initiative />
    <FinalCTA />
  </>
);
```

And remove the import line:
```jsx
import Impact93Seconds from './components/Impact93Seconds';
```

- [ ] **Step 2: Rewrite GoogleComparison JSX**

Replace `src/components/GoogleComparison.jsx` entirely:

```jsx
import React from 'react';
import './GoogleComparison.css';

const COMPARISON_EXAMPLES = [
  {
    id: 'palpitations',
    creole: 'Kè-la ka bat',
    google: 'Le cœur bat',
    potomitan: "J'ai des palpitations"
  },
  {
    id: 'agreement',
    creole: 'Bon, pa ni pwoblèm',
    google: 'Bon, pas de problème',
    potomitan: "D'accord, pas de problème"
  }
];

const SECONDARY_METRICS = [
  { id: 'expressions', number: '3000', label: 'expressions validées par locuteurs natifs' },
  { id: 'reach', number: '2M+', label: 'créolophones dans les 4 DOM' },
  { id: 'speed', number: '<2s', label: 'temps de traduction' }
];

const GoogleComparison = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-container">
        {/* Left column: the problem */}
        <div className="comparison-left">
          <span className="section-label section-label-light">Le problème</span>
          <h2 className="comparison-title">
            Google traduit des mots.<br />
            Potomitan comprend une langue.
          </h2>

          <div className="comparison-examples">
            {COMPARISON_EXAMPLES.map((example) => (
              <div key={example.id} className="comparison-example">
                <p className="comparison-creole">{example.creole}</p>
                <div className="comparison-results">
                  <p className="comparison-google">
                    <span className="comparison-icon">❌</span>
                    {example.google}
                  </p>
                  <p className="comparison-potomitan">
                    <span className="comparison-icon">✓</span>
                    {example.potomitan}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="comparison-offline">
            <strong>Et surtout :</strong> POTOMITAN fonctionne offline. Pendant un cyclone,
            quand les réseaux tombent, Google Translate ne sert à rien.
          </p>
        </div>

        {/* Right column: the impact */}
        <div className="comparison-right">
          <div className="impact-inset">
            <span className="impact-number">93</span>
            <span className="impact-label">secondes perdues par intervention d'urgence en Guadeloupe</span>

            <p className="impact-explanation">
              Dans un contexte médical critique, ces secondes peuvent faire la différence entre la vie et la mort.
            </p>

            <div className="impact-metrics">
              {SECONDARY_METRICS.map((metric) => (
                <div key={metric.id} className="impact-metric">
                  <span className="metric-number">{metric.number}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleComparison;
```

- [ ] **Step 3: Rewrite GoogleComparison.css**

Replace `src/components/GoogleComparison.css` entirely:

```css
/* Comparison + Impact — merged section */
.comparison-section {
  background-color: var(--cream);
  padding: 6rem 2rem;
}

.comparison-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Left column */
.comparison-left {
  /* no extra styles needed */
}

.comparison-title {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 400;
  color: var(--text-dark);
  line-height: 1.3;
  margin-bottom: 2.5rem;
}

.comparison-examples {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

.comparison-example {
  padding-left: 1.5rem;
  border-left: 3px solid var(--leaf);
}

.comparison-creole {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 1.4rem;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.comparison-results {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.comparison-google {
  color: #c0392b;
  font-size: 0.95rem;
  text-decoration: line-through;
  text-decoration-color: rgba(192, 57, 43, 0.4);
}

.comparison-potomitan {
  color: var(--leaf);
  font-size: 0.95rem;
  font-weight: 600;
}

.comparison-icon {
  margin-right: 0.5rem;
}

.comparison-offline {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.7;
  padding: 1.25rem 1.5rem;
  background-color: rgba(255, 140, 66, 0.08);
  border-left: 3px solid var(--ember);
  border-radius: 0 8px 8px 0;
}

.comparison-offline strong {
  color: var(--ember);
}

/* Right column — dark inset */
.comparison-right {
  /* no extra styles needed */
}

.impact-inset {
  background-color: var(--deep-green);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
}

.impact-number {
  display: block;
  font-family: var(--font-heading);
  font-size: 5rem;
  color: var(--leaf);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.impact-label {
  display: block;
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.impact-explanation {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.impact-metrics {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.impact-metric {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.metric-number {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 400;
  color: var(--gold);
  line-height: 1.2;
}

.metric-label {
  font-size: 0.8rem;
  color: var(--text-light);
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .comparison-section {
    padding: 3rem 1.5rem;
  }

  .comparison-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .comparison-title {
    font-size: 1.8rem;
  }

  .comparison-creole {
    font-size: 1.2rem;
  }

  .impact-number {
    font-size: 4rem;
  }
}
```

- [ ] **Step 4: Verify merged section renders**

Run: `pnpm run dev`
Expected: Cream background section with asymmetric 65/35 layout. Left column has serif title, creole quotes with green left border, offline callout. Right column shows dark inset with "93" in large green serif. Impact93Seconds component no longer rendered separately.

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx src/components/GoogleComparison.jsx src/components/GoogleComparison.css
git commit -m "feat: merge comparison + impact into asymmetric section on cream"
```

---

### Task 6: Reconnaissance — dark single column

**Files:**
- Modify: `src/components/Reconnaissance.jsx`
- Modify: `src/components/Reconnaissance.css` — full rewrite

- [ ] **Step 1: Update Reconnaissance JSX**

Replace `src/components/Reconnaissance.jsx` entirely:

```jsx
import React from 'react';
import { Cpu, Users, Building2, Newspaper } from 'lucide-react';
import './Reconnaissance.css';

const VALIDATION_BLOCKS = [
  {
    id: 'technique',
    icon: Cpu,
    title: 'Maturité technique',
    color: 'var(--leaf)',
    items: [
      '3000 expressions validées par locuteurs natifs guadeloupéens',
      'Traduction bidirectionnelle français ↔ créole',
      'Architecture offline fonctionnelle',
      'Temps de réponse < 2 secondes'
    ]
  },
  {
    id: 'communautaire',
    icon: Users,
    title: 'Ancrage communautaire',
    color: 'var(--ember)',
    items: [
      'VwaKréyòl : plateforme de contribution communautaire active',
      'Validation linguistique par locuteurs natifs',
      'Sessions Maké Kréyòl (marquage collaboratif)'
    ]
  },
  {
    id: 'institutionnel',
    icon: Building2,
    title: 'Reconnaissance institutionnelle',
    color: 'var(--gold)',
    items: [
      "Lab'An Nou (Préfecture de Guadeloupe) : soutien au projet",
      { text: 'Orange Antilles-Guyane : capsule vidéo', link: 'https://youtu.be/zaSrC3ZtZ_c?si=yscQXVXi0AlUqvi_' }
    ]
  },
  {
    id: 'mediatique',
    icon: Newspaper,
    title: 'Visibilité médiatique',
    color: 'var(--leaf)',
    items: [
      { text: 'France-Antilles : couverture du projet', link: 'https://hexagone.franceantilles.fr/actualite/sciences-et-recherche/potomitan-lia-qui-parle-creole-1063339.php' }
    ]
  }
];

const Reconnaissance = () => {
  return (
    <section id="reconnaissance" className="reconnaissance-section-dark">
      <div className="reconnaissance-container">
        <span className="section-label section-label-dark">Ce qui valide Potomitan</span>

        <div className="validation-stack">
          {VALIDATION_BLOCKS.map((block) => {
            const IconComponent = block.icon;
            return (
              <div
                key={block.id}
                className="validation-block-dark"
                style={{ borderLeftColor: block.color }}
              >
                <div className="validation-header">
                  <IconComponent size={28} strokeWidth={1.5} className="validation-icon-dark" />
                  <h3 className="validation-title-dark">{block.title}</h3>
                </div>
                <ul className="validation-list-dark">
                  {block.items.map((item, index) => (
                    <li key={index}>
                      {typeof item === 'string' ? (
                        item
                      ) : (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="validation-link-dark">
                          {item.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="reconnaissance-footer-dark">
          POTOMITAN est actuellement en discussion avec plusieurs services publics
          et collectivités territoriales pour des déploiements pilotes en 2026.
        </p>

        <div className="reconnaissance-news-dark">
          <span className="news-badge">Dernière actualité</span>
          <span className="news-text">POTOMITAN opérationnel — Novembre 2025</span>
          <a href="/actualites" className="news-link-dark">Lire l'article complet →</a>
        </div>
      </div>
    </section>
  );
};

export default Reconnaissance;
```

- [ ] **Step 2: Rewrite Reconnaissance.css**

Replace `src/components/Reconnaissance.css` entirely:

```css
/* Reconnaissance — dark single column */
.reconnaissance-section-dark {
  background-color: var(--deep-green);
  padding: 6rem 2rem;
}

.reconnaissance-container {
  max-width: 800px;
  margin: 0 auto;
}

.validation-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 0.5rem;
}

.validation-block-dark {
  border-left: 3px solid var(--leaf);
  padding: 1.5rem 2rem;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 0 8px 8px 0;
}

.validation-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.validation-icon-dark {
  color: var(--gold);
  flex-shrink: 0;
}

.validation-title-dark {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--gold);
}

.validation-list-dark {
  list-style: none;
  padding: 0;
  margin: 0;
}

.validation-list-dark li {
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 0.6rem;
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.6;
}

.validation-list-dark li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--mist);
}

.validation-list-dark li:last-child {
  margin-bottom: 0;
}

.validation-link-dark {
  color: var(--text-light);
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.validation-link-dark:hover {
  color: var(--gold);
  text-decoration-color: var(--gold);
}

.reconnaissance-footer-dark {
  margin-top: 3rem;
  font-size: 1rem;
  color: var(--text-light);
  text-align: center;
  line-height: 1.7;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.reconnaissance-news-dark {
  margin-top: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1.25rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.news-badge {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--deep-green);
  background-color: var(--gold);
  padding: 0.3rem 0.75rem;
  border-radius: 4px;
}

.news-text {
  color: var(--text-light);
  font-size: 0.95rem;
}

.news-link-dark {
  color: var(--leaf);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.news-link-dark:hover {
  color: var(--gold);
}

/* Responsive */
@media (max-width: 768px) {
  .reconnaissance-section-dark {
    padding: 3rem 1.5rem;
  }

  .validation-block-dark {
    padding: 1.25rem 1.5rem;
  }

  .validation-title-dark {
    font-size: 1.1rem;
  }

  .validation-list-dark li {
    font-size: 0.9rem;
  }

  .reconnaissance-news-dark {
    flex-direction: column;
    gap: 0.5rem;
  }
}
```

- [ ] **Step 3: Verify reconnaissance renders**

Run: `pnpm run dev`
Expected: Deep green background, single centered column. 4 stacked blocks with colored left borders (green, orange, gold, green). Gold serif titles, muted list items. News banner at the bottom with gold badge.

- [ ] **Step 4: Commit**

```bash
git add src/components/Reconnaissance.jsx src/components/Reconnaissance.css
git commit -m "feat: reconnaissance — dark single-column with colored borders"
```

---

### Task 7: Applications — main card + contributor cards

**Files:**
- Modify: `src/components/Applications.jsx`
- Create: `src/components/Applications.css`
- Modify: `src/index.css` — remove applications styles (lines 156-365)

- [ ] **Step 1: Create Applications.css**

Create `src/components/Applications.css`:

```css
/* Applications Section */
.applications-section {
  background-color: var(--cream);
  padding: 6rem 2rem;
}

.applications-container {
  max-width: 1100px;
  margin: 0 auto;
}

/* Main app card */
.app-main-card {
  background-color: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  gap: 3rem;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.3s ease;
  margin-bottom: 4rem;
}

.app-main-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.app-main-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.app-main-logo img {
  width: 120px;
  height: 120px;
}

.app-main-badge {
  font-size: 0.8rem;
  font-weight: 500;
  color: #2E7D32;
  background-color: #E8F5E9;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-align: center;
}

.app-main-content h3 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.app-main-content p {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.app-main-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.app-main-features li {
  padding: 0.4rem 0;
  font-size: 0.95rem;
  color: var(--text-dark);
  line-height: 1.5;
}

.app-main-cta {
  display: inline-block;
  background-color: var(--leaf);
  color: var(--deep-green);
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.app-main-cta:hover {
  background-color: var(--leaf-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(46, 204, 113, 0.4);
}

/* Contributor apps */
.apps-contributor-label {
  margin-top: 1rem;
}

.apps-contributor-subtitle {
  color: var(--text-muted);
  margin-bottom: 2rem;
  font-size: 1rem;
}

.apps-contributor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.app-contributor-card {
  background-color: white;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  border-top: 3px solid transparent;
}

.app-contributor-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.app-contributor-card[data-color="yellow"]:hover { border-top-color: #FFC107; }
.app-contributor-card[data-color="blue"]:hover { border-top-color: #3498DB; }
.app-contributor-card[data-color="green"]:hover { border-top-color: #2ecc71; }

.app-contributor-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.app-contributor-card h4 {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.app-contributor-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.app-contributor-badge {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: auto;
}

.badge-open {
  background-color: #E8F5E9;
  color: #2E7D32;
}

.badge-auth {
  background-color: #FFF3E0;
  color: #E65100;
}

.badge-google-play {
  background-color: transparent;
  padding: 0;
}

.badge-google-play img {
  height: 40px;
  width: auto;
  display: block;
}

/* Responsive */
@media (max-width: 768px) {
  .applications-section {
    padding: 3rem 1.5rem;
  }

  .app-main-card {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
  }

  .app-main-logo img {
    width: 80px;
    height: 80px;
  }

  .apps-contributor-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
```

- [ ] **Step 2: Rewrite Applications.jsx**

Replace `src/components/Applications.jsx` entirely:

```jsx
import React from 'react';
import { Mic, Edit, Keyboard } from 'lucide-react';
import './Applications.css';

const contributorApps = [
  {
    title: 'VwaKréyòl',
    description: 'Enrichissez le corpus audio ou proposez de nouvelles phrases traduites en créole guadeloupéen. Contribution libre et ouverte.',
    icon: Mic,
    iconColor: '#FFC107',
    colorName: 'yellow',
    link: 'https://vwakreol.potomitan.io',
    badge: { text: 'Application mobile installable sur IOS et Android', type: 'open' }
  },
  {
    title: 'Maké Kréyòl',
    description: 'Validez les transcriptions audio pour améliorer la qualité du corpus. Authentification requise pour garantir la fiabilité.',
    icon: Edit,
    iconColor: '#3498DB',
    colorName: 'blue',
    link: 'https://transcrire.potomitan.io',
    badge: { text: 'Disponible', type: 'auth' }
  },
  {
    title: 'Klavyé Kréyòl',
    description: 'Clavier créole pour saisie facilitée en créole guadeloupéen. Disponible sur Android.',
    icon: Keyboard,
    iconColor: '#2ecc71',
    colorName: 'green',
    link: 'https://play.google.com/store/apps/details?id=com.potomitan.kreyolkeyboard&utm_source=emea_Med',
    badge: { type: 'google-play', image: '/google-play-badge-fr.svg' }
  }
];

const Applications = () => {
  return (
    <section id="applications" className="applications-section">
      <div className="applications-container">
        <span className="section-label section-label-light">L'écosystème</span>
        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
          POTOMITAN, l'intelligence artificielle qui parle créole
        </h2>

        {/* Main app */}
        <a
          href="https://traducteur.potomitan.io"
          className="app-main-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="app-main-logo">
            <img src="/logo-potomitan.svg" alt="Logo Potomitan" />
            <span className="app-main-badge">Application mobile installable sur IOS et Android</span>
          </div>
          <div className="app-main-content">
            <h3>L'urgence en créole !</h3>
            <p>
              Interface complète avec traducteur intégré, catégories d'urgence
              (Médical, Évacuation, Secours, Information) et expressions essentielles.
            </p>
            <ul className="app-main-features">
              <li>🆘 Phrases d'urgence (médical, évacuation, secours)</li>
              <li>📖 Catalogue de plus de 1 800 expressions</li>
              <li>⚡ Traduction instantanée</li>
            </ul>
            <span className="app-main-cta">Tester maintenant</span>
          </div>
        </a>

        {/* Contributor apps */}
        <span className="section-label section-label-light apps-contributor-label">Contribuer</span>
        <p className="apps-contributor-subtitle">
          Aidez à enrichir les créoles et à améliorer la qualité des traductions
        </p>

        <div className="apps-contributor-grid">
          {contributorApps.map((app) => {
            const IconComponent = app.icon;
            return (
              <a
                key={app.title}
                href={app.link}
                className="app-contributor-card"
                data-color={app.colorName}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="app-contributor-icon"
                  style={{ backgroundColor: app.iconColor }}
                >
                  <IconComponent size={28} strokeWidth={2} color="white" />
                </div>
                <h4>{app.title}</h4>
                <p>{app.description}</p>
                {app.badge && (
                  <span className={`app-contributor-badge badge-${app.badge.type}`}>
                    {app.badge.image ? (
                      <img src={app.badge.image} alt="Télécharger sur Google Play" />
                    ) : (
                      app.badge.text
                    )}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Applications;
```

- [ ] **Step 3: Remove old applications CSS from index.css**

In `src/index.css`, delete all the applications-related styles: from `.applications {` (line ~157) through `.app-card-simple p {` (line ~365). This includes: `.applications`, `.apps-category`, `.apps-grid`, `.app-card`, `.apps-grid-main`, `.app-icon`, `.app-card h4`, `.app-card p`, `.app-badge`, `.badge-*`, `.apps-grid-simple`, `.app-card-simple`, `.app-icon-simple`.

Also remove the corresponding mobile styles inside the `@media (max-width: 768px)` block: `.apps-grid` and `.apps-grid-simple`.

- [ ] **Step 4: Verify applications section renders**

Run: `pnpm run dev`
Expected: Cream background. Main app as a wide card with 40/60 layout (logo left, content right). Three smaller contributor cards below in a 3-column grid. Serif titles. Hover shows colored top border on contributor cards.

- [ ] **Step 5: Commit**

```bash
git add src/components/Applications.jsx src/components/Applications.css src/index.css
git commit -m "feat: applications — main card + contributor cards on cream"
```

---

### Task 8: Team — editorial asymmetric layout

**Files:**
- Modify: `src/components/Team.jsx`
- Modify: `src/components/Team.css` — full rewrite

- [ ] **Step 1: Rewrite Team JSX**

Replace `src/components/Team.jsx` entirely:

```jsx
import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'Brigitte Démocrite',
    role: 'Fondatrice, Directrice Générale et Chef de Projet',
    description: 'Pilote POTOMITAN depuis sa conception. Vingt ans de direction de projets IT internationaux, dont plusieurs années comme Directrice de projets IT chez BNP Paribas.',
    photo: '/photo-brigitte.jpg'
  },
  {
    name: 'Monique Famibelle',
    role: 'Ambassadrice Communautaire et Développement Territorial',
    description: 'Développement des partenariats territoriaux en Guadeloupe et animation de la communauté VwaKréyòl. Secrétaire générale de l\'association Zyé a mangrov\'la.',
    photo: '/photo-monique.jpeg'
  },
  {
    name: 'Yisselda Rhoc',
    role: 'Co-fondatrice et Référente Architecture Numérique',
    description: 'Architecture technique et stratégie numérique. Vice-Présidente Ingénieure Senior chez BBR Partners (New York), Master IA de Sorbonne Université.',
    photo: '/photo-yisselda.jpg'
  }
];

const Team = () => {
  return (
    <section id="equipe" className="team-section-dark">
      <div className="team-container">
        <div className="team-header">
          <span className="section-label section-label-dark">L'équipe</span>
          <h2 className="team-title">Par et pour les communautés créoles</h2>
        </div>

        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-member-row">
              <img
                src={member.photo}
                alt={member.name}
                className="team-member-photo-dark"
                loading="lazy"
              />
              <div className="team-member-text">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.bio || member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
```

- [ ] **Step 2: Rewrite Team.css**

Replace `src/components/Team.css` entirely:

```css
/* Team — dark editorial */
.team-section-dark {
  background-color: var(--deep-green);
  padding: 6rem 2rem;
}

.team-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  gap: 4rem;
  align-items: start;
}

.team-header {
  position: sticky;
  top: 100px;
}

.team-title {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--gold);
  line-height: 1.3;
}

.team-members {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.team-member-row {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.team-member-photo-dark {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.team-member-text {
  flex: 1;
}

.team-member-name {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--gold);
  margin-bottom: 0.3rem;
}

.team-member-role {
  color: var(--mist);
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
}

.team-member-bio {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.7;
}

/* Responsive */
@media (max-width: 768px) {
  .team-section-dark {
    padding: 3rem 1.5rem;
  }

  .team-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .team-header {
    position: static;
  }

  .team-member-row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
}
```

- [ ] **Step 3: Verify team renders**

Run: `pnpm run dev`
Expected: Deep green background. Left column has sticky label + gold serif title. Right column has 3 members stacked, each with circular photo (80px) and text. Editorial feel, no cards.

- [ ] **Step 4: Commit**

```bash
git add src/components/Team.jsx src/components/Team.css
git commit -m "feat: team — dark editorial layout with 30/70 asymmetry"
```

---

### Task 9: Initiative — vertical narrative on cream

**Files:**
- Modify: `src/components/Initiative.jsx`
- Create: `src/components/Initiative.css`
- Modify: `src/index.css` — remove initiative styles (lines ~367-395)

- [ ] **Step 1: Create Initiative.css**

Create `src/components/Initiative.css`:

```css
/* Initiative — vertical narrative */
.initiative-section {
  background-color: var(--cream);
  padding: 6rem 2rem;
}

.initiative-container {
  max-width: 800px;
  margin: 0 auto;
}

.initiative-blocks {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.initiative-block-narrative {
  padding: 2rem 0;
}

.initiative-block-narrative h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.initiative-block-narrative p {
  color: var(--text-muted);
  line-height: 1.8;
  font-size: 1rem;
}

.initiative-block-narrative p + p {
  margin-top: 1rem;
}

.initiative-block-narrative strong {
  color: var(--text-dark);
}

.initiative-separator {
  width: 40px;
  height: 2px;
  border: none;
  margin: 0;
}

.initiative-separator-leaf {
  background-color: var(--leaf);
}

.initiative-separator-ember {
  background-color: var(--ember);
}

.initiative-big-number {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: var(--leaf);
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.initiative-big-label {
  color: var(--text-muted);
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .initiative-section {
    padding: 3rem 1.5rem;
  }

  .initiative-block-narrative h3 {
    font-size: 1.3rem;
  }

  .initiative-big-number {
    font-size: 2.5rem;
  }
}
```

- [ ] **Step 2: Rewrite Initiative.jsx**

Replace `src/components/Initiative.jsx` entirely:

```jsx
import React from 'react';
import './Initiative.css';

const Initiative = () => {
  return (
    <section id="initiative" className="initiative-section">
      <div className="initiative-container">
        <span className="section-label section-label-light">Notre vision</span>

        <div className="initiative-blocks">
          <div className="initiative-block-narrative">
            <h3>La Problématique</h3>
            <p>
              Lors d'urgences en Guadeloupe, <strong>75% des personnes en situation de stress
              communiquent principalement en créole</strong>, leur langue maternelle.
              Cette réalité crée un obstacle critique entre citoyens et services publics.
            </p>
            <p>
              Au-delà des urgences, cette barrière linguistique affecte l'accès aux droits,
              à l'emploi et aux services administratifs pour toute une population.
            </p>
          </div>

          <hr className="initiative-separator initiative-separator-leaf" />

          <div className="initiative-block-narrative">
            <h3>Notre Approche</h3>
            <p>
              POTOMITAN est né d'une <strong>co-construction communautaire</strong> : chaque expression
              est validée par des locuteurs natifs guadeloupéens, garantissant authenticité et pertinence.
            </p>
            <p>
              Notre technologie est conçue <strong>par et pour les communautés créoles</strong>,
              pas imposée de l'extérieur.
            </p>
          </div>

          <hr className="initiative-separator initiative-separator-ember" />

          <div className="initiative-block-narrative">
            <h3>Impact Social</h3>
            <p>
              <strong>Inclusion citoyenne</strong> : permettre à chacun de communiquer dans sa langue
              avec les services essentiels.
            </p>
            <p>
              <strong>Valorisation linguistique</strong> : documenter le créole guadeloupéen
              comme patrimoine vivant.
            </p>
            <p>
              <strong>Égalité territoriale</strong> : réduire la fracture entre territoires hexagonaux
              et ultramarins.
            </p>
          </div>

          <hr className="initiative-separator initiative-separator-leaf" />

          <div className="initiative-block-narrative">
            <h3>Notre Vision</h3>
            <p>
              La Guadeloupe est notre <strong>territoire pilote</strong>, le fondement d'une technologie
              d'inclusion linguistique qui peut servir l'ensemble des territoires créolophones.
            </p>
            <p>
              Martinique, Guyane, Réunion, puis Haïti, Maurice...
            </p>
            <span className="initiative-big-number">30 millions</span>
            <span className="initiative-big-label">
              de créolophones à base française et anglaise pourraient bénéficier de cette innovation.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiative;
```

- [ ] **Step 3: Remove old initiative CSS from index.css**

In `src/index.css`, delete the initiative-related styles: `.initiative`, `.initiative-content`, `.initiative-block`, `.initiative-block h3`, `.initiative-block p`, `.initiative-stats`, `.stat`, `.stat-number`, `.stat-label`. Also remove `.initiative-content` from the mobile responsive block.

- [ ] **Step 4: Verify initiative renders**

Run: `pnpm run dev`
Expected: Cream background. Centered column (800px). 4 narrative paragraphs separated by thin colored lines (green, orange, green). Vision block ends with "30 millions" in large green serif.

- [ ] **Step 5: Commit**

```bash
git add src/components/Initiative.jsx src/components/Initiative.css src/index.css
git commit -m "feat: initiative — vertical narrative with colored separators"
```

---

### Task 10: Final CTA + Footer

**Files:**
- Modify: `src/components/FinalCTA.jsx`
- Modify: `src/components/FinalCTA.css` — full rewrite
- Modify: `src/components/Footer.jsx`
- Modify: `src/index.css` — update footer styles (lines ~420-464)

- [ ] **Step 1: Rewrite FinalCTA.jsx**

Replace `src/components/FinalCTA.jsx` entirely:

```jsx
import React from 'react';
import './FinalCTA.css';

const CTA_BUTTONS = [
  {
    id: 'test',
    text: 'Tester le traducteur',
    href: 'https://traducteur.potomitan.io',
    variant: 'leaf'
  },
  {
    id: 'deploy',
    text: 'Déployer dans votre structure',
    href: 'mailto:contact@potomitan.io?subject=Demande de déploiement POTOMITAN',
    variant: 'ember'
  },
  {
    id: 'contribute',
    text: 'Enrichir le corpus créole',
    href: 'https://vwakreol.potomitan.io',
    variant: 'outline'
  }
];

const FinalCTA = () => {
  return (
    <section className="final-cta-section-dark">
      <h2 className="final-cta-title-dark">Prêt à agir ?</h2>

      <div className="final-cta-buttons-dark">
        {CTA_BUTTONS.map((cta) => (
          <a
            key={cta.id}
            href={cta.href}
            className={`final-cta-btn-dark final-cta-${cta.variant}`}
            target={cta.href.startsWith('http') ? '_blank' : undefined}
            rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {cta.text}
          </a>
        ))}
      </div>

      <div className="final-cta-contact-dark">
        <p>Vous avez d'autres questions ?</p>
        <a href="mailto:contact@potomitan.io">contact@potomitan.io</a>
      </div>
    </section>
  );
};

export default FinalCTA;
```

- [ ] **Step 2: Rewrite FinalCTA.css**

Replace `src/components/FinalCTA.css` entirely:

```css
/* Final CTA — gradient dark */
.final-cta-section-dark {
  background: linear-gradient(180deg, var(--deep-green) 0%, #071510 100%);
  padding: 6rem 2rem;
  text-align: center;
}

.final-cta-title-dark {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 400;
  color: var(--gold);
  margin-bottom: 3rem;
}

.final-cta-buttons-dark {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.final-cta-btn-dark {
  padding: 1.1rem 2.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  font-family: var(--font-body);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 220px;
  text-align: center;
}

.final-cta-leaf {
  background-color: var(--leaf);
  color: var(--deep-green);
}

.final-cta-leaf:hover {
  background-color: var(--leaf-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(46, 204, 113, 0.4);
}

.final-cta-ember {
  background-color: var(--ember);
  color: white;
}

.final-cta-ember:hover {
  background-color: var(--ember-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 140, 66, 0.4);
}

.final-cta-outline {
  background-color: transparent;
  color: var(--gold);
  border: 1px solid var(--gold);
}

.final-cta-outline:hover {
  background-color: rgba(232, 213, 183, 0.1);
  transform: translateY(-2px);
}

.final-cta-contact-dark {
  color: var(--text-light);
  font-size: 1rem;
}

.final-cta-contact-dark p {
  margin-bottom: 0.5rem;
}

.final-cta-contact-dark a {
  color: var(--leaf);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.final-cta-contact-dark a:hover {
  color: var(--gold);
}

/* Responsive */
@media (max-width: 768px) {
  .final-cta-section-dark {
    padding: 3rem 1.5rem;
  }

  .final-cta-title-dark {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .final-cta-buttons-dark {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .final-cta-btn-dark {
    width: 100%;
    max-width: 320px;
    min-width: auto;
  }
}
```

- [ ] **Step 3: Update Footer.jsx**

Replace `src/components/Footer.jsx` entirely:

```jsx
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="footer-dark">
      <div className="footer-container-dark">
        <div className="footer-section-dark">
          <h4>Potomitan</h4>
          <p>
            Traduction français ↔ créole guadeloupéen pour les urgences sociétales.
            L'inclusion linguistique au service de l'égalité territoriale.
          </p>
        </div>
        <div className="footer-section-dark">
          <h4>Nos Applications</h4>
          <div className="footer-links-dark">
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
        <div className="footer-section-dark">
          <h4>Contribuer</h4>
          <div className="footer-links-dark">
            <a href="https://vwakreol.potomitan.io" target="_blank" rel="noopener noreferrer">
              VwaKréyòl : Enregistrer des voix créoles
            </a>
            <a href="https://transcrire.potomitan.io" target="_blank" rel="noopener noreferrer">
              Valider les transcriptions
            </a>
          </div>
        </div>
        <div className="footer-section-dark">
          <h4>Contact</h4>
          <p>
            <a href="mailto:contact@potomitan.io">contact@potomitan.io</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom-dark">
        <p>&copy; {new Date().getFullYear()} Potomitan&trade; — Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
```

- [ ] **Step 4: Replace footer CSS in index.css**

Replace the footer section in `src/index.css` (from `.footer` through `.footer-bottom`) with:

```css
/* Footer */
.footer-dark {
  background-color: #071510;
  color: var(--text-light);
  padding: 3rem 2rem 1.5rem;
}

.footer-container-dark {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section-dark h4 {
  font-family: var(--font-heading);
  color: var(--gold);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 400;
}

.footer-section-dark p,
.footer-section-dark a {
  color: var(--text-light);
  line-height: 1.8;
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-section-dark a:hover {
  color: var(--leaf);
}

.footer-links-dark {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-bottom-dark {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--text-light);
  font-size: 0.85rem;
}
```

- [ ] **Step 5: Verify CTA + footer render**

Run: `pnpm run dev`
Expected: Final CTA has gradient dark background, gold serif title, three buttons (green, orange, gold outline). Footer is darkest section (#071510), gold serif column titles.

- [ ] **Step 6: Commit**

```bash
git add src/components/FinalCTA.jsx src/components/FinalCTA.css src/components/Footer.jsx src/index.css
git commit -m "feat: final CTA + footer — gradient dark with gold accents"
```

---

### Task 11: Cleanup — remove dead code and old styles

**Files:**
- Modify: `src/index.css` — remove remaining old styles
- Optional: `src/components/Impact93Seconds.jsx` and `src/components/Impact93Seconds.css` — can be kept (no longer imported) or deleted

- [ ] **Step 1: Clean up index.css**

Review `src/index.css` and remove any remaining old styles that reference the old variable names or are no longer used:
- Old footer classes (`.footer`, `.footer-container`, `.footer-section`, `.footer-links`, `.footer-bottom`)
- Any remaining `.apps-*` classes
- Any remaining `.initiative-*` classes
- Any remaining old responsive overrides for removed classes

The file should contain only: `:root` variables, `*` reset, `body`/`html`, `.navbar-*`, `.btn`/`.btn-*`, `.section`/`.section-*`, `.footer-dark`/`.footer-*-dark`, and the responsive media query.

- [ ] **Step 2: Verify the full page renders correctly**

Run: `pnpm run dev`
Expected: Full page loads with alternating dark/light sections. No console errors. No broken styles. All sections use the new palette and typography.

- [ ] **Step 3: Run production build**

Run: `pnpm run build`
Expected: Build completes with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/index.css
git commit -m "chore: remove dead CSS from old design"
```

---

### Task 12: Visual polish and responsive verification

**Files:**
- Potentially any CSS file for fine-tuning

- [ ] **Step 1: Test desktop layout at 1440px**

Run: `pnpm run dev`
Open browser at 1440px width. Check each section:
- Hero: two-screen scroll-snap works
- Comparison: 65/35 layout with dark inset
- Reconnaissance: centered single column, ~800px
- Applications: main card 40/60, three contributor cards in a row
- Team: 30/70 with sticky header
- Initiative: centered, 800px, narrative flow
- CTA: centered, three buttons in a row
- Footer: 4-column grid

- [ ] **Step 2: Test mobile layout at 375px**

Open browser DevTools, set width to 375px. Check:
- Hero: quote readable at 2rem, CTAs stack vertically
- Comparison: single column, dark inset full-width
- Reconnaissance: works naturally single-column
- Applications: main card stacks, contributor cards stack
- Team: members center-aligned with photo above text
- Initiative: works naturally
- CTA: buttons stack full-width
- Navbar: wraps correctly

- [ ] **Step 3: Fix any visual issues found**

Apply CSS fixes as needed. Common issues: spacing too tight on mobile, font sizes too large, overflow on narrow screens.

- [ ] **Step 4: Commit any fixes**

```bash
git add -A
git commit -m "fix: responsive polish for mobile and desktop"
```
