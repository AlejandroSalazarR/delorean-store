import ProductArt from './ProductArt'
import { formatPrice } from '../../config'

// Tarjeta tipo póster: imagen a sangre, panel de vidrio cálido abajo y detalle que se despliega al hover.
export default function ProductCard({ product, anime, category, onOpen, onAdd }) {
  const { sizes, compare_at_price: was, price } = product
  const preventa = product.status === 'preventa'
  const badge = preventa ? 'PREVENTA' : product.badge
  const discount = was ? Math.round((1 - price / was) * 100) : 0
  const art = <ProductArt kind={category?.kind} anime={anime} className="absolute inset-0 h-full w-full p-[10%] pb-[34%]" />

  return (
    <article className="group relative overflow-hidden rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-delorean/20">
      <div className="card-media relative aspect-[5/7] overflow-hidden">
        <div className="card-watermark" aria-hidden="true" />
        <span className="card-onomato" aria-hidden="true">¡ZAS!</span>
        {product.image_url ? (
          <img src={product.image_url} alt="" loading="lazy" className="zoom-smooth h-full w-full object-cover" />
        ) : (
          <div className="zoom-smooth absolute inset-0">{art}</div>
        )}

        <div className="absolute inset-x-2.5 top-2.5 flex items-start justify-between gap-2 sm:inset-x-3 sm:top-3">
          <div className="flex min-w-0 flex-col items-start gap-1">
            <span className="max-w-full truncate whitespace-nowrap rounded-full bg-[#1c120a]/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-white backdrop-blur sm:text-[10px]">{anime?.name}</span>
            {badge && <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest sm:text-[10px] ${preventa ? 'bg-delorean text-white' : 'bg-white/85 text-ink'}`}>{badge}</span>}
          </div>
          {discount > 0 && <span className="shrink-0 rounded-full bg-delorean px-2 py-0.5 text-[10px] font-bold text-white">-{discount}%</span>}
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-[#1c120a]/60 p-3 sm:p-4 text-white backdrop-blur-md">
          <h3 className="text-sm font-extrabold uppercase leading-tight tracking-tight sm:text-lg">
            <button onClick={() => onOpen(product)} className="text-left after:absolute after:inset-0 after:content-['']" aria-label={`Ver detalle de ${product.name}`}>
              {product.name}
            </button>
          </h3>
          <p className="mt-1 text-base font-extrabold sm:text-xl">
            {formatPrice(price)}
            {was && <span className="ml-2 text-xs font-normal text-white/50 line-through">{formatPrice(was)}</span>}
          </p>

          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="mt-3 text-[11px] uppercase tracking-wider text-white/75">
                Colección {category?.name} · {anime?.name}
              </p>
              {preventa && <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-rayo">Preventa: reserva el tuyo hoy</p>}
              <div className="relative z-10 mt-3 flex gap-1.5">
                {sizes.length ? (
                  sizes.map((s) => (
                    <button key={s} onClick={() => onAdd(product, s)} aria-label={`Agregar talla ${s}`} className="h-8 flex-1 rounded-md border border-white/60 text-xs font-semibold hover:border-delorean hover:bg-delorean">
                      {s}
                    </button>
                  ))
                ) : (
                  <button onClick={() => onAdd(product)} className="h-8 w-full rounded-md bg-white text-xs font-bold uppercase tracking-widest text-ink hover:bg-delorean hover:text-white">
                    + Agregar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
