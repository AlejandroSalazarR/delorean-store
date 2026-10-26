# Graph Report - Delorean  (2026-10-26)

## Corpus Check
- 38 files · ~13,624 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .toml 1, .css 1)

## Summary
- 136 nodes · 273 edges · 9 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `63f8d9af`
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
- mockDatabase.js

## God Nodes (most connected - your core abstractions)
1. `App()` - 23 edges
2. `react` - 13 edges
3. `formatPrice()` - 8 edges
4. `AdminPanel()` - 7 edges
5. `DeloreanPreloader()` - 7 edges
6. `WhatsAppIcon()` - 7 edges
7. `lucide-react` - 6 edges
8. `StickyFooterBar()` - 6 edges
9. `PixelSprite()` - 6 edges
10. `CartDrawer()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `ViewSwitch()`  [EXTRACTED]
  src/App.jsx → src/components/admin/ViewSwitch.jsx
- `App()` --calls--> `AccountMenu()`  [EXTRACTED]
  src/App.jsx → src/components/layout/AccountMenu.jsx
- `App()` --calls--> `AnnouncementBar()`  [EXTRACTED]
  src/App.jsx → src/components/layout/AnnouncementBar.jsx
- `App()` --calls--> `LookbookHero()`  [EXTRACTED]
  src/App.jsx → src/components/layout/LookbookHero.jsx
- `App()` --calls--> `Navbar()`  [EXTRACTED]
  src/App.jsx → src/components/layout/Navbar.jsx

## Import Cycles
- None detected.

## Communities (9 total, 0 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.10
Nodes (22): dependencies, lucide-react@^1.61.0, react@^18.3.1, react-dom@^18.3.1, devDependencies, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3, vite@^6.4.5 (+14 more)

### Community 1 - "DeloreanPreloader.jsx"
Cohesion: 0.14
Nodes (13): LINKS, Navbar(), CHIBIS, DeloreanPreloader(), PARTICLES, pickNext(), buildRects(), PixelSprite() (+5 more)

### Community 2 - "App.jsx"
Cohesion: 0.13
Nodes (15): NO_FILTERS, OPTIONS, ViewSwitch(), AnnouncementBar(), CatalogBar(), Dots(), SORTS, FilterPanel() (+7 more)

### Community 3 - "react"
Cohesion: 0.23
Nodes (15): lucide-react, react, AccountMenu(), LEGAL, StickyFooterBar(), buildWhatsAppUrl(), CartDrawer(), FacebookIcon() (+7 more)

### Community 4 - "App"
Cohesion: 0.30
Nodes (12): App(), AdminPanel(), EMPTY, SIZES, STATUS, addProduct(), getAnimes(), getCategories() (+4 more)

### Community 5 - "Frontend Design"
Cohesion: 0.29
Nodes (6): Design principles, Frontend Design, Ground your designs in the subject matter, More on writing in design, Process: plan, review against the brief, build, critique, Restraint and self-critique

### Community 6 - "Proyecto: Delorean Store (E-commerce Friki & Anime - 10 años)"
Cohesion: 0.33
Nodes (5): graphify, Proyecto: Delorean Store (E-commerce de Moda Urbana, Anime & Coleccionismo - 10 años), Reglas de Ejecución, Sistema de Diseño y Marca, Stack Tecnológico

### Community 7 - "ProductCard.jsx"
Cohesion: 0.39
Nodes (5): LookbookHero(), TILES, ProductArt(), S, ProductCard()

### Community 9 - "mockDatabase.js"
Cohesion: 0.29
Nodes (5): animes, categories, db, products, SIZES

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `package.json`, `DeloreanPreloader.jsx`, `App.jsx`, `App`?**
  _High betweenness centrality (0.238) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.09846153846153846 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `react` to `package.json`, `DeloreanPreloader.jsx`, `App.jsx`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Should `DeloreanPreloader.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14492753623188406 - nodes in this community are weakly interconnected._
- **Should `App.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12681159420289856 - nodes in this community are weakly interconnected._