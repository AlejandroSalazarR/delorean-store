import { RotateCcw } from 'lucide-react'

export const THEMES = [
  { id: 'warm', label: 'Cálido + Manga Sutil' },
  { id: 'pure', label: 'Rockgotá Puro' },
  { id: 'energy', label: 'Energía Delorean' },
]

// Temporal: solo para la demo con el cliente.
export default function DemoPanel({ theme, onTheme, onReplay }) {
  return (
    <div className="fixed bottom-14 left-3 z-[110] w-52 border border-ink bg-white p-2 text-[10px] font-semibold uppercase tracking-wider shadow-lg">
      <p className="mb-1.5 text-neutral-500">Modo demo cliente</p>
      <div className="flex flex-col gap-1" role="radiogroup" aria-label="Estilo de fondo">
        {THEMES.map((t) => (
          <button
            key={t.id}
            role="radio"
            aria-checked={theme === t.id}
            onClick={() => onTheme(t.id)}
            className={`px-2 py-1 text-left ${theme === t.id ? 'bg-ink text-white' : 'hover:bg-gray-100'}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <button onClick={onReplay} className="mt-2 flex w-full items-center justify-center gap-1 bg-rayo px-2 py-1.5 text-ink hover:bg-delorean">
        <RotateCcw size={12} /> Repetir Preloader
      </button>
    </div>
  )
}
