import { useEffect, useState } from 'react'

// Devuelve { scrollY, pos }: pos recorre 0..(count-1) a lo largo de toda la página.
export default function useScrollUniverse(count) {
  const [state, setState] = useState({ scrollY: 0, pos: 0 })

  useEffect(() => {
    let raf = 0
    const read = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const f = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      setState({ scrollY: window.scrollY, pos: f * (count - 1) })
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(read) }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [count])

  return state
}
