import { db } from '../data/mockDatabase'

// Misma firma que tendría con Supabase: async y devolviendo filas con ids.
// Reemplazar cada función por supabase.from('<tabla>').select(...) cuando exista el backend.
const wait = (data) => new Promise((resolve) => setTimeout(() => resolve(data), 40))

export const getCategories = () => wait(db.categories)
export const getAnimes = () => wait(db.animes)

const SORTS = {
  price_asc: (a, b) => a.price - b.price,
  price_desc: (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name, 'es'),
  newest: (a, b) => b.created_at.localeCompare(a.created_at),
}

export const getProducts = ({ animeId = null, categoryIds = [], onSale = false, query = '', sort = 'newest' } = {}) => {
  const q = query.trim().toLowerCase()
  const rows = db.products
    .filter(
      (p) =>
        (!animeId || p.anime_id === animeId) &&
        (!categoryIds.length || categoryIds.includes(p.category_id)) &&
        (!onSale || p.compare_at_price) &&
        (!q || p.name.toLowerCase().includes(q)),
    )
    .sort(SORTS[sort] || SORTS.newest)
  return wait(rows)
}

// Escrituras en memoria (se pierden al recargar). Con Supabase: insert/update sobre `products`.
export const addProduct = ({ name, price, category_id, anime_id, sizes, status }) => {
  const id = Math.max(0, ...db.products.map((p) => p.id)) + 1
  const row = {
    id, name, description: '', price, compare_at_price: null, category_id, anime_id,
    image_url: null, badge: 'NUEVO DROP', status, sizes, stock: 10, created_at: new Date().toISOString(),
  }
  db.products.push(row)
  return wait(row)
}

export const updateProduct = (id, patch) => {
  const row = db.products.find((p) => p.id === id)
  if (row) Object.assign(row, patch)
  return wait(row)
}
