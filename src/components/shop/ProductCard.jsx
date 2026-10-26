import ProductArt from './ProductArt'
import { formatPrice } from '../../config'

export default function ProductCard({ product, anime, category, onAdd }) {
  const { sizes, compare_at_price: was, price } = product
  const badge = product.status === 'preventa' ? 'PREVENTA' : product.badge
  const art = <ProductArt kind={category?.kind} anime={anime} className="absolute inset-0 h-full w-full p-[12%]" />
  const discount = was ? Math.round((1 - price / was) * 100) : 0

  return (
    <article className="group">
      <div className="card-media relative aspect-[3/4] overflow-hidden">
        <div className="card-watermark" aria-hidden="true" />
        <span className="card-onomato" aria-hidden="true">¡ZAS!</span>
        {product.image_url ? (
          <img src={product.image_url} alt={product.name} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <>
            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">{art}</div>
            {/* segunda vista: detalle ampliado de la prenda */}
            <div className="absolute inset-0 scale-150 opacity-0 transition-opacity duration-500 group-hover:opacity-100">{art}</div>
          </>
        )}

        {discount > 0 && <span className="absolute right-2 top-2 bg-delorean px-1.5 py-0.5 text-[10px] font-semibold tracking-wider text-white">-{discount}%</span>}
        {badge && (
          <span className="absolute bottom-2 left-2 bg-white/80 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-800 transition-opacity group-hover:opacity-0 group-focus-within:opacity-0 [@media(hover:none)]:opacity-100">
            {badge}
          </span>
        )}

        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white/85 px-3 py-2.5 backdrop-blur transition-transform duration-300 group-focus-within:translate-y-0 group-hover:translate-y-0 [@media(hover:none)]:translate-y-0">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-widest">Compra rápida</span>
            <span className="bg-ink px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-white">{anime?.name}</span>
          </div>
          {sizes.length ? (
            <div className="flex gap-1.5">
              {sizes.map((s) => (
                <button key={s} onClick={() => onAdd(product, s)} aria-label={`Agregar talla ${s}`} className="h-7 flex-1 border border-ink text-xs font-medium hover:border-delorean hover:bg-delorean hover:text-white">
                  {s}
                </button>
              ))}
            </div>
          ) : (
            <button onClick={() => onAdd(product)} className="h-7 w-full bg-ink text-xs font-semibold uppercase tracking-widest text-white hover:bg-delorean">
              + Agregar
            </button>
          )}
        </div>
      </div>

      <h3 className="mt-3 text-xs font-medium uppercase tracking-wide text-neutral-900">{product.name}</h3>
      <p className="mt-1 text-sm font-bold">
        {formatPrice(price)}
        {was && <span className="ml-2 text-xs font-normal text-neutral-400 line-through">{formatPrice(was)}</span>}
      </p>
    </article>
  )
}
