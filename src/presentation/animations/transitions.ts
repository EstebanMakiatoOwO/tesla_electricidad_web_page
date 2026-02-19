import type { Transition } from 'framer-motion'

// Standard eased — default for most entrance animations
export const defaultTransition: Transition = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.5,
}

// Springy — for interactive elements (buttons, cards on hover)
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 24,
}

// Hero slow reveal — for large headings and hero text
export const heroTransition: Transition = {
  type: 'tween',
  ease: [0.16, 1, 0.3, 1],
  duration: 0.9,
}

// Fast snap — for micro-interactions (icon swap, badge appear)
export const snapTransition: Transition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.2,
}
