import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "./shared"
import { SITE } from "../lib/site"

const FAQS = [
  {
    q: "My furnace is blowing cold air — what should I do?",
    a: "First check your thermostat settings and air filter. If those look fine, it could be an ignition issue, a faulty limit switch, or a gas supply problem. Give us a call or text — we can usually talk you through a quick check before deciding if a visit is needed.",
  },
  {
    q: "How often should my HVAC system be serviced?",
    a: "Twice a year is ideal for Sacramento's climate: an AC tune-up in spring before the heat hits, and a heating check in fall. Regular maintenance catches small problems before they become expensive ones and keeps your energy bills down.",
  },
  {
    q: "What are the signs of a bad capacitor?",
    a: "A humming outdoor unit that won't start, an AC that takes several tries to kick on, or a system that shuts off randomly. Capacitor replacement is one of the most common and affordable HVAC repairs — we carry parts on the truck.",
  },
  {
    q: "Why does coil cleaning matter?",
    a: "Dirty evaporator and condenser coils force your system to run longer and harder to do the same job. That means higher bills and a shorter equipment lifespan. A professional cleaning typically pays for itself in efficiency gains.",
  },
  {
    q: "Do you charge for estimates?",
    a: `No — quotes are free. Email us or text ${SITE.phoneDisplay} with a description of what's going on and we'll get back to you quickly with honest advice and a straightforward price.`,
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. H&D Heating and Air Conditioning Services, Inc. is a licensed, insured California HVAC contractor, incorporated in 2021 and based in West Sacramento.",
  },
]

function Item({ faq, open, onToggle }) {
  return (
    <div className="border-b border-cream/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer group"
      >
        <span className="text-lg md:text-xl font-bold text-cream group-hover:text-gold transition-colors duration-200">
          {faq.q}
        </span>
        <span
          className={`grid place-items-center w-9 h-9 rounded-full border shrink-0 transition-all duration-300 ${
            open ? "bg-gold border-gold text-coal rotate-45" : "border-cream/25 text-cream"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-cream/65 leading-relaxed max-w-3xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="faq" className="relative bg-coal py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold mb-4">
            FAQ
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-none text-cream mb-14">
            Straight Answers
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="border-t border-cream/10">
            {FAQS.map((faq, i) => (
              <Item
                key={faq.q}
                faq={faq}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
