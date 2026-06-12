import { Reveal, Star } from "./shared"
import { SITE, GOOGLE_REVIEWS_LINK } from "../lib/site"

/* Real verified reviews from our Google business profile. */
const REVIEWS = [
  {
    quote:
      "Humberto is amazing. He is honest and knowledgeable. He came to our house same day late about midnight on one of the hottest days last year and fixed our A/C. I am so thankful he was more than willing to make the trip to our house so we did not have to suffer during the heat wave. He has old-school work ethic!",
    attribution: "Lisa Knox",
    where: "Verified Google Review",
    service: "Emergency AC Repair",
  },
  {
    quote:
      "My heater went out in the coldest part of a winter storm. Humberto went above and beyond. He had great customer service and response time was top tier. He picked up my call and was at my door within 45 minutes. I will be recommending H&D services to everyone. Thank you Humberto!",
    attribution: "Val Valdez",
    where: "Verified Google Review",
    service: "Emergency Heater Repair",
  },
  {
    quote:
      "I'm glad I found and called Humberto from H&D Heating & Air Conditioning Services. He was quick to respond and was very professional and was able to solve my heating problem very quickly. I'm very happy with his service and repair. I highly recommend H&D Heating & Air to anyone in need of HVAC services.",
    attribution: "Adelina Acosta",
    where: "Verified Google Review",
    service: "Heater Repair",
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
