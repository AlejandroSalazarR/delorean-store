import { useCallback, useMemo, useState } from 'react'

// items: [{ key, product, size, qty }]; la misma prenda en otra talla es otra línea.
export default function useCart() {
  const [items, setItems] = useState([])

  const add = useCallback((product, size = null) => {
    const key = `${product.id}-${size || ''}`
    setItems((prev) =>
      prev.some((i) => i.key === key)
        ? prev.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { key, product, size, qty: 1 }],
    )
  }, [])

  const setQty = useCallback((key, qty) => {
    setItems((prev) => (qty <= 0 ? prev.filter((i) => i.key !== key) : prev.map((i) => (i.key === key ? { ...i, qty } : i))))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const { count, total } = useMemo(
    () => ({
      count: items.reduce((s, i) => s + i.qty, 0),
      total: items.reduce((s, i) => s + i.qty * i.product.price, 0),
    }),
    [items],
  )

  return { items, add, setQty, clear, count, total }
}
