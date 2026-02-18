import { SECTION_IDS } from './sections.constants'

export interface NavLink {
  readonly label: string
  readonly href: string
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Servicios', href: `#${SECTION_IDS.SERVICES}` },
  { label: 'Productos', href: `#${SECTION_IDS.PRODUCTS}` },
  { label: 'Galería', href: `#${SECTION_IDS.GALLERY}` },
  { label: 'Nosotros', href: `#${SECTION_IDS.ABOUT}` },
  { label: 'Testimonios', href: `#${SECTION_IDS.TESTIMONIALS}` },
  { label: 'Contacto', href: `#${SECTION_IDS.CONTACT}` },
] as const
