// Esquema relacional idéntico a Supabase (snake_case, FKs por id).
// Para migrar: crear las tablas con estas columnas y reemplazar src/services/api.js.

export const categories = [
  { id: 1, slug: 'camisetas', name: 'Camisetas Anime/Streetwear', kind: 'tee' },
  { id: 2, slug: 'gorras', name: 'Gorras Bordadas', kind: 'cap' },
  { id: 3, slug: 'figuras', name: 'Figuras de Colección', kind: 'figure' },
  { id: 4, slug: 'mugs', name: 'Mugs', kind: 'mug' },
  { id: 5, slug: 'libretas', name: 'Libretas MDF Glitter', kind: 'notebook' },
  { id: 6, slug: 'accesorios', name: 'Accesorios', kind: 'accessory' },
]

export const animes = [
  { id: 1, slug: 'bleach', name: 'Bleach', short: 'BLEACH', color: '#F26522', accent: '#111111' },
  { id: 2, slug: 'jujutsu-kaisen', name: 'Jujutsu Kaisen', short: 'JJK', color: '#3B5BDB', accent: '#B197FC' },
  { id: 3, slug: 'one-piece', name: 'One Piece', short: 'ONE PIECE', color: '#E03131', accent: '#FFB800' },
  { id: 4, slug: 'demon-slayer', name: 'Demon Slayer', short: 'KIMETSU', color: '#1F8A4C', accent: '#111111' },
  { id: 5, slug: 'naruto', name: 'Naruto', short: 'NARUTO', color: '#FF8A00', accent: '#1C3FAA' },
]

// price / compare_at_price en COP. image_url queda null hasta tener fotos reales:
// mientras tanto ProductArt dibuja la prenda sobre fondo neutro.
const SIZES = ['S', 'M', 'L', 'XL']
const p = (id, name, description, price, category_id, anime_id, extra = {}) => ({
  id,
  name,
  description,
  price,
  compare_at_price: null,
  category_id,
  anime_id,
  image_url: null,
  badge: null,
  status: 'stock', // 'stock' | 'preventa'
  sizes: category_id === 1 ? SIZES : [],
  stock: 10,
  created_at: `2025-01-${String(id).padStart(2, '0')}T00:00:00Z`,
  ...extra,
})

export const products = [
  // Camisetas oversize
  p(1, 'Camiseta Oversize Ichigo Hollow', 'Algodón pesado, corte oversize, estampado frontal Bleach.', 69900, 1, 1, { badge: 'OVERSIZE UNISEX' }),
  p(2, 'Camiseta Oversize Bankai Tensa Zangetsu', 'Estampado en espalda grande, caída oversize.', 85000, 1, 1, { badge: 'NUEVO DROP' }),
  p(3, 'Camiseta Oversize Gojo Infinito', 'Negra, estampado Satoru Gojo, corte streetwear.', 85000, 1, 2, { badge: 'OVERSIZE UNISEX' }),
  p(4, 'Camiseta Oversize Sukuna Domain', 'Expansión de dominio en el pecho, algodón pesado.', 69900, 1, 2, { compare_at_price: 85000 }),
  p(5, 'Camiseta Oversize Jolly Roger Sombrero de Paja', 'Bandera pirata de los Sombrero de Paja.', 69900, 1, 3, { badge: 'OVERSIZE UNISEX' }),
  p(6, 'Camiseta Oversize Luffy Gear 5', 'Luffy Gear 5 a todo color, edición numerada.', 109900, 1, 3, { badge: 'EDICIÓN LIMITADA' }),
  // Gorras bordadas
  p(7, 'Gorra Bordada Luffy', 'Sombrero de paja bordado, ajustable.', 69900, 2, 3, { badge: 'NUEVO DROP' }),
  p(8, 'Gorra Bordada Tanjiro', 'Patrón hanafuda bordado en el frente.', 69900, 2, 4),
  p(9, 'Gorra Bordada Zoro', 'Tres espadas bordadas, ajustable.', 59900, 2, 3, { compare_at_price: 69900 }),
  // Figuras
  p(10, 'Figura Satoru Gojo 15 cm', 'Figura de colección en caja, PVC.', 109900, 3, 2, { status: 'preventa' }),
  p(11, 'Figura Roronoa Zoro 15 cm', 'Pose Santoryu, base incluida.', 109900, 3, 3),
  p(12, 'Figura Ichigo Kurosaki 15 cm', 'Pose Bankai, PVC pintado a mano.', 109900, 3, 1, { badge: 'EDICIÓN LIMITADA' }),
  p(13, 'Figura Tanjiro Kamado 15 cm', 'Respiración del agua, efecto transparente.', 85000, 3, 4),
  // Mugs
  p(14, 'Mug Sombrero de Paja', 'Cerámica 11 oz, apto lavavajillas.', 39900, 4, 3),
  p(15, 'Mug Hanafuda Tanjiro', 'Cerámica 11 oz, interior naranja.', 39900, 4, 4),
  p(16, 'Mug Gojo Sin Límites', 'Cerámica 11 oz, interior azul.', 39900, 4, 2, { compare_at_price: 49900 }),
  // Libretas MDF Glitter
  p(17, 'Libreta MDF Glitter Bleach', 'Tapa de MDF con glitter, 80 hojas.', 29900, 5, 1),
  p(18, 'Libreta MDF Glitter Jujutsu Kaisen', 'Tapa de MDF con glitter, 80 hojas.', 29900, 5, 2),
  p(19, 'Libreta MDF Glitter One Piece', 'Tapa de MDF con glitter, 80 hojas.', 29900, 5, 3, { badge: 'NUEVO DROP' }),
  p(20, 'Libreta MDF Glitter Demon Slayer', 'Tapa de MDF con glitter, 80 hojas.', 29900, 5, 4),
  // Accesorios
  p(21, 'Scrunchie Akatsuki', 'Elástico de tela con nubes rojas.', 14900, 6, 5),
  p(22, 'Collar Aldea de la Hoja', 'Collar con dije de la Hoja, acero.', 19900, 6, 5, { status: 'preventa' }),
]

export const db = { categories, animes, products }
