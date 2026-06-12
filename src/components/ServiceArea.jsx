import { Reveal } from "./shared"
import { ZIPS, CITIES, SITE, SMS_LINK } from "../lib/site"

export default function ServiceArea() {
  return (
    <section id="area" className="relative bg-cream-dim text-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-flame mb-4">
              Service Area
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">
              We Roll Out
              <br />
              <span className="text-flame">All Over the Valley</span>
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed mb-8">
              Based in West Sacramento and serving homes across the greater
              Sacramento region — from Davis to Auburn, Lincoln to Lodi. If
              you're in one of these neighborhoods, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {CITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white border border-ink/10 px-4 py-1.5 text-sm font-semibold text-ink"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="text-ink-soft">
              Not sure if you're in range?{" "}
              <a href={SMS_LINK} className="font-bold text-flame hover:text-flame-dark transition-colors duration-200">
                Text us at {SITE.phoneDisplay}
              </a>{" "}
              with your zip code and we'll let you know.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-coal p-8 md:p-10">
              <h3 className="font-display text-3xl text-gold mb-6">
                Zip Codes We Serve
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {ZIPS.map((z) => (
                  <span
                    key={z}
                    className="rounded-lg bg-coal-soft border border-cream/10 px-2 py-2 text-center text-sm font-bold text-cream/85 hover:border-gold/60 hover:text-gold transition-colors duration-200"
                  >
                    {z}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
