import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Global GSAP defaults — override per-tween as needed.
gsap.defaults({
  ease: 'power2.out',
  duration: 0.6,
})

// ScrollTrigger global config
ScrollTrigger.config({
  ignoreMobileResize: true,
})

export { gsap, ScrollTrigger }
