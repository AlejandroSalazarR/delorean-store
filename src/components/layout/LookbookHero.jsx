import ProductArt from '../shop/ProductArt'

const TILES = [
  { label: 'Ropa', kind: 'tee', animeId: 2, filter: { categoryIds: [1] } },
  { label: 'Gorras', kind: 'cap', animeId: 3, filter: { categoryIds: [2] } },
  { label: 'Figuras', kind: 'figure', animeId: 1, filter: { categoryIds: [3] } },
]

export default function LookbookHero({ animes, onFilter }) {
  return (
    <section id="top" className="mx-auto max-w-[1600px] px-4 pb-6 pt-8 lg:px-8">
      <div className="grid gap-px md:grid-cols-[1.1fr_2fr]">
        <div className="glass flex flex-col justify-between p-5 md:pr-10">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">Lookbook urbano · Medellín</p>
          <h1 className="my-8 text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-6xl">
            Anime para<br />usar a diario.
          </h1>
          <div>
            <p className="mb-5 max-w-xs text-sm text-neutral-600">
              Camisetas oversize, gorras bordadas y figuras de Bleach, Jujutsu Kaisen, One Piece y más. Diez años de moda urbana, cultura pop y coleccionismo.
            </p>
            <button
              onClick={() => onFilter({})}
              className="bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-delorean"
            >
              Ver todo
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-px">
          {TILES.map((t) => (
            <button key={t.label} onClick={() => onFilter(t.filter)} className="group relative aspect-[3/4] overflow-hidden bg-[var(--card-bg)] text-left">
              <ProductArt kind={t.kind} anime={animes.find((a) => a.id === t.animeId)} className="absolute inset-0 h-full w-full scale-110 transition-transform duration-700 group-hover:scale-125" />
              <span className="absolute bottom-3 left-3 bg-white px-2 py-1 text-[11px] font-semibold uppercase tracking-widest">{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
