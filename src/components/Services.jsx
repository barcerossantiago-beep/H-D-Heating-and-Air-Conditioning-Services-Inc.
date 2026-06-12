import { Reveal, TiltCard } from "./shared"
import { GMAIL_COMPOSE } from "../lib/site"

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

const SERVICES = [
  {
    title: "Heater Repair",
    desc: "Furnace not firing, blowing cold, or short-cycling? We diagnose and fix gas and electric heating systems fast — most repairs done same visit.",
    accent: "flame",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" {...stroke} aria-hidden="true">
        <path d="M12 3c2 3.5-3 5-1 8.5 1-1.5 3-2 3-4.5 3 2.5 5 6 5 9a7 7 0 0 1-14 0c0-5.5 4.5-6.5 7-13z" />
      </svg>
    ),
  },
  {
    title: "AC Service & Tune-Ups",
    desc: "Keep your cool through Sacramento summers. Full system checks, refrigerant inspection, and tune-ups that catch problems before the heat wave does.",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" {...stroke} aria-hidden="true">
        <path d="M12 2v20M4 6l16 12M20 6L4 18M12 5l-2-2m2 2l2-2M12 19l-2 2m2-2l2 2M6.5 7.5L4 7m2.5.5L6 4.5M17.5 16.5L20 17m-2.5-.5l.5 3M17.5 7.5L20 7m-2.5.5L17 4.5M6.5 16.5L4 17m2.5-.5L6 19.5" />
      </svg>
    ),
  },
  {
    title: "New Installs",
    desc: "Upgrading or replacing a system? We size and install complete heating and AC systems for total home comfort — done right and built to last.",
    accent: "flame",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" {...stroke} aria-hidden="true">
        <path d="M3 9l9-6 9 6M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    title: "Dual Capacitor Replacement",
    desc: "Humming outdoor unit that won't start? A failed capacitor is the usual suspect — a quick, affordable fix we carry parts for on the truck.",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" {...stroke} aria-hidden="true">
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    title: "Coil Cleaning",
    desc: "Dirty coils make your system work harder and cost you more. Professional cleaning restores efficiency and extends equipment life.",
    accent: "flame",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" {...stroke} aria-hidden="true">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16M8 3v18M16 3v18" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Honest Advice",
    desc: "Seasonal checkups, outdoor-unit clearing, and straight answers. We tell you what your system actually needs — and what it doesn't.",
    accent: "gold",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" {...stroke} aria-hidden="true">
        <path d="M14.5 6.5a4.5 4.5 0 0 1-6 4.24L4 15.24a2 2 0 1 0 2.83 2.83l4.5-4.5a4.5 4.5 0 0 0 5.74-5.74l-2.82 2.82-2.12-.7-.71-2.13 2.83-2.82a4.5 4.5 0 0 1 .25 1.5z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-cream text-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-flame mb-4">
            What We Do
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">
            Built for Sacramento
            <br />
            <span className="text-flame">Heat &amp; Cold</span>
          </h2>
          <p className="max-w-2xl text-lg text-ink-soft mb-14">
            From 105° July afternoons to foggy valley winters — we keep your
            home comfortable year-round with service, repair, and installs done
            right the first time.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <TiltCard className="h-full" max={6}>
                <article
                  className={`group h-full flex flex-col rounded-3xl border-2 border-ink/10 bg-white p-8 transition-colors duration-200 cursor-pointer ${
                    s.accent === "flame" ? "hover:border-flame" : "hover:border-gold-deep"
                  }`}
                >
                  <span
                    className={`inline-grid place-items-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 ${
                      s.accent === "flame"
                        ? "bg-flame/10 text-flame"
                        : "bg-gold/20 text-gold-deep"
                    }`}
                  >
                    {s.icon}
                  </span>
                  <h3 className="font-display text-3xl mb-3">{s.title}</h3>
                  <p className="text-ink-soft leading-relaxed flex-1">{s.desc}</p>
                  <a
                    href={GMAIL_COMPOSE}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${
                      s.accent === "flame"
                        ? "text-flame group-hover:text-flame-dark"
                        : "text-gold-deep group-hover:text-ink"
                    }`}
                  >
                    Request Service
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
