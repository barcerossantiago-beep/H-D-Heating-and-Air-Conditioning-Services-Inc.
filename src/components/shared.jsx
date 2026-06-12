import { useRef, useState, useEffect } from "react"
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion"

/* Scroll-reveal wrapper — fades & slides children in when they enter the viewport */
export function Reveal({ children, delay = 0, y = 36, className = "", once = true }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* Magnetic hover — element leans toward the cursor */
export function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  function onMove(e) {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)"
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  )
}

/* Animated counter — counts up when scrolled into view */
export function Counter({ to, suffix = "", duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setValue(to)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration, reduce])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

/* Primary CTA — red pill, magnetic, opens Gmail compose */
export function CtaButton({ href, children, variant = "primary", className = "" }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-body font-bold uppercase tracking-wide transition-colors duration-200 cursor-pointer px-8 py-4 text-sm md:text-base"
  const styles = {
    primary:
      "bg-flame text-cream hover:bg-flame-bright shadow-[0_8px_30px_rgba(220,38,38,0.45)]",
    gold: "bg-gold text-coal hover:bg-gold-deep shadow-[0_8px_30px_rgba(250,204,21,0.35)]",
    outline:
      "border-2 border-cream/25 text-cream hover:border-gold hover:text-gold",
    dark: "bg-coal text-cream hover:bg-smoke",
  }
  return (
    <Magnetic>
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </a>
    </Magnetic>
  )
}

/* Photo with a branded fallback — shows a gradient + flame + label if the
   image file isn't present yet, so layouts never break. */
export function Photo({ src, alt, label, className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div
        className={`relative grid place-items-center bg-gradient-to-br from-flame-dark via-coal to-coal overflow-hidden ${className}`}
      >
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.25),transparent_55%)]" />
        <div className="relative flex flex-col items-center gap-2 text-center px-4">
          <Flame className="w-10 h-10 text-gold/80" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cream/60">
            {label || "H&D Photo"}
          </span>
        </div>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName} object-cover`}
    />
  )
}

/* 3D tilt-on-hover wrapper for cards */
export function TiltCard({ children, className = "", max = 8 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const sx = useSpring(rx, { stiffness: 200, damping: 18 })
  const sy = useSpring(ry, { stiffness: 200, damping: 18 })

  function onMove(e) {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    ry.set(px * max)
    rx.set(-py * max)
  }
  function onLeave() {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: sx, rotateY: sy, transformPerspective: 900 }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
}

/* Thin gradient scroll-progress bar pinned to the top of the page */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-gold via-flame-bright to-flame"
    />
  )
}

/* Re-export for sections that need raw scroll hooks */
export { useScroll, useTransform }

export function Flame({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2c2.2 3.9-3.3 5.6-1.1 9.5 1.1-1.7 3.3-2.2 3.3-5 3.3 2.8 5.5 6.6 5.5 10.4A7.7 7.7 0 0 1 12 24a7.7 7.7 0 0 1-7.7-7.1C4.3 10.8 9.2 9.5 12 2z" />
    </svg>
  )
}

export function Star({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  )
}
