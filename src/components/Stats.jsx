import { Reveal, Counter, Star } from "./shared"
import { SITE, GOOGLE_REVIEWS_LINK } from "../lib/site"

const STATS = [
  { value: 281, suffix: "", label: "Five-Star Google Reviews" },
  { value: 5, suffix: ".0", label: "Average Rating" },
  { value: 4, suffix: "+", label: "Years Serving Sacramento" },
  { value: 29, suffix: "", label: "Zip Codes Covered" },
]

export default function Stats() {
  return (
    <section id="why" className="relative bg-coal py-24 md:py-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="animate-float-b absolute top-0 right-0 w-96 h-96 rounded-full bg-flame/15 blur-[110px]" />
        <div className="animate-float-a absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-gold/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold mb-4">
            Why H&amp;D
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-none text-cream mb-6">
            Small Company.
            <br />
            <span className="heat-text">Big Reputation.</span>
          </h2>
          <p className="max-w-2xl text-lg text-cream/65 mb-16">
            Incorporated in December 2021, H&amp;D has earned a perfect 5-star
            rating one job at a time. No call centers, no upselling — just the
            people whose name is on the truck.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="rounded-3xl border border-cream/10 bg-coal-soft p-8 h-full">
                <p className="font-display text-6xl md:text-7xl text-gold leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-cream/60">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-3 rounded-2xl border border-cream/10 bg-coal-soft px-6 py-4 hover:border-gold/50 transition-colors duration-200 cursor-pointer"
          >
            <span className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5" />
              ))}
            </span>
            <span className="text-cream/85 font-semibold">
              Rated {SITE.rating} from {SITE.reviews} reviews — read them on Google
            </span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold" aria-hidden="true">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
