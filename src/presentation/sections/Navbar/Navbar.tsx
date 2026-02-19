import {
  m,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import type { MouseEvent } from 'react'
import { NAV_LINKS } from '@application/constants'
import { COMPANY } from '@application/data'
import { Button, ElectricBorder } from '@components/ui'
import { fadeUpVariants, staggerContainerVariants } from '@animations/variants'
import { defaultTransition, heroTransition } from '@animations/transitions'
import { useNavbar } from './useNavbar'

// ── Hamburger variants ────────────────────────────────────────────────────────
const topBarVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 8 },
}
const middleBarVariants = {
  closed: { opacity: 1, scaleX: 1 },
  open: { opacity: 0, scaleX: 0 },
}
const bottomBarVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -8 },
}

export function Navbar() {
  const { isScrolled, isMobileOpen, toggleMobile, closeMobile } = useNavbar()

  // ── Spotlight cursor glow ─────────────────────────────────────────────────
  // mouseX/Y track raw cursor position relative to the header.
  // springX/Y add a smooth spring lag so the glow trails naturally.
  // Start off-screen (-500) so there's no glow until the user mouses in.
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)
  const springX = useSpring(mouseX, { stiffness: 400, damping: 40, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 400, damping: 40, mass: 0.5 })

  const spotlightStyle = useTransform(
    [springX, springY],
    ([x, y]: number[]) =>
      `radial-gradient(380px circle at ${x}px ${y}px, rgb(59 130 246 / 0.14), transparent 70%)`
  )

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    mouseX.set(-500)
    mouseY.set(-500)
  }

  return (
    <>
      {/* ── Main header ─────────────────────────────────────────────────── */}
      <m.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={heroTransition}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={[
          'fixed top-0 left-0 right-0 z-sticky overflow-hidden',
          'transition-all duration-slow',
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent',
        ].join(' ')}
      >
        {/* Spotlight layer — renders behind all nav content */}
        <m.div
          style={{ background: spotlightStyle }}
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />

        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* ── Logo ── */}
          <a
            href="#hero"
            onClick={closeMobile}
            className="flex items-center gap-2 group"
            aria-label={COMPANY.name}
          >
            <m.span
              className="text-electric-400 text-2xl select-none"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              aria-hidden="true"
            >
              ⚡
            </m.span>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-electric-400">Tesla</span>
              <span className="text-white"> Electricidad</span>
            </span>
          </a>

          {/* ── Desktop nav ── */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2" role="list">
            {NAV_LINKS.map((link) => (
              // Each li is a hover group. The ElectricBorder is an absolutely
              // positioned overlay (pointer-events-none) that fades in on hover.
              // The visible link text sits above it on z-10, always clickable.
              <li key={link.href} className="relative group/navlink">
                {/* ElectricBorder overlay — hidden by default, appears on hover */}
                <div className={[
                  'absolute -inset-x-3 -inset-y-2',
                  'opacity-0 group-hover/navlink:opacity-100',
                  'transition-opacity duration-200 pointer-events-none',
                ].join(' ')}>
                  <ElectricBorder
                    color="#60a5fa"
                    speed={2.5}
                    chaos={0.09}
                    borderRadius={6}
                  >
                    {/* Invisible spacer so ElectricBorder sizes to the link */}
                    <span className="invisible block px-3 py-2 text-sm">
                      {link.label}
                    </span>
                  </ElectricBorder>
                </div>

                {/* Actual link — always visible, above the overlay */}
                <m.a
                  href={link.href}
                  className="relative z-10 text-sm font-medium text-white/70"
                  whileHover={{ color: 'rgb(255 255 255)' }}
                  transition={{ duration: 0.15 }}
                >
                  {link.label}
                </m.a>
              </li>
            ))}
          </ul>

          {/* ── Hamburger button (mobile only) ── */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 rounded-md"
            onClick={toggleMobile}
            aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileOpen}
          >
            <m.span
              variants={topBarVariants}
              animate={isMobileOpen ? 'open' : 'closed'}
              transition={defaultTransition}
              className="block w-6 h-0.5 bg-white origin-center"
            />
            <m.span
              variants={middleBarVariants}
              animate={isMobileOpen ? 'open' : 'closed'}
              transition={defaultTransition}
              className="block w-6 h-0.5 bg-white origin-center"
            />
            <m.span
              variants={bottomBarVariants}
              animate={isMobileOpen ? 'open' : 'closed'}
              transition={defaultTransition}
              className="block w-6 h-0.5 bg-white origin-center"
            />
          </button>
        </nav>
      </m.header>

      {/* ── Mobile menu overlay ─────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Scrim backdrop */}
            <m.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-overlay bg-navy-950/80 backdrop-blur-sm md:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />

            {/* Slide-down panel */}
            <m.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={[
                'fixed top-20 left-0 right-0 z-sticky md:hidden',
                'bg-navy-900/98 backdrop-blur-md border-b border-white/10',
                'px-4 pt-6 pb-8',
              ].join(' ')}
              role="dialog"
              aria-label="Menú de navegación"
            >
              <m.ul
                variants={staggerContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-1 mb-6"
                role="list"
              >
                {NAV_LINKS.map((link) => (
                  <m.li key={link.href} variants={fadeUpVariants}>
                    <a
                      href={link.href}
                      onClick={closeMobile}
                      className={[
                        'block py-3 px-4 rounded-button text-lg font-medium',
                        'text-white/80 hover:text-white hover:bg-white/5',
                        'transition-colors duration-normal',
                      ].join(' ')}
                    >
                      {link.label}
                    </a>
                  </m.li>
                ))}
              </m.ul>

              <m.div variants={fadeUpVariants}>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => {
                    closeMobile()
                    window.location.href = '#contact'
                  }}
                >
                  Contactar ahora
                </Button>
              </m.div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
