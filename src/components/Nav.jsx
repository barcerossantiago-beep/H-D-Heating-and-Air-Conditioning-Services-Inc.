import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SITE, GMAIL_COMPOSE, TEL_LINK } from "../lib/site"
import { Flame } from "./shared"

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why H&D", href: "#why" },
  { label: "Area", href: "#area" },
  { label: "Tips", href: "#tips" },
  { label: "FAQ", href: "#faq" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-2xl px-5 py-3 transition-colors duration-300 ${
          scrolled || open
            ? "bg-coal/90 backdrop-blur-md border border-cream/10 shadow-lg"
            : "bg-transparent border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 cursor-pointer">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-flame text-gold">
            <Flame className="w-5 h-5" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl text-cream">H&amp;D</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
              Heating &amp; Air
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wide text-cream/80 hover:text-gold transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={TEL_LINK}
            className="text-sm font-bold text-cream hover:text-gold transition-colors duration-200"
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-flame hover:bg-flame-bright transition-colors duration-200 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-cream"
          >
            Free Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden grid place-items-center w-11 h-11 rounded-xl text-cream cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="w-6 h-6">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-auto max-w-6xl mt-2 rounded-2xl bg-coal/95 backdrop-blur-md border border-cream/10 p-5 flex flex-col gap-4"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold uppercase tracking-wide text-cream/85 hover:text-gold transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-flame text-center px-5 py-3 text-sm font-bold uppercase tracking-wide text-cream"
          >
            Free Quote
          </a>
          <a href={TEL_LINK} className="text-center text-sm font-bold text-gold">
            Call {SITE.phoneDisplay}
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
