import { SECTION_IDS } from '@application/constants'
import { COMPANY } from '@application/data'
import { Button, BlurText, ShinyText, FadeContent, Magnet } from '@components/ui'

export function ContactCTA() {
  return (
    <section id={SECTION_IDS.CONTACT} className="py-24 bg-black relative overflow-hidden">

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <FadeContent blur duration={600} threshold={0.1}>
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}Tesla_blanco.png`}
              alt={COMPANY.name}
              className="h-50 w-auto drop-shadow-[0_0_32px_rgba(59,130,246,0.55)]"
            />
          </div>

          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5">
            <ShinyText
              text="¿Listo para comenzar?"
              speed={3}
              color="#60a5fa"
              shineColor="#e0f2fe"
              className="text-sm font-semibold tracking-widest uppercase"
            />
          </div>

          <BlurText
            text="Cotiza tu proyecto hoy."
            delay={60}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white justify-center mb-5"
          />

          <p className="text-white/50 text-lg leading-relaxed mb-4">
            Solicita un presupuesto sin costo. Te respondemos en menos de 24 horas
            con una propuesta detallada y sin sorpresas.
          </p>

          {/* Phone highlight */}
          <div className="inline-flex items-center gap-2 mb-10">
            <span className="text-electric-400 text-lg">📞</span>
            <ShinyText
              text={COMPANY.phone}
              speed={2}
              color="#93c5fd"
              shineColor="#ffffff"
              className="text-xl font-bold"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Magnet magnetStrength={4}>
              <Button
                variant="primary"
                size="lg"
                className="shadow-electric hover:shadow-electric-lg transition-shadow min-w-48"
                onClick={() => {
                  window.open(`tel:${COMPANY.phone.replace(/\s/g, '')}`)
                }}
              >
                ⚡ Llamar Ahora
              </Button>
            </Magnet>
            <Magnet magnetStrength={4}>
              <Button
                variant="secondary"
                size="lg"
                className="min-w-48"
                onClick={() => {
                  window.open(
                    `mailto:${COMPANY.email}?subject=Solicitud de cotización`,
                  )
                }}
              >
                Enviar Correo
              </Button>
            </Magnet>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-white/30 text-xs font-semibold tracking-widest uppercase">
            {['Presupuesto gratis', 'Respuesta en 24h', 'Media y baja tensión', 'Sin compromiso'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-electric-500/50" />
                {item}
              </span>
            ))}
          </div>
        </FadeContent>

      </div>
    </section>
  )
}
