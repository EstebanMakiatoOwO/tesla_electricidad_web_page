import { useEffect, useRef } from 'react'
import { gsap } from '@infrastructure/gsap'

interface HeroStatProps {
  readonly value: number
  readonly suffix: string
  readonly label: string
}

export function HeroStat({ value, suffix, label }: HeroStatProps) {
  const numberRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const counter = { val: 0 }

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: value,
        duration: 2,
        ease: 'power2.out',
        delay: 0.8,
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = String(Math.round(counter.val))
          }
        },
      })
    })

    return () => ctx.revert()
  }, [value])

  return (
    <div className="text-center px-6">
      <p className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
        <span ref={numberRef}>0</span>
        <span className="text-electric-400">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-white/60 font-medium tracking-wide uppercase">
        {label}
      </p>
    </div>
  )
}