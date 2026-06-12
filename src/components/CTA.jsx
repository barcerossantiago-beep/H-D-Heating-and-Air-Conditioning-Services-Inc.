import { Reveal, CtaButton } from "./shared"
import { SITE, GMAIL_COMPOSE, SMS_LINK } from "../lib/site"

export default function CTA() {
  return (
    <section className="relative bg-flame overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="animate-float-a absolute -top-24 right-10 w-96 h-96 rounded-full bg-gold/25 blur-[100px]" />
        <div className="animate-float-b absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-coal/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-cream leading-[0.92] text-[clamp(3rem,9vw,7.5rem)]">
            Too Hot? Too Cold?
            <br />
            <span className="text-gold">Let's Fix That.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-cream/85">
            Free quotes, honest advice, and a 5-star team that shows up.
            Reach out today — we'll get back to you fast.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <CtaButton href={GMAIL_COMPOSE} variant="dark">
              Email for a Free Quote
            </CtaButton>
            <CtaButton href={SMS_LINK} variant="gold">
              Text {SITE.phoneDisplay}
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
