function Opt({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`border-b pb-0.5 text-xs uppercase tracking-wider ${active ? 'border-delorean font-semibold text-ink' : 'border-transparent text-neutral-500 hover:text-ink'}`}
    >
      {children}
    </button>
  )
}

export default function FilterPanel({ animes, categories, animeId, categoryIds, onAnime, onCategories, onClear }) {
  const toggle = (id) => onCategories(categoryIds.includes(id) ? categoryIds.filter((c) => c !== id) : [...categoryIds, id])
  return (
    <div className="glass grid gap-6 border-b border-gray-100 px-3 py-5 sm:grid-cols-2">
      <div>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest">Licencia / Anime</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Opt active={!animeId} onClick={() => onAnime(null)}>Todos</Opt>
          {animes.map((a) => <Opt key={a.id} active={animeId === a.id} onClick={() => onAnime(a.id)}>{a.name}</Opt>)}
        </div>
      </div>
      <div>
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest">Tipo de producto</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {categories.map((c) => <Opt key={c.id} active={categoryIds.includes(c.id)} onClick={() => toggle(c.id)}>{c.name}</Opt>)}
        </div>
        <button onClick={onClear} className="mt-5 text-[11px] uppercase tracking-widest text-neutral-500 underline hover:text-delorean">Limpiar filtros</button>
      </div>
    </div>
  )
}
