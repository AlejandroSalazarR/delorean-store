# Graph Report - Delorean  (2026-10-26)

## Corpus Check
- 31 files · ~12,298 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: (none) 1, .css 1)

## Summary
- 119 nodes · 218 edges · 9 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- package.json
- DeloreanPreloader.jsx
- App.jsx
- StickyFooterBar.jsx
- App
- Frontend Design
- Proyecto: Delorean Store (E-commerce Friki & Anime - 10 años)
- ProductCard.jsx
- CatalogBar.jsx

## God Nodes (most connected - your core abstractions)
1. `App()` - 18 edges
2. `react` - 9 edges
3. `formatPrice()` - 8 edges
4. `AdminPanel()` - 7 edges
5. `DeloreanPreloader()` - 7 edges
6. `lucide-react` - 6 edges
7. `wait()` - 6 edges
8. `getProducts()` - 6 edges
9. `Frontend Design` - 6 edges
10. `StickyFooterBar()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `ViewSwitch()`  [EXTRACTED]
  src/App.jsx → src/components/admin/ViewSwitch.jsx
- `App()` --calls--> `AnnouncementBar()`  [EXTRACTED]
  src/App.jsx → src/components/layout/AnnouncementBar.jsx
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
Cohesion: 0.14
Nodes (17): devDependencies, tailwindcss@^4.3.3, @tailwindcss/vite@^4.3.3, vite@^6.4.5, @vitejs/plugin-react@^4.7.0, name, private, scripts (+9 more)

### Community 1 - "DeloreanPreloader.jsx"
Cohesion: 0.20
Nodes (10): LINKS, Navbar(), CHIBIS, DeloreanPreloader(), PARTICLES, pickNext(), buildRects(), PixelSprite() (+2 more)

### Community 2 - "App.jsx"
Cohesion: 0.16
Nodes (10): react, NO_FILTERS, OPTIONS, ViewSwitch(), AnnouncementBar(), FilterPanel(), Opt(), DemoPanel() (+2 more)

### Community 3 - "StickyFooterBar.jsx"
Cohesion: 0.20
Nodes (11): dependencies, lucide-react@^1.61.0, react@^18.3.1, react-dom@^18.3.1, lucide-react, react-dom, Facebook(), Instagram() (+3 more)

### Community 4 - "App"
Cohesion: 0.17
Nodes (17): App(), AdminPanel(), EMPTY, SIZES, STATUS, animes, categories, db (+9 more)

### Community 5 - "Frontend Design"
Cohesion: 0.29
Nodes (6): Design principles, Frontend Design, Ground your designs in the subject matter, More on writing in design, Process: plan, review against the brief, build, critique, Restraint and self-critique

### Community 6 - "Proyecto: Delorean Store (E-commerce Friki & Anime - 10 años)"
Cohesion: 0.33
Nodes (5): graphify, Proyecto: Delorean Store (E-commerce Friki & Anime - 10 años), Reglas de Ejecución, Sistema de Diseño y Marca, Stack Tecnológico

### Community 7 - "ProductCard.jsx"
Cohesion: 0.25
Nodes (10): LookbookHero(), TILES, buildWhatsAppUrl(), CartDrawer(), ProductArt(), S, ProductCard(), formatPrice() (+2 more)

### Community 8 - "CatalogBar.jsx"
Cohesion: 0.67
Nodes (3): CatalogBar(), Dots(), SORTS

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.jsx` to `package.json`, `DeloreanPreloader.jsx`, `StickyFooterBar.jsx`, `App`, `ProductCard.jsx`?**
  _High betweenness centrality (0.226) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.14035087719298245 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `StickyFooterBar.jsx` to `package.json`, `DeloreanPreloader.jsx`, `App.jsx`, `ProductCard.jsx`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._