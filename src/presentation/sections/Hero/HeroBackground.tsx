import { useEffect, useRef } from 'react'
import { gsap } from '@infrastructure/gsap'

export function HeroBackground() {
  const orbRef = useRef<HTMLDivElement | null>(null)

  // GSAP infinite float — no ScrollTrigger needed, starts on mount.
  // gsap.context() ensures cleanup on unmount (React StrictMode safe).
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(orbRef.current, {
        y: -40,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Radial gradient glow — bottom left */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_100%,rgb(59_130_246/0.12),transparent_70%)]" />

      {/* Secondary accent glow — top right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_0%,rgb(59_130_246/0.07),transparent_60%)]" />

      {/* Floating orb — top right, GSAP animated */}
      <div
        ref={orbRef}
        className={[
          'absolute -top-32 -right-32 w-125 h-125 rounded-full',
          'bg-electric-500/10 blur-[100px]',
        ].join(' ')}
      />

      {/* Subtle grid texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.015)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.015)_1px,transparent_1px)] bg-size-[60px_60px]" />
    </div>
  )
}