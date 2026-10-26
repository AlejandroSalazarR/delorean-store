import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../ui/BrandIcons'
import { WHATSAPP_LABEL, WHATSAPP_NUMBER } from '../../config'

const LEGAL = ['Políticas', 'Guía de tallas', 'Envíos', 'Preguntas frecuentes']
const lift = 'transition duration-200 hover:-translate-y-0.5 hover:drop-shadow-[0_3px_5px_rgba(0,0,0,0.3)]'

export default function StickyFooterBar() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-2 text-[11px] font-medium uppercase tracking-wider lg:px-8">
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${lift}`}>
          <WhatsAppIcon size={22} /> <span className="hidden sm:inline">WhatsApp</span> {WHATSAPP_LABEL}
        </a>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-5 md:flex" aria-label="Legal">
            {LEGAL.map((l) => <a key={l} href="#" className="hover:text-delorean">{l}</a>)}
          </nav>
          <a href="#" aria-label="Instagram" className={lift}><InstagramIcon size={22} /></a>
          <a href="#" aria-label="Facebook" className={lift}><FacebookIcon size={22} /></a>
        </div>
      </div>
    </footer>
  )
}
