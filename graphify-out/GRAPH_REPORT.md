# Graph Report - Delorean  (2026-10-26)

## Corpus Check
- 41 files · ~15,036 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .toml 1, .css 1)

## Summary
- 145 nodes · 315 edges · 9 communities
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `27641b48`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- DeloreanPreloader.jsx
- App.jsx
- react
- App
- Frontend Design
- Proyecto: Delorean Store (E-commerce Friki & Anime - 10 años)
- ProductCard.jsx
- useRewards.js

## God Nodes (most connected - your core abstractions)
1. `App()` - 26 edges
2. `react` - 16 edges
3. `formatPrice()` - 11 edges
4. `WhatsAppIcon()` - 9 edges
5. `lucide-react` - 8 edges
6. `ProductModal()` - 8 edges
7. `AdminPanel()` - 7 edges
8. `DeloreanPreloader()` - 7 edges
9. `CartDrawer()` - 7 edges
10. `ProductArt()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `AdminPanel()`  [EXTRACTED]
  src/App.jsx → src/components/admin/AdminPanel.jsx
- `App()` --calls--> `AccountMenu()`  [EXTRACTED]
  src/App.jsx → src/components/layout/AccountMenu.jsx
- `App()` --calls--> `LookbookHero()`  [EXTRACTED]
  src/App.jsx → src/components/layout/LookbookHero.jsx
- `App()` --calls--> `Navbar()`  [EXTRACTED]
  src/App.jsx → src/components/layout/Navbar.jsx
- `App()` --calls--> `StickyFooterBar()`  [EXTRACTED]
  src/App.jsx → src/components/layout/StickyFooterBar.jsx

## Import Cycles
- None detected.

## Communities (9 total, 0 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.11
Nodes (22): dependencies, lucide-react@^1.61.0, react@^18.3.1, react-dom@^18.3.1, devDependencies, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3, vite@^6.4.5 (+14 more)

### Community 1 - "DeloreanPreloader.jsx"
Cohesion: 0.14
Nodes (13): LINKS, Navbar(), CHIBIS, DeloreanPreloader(), PARTICLES, pickNext(), buildRects(), PixelSprite() (+5 more)

### Community 2 - "App.jsx"
Cohesion: 0.15
Nodes (16): react, App(), NO_FILTERS, AnnouncementBar(), CatalogBar(), Dots(), SORTS, FilterPanel() (+8 more)

### Community 3 - "react"
Cohesion: 0.22
Nodes (17): lucide-react, AccountMenu(), LEGAL, StickyFooterBar(), CartDrawer(), ProductModal(), STYLE_GUIDE, FacebookIcon() (+9 more)

### Community 4 - "App"
Cohesion: 0.16
Nodes (16): AdminPanel(), EMPTY, SIZES, STATUS, animes, categories, db, products (+8 more)

### Community 5 - "Frontend Design"
Cohesion: 0.29
Nodes (6): Design principles, Frontend Design, Ground your designs in the subject matter, More on writing in design, Process: plan, review against the brief, build, critique, Restraint and self-critique

### Community 6 - "Proyecto: Delorean Store (E-commerce Friki & Anime - 10 años)"
Cohesion: 0.33
Nodes (5): graphify, Proyecto: Delorean Store (E-commerce de Moda Urbana, Anime & Coleccionismo - 10 años), Reglas de Ejecución, Sistema de Diseño y Marca, Stack Tecnológico

### Community 7 - "ProductCard.jsx"
Cohesion: 0.39
Nodes (5): LookbookHero(), TILES, ProductArt(), S, ProductCard()

### Community 8 - "useRewards.js"
Cohesion: 0.60
Nodes (4): load(), tierInfo(), TIERS, useRewards()

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.jsx` to `package.json`, `DeloreanPreloader.jsx`, `react`, `App`, `useRewards.js`?**
  _High betweenness centrality (0.230) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10869565217391304 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `react` to `package.json`, `DeloreanPreloader.jsx`, `App.jsx`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Should `DeloreanPreloader.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14492753623188406 - nodes in this community are weakly interconnected._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14814814814814814 - nodes in this community are weakly interconnected._