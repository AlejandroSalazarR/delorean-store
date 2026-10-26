import { useState } from 'react'
import { RotateCcw, SlidersHorizontal, X } from 'lucide-react'

export const THEMES = [
  { id: 'warm', label: 'Cálido + Manga Sutil' },
  { id: 'pure', label: 'Rockgotá Puro' },
  { id: 'energy', label: 'Energía Delorean' },
]

// Temporal: solo para la demo con el cliente. Colapsado por defecto en móvil (solo un botón de 32px).
export default function DemoPanel({ theme, onTheme, onReplay }) {
  const [open, setOpen] = useState(() => typeof window !== 'undefined' && window.innerWidth >= 768)

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} aria-label="Abrir modo demo cliente" className="fixed bottom-16 left-2 z-[110] grid h-8 w-8 place-items-center rounded-full border border-gray-300 bg-white/90 text-neutral-500 shadow backdrop-blur hover:text-delorean">
        <SlidersHorizontal size={14} />
      </button>
    )
  }

  return (
    <div className="fixed bottom-16 left-2 z-[110] w-52 border border-ink bg-white p-2 text-[10px] font-semibold uppercase tracking-wider shadow-lg">
      <div className="mb-1.5 flex items-center justify-between text-neutral-500">
        <p>Modo demo cliente</p>
        <button onClick={() => setOpen(false)} aria-label="Minimizar modo demo" className="hover:text-ink"><X size={12} /></button>
      </div>
      <div className="flex flex-col gap-1" role="radiogroup" aria-label="Estilo de fondo">
        {THEMES.map((t) => (
          <button key={t.id} role="radio" aria-checked={theme === t.id} onClick={() => onTheme(t.id)} className={`px-2 py-1 text-left ${theme === t.id ? 'bg-ink text-white' : 'hover:bg-gray-100'}`}>
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
