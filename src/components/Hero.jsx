import { motion, useReducedMotion } from "framer-motion"
import { SITE, GMAIL_COMPOSE, SMS_LINK, GOOGLE_REVIEWS_LINK } from "../lib/site"
import { CtaButton, Star } from "./shared"

const LINE_1 = ["SACRAMENTO'S"]
const LINE_2 = ["5-STAR", "HEATING"]
const LINE_3 = ["&", "AIR", "TEAM"]

function WordReveal({ words, accent = false, delayOffset = 0 }) {
  const reduce = useReducedMotion()
  return (
    <span className="block overflow-hidden">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className={`inline-block mr-[0.22em] ${accent ? "heat-text" : ""}`}
          initial={reduce ? false : { y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: delayOffset + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-coal pt-32 pb-20">
      {/* warm glow blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="animate-float-a absolute -top-32 -right-32 w-[34rem] h-[34rem] rounded-full bg-flame/25 blur-[120px]" />
        <div className="animate-float-b absolute bottom-0 -left-40 w-[30rem] h-[30rem] rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-flame-dark/30 blur-[100px]" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fdf8f1 1px, transparent 1px), linear-gradient(90deg, #fdf8f1 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <motion.a
          href={GOOGLE_REVIEWS_LINK}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 mb-8 cursor-pointer hover:bg-gold/20 transition-colors duration-200"
        >
          <span className="flex text-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5" />
            ))}
          </span>
          <span className="text-xs md:text-sm font-semibold text-cream/90">
            {SITE.rating} stars · {SITE.reviews} Google reviews
          </span>
        </motion.a>

        <h1 className="font-display text-cream leading-[0.92] text-[clamp(3.4rem,11vw,9rem)]">
          <WordReveal words={LINE_1} delayOffset={0.2} />
          <WordReveal words={LINE_2} accent delayOffset={0.45} />
          <WordReveal words={LINE_3} delayOffset={0.75} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-6 max-w-xl text-lg md:text-xl text-cream/70 leading-relaxed"
        >
          Heater repair, AC service, and honest maintenance advice for homes
          across the Sacramento area. Family-run, fully licensed, and rated{" "}
          <span className="text-gold font-semibold">5.0 by {SITE.reviews} neighbors</span> on Google.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <CtaButton href={GMAIL_COMPOSE}>
            Get a Free Quote
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </CtaButton>
          <CtaButton href={SMS_LINK} variant="outline">
            Text {SITE.phoneDisplay}
          </CtaButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold uppercase tracking-wider text-cream/45"
        >
          <span>Licensed &amp; Insured</span>
          <span className="text-flame-bright">●</span>
          <span>Since 2021</span>
          <span className="text-gold">●</span>
          <span>29 Zip Codes Served</span>
        </motion.div>
      </div>
    </section>
  )
}
