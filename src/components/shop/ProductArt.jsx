// Ilustración vectorial por tipo de producto, tintada con los colores del anime.
// Se usa mientras products.image_url sea null.
const INK = '#111111'
const S = { stroke: INK, strokeWidth: 3, strokeLinejoin: 'round' }

export default function ProductArt({ kind, anime, className = '', view = 'front' }) {
  const back = view === 'back'
  const c = anime?.color || '#FF6B00'
  const a = anime?.accent || '#FFB800'
  const label = anime?.short || ''

  const shapes = {
    tee: (
      <>
        <path d="M32 26 L50 18 Q60 28 70 18 L88 26 L108 50 L93 62 L86 54 L86 104 L34 104 L34 54 L27 62 L12 50 Z" fill={INK} {...S} />
        <rect x={back ? 38 : 46} y={back ? 34 : 44} width={back ? 44 : 28} height={back ? 52 : 30} fill={c} stroke="#fff" strokeWidth="2" />
        <text x="60" y={back ? 66 : 63} textAnchor="middle" fontFamily="Bangers" fontSize={back ? 17 : 11} fill={a === INK ? '#fff' : a}>{label.slice(0, 7)}</text>
      </>
    ),
    cap: (
      <>
        <path d="M20 72 Q20 28 60 28 Q100 28 100 72 Z" fill={c} {...S} />
        <path d="M14 72 H106 Q116 72 112 82 Q60 96 18 82 Q10 72 14 72 Z" fill={a} {...S} />
        <circle cx="60" cy="52" r="10" fill="#fff" stroke={INK} strokeWidth="2" />
        <text x="60" y="56" textAnchor="middle" fontFamily="Bangers" fontSize="11" fill={INK}>{label.slice(0, 1)}</text>
      </>
    ),
    figure: (
      <>
        <ellipse cx="60" cy="102" rx="34" ry="9" fill={INK} />
        <rect x="42" y="62" width="36" height="38" rx="4" fill={c} {...S} />
        <circle cx="60" cy="40" r="20" fill="#F5C9A0" {...S} />
        <path d="M40 38 Q42 16 60 18 Q80 16 80 38 Q70 28 60 30 Q50 28 40 38 Z" fill={a} {...S} />
        <rect x="52" y="40" width="4" height="6" fill={INK} />
        <rect x="64" y="40" width="4" height="6" fill={INK} />
      </>
    ),
    mug: (
      <>
        <path d="M82 46 H94 Q106 46 106 62 Q106 78 90 78 H82" fill="none" stroke={INK} strokeWidth="9" />
        <rect x="24" y="30" width="62" height="72" rx="6" fill="#fff" {...S} />
        <rect x="24" y="52" width="62" height="26" fill={c} stroke={INK} strokeWidth="3" />
        <text x="55" y="70" textAnchor="middle" fontFamily="Bangers" fontSize="14" fill={a === INK ? '#fff' : a}>{label.slice(0, 8)}</text>
      </>
    ),
    notebook: (
      <>
        <rect x="26" y="16" width="68" height="92" rx="4" fill={c} {...S} />
        {[26, 40, 54, 68, 82, 96].map((y) => <rect key={y} x="20" y={y - 6} width="14" height="5" rx="2" fill="#fff" stroke={INK} strokeWidth="2" />)}
        {Array.from({ length: 26 }, (_, n) => (
          <circle key={n} cx={44 + ((n * 23) % 46)} cy={22 + ((n * 37) % 80)} r={1 + (n % 3) * 0.7} fill={n % 2 ? '#fff' : a === INK ? '#FFB800' : a} />
        ))}
        <rect x="42" y="50" width="42" height="18" fill="#fff" stroke={INK} strokeWidth="2" />
        <text x="63" y="63" textAnchor="middle" fontFamily="Bangers" fontSize="11" fill={INK}>{label.slice(0, 8)}</text>
      </>
    ),
    accessory: (
      <>
        <circle cx="60" cy="60" r="32" fill="none" stroke={INK} strokeWidth="22" />
        <circle cx="60" cy="60" r="32" fill="none" stroke={c} strokeWidth="14" strokeDasharray="10 5" />
        <circle cx="60" cy="60" r="8" fill={a === INK ? '#FFB800' : a} {...S} />
      </>
    ),
  }

  return (
    <svg viewBox={view === 'detail' ? '30 26 60 60' : '0 0 120 120'} className={className} role="img" aria-label={`${kind} ${anime?.name || ''}`}>
      <ellipse cx="60" cy="108" rx="34" ry="4" fill="#000" opacity="0.12" />
      {back && kind !== 'tee' ? <g transform="translate(120 0) scale(-1 1)">{shapes[kind]}</g> : shapes[kind] || shapes.tee}
    </svg>
  )
}
