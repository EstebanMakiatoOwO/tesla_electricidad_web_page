export const SECTION_IDS = {
  HERO: 'hero',
  SERVICES: 'services',
  PRODUCTS: 'products',
  GALLERY: 'gallery',
  ABOUT: 'about',
  TESTIMONIALS: 'testimonials',
  CONTACT: 'contact',
} as const

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS]
