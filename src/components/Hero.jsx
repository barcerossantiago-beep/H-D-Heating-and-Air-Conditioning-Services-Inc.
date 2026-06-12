import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { SITE, PHOTOS, GMAIL_COMPOSE, SMS_LINK, GOOGLE_REVIEWS_LINK } from "../lib/site"
import { CtaButton, Star, Photo, Flame } from "./shared"

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
  const ref = useRef(null)
  const reduce = useReducedMotion()

  // Scroll-driven fade-out of the whole hero as you leave it
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25])

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-coal pt-32 pb-20"
    >
      {/* photographic background with heavy gradient wash for readability */}
      <motion.div
        aria-hidden="true"
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <Photo
          src={PHOTOS.vanDay}
          alt=""
          label="H&D Service Van"
          className="absolute inset-0 w-full h-full"
          imgClassName="w-full h-full"
        />
        {/* dark + warm gradient overlays so text stays legible */}
        <div className="absolute inset-0 bg-coal/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/85 to-coal/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-coal/70" />
        <div className="animate-float-a absolute -top-32 -right-20 w-[34rem] h-[34rem] rounded-full bg-flame/30 blur-[110px]" />
        <div className="animate-float-b absolute bottom-0 -left-40 w-[30rem] h-[30rem] rounded-full bg-gold/15 blur-[110px]" />
      </motion.div>

      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity, y: contentY, scale: contentScale }}
        className="relative mx-auto max-w-6xl px-6 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center"
      >
        {/* LEFT — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2.5 mb-7"
          >
            <a
              href={GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 cursor-pointer hover:bg-gold/20 transition-colors duration-200"
            >
              <span className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5" />
                ))}
              </span>
              <span className="text-xs md:text-sm font-semibold text-cream/90">
                {SITE.rating} · {SITE.reviews} reviews
              </span>
            </a>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-coal/60 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-cream/80">
              <Flame className="w-3.5 h-3.5 text-flame-bright" />
              {SITE.availability}
            </span>
            <span className="inline-flex items-center rounded-full border border-cream/15 bg-coal/60 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-cream/80">
              {SITE.bilingual}
            </span>
          </motion.div>

          <h1 className="font-display text-cream leading-[0.9] text-[clamp(3.2rem,9vw,7.5rem)]">
            <WordReveal words={LINE_1} delayOffset={0.2} />
            <WordReveal words={LINE_2} accent delayOffset={0.45} />
            <WordReveal words={LINE_3} delayOffset={0.75} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-6 max-w-xl text-lg md:text-xl text-cream/75 leading-relaxed"
          >
            {SITE.tagline}. Heater repair, AC service, and full installs for
            homes across the Sacramento area — honest, dependable, and rated{" "}
            <span className="text-gold font-semibold">5.0 by {SITE.reviews} neighbors</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
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
            className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold uppercase tracking-wider text-cream/50"
          >
            <span>Licensed &amp; Insured</span>
            <span className="text-flame-bright">●</span>
            <span>{SITE.license}</span>
            <span className="text-gold">●</span>
            <span>Since 2021</span>
          </motion.div>
        </div>

        {/* RIGHT — tilted photo stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block h-[30rem]"
        >
          <div className="bob-1 absolute top-0 right-4 w-72 h-96 rounded-3xl overflow-hidden border-2 border-cream/15 shadow-2xl">
            <Photo
              src={PHOTOS.vanEvening}
              alt="H&D Heating and Air service van"
              label="Service Van"
              className="w-full h-full"
              imgClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal/60 to-transparent" />
          </div>

          <div className="bob-2 absolute bottom-2 left-0 w-60 h-72 rounded-3xl overflow-hidden border-2 border-cream/15 shadow-2xl">
            <Photo
              src={PHOTOS.techRoof}
              alt="H&D technician servicing a rooftop HVAC unit"
              label="On the Job"
              className="w-full h-full"
              imgClassName="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coal/60 to-transparent" />
          </div>

          {/* floating rating chip */}
          <div className="bob-3 absolute bottom-10 right-0 rounded-2xl bg-cream text-coal px-5 py-3 shadow-xl">
            <div className="flex items-center gap-1 text-gold-deep">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4" />
              ))}
            </div>
            <p className="mt-1 text-xs font-bold uppercase tracking-wide">
              {SITE.reviews} 5-star reviews
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Scroll</span>
        <span className="animate-scroll-dot block w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}
