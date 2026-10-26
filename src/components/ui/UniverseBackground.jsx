import PixelSprite from '../preloader/PixelSprite'
import { UNIVERSES } from './universes'

// Capas fijas que se mezclan según `pos` (0..N-1): cada universo es visible cuando pos está cerca de su índice.
export default function UniverseBackground({ pos, scrollY }) {
  return (
    <div className="universe-bg" aria-hidden="true">
      {UNIVERSES.map((u, i) => {
        const w = Math.max(0, 1 - Math.abs(pos - i)) // peso 0..1
        if (w === 0) return null
        const left = i % 2 === 0
        const drift = scrollY * (0.12 + (i % 3) * 0.04) // parallax: el arte sube más lento que el contenido
        return (
          <div key={u.id} className="absolute inset-0" style={{ opacity: w }}>
            <div className="absolute inset-0" style={{ background: u.main.universe.bg, opacity: 0.16 }} />
            <PixelSprite
              chibi={u.main}
              label=""
              className={`absolute w-[min(70vw,640px)] ${left ? '-right-[6%]' : '-left-[6%]'} top-[14vh] blur-[14px]`}
              style={{ opacity: 0.2, transform: `translateY(${-drift % 200}px)` }}
            />
            {u.side && (
              <PixelSprite
                chibi={u.side}
                label=""
                className={`absolute w-[min(34vw,320px)] ${left ? 'left-[3%]' : 'right-[3%]'} bottom-[8vh] blur-[10px]`}
                style={{ opacity: 0.16, transform: `translateY(${drift * 0.5 % 120}px)` }}
              />
            )}
            <span
              className="absolute bottom-[4vh] select-none font-display text-[22vw] leading-none"
              style={{ [left ? 'left' : 'right']: '2%', color: u.main.universe.glyphColor, opacity: 0.1, filter: 'blur(6px)', mixBlendMode: 'multiply' }}
            >
              {u.main.universe.glyph}
            </span>
          </div>
        )
      })}
    </div>
  )
}
