import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import { gsap, ScrollTrigger } from '@infrastructure/gsap'
import type { GsapTweenConfig } from '@animations/gsapPresets'

interface UseScrollAnimationOptions {
  readonly tweenConfig: GsapTweenConfig
  readonly fromConfig?: Partial<GsapTweenConfig>
  readonly triggerStart?: string
  readonly triggerEnd?: string
}

export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions
): RefObject<T | null> {
  const elementRef = useRef<T | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 40, ...options.fromConfig },
        {
          ...options.tweenConfig,
          scrollTrigger: {
            trigger: element,
            start: options.triggerStart ?? 'top 85%',
            end: options.triggerEnd ?? 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, element)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [options.tweenConfig, options.fromConfig, options.triggerStart, options.triggerEnd])

  return elementRef
}