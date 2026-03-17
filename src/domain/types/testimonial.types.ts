export interface Testimonial {
  readonly id: string
  readonly authorName: string
  readonly authorRole: string
  readonly content: string
  readonly rating: 1 | 2 | 3 | 4 | 5
  readonly avatarUrl?: string
}
