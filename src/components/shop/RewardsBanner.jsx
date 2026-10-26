import { Star } from 'lucide-react'

export default function RewardsBanner({ points, tier, next, toNext, progress }) {
  return (
    <section className="mx-auto mt-6 max-w-[1600px] px-4 lg:px-8" aria-label="Delorean Rewards">
      <div className="glass flex flex-col gap-3 rounded-xl border border-delorean/30 p-4 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-delorean text-white"><Star size={20} fill="currentColor" /></span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest">Delorean Rewards</p>
            <p className="text-xs text-neutral-600">Gana 1 punto por cada $100. Canjea por descuentos y drops exclusivos.</p>
          </div>
        </div>
        <div className="flex-1 sm:max-w-md sm:ml-auto">
          <div className="flex items-baseline justify-between text-xs">
            <span className="font-bold">{points.toLocaleString('en-US')} puntos · Nivel {tier.name}</span>
            <span className="text-neutral-500">{next ? `${toNext.toLocaleString('en-US')} para ${next.name}` : 'Nivel máximo'}</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-gray-200" role="progressbar" aria-valuenow={Math.round(progress * 100)} aria-valuemin={0} aria-valuemax={100} aria-label="Progreso al siguiente nivel">
            <div className="h-full rounded-full bg-gradient-to-r from-delorean to-rayo transition-[width] duration-700" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </div>
    </section>
  )
}
