import { MessageCircle } from 'lucide-react'
import { WHATSAPP_LABEL, WHATSAPP_NUMBER } from '../../config'

const Instagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const Facebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14 8V6.5c0-.7.3-1 1-1h2V2h-3c-3 0-4 1.8-4 4v2H8v3.5h2V22h4v-10.5h2.6L17 8z" />
  </svg>
)

const LEGAL = ['Políticas', 'Guía de tallas', 'Envíos', 'Preguntas frecuentes']

export default function StickyFooterBar({ onAdmin }) {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-2 text-[11px] font-medium uppercase tracking-wider lg:px-8">
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-delorean">
          <MessageCircle size={16} /> <span className="hidden sm:inline">WhatsApp</span> {WHATSAPP_LABEL}
        </a>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-5 md:flex" aria-label="Legal">
            {LEGAL.map((l) => <a key={l} href="#" className="hover:text-delorean">{l}</a>)}
          </nav>
          <button onClick={onAdmin} className="text-neutral-400 hover:text-delorean">Modo superadmin</button>
          <a href="#" aria-label="Instagram" className="hover:text-delorean"><Instagram /></a>
          <a href="#" aria-label="Facebook" className="hover:text-delorean"><Facebook /></a>
        </div>
      </div>
    </footer>
  )
}
