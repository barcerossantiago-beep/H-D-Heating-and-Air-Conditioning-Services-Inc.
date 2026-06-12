import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Stats from "./components/Stats"
import ServiceArea from "./components/ServiceArea"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import { ScrollProgress } from "./components/shared"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: true })
    lenis.on("scroll", ScrollTrigger.update)

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Gallery />
        <Stats />
        <ServiceArea />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
