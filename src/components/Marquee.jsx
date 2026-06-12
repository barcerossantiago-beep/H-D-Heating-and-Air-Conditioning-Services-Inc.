import { Flame } from "./shared"

const ITEMS = [
  "Heater Repair",
  "AC Service",
  "Seasonal Tune-Ups",
  "Dual Capacitor Replacement",
  "Coil Cleaning",
  "Maintenance Advice",
  "Outdoor Unit Clearing",
]

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <section aria-label="Services we offer" className="relative bg-flame py-5 -rotate-1 scale-[1.02] border-y-4 border-coal overflow-hidden">
      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-5 px-5 whitespace-nowrap">
            <span className="font-display text-2xl md:text-3xl text-cream tracking-wide">
              {item}
            </span>
            <Flame className="w-5 h-5 text-gold shrink-0" />
          </span>
        ))}
      </div>
    </section>
  )
}
