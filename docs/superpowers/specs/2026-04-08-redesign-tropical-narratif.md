# Redesign POTOMITAN — Tropical Narratif

## Summary

Complete visual redesign of the POTOMITAN landing page. Replace the generic SaaS template with a distinctive editorial identity rooted in Caribbean culture. The site becomes a narrative scroll experience with cinematic opening, alternating dark/light sections, serif typography, and asymmetric layouts.

**Constraint:** CSS-only redesign — no new dependencies beyond Google Fonts. Same React components, same content, same Vite build. No structural changes to the app architecture.

---

## Design System

### Color Palette

| Token              | Value                       | Usage                                    |
|--------------------|-----------------------------|------------------------------------------|
| `--deep-green`     | `#0d1f15`                   | Dark section backgrounds, navbar, footer |
| `--cream`          | `#faf6f0`                   | Light section backgrounds                |
| `--gold`           | `#e8d5b7`                   | Headings on dark, accents                |
| `--leaf`           | `#2ecc71`                   | Primary CTA, positive accents            |
| `--leaf-hover`     | `#27ae60`                   | Primary CTA hover                        |
| `--ember`          | `#FF8C42`                   | Secondary CTA, warm accents              |
| `--ember-hover`    | `#e67e22`                   | Secondary CTA hover                      |
| `--mist`           | `rgba(125, 206, 160, 0.4)`  | Labels, muted subtitles on dark          |
| `--text-light`     | `rgba(255, 255, 255, 0.6)`  | Body text on dark backgrounds            |
| `--text-dark`      | `#1a3a2a`                   | Body text on light backgrounds           |
| `--text-muted`     | `#666`                      | Secondary text on light backgrounds      |

### Typography

| Role          | Font                  | Weight    | Usage                                          |
|---------------|-----------------------|-----------|-------------------------------------------------|
| Headings      | DM Serif Display      | 400       | Section titles, hero text, emphasis             |
| Creole text   | DM Serif Display      | 400 italic| Creole phrases — always italic, always distinct |
| Body          | Inter                 | 400, 600  | Paragraphs, descriptions, UI text               |
| Labels        | Inter                 | 500       | Uppercase labels, badges, small text            |

Load via Google Fonts in `index.html`:
```
DM Serif Display:ital@0;1
Inter:wght@400;500;600;700
```

### Layout Principles

- Max content width: `1100px`
- Backgrounds are always full-bleed (100vw)
- No two consecutive sections share the same grid layout
- Dark sections: generous whitespace, minimal content, breathe
- Light sections: richer content, asymmetric grids
- Section padding: `6rem 2rem` desktop, `3rem 1.5rem` mobile
- Labels: uppercase, letter-spacing 3-4px, font-size 0.75rem, color `--mist` (dark) or `--text-muted` (light)

### Section Background Alternation

```
1. Hero (cinematic)        → --deep-green  (100vh, scroll-snap)
2. Comparison + Impact     → --cream       (asymmetric 65/35)
3. Reconnaissance          → --deep-green  (single column, centered)
4. Applications            → --cream       (main card + 3 small cards)
5. Team                    → --deep-green  (asymmetric 30/70)
6. Initiative              → --cream       (vertical narrative flow)
7. Final CTA               → gradient --deep-green → darker
```

---

## Section Specifications

### S1 — Hero (cinematic)

**Structure:** Two full-viewport screens with `scroll-snap-type: y mandatory`.

**Screen 1 — The quote:**
- Centered vertically and horizontally
- Creole quote in DM Serif Display italic, `--gold`, 3rem+ desktop / 2rem mobile
- French translation below, `--mist`, 0.9rem
- Animated scroll indicator (chevron, subtle bounce)
- No logo, no buttons, no description — emotion first

**Screen 2 — The product:**
- "Potomitan" in DM Serif Display, `--gold`, 4rem
- Subtitle: "Traduction instantanée français ↔ créole guadeloupéen" in Inter, `--mist`
- Primary CTA: "Tester maintenant" — `--leaf` background, `--deep-green` text, bold
- Text link: "Vous êtes une institution ? En savoir plus" — underlined, `--text-light`
- Secondary CTA: "Vous parlez créole ? Contribuer" — `--ember` background, white text

**Mobile:** Same structure, font sizes reduced. Scroll-snap preserved.

### S2 — Comparison + Impact (merged)

**Background:** `--cream`
**Layout:** Asymmetric grid `65% / 35%`, gap 3rem

**Left column (65%):**
- Label: "LE PROBLÈME" uppercase, `--text-muted`
- Title: "Google traduit des mots. Potomitan comprend une langue." — DM Serif Display, `--text-dark`, 2rem
- Two translation examples displayed as quote blocks (not a table):
  - Creole phrase in DM Serif Display italic, 1.3rem
  - Google result: struck through or red-tinted, with ❌
  - Potomitan result: `--leaf` color, with ✓
- Paragraph about offline capability in Inter, `--text-muted`

**Right column (35%):**
- Inset block with `--deep-green` background, border-radius 12px
- Number "93" in DM Serif Display, `--leaf`, 5rem
- "secondes perdues par intervention d'urgence" in `--text-light`
- Three secondary metrics stacked below:
  - 3000 — expressions validées
  - 2M+ — créolophones dans les 4 DOM
  - <2s — temps de traduction
- Each metric: number in `--gold` bold, label in `--text-light`

**Mobile:** Stack to single column. Dark inset block becomes full-width.

### S3 — Reconnaissance

**Background:** `--deep-green`, padding 6rem vertical
**Layout:** Single column, max-width 800px, centered

- Label: "CE QUI VALIDE POTOMITAN" uppercase, `--mist`
- 4 blocks stacked vertically, each with:
  - `border-left: 3px solid` — alternating colors: `--leaf`, `--ember`, `--gold`, `--leaf`
  - Lucide icon in `--gold`, 28px
  - Title in DM Serif Display, `--gold`, 1.3rem
  - List items in `--text-light`, Inter
  - Links remain clickable, underlined on hover
- Bottom: news banner as subtle inset block (`rgba(255,255,255,0.05)` background), linking to `/actualites`

**Mobile:** Same single-column layout, works naturally.

### S4 — Applications

**Background:** `--cream`

**Level 1 — Main app (Traducteur):**
- Full-width card, white background, border-radius 16px, subtle shadow
- Internal layout: asymmetric `40% / 60%`
  - Left: Potomitan logo (large), badge "Application mobile installable"
  - Right: Title in DM Serif Display, description in Inter, feature list (urgences, catalogue, traduction), CTA "Tester maintenant" in `--leaf`

**Level 2 — Contributor apps:**
- Label: "CONTRIBUER" uppercase, `--text-muted`
- Subtitle paragraph in `--text-muted`
- 3 cards side by side, white background, border-radius 12px
- Each card:
  - Colored icon circle (Lucide icon in white) — yellow (VwaKréyòl), blue (Maké), green (Klavyé)
  - Title in DM Serif Display, `--text-dark`
  - Description in Inter, `--text-muted`
  - Badge
  - Hover: `translateY(-4px)` + `border-top: 3px solid {app-color}`

**Mobile:** Main app card stacks vertically. Contributor cards stack to single column.

### S5 — Team

**Background:** `--deep-green`
**Layout:** Asymmetric `30% / 70%`

**Left column (30%):**
- Label: "L'ÉQUIPE" uppercase, `--mist`
- Title: "Par et pour les communautés créoles" — DM Serif Display, `--gold`, 1.8rem

**Right column (70%):**
- 3 team members stacked vertically
- Each member: horizontal layout (photo | text)
  - Photo: circular, 80px, subtle border `rgba(255,255,255,0.1)`
  - Name: DM Serif Display, `--gold`, bold
  - Role: Inter, `--mist`, 0.85rem
  - Bio: Inter, `--text-light`, 0.9rem
- No cards, no boxes — editorial style

**Mobile:** Stack to single column. Left column becomes a header above the members.

### S6 — Initiative

**Background:** `--cream`
**Layout:** Vertical narrative flow, max-width 800px, centered

- Label: "NOTRE VISION" uppercase, `--text-muted`
- 4 blocks as narrative paragraphs (not a 2x2 grid):
  - Each block: title in DM Serif Display bold, `--text-dark`, 1.5rem
  - Body in Inter, `--text-muted`, line-height 1.8
  - Separated by thin colored lines (40px wide): alternating `--leaf` / `--ember`
- Final block "Vision" ends with large number: "30 millions" in DM Serif Display, `--leaf`, 3rem, followed by "de créolophones à base française et anglaise"

**Mobile:** Same layout, works naturally as single-column.

### S7 — Final CTA

**Background:** `linear-gradient(180deg, --deep-green, #071510)`
**Layout:** Centered, generous padding (6rem)

- Title: "Prêt à agir ?" — DM Serif Display, `--gold`, 2.5rem
- 3 buttons in a row:
  - "Tester le traducteur" → `--leaf` background, `--deep-green` text
  - "Déployer dans votre structure" → `--ember` background, white text
  - "Enrichir le corpus" → outline, `1px solid --gold`, `--gold` text
- Contact: "contact@potomitan.io" in `--text-light`, below buttons

**Mobile:** Buttons stack vertically, full-width.

### Navbar

- Background: `--deep-green`, sticky, z-index 1000
- Logo + "POTOMITAN" in DM Serif Display, `--gold` (not green)
- Menu links: Inter 500, `--text-light`, hover → `--gold`
- Navigation: use React Router `<Link>` with scroll-to-section (replace broken hash anchors)
- Mobile: hamburger menu or vertical collapse

### Footer

- Background: `#071510` (darker than `--deep-green`)
- Column titles: DM Serif Display, `--gold`
- Links: Inter, `--text-light`, hover → `--leaf`
- Bottom bar: `--text-light` dimmed, border-top `rgba(255,255,255,0.06)`

---

## Technical Notes

### Files to Modify

- `index.html` — add Google Fonts link (DM Serif Display + Inter)
- `src/index.css` — replace CSS variables, global styles, section alternation
- `src/components/Hero.jsx` + `Hero.css` — cinematic two-screen structure with scroll-snap
- `src/components/GoogleComparison.jsx` + `GoogleComparison.css` — merge with Impact93Seconds, asymmetric layout
- `src/components/Impact93Seconds.jsx` + `Impact93Seconds.css` — merge into GoogleComparison (or keep as sub-component)
- `src/components/Reconnaissance.jsx` + `Reconnaissance.css` — single-column stacked layout
- `src/components/Applications.jsx` — create `Applications.css`, main card + contributor cards
- `src/components/Team.jsx` + `Team.css` — asymmetric 30/70, editorial member layout
- `src/components/Initiative.jsx` — create or update CSS, vertical narrative flow
- `src/components/FinalCTA.jsx` + `FinalCTA.css` — gradient background, centered layout
- `src/components/Navbar.jsx` — React Router links, gold branding
- `src/components/Footer.jsx` — darker background, gold titles

### Files to Create

- `src/components/Applications.css` — currently missing, styles in index.css + inline

### Cleanup

- Remove dead CSS from `Hero.css` (~50% unused: `.hero-partners`, `.hero-press`, `.hero-stats`, `.hero-credibility`)
- Remove inline styles from `Applications.jsx` and `Initiative.jsx`
- Remove unused CSS variables from `index.css` (`--primary-blue`, `--light-green`, `--light-blue`, `--yellow`, `--red`)

### No New Dependencies

- Google Fonts loaded via `<link>` in `index.html` (no npm package)
- scroll-snap is native CSS
- All animations are CSS-only (no JS animation library)

### Responsive Breakpoint

- Single breakpoint: `768px` (same as current)
- Below 768px: all asymmetric grids stack to single column, scroll-snap preserved, font sizes reduced
