const TEXT = 'Envíos a toda Colombia desde Copacabana • 10 años de cultura pop, anime & coleccionismo • Envío gratis x compras +$200.000'
const cls = 'text-[11px] font-medium uppercase leading-4 tracking-widest'

// Móvil: una sola línea en marquesina (no ocupa 3 filas). Escritorio, o con "reducir movimiento": texto fijo.
export default function AnnouncementBar() {
  return (
    <div className="announce overflow-hidden bg-ink py-1.5 text-white">
      <div className="marquee md:hidden" aria-hidden="true">
        <span className={cls}>{TEXT}</span>
        <span className={cls}>{TEXT}</span>
      </div>
      <p className={`announce-static hidden px-4 text-center md:block ${cls}`}>{TEXT}</p>
    </div>
  )
}
