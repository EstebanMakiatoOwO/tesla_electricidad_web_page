import { SECTION_IDS } from '@application/constants'
import { SERVICES } from '@application/data'
import { BlurText, ShinyText, SpotlightCard, FadeContent } from '@components/ui'

export function Services() {
  return (
    <section id={SECTION_IDS.SERVICES} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeContent blur duration={600} threshold={0.1} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5">
            <ShinyText
              text="Nuestros Servicios"
              speed={3}
              color="#60a5fa"
              shineColor="#e0f2fe"
              className="text-sm font-semibold tracking-widest uppercase"
            />
          </div>
          <BlurText
            text="Todo lo que necesitas, en un solo lugar."
            delay={60}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white justify-center mb-4"
          />
          <p className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed">
            Especialistas en media y baja tensión. Más de 15 años
            respaldando hogares, oficinas e industrias en todo México.
          </p>
        </FadeContent>

        <FadeContent blur duration={700} threshold={0.05} delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <SpotlightCard
                key={service.id}
                spotlightColor="rgba(59,130,246,0.12)"
                className="p-7 group hover:border-electric-500/25 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="text-electric-400 text-xs">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  )
}
