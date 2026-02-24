import { SECTION_IDS } from '@application/constants'
import { TESTIMONIALS } from '@application/data'
import { BlurText, ShinyText, SpotlightCard, FadeContent } from '@components/ui'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14"
          fill={i < rating ? '#60a5fa' : 'none'}
          stroke={i < rating ? '#60a5fa' : '#ffffff18'}
          strokeWidth="1.2"
        >
          <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id={SECTION_IDS.TESTIMONIALS} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeContent blur duration={600} threshold={0.1} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5">
            <ShinyText
              text="Lo que dicen nuestros clientes"
              speed={3}
              color="#60a5fa"
              shineColor="#e0f2fe"
              className="text-sm font-semibold tracking-widest uppercase"
            />
          </div>
          <BlurText
            text="Clientes que nos recomiendan."
            delay={60}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white justify-center mb-4"
          />
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Más de 500 familias y empresas confían en nosotros.
          </p>
        </FadeContent>

        <FadeContent blur duration={700} threshold={0.05} delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <SpotlightCard
                key={t.id}
                spotlightColor="rgba(59,130,246,0.10)"
                className="p-7 flex flex-col"
              >
                <Stars rating={t.rating} />
                <blockquote className="text-white/70 text-sm leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-white/6">
                  <div className="w-9 h-9 rounded-full bg-electric-500/15 border border-electric-500/25 flex items-center justify-center shrink-0">
                    <span className="text-electric-300 text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role} · {t.company}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </FadeContent>

      </div>
    </section>
  )
}
