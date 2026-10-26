import { useEffect, useState } from 'react'
import { Star, X } from 'lucide-react'
import ProductArt from './ProductArt'
import { WhatsAppIcon } from '../ui/BrandIcons'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { formatPrice, pointsFor } from '../../config'

const STYLE_GUIDE = {
  tee: 'Corte oversize unisex: pídela en tu talla habitual para una caída holgada, o una talla menos para un ajuste regular. Combínala con cargo y zapatillas chunky.',
  cap: 'Visera curva y cierre ajustable. Bordado de alta densidad que resiste el lavado. Úsala con la camiseta de la misma serie.',
  figure: 'Pieza de colección en caja. Exhíbela lejos de la luz directa y limpia con paño seco para conservar el color.',
  mug: 'Cerámica de 11 oz, apta para lavavajillas y microondas. Regalo ideal para fans de la serie.',
  notebook: 'Tapa de MDF con glitter y 80 hojas. Perfecta para apuntes, bocetos o como diario de tus mangas favoritos.',
  accessory: 'Detalle inspirado en la serie para sumar a cualquier outfit del día a día.',
}

export default function ProductModal({ product, anime, category, onClose, onAdd, onOrder }) {
  const kind = category?.kind
  const views = [
    ['front', 'Frente'],
    ['back', kind === 'tee' ? 'Espalda' : 'Perfil'],
    ['detail', kind === 'tee' ? 'Estampado' : 'Detalle'],
  ]
  const photos = product.images?.length ? product.images : null
  const [view, setView] = useState(0)
  const [size, setSize] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])

  const needsSize = product.sizes.length > 0
  const guard = (fn) => () => {
    if (needsSize && !size) { setError('Elige tu talla para continuar.'); return }
    fn()
  }
  const preventa = product.status === 'preventa'

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
      <div className="anim-fade-in absolute inset-0 bg-[#1c120a]/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div role="dialog" aria-modal="true" aria-label={product.name} className="anim-fade-in relative grid max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-t-2xl bg-white sm:rounded-2xl md:grid-cols-2">
        <button onClick={onClose} autoFocus aria-label="Cerrar" className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 shadow hover:bg-delorean hover:text-white"><X size={18} /></button>

        <div className="p-3 sm:p-5">
          <div className="group card-media relative aspect-square overflow-hidden rounded-xl">
            {photos ? (
              <img src={photos[view]} alt={product.name} className="zoom-smooth h-full w-full object-cover" />
            ) : (
              <div className="zoom-smooth absolute inset-0"><ProductArt kind={kind} anime={anime} view={views[view][0]} className="h-full w-full p-[8%]" /></div>
            )}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2" role="tablist" aria-label="Galería">
            {(photos || views).map((v, i) => (
              <button key={i} role="tab" aria-selected={view === i} onClick={() => setView(i)} className={`card-media relative aspect-[4/3] overflow-hidden rounded-lg border-2 ${view === i ? 'border-delorean' : 'border-transparent hover:border-gray-300'}`}>
                {photos ? <img src={v} alt="" className="h-full w-full object-cover" /> : <ProductArt kind={kind} anime={anime} view={v[0]} className="h-full w-full p-1" />}
                {!photos && <span className="absolute inset-x-0 bottom-0 bg-white/80 py-0.5 text-center text-[10px] font-semibold uppercase tracking-wider">{v[1]}</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col p-5 sm:p-7 md:pt-12">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-delorean">{anime?.name} · {category?.name}</p>
          <h2 className="mt-2 text-2xl font-extrabold uppercase leading-tight tracking-tight sm:text-3xl">{product.name}</h2>
          <p className="mt-3 text-2xl font-extrabold">
            {formatPrice(product.price)}
            {product.compare_at_price && <span className="ml-2 text-sm font-normal text-neutral-400 line-through">{formatPrice(product.compare_at_price)}</span>}
          </p>
          {preventa && <p className="mt-2 inline-block self-start rounded-full bg-delorean px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">Preventa · entrega estimada 15 a 20 días</p>}

          <p className="mt-4 text-sm leading-relaxed text-neutral-700">{product.description || 'Producto oficial de la colección Delorean Store.'}</p>

          <div className="mt-4 rounded-lg bg-[#f6efe8] p-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest">Guía de estilo</p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-700">{STYLE_GUIDE[kind]}</p>
          </div>

          {needsSize && (
            <fieldset className="mt-5">
              <legend className="mb-2 text-[11px] font-semibold uppercase tracking-widest">Talla</legend>
              <div className="flex gap-2">
                {product.sizes.map((s) => (
                  <button key={s} aria-pressed={size === s} onClick={() => { setSize(s); setError('') }} className={`h-10 w-14 rounded-md border text-sm font-semibold ${size === s ? 'border-ink bg-ink text-white' : 'border-gray-300 hover:border-delorean'}`}>{s}</button>
                ))}
              </div>
              {error && <p role="alert" className="mt-2 text-xs text-red-600">{error}</p>}
            </fieldset>
          )}

          <p className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-delorean"><Star size={14} fill="currentColor" /> Gana {pointsFor(product.price).toLocaleString('en-US')} puntos Delorean Rewards con esta compra</p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <button onClick={guard(() => onAdd(product, size))} className="rounded-md bg-ink py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-delorean">Añadir a la bolsa</button>
            <button
              onClick={guard(() => { onOrder(product.price); window.open(buildWhatsAppUrl([{ product, size, qty: 1 }], product.price), '_blank', 'noopener') })}
              className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/40"
            >
              <WhatsAppIcon size={18} color="#fff" /> Pedir por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
