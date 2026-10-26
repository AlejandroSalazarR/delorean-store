const SORTS = [
  ['newest', 'Más nuevos'],
  ['price_asc', 'Precio: menor a mayor'],
  ['price_desc', 'Precio: mayor a menor'],
  ['name', 'Nombre A-Z'],
]

function Dots({ n }) {
  return (
    <span className={`grid gap-[2px] ${n === 2 ? 'grid-cols-2' : 'grid-cols-4'}`} aria-hidden="true">
      {Array.from({ length: n === 2 ? 4 : 8 }, (_, i) => <i key={i} className="block h-[5px] w-[5px] bg-current" />)}
    </span>
  )
}

export default function CatalogBar({ activeCount, onToggleFilters, sort, onSort, total, cols, onCols }) {
  return (
    <div className="grid grid-cols-2 items-center gap-y-3 border-y border-gray-100 py-3 text-xs font-medium uppercase tracking-wider md:grid-cols-3">
      <div className="flex items-center gap-5">
        <button onClick={onToggleFilters} className="whitespace-nowrap hover:text-delorean">({activeCount}) Filtros</button>
        <label className="flex items-center gap-1">
          <span className="hidden whitespace-nowrap sm:inline">Ordenar por</span>
          <select value={sort} onChange={(e) => onSort(e.target.value)} className="cursor-pointer bg-transparent uppercase outline-none" aria-label="Ordenar por">
            {SORTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </label>
      </div>
      <p className="order-last col-span-2 text-center md:order-none md:col-span-1">Productos ({total})</p>
      <div className="flex items-center justify-end gap-3">
        <span>Vista</span>
        {[2, 4].map((n) => (
          <button key={n} onClick={() => onCols(n)} aria-pressed={cols === n} aria-label={`Vista de ${n} columnas`} className={cols === n ? 'text-delorean' : 'text-neutral-400 hover:text-ink'}>
            <Dots n={n} />
          </button>
        ))}
      </div>
    </div>
  )
}
