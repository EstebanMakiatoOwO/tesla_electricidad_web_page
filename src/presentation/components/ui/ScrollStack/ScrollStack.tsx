/**
 * ScrollStack — adapted from ReactBits (DavidHDev/react-bits)
 * Lenis removed. Bug fix: original card positions are cached at init so
 * getBoundingClientRect() feedback-loop on scroll-up is avoided.
 */
import { useLayoutEffect, useRef, useCallback, type ReactNode } from 'react'

const CSS = `
.ss-card {
  transform-origin: top center;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  position: relative;
}
.ss-end { width: 100%; height: 1px; }
`

/* ─── ScrollStackItem ──────────────────────────────────────────────────── */
export interface ScrollStackItemProps {
  children: ReactNode
  className?: string
}

export function ScrollStackItem({ children, className = '' }: ScrollStackItemProps) {
  return <div className={`ss-card ${className}`.trim()}>{children}</div>
}

/* ─── ScrollStack ──────────────────────────────────────────────────────── */
export interface ScrollStackProps {
  children: ReactNode
  className?: string
  /** CSS padding for the inner wrapper, e.g. "0 0 40vh" */
  innerPadding?: string
  /** Extra marginBottom (px) added between items */
  itemDistance?: number
  /** Scale reduction per card depth */
  itemScale?: number
  /** Vertical px stagger between stacked cards */
  itemStackDistance?: number
  /** Viewport % at which the card starts to pin */
  stackPosition?: number
  /** Viewport % at which the scale animation finishes */
  scaleEndPosition?: number
  /** Minimum scale of the deepest card */
  baseScale?: number
  /** Rotation per depth level (degrees) */
  rotationAmount?: number
}

export function ScrollStack({
  children,
  className = '',
  innerPadding = '0 0 40vh',
  itemDistance = 0,
  itemScale = 0.02,
  itemStackDistance = 14,
  stackPosition = 8,
  scaleEndPosition = 3,
  baseScale = 0.92,
  rotationAmount = 0,
}: ScrollStackProps) {
  const containerRef    = useRef<HTMLDivElement>(null)
  const cardsRef        = useRef<HTMLElement[]>([])
  // Cached ORIGINAL absolute-top positions (before any transforms)
  const cardTopsRef     = useRef<number[]>([])
  const endTopRef       = useRef<number>(0)
  const rafRef          = useRef<number | null>(null)
  const lastScrollRef   = useRef(-1)

  const update = useCallback(() => {
    const scrollY = window.scrollY
    if (Math.abs(scrollY - lastScrollRef.current) < 0.3) return
    lastScrollRef.current = scrollY

    const vh       = window.innerHeight
    const stackPx  = (stackPosition  / 100) * vh
    const scalePx  = (scaleEndPosition / 100) * vh
    const endTop   = endTopRef.current

    cardsRef.current.forEach((card, i) => {
      // Always use the cached original position — never getBoundingClientRect here
      const cardTop     = cardTopsRef.current[i] ?? 0
      const triggerStart = cardTop - stackPx - itemStackDistance * i
      const triggerEnd   = cardTop - scalePx
      const pinEnd       = endTop - vh / 2

      const scaleLen      = triggerEnd - triggerStart || 1
      const scaleProgress = Math.max(0, Math.min(1, (scrollY - triggerStart) / scaleLen))
      const targetScale   = baseScale + i * itemScale
      const scale         = 1 - scaleProgress * (1 - targetScale)

      let ty = 0
      if (scrollY >= triggerStart && scrollY <= pinEnd) {
        ty = scrollY - cardTop + stackPx + itemStackDistance * i
      } else if (scrollY > pinEnd) {
        ty = pinEnd - cardTop + stackPx + itemStackDistance * i
      }

      const rot = rotationAmount ? i * rotationAmount * scaleProgress : 0
      card.style.transform = `translate3d(0,${ty}px,0) scale(${scale}) rotate(${rot}deg)`
    })
  }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, rotationAmount])

  const onScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(update)
  }, [update])

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = Array.from(container.querySelectorAll('.ss-card')) as HTMLElement[]
    cardsRef.current = cards

    // Cache absolute positions BEFORE any transforms are applied
    const getAbsTop = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY

    cardTopsRef.current = cards.map(card => {
      // Reset any prior transform so measurement is clean
      card.style.transform = ''
      return getAbsTop(card)
    })

    const endEl = container.querySelector('.ss-end') as HTMLElement | null
    endTopRef.current = endEl ? getAbsTop(endEl) : 0

    // Set z-index so later sections render on top of earlier pinned ones
    cards.forEach((card, i) => {
      card.style.zIndex = String(i + 1)
      if (itemDistance > 0 && i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`
      }
    })

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      cardsRef.current = []
      cardTopsRef.current = []
      lastScrollRef.current = -1
    }
  }, [itemDistance, onScroll, update])

  return (
    <>
      <style>{CSS}</style>
      <div ref={containerRef} className={className}>
        <div style={{ padding: innerPadding }}>
          {children}
          <div className="ss-end" />
        </div>
      </div>
    </>
  )
}
