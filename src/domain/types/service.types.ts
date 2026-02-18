export type ServiceCategory =
  | 'residential'
  | 'commercial'
  | 'industrial'
  | 'emergency'

export interface Service {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly category: ServiceCategory
  readonly iconName: string
}
