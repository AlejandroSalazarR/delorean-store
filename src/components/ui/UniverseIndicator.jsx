import { UNIVERSES } from './universes'

// Indicador flotante: universo actual + puntos que llevan a cada zona del scroll.
// Móvil: solo la columna de puntos (sin caja ni texto) para no tapar el catálogo.
export default function UniverseIndicator({ pos }) {
  const current = Math.min(UNIVERSES.length - 1, Math.round(pos))
  const goTo = (i) => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo({ top: (i / (UNIVERSES.length - 1)) * max, behavior: 'smooth' })
  }

  return (
    <nav className="fixed bottom-16 right-2 z-30 flex items-center gap-3 sm:glass sm:border sm:border-gray-200 sm:px-3 sm:py-2" aria-label="Multiverso de coleccionables">
      <div className="hidden text-right sm:block">
        <p className="text-[9px] font-semibold uppercase tracking-widest text-neutral-500">Multiverso {current + 1}/{UNIVERSES.length}</p>
        <p key={current} className="anim-fade-in text-xs font-bold uppercase tracking-wider">{UNIVERSES[current].name}</p>
      </div>
      <div className="flex flex-col gap-2 rounded-full bg-white/70 px-1.5 py-2 shadow-sm backdrop-blur sm:gap-1.5 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none">
        {UNIVERSES.map((u, i) => (
          <button
            key={u.id}
            onClick={() => goTo(i)}
            aria-label={`Ir a ${u.name}`}
            aria-current={i === current}
            title={u.name}
            className={`h-2 w-2 rounded-full transition-all ${i === current ? 'scale-125 bg-delorean' : 'bg-gray-400/70 hover:bg-ink'}`}
          />
        ))}
      </div>
    </nav>
  )
}
