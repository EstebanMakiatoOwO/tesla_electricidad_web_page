import { m } from 'framer-motion'
import { SECTION_IDS } from '@application/constants'
import { COMPANY } from '@application/data'
import { Button, Badge } from '@components/ui'
import {
  fadeUpVariants,
  fadeInVariants,
  scalePopVariants,
} from '@animations/variants'
import { heroTransition, springTransition } from '@animations/transitions'
import { HeroBackground } from './HeroBackground'
import { HeroStat } from './HeroStats'

const STATS = [
  { value: 15, suffix: '+', label: 'Años de Experiencia' },
  { value: 500, suffix: '+', label: 'Clientes Satisfechos' },
  { value: 1200, suffix: '+', label: 'Proyectos Completados' },
] as const

const yearsActive = new Date().getFullYear() - COMPANY.foundedYear

export function Hero() {
  return (
    <section
      id={SECTION_IDS.HERO}
      className="relative min-h-dvh flex flex-col items-center justify-center pt-20 overflow-hidden bg-navy-950"
    >
      <HeroBackground />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* ── Badge ─────────────────────────────────────────────────────── */}
        <m.div
          variants={scalePopVariants}
          initial="hidden"
          animate="visible"
          transition={springTransition}
          className="inline-flex mb-6"
        >
          <Badge variant="electric">
            ⚡ Certificados y Avalados — SEC Chile
          </Badge>
        </m.div>

        {/* ── Heading ───────────────────────────────────────────────────── */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 overflow-hidden">
          <m.span
            className="block text-white"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...heroTransition, delay: 0.1 }}
          >
            Energía que transforma.
          </m.span>
          <m.span
            className="block text-gradient-electric"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...heroTransition, delay: 0.25 }}
          >
            Confort que dura.
          </m.span>
        </h1>

        {/* ── Subtitle ──────────────────────────────────────────────────── */}
        <m.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/65 mb-10 leading-relaxed"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...heroTransition, delay: 0.4 }}
        >
          Más de {yearsActive} años instalando soluciones eléctricas y
          climatización para hogares, oficinas e industrias.
        </m.p>

        {/* ── CTA Buttons ───────────────────────────────────────────────── */}
        <m.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...heroTransition, delay: 0.55 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => { window.location.href = '#contact' }}
          >
            Solicitar Servicio
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => { window.location.href = '#services' }}
          >
            Ver Servicios
          </Button>
        </m.div>

        {/* ── Stats row ─────────────────────────────────────────────────── */}
        <m.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...heroTransition, delay: 0.7 }}
        >
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
            <div className="flex flex-wrap justify-center divide-x divide-white/10 py-8">
              {STATS.map((stat) => (
                <HeroStat
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
          </div>
        </m.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
      <m.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 cursor-default"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1L8 16M8 16L2 10M8 16L14 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </m.div>
    </section>
  )
}
