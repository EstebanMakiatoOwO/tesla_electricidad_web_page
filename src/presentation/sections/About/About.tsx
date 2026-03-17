import { SECTION_IDS } from '@application/constants'
import { COMPANY } from '@application/data'
import { BlurText, ShinyText, CountUp, SpotlightCard, FadeContent } from '@components/ui'

const yearsActive = new Date().getFullYear() - COMPANY.foundedYear

const HIGHLIGHTS = [
  'Especialistas en media y baja tensión',
  'Garantía en mano de obra y materiales incluida',
  'Atención de emergencias 24/7 los 365 días',
  'Equipo técnico con experiencia industrial y residencial',
  'Marcas líderes: Samsung, LG, Daikin, Midea, Carrier',
  'Presupuestos sin costo y sin compromiso',
] as const

export function About() {
  return (
    <section id={SECTION_IDS.ABOUT} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT — text + mini stats ───────────────────────────────── */}
          <FadeContent blur duration={600} threshold={0.1}>
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5">
              <ShinyText
                text="Quiénes Somos"
                speed={3}
                color="#60a5fa"
                shineColor="#e0f2fe"
                className="text-sm font-semibold tracking-widest uppercase"
              />
            </div>

            <BlurText
              text="Más de dos décadas encendiendo México."
              delay={55}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            />

            <p className="text-white/55 text-lg leading-relaxed mb-4">
              Somos una empresa de ingeniería eléctrica y climatización fundada en {COMPANY.foundedYear},
              con sede en Tuxtla Gutiérrez. Desde el primer día, nuestro compromiso ha sido
              entregar instalaciones seguras, eficientes y duraderas.
            </p>
            <p className="text-white/45 text-base leading-relaxed mb-10">
              Ya sea un proyecto residencial, comercial o industrial, contamos con el equipo,
              los materiales y la experiencia para hacerlo bien a la primera.
            </p>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-10">
              {[
                { to: yearsActive, suffix: '+', label: 'Años activos' },
                { to: 500, suffix: '+', label: 'Clientes felices' },
                { to: 1200, suffix: '+', label: 'Proyectos listos' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-white tabular-nums">
                    <CountUp to={s.to} duration={2.2} delay={0.3} />
                    <span className="text-electric-400">{s.suffix}</span>
                  </p>
                  <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeContent>

          {/* ── RIGHT — highlights card ────────────────────────────────── */}
          <FadeContent blur duration={700} threshold={0.05} delay={150}>
            <SpotlightCard
              spotlightColor="rgba(59,130,246,0.12)"
              className="p-8"
            >
              <p className="text-electric-400/70 text-xs font-bold tracking-widest uppercase mb-6">
                Por qué elegirnos
              </p>
              <ul className="space-y-4">
                {HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-none w-5 h-5 rounded-full bg-electric-500/15 border border-electric-500/30 flex items-center justify-center">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </FadeContent>

        </div>
      </div>
    </section>
  )
}
