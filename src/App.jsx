import { useEffect, useMemo, useState } from 'react'
import DeloreanPreloader from './components/preloader/DeloreanPreloader'
import AnnouncementBar from './components/layout/AnnouncementBar'
import Navbar from './components/layout/Navbar'
import LookbookHero from './components/layout/LookbookHero'
import StickyFooterBar from './components/layout/StickyFooterBar'
import CatalogBar from './components/shop/CatalogBar'
import FilterPanel from './components/shop/FilterPanel'
import ProductCard from './components/shop/ProductCard'
import CartDrawer from './components/shop/CartDrawer'
import DemoPanel from './components/ui/DemoPanel'
import AdminPanel from './components/admin/AdminPanel'
import ViewSwitch from './components/admin/ViewSwitch'
import useCart from './hooks/useCart'
import { getAnimes, getCategories, getProducts } from './services/api'

const NO_FILTERS = { animeId: null, categoryIds: [], onSale: false, query: '' }

export default function App() {
  const [preloadRun, setPreloadRun] = useState(1) // 0 = oculto; cambiar la key lo repite
  const [animes, setAnimes] = useState([])
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState(NO_FILTERS)
  const [sort, setSort] = useState('newest')
  const [cols, setCols] = useState(4)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [theme, setTheme] = useState('warm')
  const [adminUnlocked, setAdminUnlocked] = useState(false)
  const [view, setView] = useState('user') // 'user' | 'admin'
  const [rev, setRev] = useState(0) // sube cuando el admin cambia el inventario
  const cart = useCart()

  useEffect(() => {
    getAnimes().then(setAnimes)
    getCategories().then(setCategories)
  }, [])

  useEffect(() => {
    getProducts({ ...filters, sort }).then(setProducts)
  }, [filters, sort, rev])

  const activeCount = (filters.animeId ? 1 : 0) + filters.categoryIds.length + (filters.onSale ? 1 : 0)
  const filtering = activeCount > 0 || filters.query.trim() !== ''
  const patch = (p) => setFilters((f) => ({ ...f, ...p }))
  const applyFilter = (p) => {
    setFilters({ ...NO_FILTERS, ...p })
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
  }

  const gridClass = useMemo(
    () => (cols === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4'),
    [cols],
  )

  return (
    <div data-theme={theme} className="relative isolate min-h-screen">
      <div className="page-bg" aria-hidden="true" />
      {preloadRun > 0 && <DeloreanPreloader key={preloadRun} onDone={() => setPreloadRun(0)} />}

      {adminUnlocked && <ViewSwitch view={view} onView={setView} />}

      {view === 'admin' ? (
        <AdminPanel animes={animes} categories={categories} rev={rev} onChanged={() => setRev((r) => r + 1)} />
      ) : (
        <>
      <AnnouncementBar />
      <Navbar
        query={filters.query}
        onQuery={(query) => patch({ query })}
        cartCount={cart.count}
        onOpenCart={() => setCartOpen(true)}
        onFilter={applyFilter}
        onOpenFilters={() => { setFiltersOpen(true); document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' }) }}
      />

      <main className="pb-14">
        {!filtering && <LookbookHero animes={animes} onFilter={applyFilter} />}

        <section id="catalogo" className="mx-auto max-w-[1600px] scroll-mt-20 px-4 pt-6 lg:px-8">
          <CatalogBar
            activeCount={activeCount}
            onToggleFilters={() => setFiltersOpen((o) => !o)}
            sort={sort}
            onSort={setSort}
            total={products.length}
            cols={cols}
            onCols={setCols}
          />
          {filtersOpen && (
            <FilterPanel
              animes={animes}
              categories={categories}
              animeId={filters.animeId}
              categoryIds={filters.categoryIds}
              onAnime={(animeId) => patch({ animeId })}
              onCategories={(categoryIds) => patch({ categoryIds })}
              onClear={() => setFilters(NO_FILTERS)}
            />
          )}

          {products.length === 0 ? (
            <p className="py-16 text-center text-sm text-neutral-500">No encontramos productos con esos filtros. Prueba con otra búsqueda o limpia los filtros.</p>
          ) : (
            <div className={`mt-6 grid gap-x-3 gap-y-8 ${gridClass}`}>
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  anime={animes.find((a) => a.id === p.anime_id)}
                  category={categories.find((c) => c.id === p.category_id)}
                  onAdd={(prod, size) => { cart.add(prod, size); setCartOpen(true) }}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <StickyFooterBar onAdmin={() => { setAdminUnlocked(true); setView('admin'); window.scrollTo(0, 0) }} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cart.items} total={cart.total} onQty={cart.setQty} onClear={cart.clear} />
        </>
      )}

      <DemoPanel theme={theme} onTheme={setTheme} onReplay={() => setPreloadRun((n) => n + 1)} />
    </div>
  )
}
