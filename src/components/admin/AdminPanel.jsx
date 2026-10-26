import { useEffect, useState } from 'react'
import { addProduct, getProducts, updateProduct } from '../../services/api'
import { formatPrice } from '../../config'

const SIZES = ['S', 'M', 'L', 'XL']
const STATUS = { stock: 'Stock', preventa: 'Preventa' }
const EMPTY = { name: '', price: '', category_id: '', anime_id: '', sizes: [], status: 'stock' }

const field = 'w-full border-b border-ink bg-transparent py-1.5 text-sm outline-none focus:border-delorean'
const label = 'mb-1 block text-[11px] font-semibold uppercase tracking-widest'

export default function AdminPanel({ animes, categories, rev, onChanged }) {
  const [rows, setRows] = useState([])
  const [form, setForm] = useState(EMPTY)
  const [error, setError] = useState('')
  const [ok, setOk] = useState('')

  useEffect(() => { getProducts({ sort: 'newest' }).then(setRows) }, [rev])

  const set = (patch) => { setForm((f) => ({ ...f, ...patch })); setOk('') }
  const toggleSize = (s) => set({ sizes: form.sizes.includes(s) ? form.sizes.filter((x) => x !== s) : [...form.sizes, s] })

  const submit = async (e) => {
    e.preventDefault()
    const price = Number(form.price)
    if (!form.name.trim() || !(price > 0) || !form.category_id || !form.anime_id) {
      setError('Completa título, precio mayor a 0, categoría y anime.')
      return
    }
    setError('')
    await addProduct({
      name: form.name.trim(), price: Math.round(price),
      category_id: Number(form.category_id), anime_id: Number(form.anime_id),
      sizes: SIZES.filter((s) => form.sizes.includes(s)), status: form.status,
    })
    setForm(EMPTY)
    setOk('Producto agregado. Ya aparece en la Vista Usuario.')
    onChanged()
  }

  const changeStatus = async (id, status) => { await updateProduct(id, { status }); onChanged() }
  const name = (list, id) => list.find((x) => x.id === id)?.name || '—'

  return (
    <main className="mx-auto max-w-[1200px] px-4 pb-20 pt-8 lg:px-8">
      <h1 className="text-2xl font-bold uppercase tracking-tight">Panel administrador</h1>
      <p className="mt-1 text-sm text-neutral-500">Demo de inventario: los cambios viven en memoria y se pierden al recargar.</p>

      <form onSubmit={submit} className="mt-8 grid gap-5 border border-gray-200 bg-white/80 p-5 sm:grid-cols-2 lg:grid-cols-3">
        <h2 className="text-xs font-semibold uppercase tracking-widest sm:col-span-2 lg:col-span-3">Agregar producto</h2>
        <div className="lg:col-span-2">
          <label className={label} htmlFor="a-name">Título</label>
          <input id="a-name" className={field} value={form.name} onChange={(e) => set({ name: e.target.value })} placeholder="Camiseta Oversize ..." />
        </div>
        <div>
          <label className={label} htmlFor="a-price">Precio (COP)</label>
          <input id="a-price" type="number" min="0" step="100" className={field} value={form.price} onChange={(e) => set({ price: e.target.value })} placeholder="69900" />
        </div>
        <div>
          <label className={label} htmlFor="a-cat">Categoría</label>
          <select id="a-cat" className={field} value={form.category_id} onChange={(e) => set({ category_id: e.target.value })}>
            <option value="">Selecciona</option>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="a-anime">Anime</label>
          <select id="a-anime" className={field} value={form.anime_id} onChange={(e) => set({ anime_id: e.target.value })}>
            <option value="">Selecciona</option>
            {animes.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="a-status">Estado</label>
          <select id="a-status" className={field} value={form.status} onChange={(e) => set({ status: e.target.value })}>
            {Object.entries(STATUS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
        <fieldset className="sm:col-span-2 lg:col-span-3">
          <legend className={label}>Tallas</legend>
          <div className="flex gap-2">
            {SIZES.map((s) => (
              <button type="button" key={s} onClick={() => toggleSize(s)} aria-pressed={form.sizes.includes(s)} className={`h-8 w-12 border text-xs font-medium ${form.sizes.includes(s) ? 'border-ink bg-ink text-white' : 'border-gray-300 hover:border-ink'}`}>{s}</button>
            ))}
            <span className="self-center text-xs text-neutral-500">Sin tallas = botón "+ Agregar"</span>
          </div>
        </fieldset>
        <div className="flex items-center gap-4 sm:col-span-2 lg:col-span-3">
          <button className="bg-ink px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-delorean">Agregar producto</button>
          {error && <p role="alert" className="text-xs text-red-600">{error}</p>}
          {ok && <p role="status" className="text-xs text-green-700">{ok}</p>}
        </div>
      </form>

      <h2 className="mb-3 mt-10 text-xs font-semibold uppercase tracking-widest">Inventario ({rows.length})</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-ink text-[11px] uppercase tracking-widest">
            <tr><th className="py-2 pr-3">Producto</th><th className="pr-3">Categoría</th><th className="pr-3">Anime</th><th className="pr-3">Tallas</th><th className="pr-3">Precio</th><th>Estado</th></tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.id} className="border-b border-gray-100">
                <td className="py-2 pr-3 font-medium">{p.name}</td>
                <td className="pr-3">{name(categories, p.category_id)}</td>
                <td className="pr-3">{name(animes, p.anime_id)}</td>
                <td className="pr-3">{p.sizes.join(' · ') || '—'}</td>
                <td className="pr-3 font-bold">{formatPrice(p.price)}</td>
                <td>
                  <select value={p.status} onChange={(e) => changeStatus(p.id, e.target.value)} aria-label={`Estado de ${p.name}`} className={`border px-2 py-1 text-xs uppercase ${p.status === 'preventa' ? 'border-delorean text-delorean' : 'border-gray-300'}`}>
                    {Object.entries(STATUS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
