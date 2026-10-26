import { UNIVERSES } from './universes'

// Indicador flotante: universo actual + puntos que llevan a cada zona del scroll.
export default function UniverseIndicator({ pos }) {
  const current = Math.min(UNIVERSES.length - 1, Math.round(pos))
  const goTo = (i) => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo({ top: (i / (UNIVERSES.length - 1)) * max, behavior: 'smooth' })
  }

  return (
    <nav className="glass fixed bottom-14 right-3 z-30 flex items-center gap-3 border border-gray-200 px-3 py-2" aria-label="Multiverso de coleccionables">
      <div className="text-right">
        <p className="text-[9px] font-semibold uppercase tracking-widest text-neutral-500">Multiverso {current + 1}/{UNIVERSES.length}</p>
        <p key={current} className="anim-fade-in text-xs font-bold uppercase tracking-wider">{UNIVERSES[current].name}</p>
      </div>
      <div className="flex flex-col gap-1.5">
        {UNIVERSES.map((u, i) => (
          <button
            key={u.id}
            onClick={() => goTo(i)}
            aria-label={`Ir a ${u.name}`}
            aria-current={i === current}
            title={u.name}
            className={`h-2 w-2 rounded-full transition-all ${i === current ? 'scale-125 bg-delorean' : 'bg-gray-300 hover:bg-ink'}`}
          />
        ))}
      </div>
    </nav>
  )
}
