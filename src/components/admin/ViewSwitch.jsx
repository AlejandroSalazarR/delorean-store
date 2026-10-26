const OPTIONS = [['user', 'Vista Usuario'], ['admin', 'Panel Administrador']]

// Barra superior que aparece al entrar a "Modo superadmin".
export default function ViewSwitch({ view, onView }) {
  return (
    <div className="flex items-center justify-center gap-3 bg-delorean px-4 py-2 text-ink">
      <span className="hidden text-[11px] font-semibold uppercase tracking-widest sm:inline">Modo superadmin</span>
      <div className="flex border border-ink" role="radiogroup" aria-label="Cambiar vista">
        {OPTIONS.map(([v, l]) => (
          <button key={v} role="radio" aria-checked={view === v} onClick={() => onView(v)} className={`px-4 py-1 text-[11px] font-semibold uppercase tracking-widest ${view === v ? 'bg-ink text-white' : 'bg-white hover:bg-gray-100'}`}>
            {l}
          </button>
        ))}
      </div>
    </div>
  )
}
