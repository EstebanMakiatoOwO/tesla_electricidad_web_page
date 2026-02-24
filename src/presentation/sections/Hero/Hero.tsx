import { m } from 'framer-motion'
import { SECTION_IDS } from '@application/constants'
import { COMPANY } from '@application/data'
import { Button, BlurText, ShinyText, CountUp, Magnet } from '@components/ui'
import { fadeInVariants } from '@animations/variants'
import { heroTransition } from '@animations/transitions'
import { HeroBackground } from './HeroBackground'

const STATS = [
  { to: 15, suffix: '+', label: 'Años de Experiencia' },
  { to: 500, suffix: '+', label: 'Clientes Satisfechos' },
  { to: 1200, suffix: '+', label: 'Proyectos Completados' },
] as const

const yearsActive = new Date().getFullYear() - COMPANY.foundedYear

export function Hero() {
  return (
    <section
      id={SECTION_IDS.HERO}
      className="relative min-h-dvh flex flex-col items-center justify-center pt-20 overflow-hidden bg-black"
    >
      <HeroBackground />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* ── Badge ─────────────────────────────────────────────────────── */}
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...heroTransition, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-electric-400/40 bg-black/40 backdrop-blur-sm"
        >
          <span className="text-electric-300 text-sm">⚡</span>
          <ShinyText
            text="Media y Baja Tensión · Tuxtla Gutiérrez"
            speed={2.5}
            color="#93c5fd"
            shineColor="#ffffff"
            className="text-sm font-semibold tracking-wider uppercase"
          />
        </m.div>

        {/* ── Heading ───────────────────────────────────────────────────── */}
        {/* div instead of h1 so BlurText <p> children are valid HTML */}
        <div
          role="heading"
          aria-level={1}
          className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-none mb-6"
        >
          <BlurText
            text="Domina la"
            delay={70}
            direction="top"
            className="text-white justify-center"
            stepDuration={0.38}
          />
          {/* Single text node → background-clip:text works correctly */}
          <m.div
            className="text-gradient-electric-white flex justify-center"
            initial={{ opacity: 0, filter: 'blur(10px)', y: -20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.76, delay: 0.14 }}
          >
            Electricidad.
          </m.div>
        </div>

        {/* ── Subtitle ──────────────────────────────────────────────────── */}
        <m.p
          className="max-w-xl mx-auto text-lg sm:text-xl text-white/55 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...heroTransition, delay: 0.5 }}
        >
          Más de {yearsActive} años instalando soluciones eléctricas y
          climatización. Potencia tu hogar e industria con precisión.
        </m.p>

        {/* ── CTA Buttons ───────────────────────────────────────────────── */}
        <m.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...heroTransition, delay: 0.65 }}
        >
          <Magnet magnetStrength={3}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => { window.location.href = '#contact' }}
            >
              Solicitar Servicio
            </Button>
          </Magnet>
          <Magnet magnetStrength={3}>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => { window.location.href = '#services' }}
            >
              Ver Servicios
            </Button>
          </Magnet>
        </m.div>

        {/* ── Stats row ─────────────────────────────────────────────────── */}
        <m.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...heroTransition, delay: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-electric-500/25 to-transparent" />
            <div className="flex flex-wrap justify-center divide-x divide-white/8 py-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center px-8">
                  <p className="text-3xl sm:text-4xl font-bold text-white tabular-nums">
                    <CountUp to={stat.to} duration={2.2} delay={0.9} />
                    <span className="text-electric-400">{stat.suffix}</span>
                  </p>
                  <p className="mt-1 text-sm text-white/45 font-medium tracking-widest uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-electric-500/25 to-transparent" />
          </div>
        </m.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
      <m.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 cursor-default"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <path d="M8 1L8 16M8 16L2 10M8 16L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </m.div>
    </section>
  )
}
