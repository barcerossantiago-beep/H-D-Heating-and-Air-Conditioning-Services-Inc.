import { Reveal, Photo } from "./shared"
import { PHOTOS, SITE } from "../lib/site"

const SHOTS = [
  { src: PHOTOS.techRoof, alt: "H&D technician servicing a rooftop HVAC unit", label: "Rooftop Service", tall: true },
  { src: PHOTOS.vanEvening, alt: "H&D service van in the driveway at dusk", label: "On Call" },
  { src: PHOTOS.vanDay, alt: "H&D service van parked on a Sacramento street", label: "In Your Neighborhood" },
]

export default function Gallery() {
  return (
    <section className="relative bg-coal-soft py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold mb-4">
            On the Job
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-none text-cream mb-6">
            Real Work. <span className="text-flame">Real Trucks.</span>
          </h2>
          <p className="max-w-2xl text-lg text-cream/65 mb-14">
            {SITE.bilingual}. Honest &amp; dependable. The same crew you'll see
            pulling up to your driveway — out serving homes across the valley.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SHOTS.map((shot, i) => (
            <Reveal key={shot.label} delay={i * 0.1} className={shot.tall ? "md:row-span-2" : ""}>
              <div
                className={`group relative rounded-3xl overflow-hidden border-2 border-cream/10 cursor-pointer ${
                  shot.tall ? "h-[20rem] md:h-full md:min-h-[34rem]" : "h-[20rem] md:h-[16.25rem]"
                }`}
              >
                <Photo
                  src={shot.src}
                  alt={shot.alt}
                  label={shot.label}
                  className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                  imgClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-flame px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-cream">
                    {shot.label}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
