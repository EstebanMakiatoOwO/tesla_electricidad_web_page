export interface Testimonial {
  readonly id: string
  readonly name: string
  readonly role: string
  readonly company: string
  readonly quote: string
  readonly rating: 1 | 2 | 3 | 4 | 5
  readonly initials: string
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 't1',
    name: 'Pedro González',
    role: 'Propietario',
    company: 'Residencia Terán',
    quote:
      'Tesla instaló todo el sistema eléctrico de nuestra casa nueva. El trabajo fue impecable, en tiempo récord y completamente certificado. Totalmente recomendados.',
    rating: 5,
    initials: 'PG',
  },
  {
    id: 't2',
    name: 'María Silva',
    role: 'Gerente de Operaciones',
    company: 'Oficinas ProTech',
    quote:
      'Llevamos 3 años con el contrato de mantención de nuestros aires acondicionados. Siempre puntuales, profesionales y con un servicio post-venta excelente.',
    rating: 5,
    initials: 'MS',
  },
  {
    id: 't3',
    name: 'Carlos Moreno',
    role: 'Administrador',
    company: 'Edificio Panorámico',
    quote:
      'Renovaron toda la instalación eléctrica del edificio sin afectar a los residentes. Coordinación perfecta y trabajo de primer nivel.',
    rating: 5,
    initials: 'CM',
  },
  {
    id: 't4',
    name: 'Laura Pérez',
    role: 'Dueña',
    company: 'Boutique Lux Centro',
    quote:
      'Llamé a las 9 PM por una falla eléctrica en mi local y llegaron en menos de una hora. Solucionaron todo esa misma noche. ¡Servicio increíble!',
    rating: 5,
    initials: 'LP',
  },
  {
    id: 't5',
    name: 'Rodrigo Vega',
    role: 'Jefe de Planta',
    company: 'Industrias Del Valle',
    quote:
      'Realizaron la instalación eléctrica completa de nuestra planta con resultados impresionantes. Un equipo profesional que sabe lo que hace.',
    rating: 5,
    initials: 'RV',
  },
] as const
