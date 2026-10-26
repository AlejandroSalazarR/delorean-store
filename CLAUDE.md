## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- When graphify-out/graph.json exists, run `graphify query "<question>"` before your first grep, search or source-file read for a codebase question, and put this rule in every subagent prompt that explores code. Read raw files only for lines the graph or an earlier read already located. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- A committed graphify-out/graph.json is rewritten whole on every build, so a large diff to it in a pull request is expected. Do not flag it as churn or suggest skipping the graph rebuild or its hooks.

# Proyecto: Delorean Store (E-commerce Friki & Anime - 10 años)

## Stack Tecnológico
- Frontend: React 18 + Vite + Tailwind CSS + Lucide Icons.
- Arquitectura de Datos: Capa de servicio desacoplada (`src/services/api.js` leyendo de `src/data/mockDatabase.js` con esquema relacional idéntico a Supabase: tablas `categories`, `animes`, `products`).

## Sistema de Diseño y Marca
- Estética: "Neo-Manga Streetwear & Retro 16-bit". Combina fondos limpios con texturas de semitono manga (halftone dots), bordes marcados estilo viñeta de manga y detalles pixel art.
- Paleta Oficial:
  - Naranja Delorean (Primario): `#FF6B00` y `#F26522`
  - Amarillo Rayo (Acento): `#FFB800`
  - Fondo Oscuro Manga: `#111111` y `#1A1A1A`
  - Papel Manga (Modo Claro/Tarjetas): `#F8F9FA`
- Categorías reales: Camisetas Anime/Streetwear, Gorras Bordadas, Figuras de Colección, Mugs, Libretas MDF Glitter y Accesorios (Scrunchies, Collares).
- Conversión: Carrito de compras interactivo con checkout directo a WhatsApp y catálogo filtrable por serie de Anime y por tipo de producto.

## Reglas de Ejecución
- Usa siempre la skill `frontend-design` para componentes visuales.
- Sé conciso, no des explicaciones largas y escribe código modular.
