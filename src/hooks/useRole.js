import { useCallback, useState } from 'react'

const KEY = 'delorean-role'

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY))
    if (saved?.role === 'admin') return { role: 'admin', view: saved.view === 'user' ? 'user' : 'admin' }
  } catch { /* sin storage o JSON inválido: arranca como cliente */ }
  return { role: 'client', view: 'user' }
}

// role: 'client' | 'admin'; view: 'user' | 'admin' (el admin puede ver la tienda como usuario).
// Se guarda en localStorage hasta que exista autenticación real.
export default function useRole() {
  const [state, setState] = useState(load)

  const update = useCallback((next) => {
    setState(next)
    try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* ignorar */ }
  }, [])

  return {
    ...state,
    toggleRole: () => update(state.role === 'admin' ? { role: 'client', view: 'user' } : { role: 'admin', view: 'admin' }),
    setView: (view) => update({ ...state, view: state.role === 'admin' ? view : 'user' }),
  }
}
