import { useEffect } from 'react'
import { Minus, Plus, X } from 'lucide-react'
import { WhatsAppIcon } from '../ui/BrandIcons'
import { buildWhatsAppUrl } from '../../lib/whatsapp'
import { formatPrice, FREE_SHIPPING_FROM, pointsFor } from '../../config'

export default function CartDrawer({ open, onClose, items, total, onQty, onClear, onOrder }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  const missing = Math.max(0, FREE_SHIPPING_FROM - total)

  return (
    <div className="fixed inset-0 z-50">
      <div className="anim-fade-in absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <aside className="anim-slide-in absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white" role="dialog" aria-modal="true" aria-label="Carrito de compras">
        <header className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest">Tu bolsa</h2>
          <button onClick={onClose} aria-label="Cerrar carrito" className="hover:text-delorean"><X size={20} strokeWidth={1.5} /></button>
        </header>

        {items.length === 0 ? (
          <p className="m-5 text-sm text-neutral-500">Tu bolsa está vacía. Agrega productos desde el catálogo.</p>
        ) : (
          <ul className="flex-1 divide-y divide-gray-100 overflow-y-auto px-5">
            {items.map(({ key, product, size, qty }) => (
              <li key={key} className="flex items-center gap-3 py-4">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wide">{product.name}</p>
                  {size && <p className="mt-0.5 text-[11px] uppercase tracking-wider text-neutral-500">Talla {size}</p>}
                  <p className="mt-1 text-sm font-bold">{formatPrice(product.price * qty)}</p>
                </div>
                <div className="flex items-center gap-2 border border-gray-200 px-1.5 py-1">
                  <button onClick={() => onQty(key, qty - 1)} aria-label="Quitar uno"><Minus size={14} /></button>
                  <span className="w-5 text-center text-xs font-medium">{qty}</span>
                  <button onClick={() => onQty(key, qty + 1)} aria-label="Agregar uno"><Plus size={14} /></button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <footer className="space-y-3 border-t border-gray-100 p-5">
            <p className="text-[11px] uppercase tracking-wider text-neutral-500">
              {missing ? `Te faltan ${formatPrice(missing)} para envío gratis` : 'Tienes envío gratis'}
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-delorean">★ Gana {pointsFor(total).toLocaleString('en-US')} puntos Delorean Rewards con esta compra</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest">Total</span>
              <span className="text-lg font-bold">{formatPrice(total)}</span>
            </div>
            <a href={buildWhatsAppUrl(items, total)} onClick={() => onOrder(total)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] py-3 text-xs font-semibold uppercase tracking-widest text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/40">
              <WhatsAppIcon size={18} color="#fff" /> Pedir por WhatsApp
            </a>
            <button onClick={onClear} className="w-full text-[11px] uppercase tracking-wider text-neutral-500 underline">Vaciar bolsa</button>
          </footer>
        )}
      </aside>
    </div>
  )
}
