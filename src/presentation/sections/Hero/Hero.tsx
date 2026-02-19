import { SECTION_IDS } from '@application/constants'

export function Hero() {
  return (
    <section
      id={SECTION_IDS.HERO}
      className="min-h-dvh flex items-center justify-center pt-20 section-padding bg-navy-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Hero — placeholder
        </h1>
      </div>
    </section>
  )
}
