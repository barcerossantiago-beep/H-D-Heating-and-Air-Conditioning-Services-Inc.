import { Reveal, Star } from "./shared"
import { SITE, GOOGLE_REVIEWS_LINK } from "../lib/site"

const CSLB_VERIFY =
  "https://www.cslb.ca.gov/onlineservices/CheckLicenseII/LicenseDetail.aspx?LicNum=1090137"

const ITEMS = [
  {
    label: "Google Rating",
    value: "5.0",
    sub: `${SITE.reviews} reviews`,
    note: "Verify on Google",
    link: GOOGLE_REVIEWS_LINK,
    star: true,
  },
  {
    label: "CA Contractor License",
    value: "1090137",
    sub: "C-20 · HVAC",
    note: "Verify on CSLB.ca.gov",
    link: CSLB_VERIFY,
  },
  {
    label: "Coverage",
    value: "Bonded",
    sub: "Licensed · Insured",
    note: "California state-required",
  },
  {
    label: "Incorporated",
    value: "2021",
    sub: "4+ years operating",
    note: "Sacramento-owned",
  },
  {
    label: "Service",
    value: "24/7",
    sub: "Hablamos Español",
    note: "Family-run, no call center",
  },
]

export default function TrustStrip() {
  return (
    <section
      aria-label="Trust and credentials"
      className="bg-coal-soft border-y border-cream/10 py-8"
    >
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8">
        {ITEMS.map((item, i) => {
          const inner = (
            <div className="text-center flex flex-col items-center">
              {item.star && (
                <span className="flex text-gold mb-1.5" aria-hidden="true">
                  {[...Array(5)].map((_, n) => (
                    <Star key={n} className="w-3 h-3" />
                  ))}
                </span>
              )}
              <p className="font-display text-3xl md:text-4xl text-cream leading-none">
                {item.value}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-cream/55">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-cream/45">{item.sub}</p>
              {item.note && (
                <p
                  className={`mt-1.5 text-[10px] font-semibold uppercase tracking-wider ${
                    item.link ? "text-gold group-hover:text-gold-deep" : "text-cream/35"
                  }`}
                >
                  {item.link ? (
                    <span className="inline-flex items-center gap-1">
                      {item.note}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </span>
                  ) : (
                    item.note
                  )}
                </p>
              )}
            </div>
          )
          return (
            <Reveal key={item.label} delay={i * 0.05}>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
