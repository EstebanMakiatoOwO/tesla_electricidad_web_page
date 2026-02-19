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
import { Button, GooeyNav } from '@components/ui'
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
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)
  const springX = useSpring(mouseX, { stiffness: 400, damping: 40, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 400, damping: 40, mass: 0.5 })

  const spotlightStyle = useTransform(
    [springX, springY],
    ([x, y]: number[]) =>
      `radial-gradient(360px circle at ${x}px ${y}px, rgb(59 130 246 / 0.12), transparent 70%)`
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
          'fixed top-0 left-0 right-0 z-sticky',
          'transition-all duration-slow',
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-electric-500/10'
            : 'bg-transparent',
        ].join(' ')}
      >
        {/* Spotlight layer */}
        <m.div
          style={{ background: spotlightStyle }}
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />

        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 grid grid-cols-[1fr_auto_1fr] items-center">

          {/* ── Logo ── */}
          <a
            href="#hero"
            onClick={closeMobile}
            className="flex items-center gap-2 group justify-self-start"
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

          {/* ── GooeyNav desktop ── */}
          <div className="hidden md:block">
            <GooeyNav items={NAV_LINKS} />
          </div>

          {/* ── Hamburger (mobile only) ── */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 rounded-md justify-self-end"
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
            {/* Backdrop */}
            <m.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-overlay bg-black/80 backdrop-blur-sm md:hidden"
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
                'bg-black/98 backdrop-blur-md border-b border-electric-500/10',
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
                        'text-white/80 hover:text-white hover:bg-electric-500/5',
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
