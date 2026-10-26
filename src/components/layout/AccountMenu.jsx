import { useEffect, useRef, useState } from 'react'
import { Package, Palette, RefreshCw, Star, Store } from 'lucide-react'
import { WhatsAppIcon } from '../ui/BrandIcons'
import { WHATSAPP_NUMBER } from '../../config'

const rowClass = 'flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-gray-50'

export default function AccountMenu({ role, view, rewards, themeLabel, onToggleRole, onManage, onViewStore, onCycleTheme }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const isAdmin = role === 'admin'

  useEffect(() => {
    if (!open) return
    const onDown = (e) => !ref.current?.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Menú de cuenta"
        className={`grid h-8 w-8 place-items-center rounded-full bg-delorean text-[11px] font-bold text-white ring-offset-2 transition hover:ring-2 hover:ring-delorean/40 ${isAdmin ? 'ring-2 ring-ink' : ''}`}
      >
        AD
      </button>

      {open && (
        <div role="menu" className="anim-fade-in absolute right-0 top-11 z-50 w-72 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-delorean text-sm font-bold text-white">AD</span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">Admin Delorean Store</p>
              <p className="text-xs text-neutral-500">{isAdmin ? 'Modo Superadmin' : 'Modo Cliente'}</p>
            </div>
          </div>

          <div className="border-b border-gray-100 px-4 py-3">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 font-bold text-delorean"><Star size={14} fill="currentColor" /> {rewards.points.toLocaleString('en-US')} puntos</span>
              <span className="text-neutral-500">Nivel {rewards.tier.name}</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full rounded-full bg-gradient-to-r from-delorean to-rayo" style={{ width: `${rewards.progress * 100}%` }} />
            </div>
            <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-500">{rewards.next ? `${rewards.toNext.toLocaleString('en-US')} para ${rewards.next.name}` : 'Nivel máximo'}</p>
          </div>

          <div className="py-1">
            <button role="menuitemcheckbox" onClick={onToggleRole} className={rowClass} aria-checked={isAdmin}>
              <RefreshCw size={18} strokeWidth={1.7} />
              <span className="flex-1">Cambiar modo (Cliente / Superadmin)</span>
              <span className={`flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors ${isAdmin ? 'bg-delorean' : 'bg-gray-300'}`} aria-hidden="true">
                <span className={`h-4 w-4 rounded-full bg-white shadow transition-transform ${isAdmin ? 'translate-x-4' : ''}`} />
              </span>
            </button>
            <button
              role="menuitem"
              disabled={!isAdmin}
              onClick={() => { onManage(); setOpen(false) }}
              className={`${rowClass} disabled:cursor-not-allowed disabled:text-neutral-400 disabled:hover:bg-transparent`}
            >
              <Package size={18} strokeWidth={1.7} />
              <span className="flex-1">Gestionar productos</span>
              {!isAdmin && <span className="text-[10px] uppercase tracking-wider">Solo admin</span>}
            </button>
            {isAdmin && view === 'admin' && (
              <button role="menuitem" onClick={() => { onViewStore(); setOpen(false) }} className={rowClass}>
                <Store size={18} strokeWidth={1.7} />
                <span>Ver tienda como cliente</span>
              </button>
            )}
            <button role="menuitem" onClick={onCycleTheme} className={rowClass}>
              <Palette size={18} strokeWidth={1.7} />
              <span className="flex-1">Apariencia: {themeLabel}</span>
              <span className="h-3.5 w-3.5 rounded-full border border-gray-300 bg-gradient-to-br from-white via-orange-100 to-delorean" aria-hidden="true" />
            </button>
          </div>

          <div className="border-t border-gray-100 py-1">
            <a role="menuitem" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className={rowClass}>
              <WhatsAppIcon size={18} />
              <span>Soporte WhatsApp (ventas)</span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
