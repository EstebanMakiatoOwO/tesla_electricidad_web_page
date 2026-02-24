import React, { useRef, useEffect } from 'react'
import { gsap } from '@infrastructure/gsap'
import { ScrollTrigger } from '@infrastructure/gsap'

interface FadeContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  blur?: boolean
  duration?: number
  ease?: string
  delay?: number
  threshold?: number
  initialOpacity?: number
  repeat?: boolean
}

export function FadeContent({
  children,
  blur = false,
  duration = 800,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.15,
  initialOpacity = 0,
  repeat = true,
  className = '',
  ...props
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const startPct = (1 - threshold) * 100
    const getSeconds = (val: number) => (val > 10 ? val / 1000 : val)

    gsap.set(el, {
      autoAlpha: initialOpacity,
      filter: blur ? 'blur(12px)' : 'blur(0px)',
      y: blur ? 20 : 0,
      willChange: 'opacity, filter, transform',
    })

    const tl = gsap.timeline({ paused: true, delay: getSeconds(delay) })
    tl.to(el, {
      autoAlpha: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: getSeconds(duration),
      ease,
    })

    const st = repeat
      ? ScrollTrigger.create({
          trigger: el,
          start: `top ${startPct}%`,
          end: 'top 10%',
          animation: tl,
          toggleActions: 'play reverse play reverse',
        })
      : ScrollTrigger.create({
          trigger: el,
          start: `top ${startPct}%`,
          once: true,
          onEnter: () => tl.play(),
        })

    return () => {
      st.kill()
      tl.kill()
      gsap.killTweensOf(el)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}
