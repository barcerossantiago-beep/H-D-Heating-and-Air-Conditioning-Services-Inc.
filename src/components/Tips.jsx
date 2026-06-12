import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "./shared"
import { GMAIL_COMPOSE } from "../lib/site"

const ARTICLES = [
  {
    title: "When to Replace vs. Repair Your AC in Sacramento",
    keyword: "AC Repair · Sacramento",
    read: "3 min read",
    excerpt:
      "Once your unit is past 12 years and the repair crosses 30% of a new system, the math usually tips toward replacement — especially in our climate.",
    body: [
      "Sacramento summers regularly push AC units past their design loads. After about 10–12 years, even well-maintained systems start losing efficiency and reliability.",
      "Here's the rule of thumb we use:",
      [
        "Under 8 years old with one major part failed: almost always repair.",
        "8–12 years old with the repair over 30% of a new system: weigh efficiency gains vs cost — modern high-SEER units can cut summer bills 20–40%.",
        "Over 12 years old or using phased-out R-22 refrigerant: usually replace, especially if you're seeing rising bills or frequent breakdowns.",
      ],
      "We'll give you both numbers — the repair quote AND the replacement quote — and let you decide. No pressure either way.",
    ],
  },
  {
    title: "Dual Run Capacitor Failure — The Most Common Summer Sacramento AC Repair",
    keyword: "Dual Capacitor Replacement",
    read: "3 min read",
    excerpt:
      "When your outdoor unit hums but won't start in July, a failed dual run capacitor is the usual suspect. Here's how to spot it and what to do.",
    body: [
      "A dual run capacitor stores the energy your AC's compressor and fan motors need to start and run. When it fails, the unit can't kick on — even though everything else might look fine.",
      "Symptoms to watch for:",
      [
        "Outdoor unit humming but fan not spinning",
        "Fan only starts if you push it manually (don't — that's a diagnosis, not a fix)",
        "AC trips the breaker on startup",
        "Long delay before the compressor engages",
        "Warm air from vents even though the thermostat is calling for cool",
      ],
      "Why they fail more often in Sacramento: heat. A capacitor rated for 105° lives a hard life on a 115° afternoon. Most last 5–10 years here vs 10–15 in milder climates.",
      "The good news: dual run capacitor replacement is one of the most affordable HVAC repairs, and we carry the common sizes on the truck — usually done same visit.",
    ],
  },
  {
    title: "Signs Your Heater Won't Make It Through Another Sacramento Winter",
    keyword: "Heater Repair · Sacramento",
    read: "3 min read",
    excerpt:
      "Mild winters don't mean your furnace gets a free pass. Here are the signs we see in October that mean trouble in January.",
    body: [
      "Sacramento winters are mild, but a furnace failure on a 35° foggy morning is no fun. Watch for these signs in fall:",
      [
        "Yellow or flickering flame (it should be steady blue)",
        "Short cycling — turning on and off every few minutes",
        "Strange smells when first firing for the season (some dust is normal; ongoing odor is not)",
        "Loud bangs or pops on startup (often delayed ignition — a safety concern)",
        "Furnace over 15–20 years old combined with rising bills",
        "Yellow soot showing up near vents",
      ],
      "The best time to deal with these is October — before the first cold snap. Once the furnaces start going, schedules tighten up fast across every HVAC company in the valley.",
      "We do free heater diagnostics in the fall, so a quick check costs you nothing if it turns out to be nothing.",
    ],
  },
  {
    title: "Spring AC Tune-Up Checklist for Sacramento Homeowners",
    keyword: "AC Tune-Up · Sacramento",
    read: "4 min read",
    excerpt:
      "Schedule in May. Once it hits 100° in June, every HVAC company in town is booked — and tune-ups turn into emergency repairs.",
    body: [
      "What we check on a thorough spring tune-up:",
      [
        "Filter condition and correct size (wrong-size filters are surprisingly common)",
        "Indoor evaporator coil — clean if dirty",
        "Outdoor condenser coil — clean and clear of debris",
        "Refrigerant charge and operating pressures",
        "Dual run capacitor — voltage and capacitance check",
        "Contactor wear (the part that switches power to the compressor)",
        "Condensate drain line — flush if needed",
        "Thermostat calibration",
        "Electrical connections — tighten any that have loosened from thermal cycling",
        "Outdoor unit clearance — at least 2 ft of clear space on all sides",
      ],
      "A dirty coil alone can cost you 15–20% in efficiency, which adds up fast on a Sacramento summer bill. A tune-up usually pays for itself in the same season.",
    ],
  },
  {
    title: "Why Outdoor HVAC Units Need Clearing — Especially in Sacramento",
    keyword: "Maintenance · Outdoor Unit",
    read: "2 min read",
    excerpt:
      "That tangle of weeds and grass around your condenser is quietly costing you 15–20% efficiency. Here's how often to clear it.",
    body: [
      "Your outdoor AC unit (the condenser) needs to breathe. It pulls air across hot coils and dumps that heat into the atmosphere. If anything blocks the airflow, the unit runs longer and harder for the same cooling.",
      "What blocks airflow:",
      [
        "Weeds growing up through and around the unit",
        "Grass clippings stuck to the fins from mowing",
        "Cottonwood fluff (a real problem here from late spring through summer)",
        "Cobwebs and dirt buildup on the coil fins",
        "Decorative landscaping pushed too close",
      ],
      "Clearance rules:",
      [
        "Minimum 2 ft of clear space on all sides",
        "5 ft of clearance above (no overhanging branches dropping debris)",
        "No fences or walls trapping the hot exhaust air",
      ],
      "We clear the area every time we do a tune-up — and we recommend homeowners do a quick visual check monthly during summer. If you can't see the fins clearly through the vegetation, it's time to clear.",
    ],
  },
]

function ArticleBody({ blocks }) {
  return (
    <div className="space-y-4 text-cream/75 leading-relaxed">
      {blocks.map((block, i) =>
        Array.isArray(block) ? (
          <ul key={i} className="space-y-2 pl-1">
            {block.map((item, j) => (
              <li key={j} className="flex gap-3">
                <span aria-hidden="true" className="text-flame-bright mt-1.5">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p key={i}>{block}</p>
        )
      )}
    </div>
  )
}

export default function Tips() {
  const [openIndex, setOpenIndex] = useState(-1)
  return (
    <section id="tips" className="relative bg-coal py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold mb-4">
            Tips From the Truck
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-none text-cream mb-6">
            What we tell <span className="text-flame">our neighbors.</span>
          </h2>
          <p className="max-w-2xl text-lg text-cream/65 mb-14">
            Real advice from real service calls across the Sacramento area.
            Save these for the next time something seems off with your system.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ARTICLES.map((a, i) => {
            const open = openIndex === i
            return (
              <Reveal key={a.title} delay={(i % 2) * 0.1}>
                <article className="rounded-3xl border border-cream/10 bg-coal-soft overflow-hidden transition-colors duration-200 hover:border-flame/40">
                  <div className="p-7 md:p-8">
                    <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.18em]">
                      <span className="text-gold">{a.keyword}</span>
                      <span className="text-cream/30">·</span>
                      <span className="text-cream/45">{a.read}</span>
                    </div>
                    <h3 className="font-display text-3xl text-cream leading-tight mb-4">
                      {a.title}
                    </h3>
                    <p className="text-cream/65 leading-relaxed">{a.excerpt}</p>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-flame-bright hover:text-gold transition-colors duration-200 cursor-pointer"
                    >
                      {open ? "Hide" : "Read"} full article
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-4 h-4 transition-transform duration-300 ${
                          open ? "rotate-90" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-6 border-t border-cream/10">
                            <ArticleBody blocks={a.body} />
                            <a
                              href={GMAIL_COMPOSE}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-8 inline-flex items-center gap-2 rounded-full bg-flame hover:bg-flame-bright transition-colors duration-200 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-cream"
                            >
                              Have a question? Email us
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
