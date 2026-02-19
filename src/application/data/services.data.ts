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
      'Diseño e instalación de sistemas eléctricos completos para hogares, departamentos y condominios. Cumplimiento total con la norma SEC.',
    features: [
      'Tableros eléctricos modernos',
      'Circuitos diferenciados por zona',
      'Iluminación LED inteligente',
      'Certificación SEC incluida',
    ],
  },
  {
    id: 'electricidad-industrial',
    icon: '🏭',
    title: 'Instalación Industrial y Comercial',
    description:
      'Soluciones eléctricas de alta potencia para industrias, bodegas, locales comerciales y edificios de oficinas.',
    features: [
      'Alta y baja tensión',
      'Tableros industriales NEMA',
      'Automatización de procesos',
      'Respaldo de energía UPS',
    ],
  },
  {
    id: 'mantencion-electrica',
    icon: '🔧',
    title: 'Mantención y Reparación',
    description:
      'Servicio técnico preventivo y correctivo para instalaciones eléctricas. Atención de emergencias las 24 horas, los 7 días.',
    features: [
      'Diagnóstico termográfico',
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
      'VRF / VRV industriales',
      'Garantía de instalación',
    ],
  },
  {
    id: 'ac-mantencion',
    icon: '🌡️',
    title: 'Mantención Aire Acondicionado',
    description:
      'Limpieza profunda, recarga de gas refrigerante y revisión completa para mantener tu equipo al 100% de eficiencia.',
    features: [
      'Limpieza de filtros y evaporador',
      'Recarga gas R-410A / R-32',
      'Revisión de compresor',
      'Plan de mantención anual',
    ],
  },
  {
    id: 'tableros-automatizacion',
    icon: '⚡',
    title: 'Tableros y Automatización',
    description:
      'Fabricación e instalación de tableros eléctricos a medida y sistemas de automatización para control inteligente de instalaciones.',
    features: [
      'Tableros BT y MT',
      'PLC y SCADA',
      'Domótica residencial',
      'Monitoreo remoto IoT',
    ],
  },
] as const
