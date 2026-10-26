import { WHATSAPP_NUMBER, formatPrice } from '../config'

// items: [{ product, size, qty }]
export function buildWhatsAppUrl(items, total) {
  const lines = items.map(
    (i) => `• ${i.qty}x ${i.product.name}${i.size ? ` (talla ${i.size})` : ''}${i.product.status === 'preventa' ? ' [PREVENTA]' : ''} — ${formatPrice(i.qty * i.product.price)}`,
  )
  const text = `Hola Delorean Store, quiero hacer este pedido:\n${lines.join('\n')}\n\nTotal: ${formatPrice(total)}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
