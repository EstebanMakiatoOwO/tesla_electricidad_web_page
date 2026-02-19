import { SECTION_IDS } from '@application/constants'

export function About() {
  return (
    <section id={SECTION_IDS.ABOUT} className="section-padding bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center">
          About — placeholder
        </h2>
      </div>
    </section>
  )
}
