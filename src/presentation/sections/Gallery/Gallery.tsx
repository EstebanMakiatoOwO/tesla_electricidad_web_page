import { SECTION_IDS } from '@application/constants'
import { GALLERY_PROJECTS } from '@application/data'
import { BlurText, ShinyText, FadeContent, TiltedCard } from '@components/ui'

export function Gallery() {
  return (
    <section id={SECTION_IDS.GALLERY} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeContent blur duration={600} threshold={0.1} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-electric-500/20 bg-electric-500/5">
            <ShinyText
              text="Nuestros Trabajos"
              speed={3}
              color="#60a5fa"
              shineColor="#e0f2fe"
              className="text-sm font-semibold tracking-widest uppercase"
            />
          </div>
          <BlurText
            text="Proyectos que hablan por sí solos."
            delay={60}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white justify-center mb-4"
          />
          <p className="max-w-2xl mx-auto text-white/50 text-lg">
            Cada instalación es un compromiso con la calidad y la seguridad de tu hogar o empresa.
          </p>
        </FadeContent>

        <FadeContent blur duration={700} threshold={0.05} delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_PROJECTS.map((project) => (
              <div key={project.id} className="group relative">
                <TiltedCard
                  imageSrc={project.imageUrl}
                  altText={project.title}
                  captionText={project.title}
                  containerHeight="220px"
                  imageHeight="220px"
                  rotateAmplitude={10}
                  scaleOnHover={1.04}
                  showTooltip={false}
                  displayOverlayContent
                  overlayContent={
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-semibold leading-tight">{project.title}</p>
                      <p className="text-electric-300 text-xs mt-0.5 font-medium tracking-wider uppercase">{project.category}</p>
                    </div>
                  }
                />
                {/* always-visible caption below card */}
                <div className="mt-2 px-1">
                  <p className="text-white/70 text-sm font-medium truncate">{project.title}</p>
                  <p className="text-electric-400/60 text-xs font-semibold tracking-wider uppercase">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeContent>

      </div>
    </section>
  )
}
