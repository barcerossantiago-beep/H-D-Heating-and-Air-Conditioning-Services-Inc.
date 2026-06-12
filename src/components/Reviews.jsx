import { Reveal, Star } from "./shared"
import { SITE, GOOGLE_REVIEWS_LINK } from "../lib/site"

/* These are representative review-style placeholders attributed by neighborhood
   (no invented names). Replace each quote with a real review pulled from your
   Google business profile. */
const REVIEWS = [
  {
    quote:
      "Showed up on time, diagnosed the bad capacitor in ten minutes, fixed it on the spot. No upsell, no \"you really need a whole new system\" speech. This is who we're calling from now on.",
    attribution: "Homeowner",
    where: "Carmichael",
    service: "Capacitor Replacement",
  },
  {
    quote:
      "Two other companies told us we needed a $9,000 new system. H&D found a $200 fix that's been running perfectly for a year. Honest, professional, and bilingual — exactly what we needed.",
    attribution: "Homeowner",
    where: "Citrus Heights",
    service: "AC Diagnosis & Repair",
  },
  {
    quote:
      "Came out for a tune-up before summer hit, cleaned the coils, replaced a worn contactor before it failed. Quoted price was the final price. Hard to find that kind of straightforwardness anymore.",
    attribution: "Homeowner",
    where: "West Sacramento",
    service: "AC Tune-Up",
  },
]

export default function Reviews() {
  return (
    <section className="relative bg-cream-dim text-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <Reveal className="flex-1">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-flame mb-4">
              Reviews
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-4">
              281 reviews.
              <br />
              <span className="text-flame">Every one a 5.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-ink/15 bg-white px-5 py-3 hover:border-flame transition-colors duration-200 cursor-pointer"
            >
              <span className="flex text-gold-deep">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" />
                ))}
              </span>
              <span className="text-sm font-bold uppercase tracking-wide">
                Verified on Google
              </span>
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="h-full rounded-3xl bg-white border-2 border-ink/10 p-7 flex flex-col">
                <span
                  aria-hidden="true"
                  className="font-display text-7xl text-flame/30 leading-none -mt-2"
                >
                  &ldquo;
                </span>
                <p className="text-lg leading-relaxed -mt-6">{r.quote}</p>
                <div className="mt-auto pt-6 border-t border-ink/10 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-bold text-ink">{r.attribution}</p>
                    <p className="text-sm text-ink-soft">{r.where}</p>
                  </div>
                  <div className="text-right">
                    <span className="flex justify-end text-gold-deep">
                      {[...Array(5)].map((_, n) => (
                        <Star key={n} className="w-3.5 h-3.5" />
                      ))}
                    </span>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ink-soft">
                      {r.service}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-sm text-ink-soft">
            See all {SITE.reviews} reviews on{" "}
            <a
              href={GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-flame hover:text-flame-dark transition-colors duration-200"
            >
              our Google business profile
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
