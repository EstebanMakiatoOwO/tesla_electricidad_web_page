import { SECTION_IDS } from '@application/constants'
import { BlurText, ShinyText, SpotlightCard, FadeContent, ScrollVelocity } from '@components/ui'
import { CERTIFICATIONS } from '@application/data'

const AC_PRODUCTS = [
  {
    id: 'climatizacion',
    icon: '❄️',
    name: 'Equipos de Clima',
    brand: 'Mirage · Prime · LG · Samsung · Midea',
    description: 'Distribuidores autorizados de las principales marcas. Mini splits y climas de paquete para cualquier espacio.',
    features: ['Mini splits 1 a 5 toneladas', 'Climas de paquete', 'Uso residencial y comercial', 'Distribución autorizada'],
  },
  {
    id: 'mantenimiento',
    icon: '🔧',
    name: 'Mantenimiento A/C',
    brand: 'Correctivo · Preventivo',
    description: 'Mantenemos tu equipo funcionando al máximo rendimiento. Contamos con refacciones y accesorios originales en stock.',
    features: ['Mantenimiento correctivo', 'Mantenimiento preventivo', 'Suministro de refacciones', 'Accesorios y consumibles'],
  },
  {
    id: 'electricidad',
    icon: '⚡',
    name: 'Instalaciones Eléctricas',
    brand: 'Comercial · Doméstica · Industrial',
    description: 'Instalaciones eléctricas completas para todo tipo de proyecto. También contamos con suministro de material eléctrico.',
    features: ['Instalaciones comerciales', 'Instalaciones domésticas', 'Instalaciones industriales', 'Suministro de material eléctrico'],
  },
] as const

export function Products() {
  return (
    <>
      {/* ── ScrollVelocity divider ───────────────────────────────────── */}
      <div className="py-4 bg-black overflow-hidden border-y border-white/5">
        <ScrollVelocity
          texts={[
            'Climatización · Instalaciones Eléctricas · Mantenimiento · Refacciones ·',
            'Distribuidor Autorizado Mirage · LG · Samsung · Prime · Midea ·',
          ]}
          velocity={55}
          className="text-white/15 font-black text-xl tracking-widest uppercase mx-8"
        />
      </div>

      <section id={SECTION_IDS.PRODUCTS} className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeContent blur duration={600} threshold={0.1} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5">
              <ShinyText
                text="Equipos que Instalamos"
                speed={3}
                color="#60a5fa"
                shineColor="#e0f2fe"
                className="text-sm font-semibold tracking-widest uppercase"
              />
            </div>
            <BlurText
              text="Clima, electricidad y más."
              delay={60}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white justify-center mb-4"
            />
            <p className="max-w-2xl mx-auto text-white/50 text-lg">
              Distribuidor autorizado Mirage y representantes de las principales marcas.
              Suministro, instalación y mantenimiento en un solo lugar.
            </p>
          </FadeContent>

          <FadeContent blur duration={700} threshold={0.05} delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AC_PRODUCTS.map((product) => (
                <SpotlightCard
                  key={product.id}
                  spotlightColor="rgba(59,130,246,0.12)"
                  className="p-8 group hover:border-electric-500/25 transition-colors duration-300"
                >
                  <div className="text-5xl mb-5">{product.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric-300 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-electric-400/70 text-xs font-semibold tracking-widest uppercase mb-4">
                    {product.brand}
                  </p>
                  <p className="text-white/55 text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              ))}
            </div>
          </FadeContent>

          {/* Certifications marquee */}
          <FadeContent duration={500} threshold={0.1} className="mt-16">
            <p className="text-center text-white/25 text-xs font-semibold tracking-widest uppercase mb-6">
              Marcas con las que trabajamos
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-1.5 rounded-full border border-white/10 text-white/40 text-xs font-semibold tracking-wide"
                >
                  {cert}
                </span>
              ))}
            </div>
          </FadeContent>
        </div>
      </section>
    </>
  )
}
