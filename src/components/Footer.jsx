import { SITE, TEL_LINK, GMAIL_COMPOSE, GOOGLE_REVIEWS_LINK } from "../lib/site"
import { Flame } from "./shared"

export default function Footer() {
  return (
    <footer className="bg-coal border-t border-cream/10 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div>
            <a href="#top" className="flex items-center gap-2.5 mb-4 cursor-pointer">
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
            <p className="text-sm text-cream/50 max-w-xs leading-relaxed">
              {SITE.name}
              <br />
              {SITE.address}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/40 mb-1">
              Contact
            </h3>
            <a href={TEL_LINK} className="text-cream/80 hover:text-gold transition-colors duration-200 font-semibold">
              {SITE.phoneDisplay}
            </a>
            <a
              href={GMAIL_COMPOSE}
              target="_blank"
              rel="noreferrer"
              className="text-cream/80 hover:text-gold transition-colors duration-200 font-semibold"
            >
              {SITE.email}
            </a>
            <a
              href={GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noreferrer"
              className="text-cream/80 hover:text-gold transition-colors duration-200 font-semibold"
            >
              Reviews on Google
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cream/40 mb-1">
              Site
            </h3>
            <a href="#services" className="text-cream/80 hover:text-gold transition-colors duration-200">Services</a>
            <a href="#why" className="text-cream/80 hover:text-gold transition-colors duration-200">Why H&amp;D</a>
            <a href="#area" className="text-cream/80 hover:text-gold transition-colors duration-200">Service Area</a>
            <a href="#faq" className="text-cream/80 hover:text-gold transition-colors duration-200">FAQ</a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-cream/35">
          <p>© {new Date().getFullYear()} {SITE.name} All rights reserved.</p>
          <p>Licensed &amp; insured HVAC contractor — West Sacramento, CA</p>
        </div>
      </div>
    </footer>
  )
}
