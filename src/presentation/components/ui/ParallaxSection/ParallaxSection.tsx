import { useEffect, useRef, type ReactNode } from 'react'
import { gsap } from '@infrastructure/gsap'
import { ScrollTrigger } from '@infrastructure/gsap'

interface ParallaxSectionProps {
  children: ReactNode
  /** Stacking order — higher index renders on top of previous sections */
  zIndex: number
  /** How many px the section slides up as it enters (default 80) */
  slideDistance?: number
  /** Box-shadow on the top edge to create the overlay feel */
  shadow?: string
}

export function ParallaxSection({
  children,
  zIndex,
  slideDistance = 80,
  shadow = '0 -28px 64px 18px rgba(0,0,0,0.88)',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    /* scrub ties animation progress to scroll position — reversible in both
       directions automatically. `scrub: 1` adds a 1-second ease lag. */
    const tween = gsap.fromTo(
      el,
      { y: slideDistance },
      {
        y: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',   // begins when top of section hits viewport bottom
          end: 'top 18%',        // completes when top of section is near viewport top
          scrub: 1,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [slideDistance])

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ zIndex, boxShadow: shadow }}
    >
      {children}
    </div>
  )
}
