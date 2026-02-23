export interface Service {
  readonly id: string
  readonly icon: string
  readonly title: string
  readonly description: string
  readonly features: readonly string[]
}

export const SERVICES: readonly Service[] = [
  {
    id: 'electricidad-residencial',
    icon: '🏠',
    title: 'Instalación Eléctrica Residencial',
    description:
      'Diseño e instalación de sistemas eléctricos completos para hogares, departamentos y condominios. Trabajamos en baja tensión con materiales de primera calidad.',
    features: [
      'Cableado eléctrico profesional',
      'Circuitos diferenciados por zona',
      'Iluminación LED inteligente',
      'Instalación segura y documentada',
    ],
  },
  {
    id: 'electricidad-industrial',
    icon: '🏭',
    title: 'Instalación Industrial y Comercial',
    description:
      'Soluciones eléctricas en media y baja tensión para industrias, bodegas, locales comerciales y edificios de oficinas.',
    features: [
      'Especialistas en media y baja tensión',
      'Diagnóstico y planeación eléctrica',
      'Automatización de procesos',
      'Respaldo de energía UPS',
    ],
  },
  {
    id: 'mantenimiento-electrica',
    icon: '🔧',
    title: 'Mantenimiento y Reparación',
    description:
      'Servicio técnico preventivo y correctivo para instalaciones eléctricas. Atención de emergencias las 24 horas, los 7 días.',
    features: [
      'Reemplazo de componentes',
      'Emergencias 24/7',
      'Informe técnico detallado',
    ],
  },
  {
    id: 'ac-instalacion',
    icon: '❄️',
    title: 'Instalación Aire Acondicionado',
    description:
      'Instalación profesional de sistemas Split, Multisplit y Cassette. Todas las marcas líderes del mercado.',
    features: [
      'Split y Multisplit',
      'Sistemas centralizados',
      'Garantía de instalación',
    ],
  },
  {
    id: 'ac-mantenimiento',
    icon: '🌡️',
    title: 'Mantenimiento de Aire Acondicionado',
    description:
      'Limpieza profunda, recarga de gas refrigerante y revisión completa para mantener tu equipo al 100% de eficiencia.',
    features: [
      'Limpieza de filtros y evaporador',
      'Recarga gas R-410A / R-32',
      'Revisión de compresor',
      'Plan de mantención anual',
    ],
  },
] as const
