import { SECTION_IDS } from '@application/constants'

export function Gallery() {
  return (
    <section id={SECTION_IDS.GALLERY} className="section-padding bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center">
          Gallery — placeholder
        </h2>
      </div>
    </section>
  )
}
