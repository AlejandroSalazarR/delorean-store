import { Search, ShoppingBag } from 'lucide-react'
import Bolt from '../ui/Bolt'

// Cada enlace aplica un filtro: categoryIds, onSale o un reinicio ({}).
const LINKS = [
  { label: 'Ropa', filter: { categoryIds: [1] } },
  { label: 'Gorras', filter: { categoryIds: [2] } },
  { label: 'Figuras & Mugs', filter: { categoryIds: [3, 4] } },
  { label: 'Licencias / Animes', open: 'filters' },
  { label: 'Rebajas', filter: { onSale: true } },
  { label: 'Ver todo', filter: {} },
]

export default function Navbar({ query, onQuery, cartCount, onOpenCart, onFilter, onOpenFilters }) {
  const go = (l) => (l.open ? onOpenFilters() : onFilter(l.filter))

  return (
    <header className="site-header sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1600px] items-center gap-6 px-4 py-3 lg:px-8">
        <a href="#top" onClick={() => onFilter({})} className="flex shrink-0 items-center gap-1.5" aria-label="Delorean Store, inicio">
          <Bolt className="h-7 w-5" stroke="none" />
          <span className="text-sm font-bold uppercase tracking-[0.18em]">
            Delorean <span className="text-delorean">Store</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <button key={l.label} onClick={() => go(l)} className="text-xs font-medium uppercase tracking-wider hover:text-delorean">
              {l.label}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <label className="hidden items-center gap-2 border-b border-ink pb-0.5 md:flex">
            <Search size={14} />
            <input
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              placeholder="BUSCAR"
              aria-label="Buscar productos"
              className="w-32 bg-transparent text-xs uppercase tracking-wider outline-none placeholder:text-neutral-400 lg:w-44"
            />
          </label>
          <button className="hidden text-xs font-medium uppercase tracking-wider hover:text-delorean sm:block">Iniciar sesión</button>
          <button onClick={onOpenCart} className="relative" aria-label={`Abrir carrito, ${cartCount} productos`}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-delorean px-1 text-[10px] font-semibold text-white">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      <nav className="flex gap-5 overflow-x-auto border-t border-gray-100 px-4 py-2 lg:hidden" aria-label="Principal móvil">
        {LINKS.map((l) => (
          <button key={l.label} onClick={() => go(l)} className="shrink-0 text-[11px] font-medium uppercase tracking-wider">
            {l.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
