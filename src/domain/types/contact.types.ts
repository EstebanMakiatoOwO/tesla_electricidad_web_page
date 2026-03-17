export type ContactFormField =
  | 'name'
  | 'email'
  | 'phone'
  | 'message'
  | 'serviceType'

export interface ContactFormData {
  readonly name: string
  readonly email: string
  readonly phone: string
  readonly message: string
  readonly serviceType: string
}

export interface ContactFormState {
  readonly status: 'idle' | 'submitting' | 'success' | 'error'
  readonly errorMessage: string | null
}
