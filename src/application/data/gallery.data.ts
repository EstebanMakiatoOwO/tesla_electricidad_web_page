export interface GalleryProject {
  readonly id: string
  readonly title: string
  readonly category: string
  readonly imageUrl: string
}

export const GALLERY_PROJECTS: readonly GalleryProject[] = [
  {
    id: 'p1',
    title: 'Tablero Industrial BT',
    category: 'Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 'p2',
    title: 'Instalación Split Residencial',
    category: 'Climatización',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop',
  },
  {
    id: 'p3',
    title: 'Instalación Eléctrica Edificio',
    category: 'Residencial',
    imageUrl: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=600&h=400&fit=crop',
  },
  {
    id: 'p4',
    title: 'Sistema VRF Oficinas',
    category: 'Climatización',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
  },
  {
    id: 'p5',
    title: 'Automatización Planta',
    category: 'Industrial',
    imageUrl: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&h=400&fit=crop',
  },
  {
    id: 'p6',
    title: 'Mantención Preventiva AC',
    category: 'Mantención',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
  },
  {
    id: 'p7',
    title: 'Cableado Estructurado',
    category: 'Residencial',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  },
  {
    id: 'p8',
    title: 'Instalación Cassette Comercial',
    category: 'Climatización',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
  },
] as const

export const CERTIFICATIONS = [
  'SEC Chile',
  'SAMSUNG Authorized',
  'LG Service Partner',
  'Midea Installer',
  'Daikin Certified',
  'ISO 9001',
  'Carrier Partner',
  'Mitsubishi Electric',
] as const
