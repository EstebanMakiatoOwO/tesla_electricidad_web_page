import { useState, useEffect, useCallback } from 'react'
import { gsap, ScrollTrigger } from '@infrastructure/gsap'

interface UseNavbarReturn {
  readonly isScrolled: boolean
  readonly isMobileOpen: boolean
  readonly toggleMobile: () => void
  readonly closeMobile: () => void
}

export function useNavbar(): UseNavbarReturn {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobile = useCallback(() => setIsMobileOpen((prev) => !prev), [])
  const closeMobile = useCallback(() => setIsMobileOpen(false), [])

  // GSAP ScrollTrigger: detect scroll past 20px threshold.
  // Using GSAP instead of a scroll event listener avoids re-rendering
  // the component on every pixel scrolled.
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 'top -20',
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
    })

    return () => {
      trigger.kill()
    }
  }, [])

  // Close mobile menu when viewport reaches md breakpoint (768px).
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) closeMobile()
    }

    mediaQuery.addEventListener('change', handleResize)
    return () => mediaQuery.removeEventListener('change', handleResize)
  }, [closeMobile])

  // Prevent body scroll when mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  // Initialize GSAP ScrollTrigger after mount.
  useEffect(() => {
    gsap.ticker.lagSmoothing(0)
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return { isScrolled, isMobileOpen, toggleMobile, closeMobile }
}
