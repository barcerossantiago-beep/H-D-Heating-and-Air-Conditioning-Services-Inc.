import { Reveal, Counter, Star } from "./shared"
import { SITE, GOOGLE_REVIEWS_LINK } from "../lib/site"

const PROMISES = [
  {
    title: "Same-day diagnosis",
    body: "Most repair calls handled in a single visit — our trucks carry the parts that fail most often in Sacramento heat: dual run capacitors, contactors, igniters, and common refrigerants.",
  },
  {
    title: "No call center, no upsell script",
    body: "You'll talk to the person who shows up in the driveway. We tell you what your system actually needs — and what it doesn't. If the fix is cheap, we say so.",
  },
  {
    title: "Quoted price = final price",
    body: "Free written quotes before any work starts. If we hit something unexpected, we stop and talk it through with you — never a surprise add-on at the end.",
  },
  {
    title: "Bilingual service",
    body: "Hablamos Español. We're comfortable explaining diagnoses and options in both English and Spanish — important details shouldn't get lost in translation.",
  },
  {
    title: "5.0 from 281 neighbors",
    body: "A perfect average across 281 verified Google reviews. That doesn't happen by accident — it happens when every job is done right the first time, even the small ones.",
  },
  {
    title: "Licensed, bonded, insured",
    body: `California contractor license #1090137, fully insured for your home and ours. Incorporated December 2021 and serving 29 zip codes across the greater Sacramento area.`,
  },
]

const STATS = [
  { value: 281, suffix: "", label: "Five-Star Reviews" },
  { value: 5, suffix: ".0", label: "Google Rating" },
  { value: 29, suffix: "", label: "Zip Codes" },
  { value: 4, suffix: "+", label: "Years Incorporated" },
]

/* Circular rotating stamp — a small distinctive visual that reads more like a
   tool-brand seal than a template HVAC site. */
function PromiseStamp() {
  const text = "★  HONEST  ★  DEPENDABLE  ★  5 STAR SERVICE  "
  return (
    <div className="relative w-44 h-44 md:w-52 md:h-52 shrink-0">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full animate-[spin_22s_linear_infinite]"
        aria-hidden="true"
      >
        <defs>
          <path
            id="stamp-curve"
            d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
          />
        </defs>
        <text
          fill="#facc15"
          fontFamily="Bebas Neue, sans-serif"
          fontSize="15"
          letterSpacing="3"
        >
          <textPath href="#stamp-curve">
            {text}{text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-gold/40 grid place-items-center text-center">
          <div>
            <p className="font-display text-4xl md:text-5xl text-gold leading-none">5.0</p>
            <div className="flex justify-center gap-0.5 mt-1 text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3" />
              ))}
            </div>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-cream/70">
              281 Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-coal py-24 md:py-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="animate-float-b absolute top-0 right-0 w-96 h-96 rounded-full bg-flame/15 blur-[110px]" />
        <div className="animate-float-a absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-gold/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14">
          <Reveal className="flex-1">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold mb-4">
              Why H&amp;D — Not Some Template HVAC
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-none text-cream mb-6">
              Six things we do
              <br />
              <span className="heat-text">most companies don't.</span>
            </h2>
            <p className="max-w-2xl text-lg text-cream/65">
              We're a small Sacramento contractor with a perfect Google rating —
              and we work hard to keep it. Here's exactly what that looks like
              on a service call.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="hidden md:block">
            <PromiseStamp />
          </Reveal>
        </div>

        {/* Promises grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="h-full rounded-3xl border border-cream/10 bg-coal-soft p-7 transition-colors duration-200 hover:border-flame/60">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display text-2xl text-flame-bright leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-cream leading-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="text-cream/65 leading-relaxed">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Supporting stats row */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-cream/10 bg-coal-soft px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-5xl md:text-6xl text-gold leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-cream/55">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={GOOGLE_REVIEWS_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-cream/10 bg-coal-soft px-6 py-4 hover:border-gold/50 transition-colors duration-200 cursor-pointer"
          >
            <span className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5" />
              ))}
            </span>
            <span className="text-cream/85 font-semibold">
              Read all {SITE.reviews} reviews on Google
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-gold"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
