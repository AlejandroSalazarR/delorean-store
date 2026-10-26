import { useCallback, useState } from 'react'

const KEY = 'delorean-points'
const START = 1200 // saldo de demostración

export const TIERS = [
  { name: 'Bronce', min: 0 },
  { name: 'Plata', min: 2000 },
  { name: 'Oro', min: 5000 },
]

export function tierInfo(points) {
  const i = TIERS.reduce((acc, t, idx) => (points >= t.min ? idx : acc), 0)
  const next = TIERS[i + 1] || null
  return {
    tier: TIERS[i],
    next,
    toNext: next ? next.min - points : 0,
    progress: next ? (points - TIERS[i].min) / (next.min - TIERS[i].min) : 1,
  }
}

function load() {
  try {
    const n = Number(localStorage.getItem(KEY))
    if (Number.isFinite(n) && localStorage.getItem(KEY) !== null) return n
  } catch { /* sin storage */ }
  return START
}

export default function useRewards() {
  const [points, setPoints] = useState(load)
  const earn = useCallback((n) => {
    setPoints((p) => {
      const next = p + n
      try { localStorage.setItem(KEY, String(next)) } catch { /* ignorar */ }
      return next
    })
  }, [])
  return { points, earn, ...tierInfo(points) }
}
