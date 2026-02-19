export interface GsapTweenConfig {
  readonly duration: number
  readonly ease: string
  readonly opacity?: number
  readonly y?: number
  readonly x?: number
  readonly scale?: number
}

// Reveal element by fading up on scroll
export const scrollFadeUp: GsapTweenConfig = {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power2.out',
}

// Parallax drift — element moves upward as user scrolls (use on backgrounds)
export const parallaxDrift: GsapTweenConfig = {
  y: -60,
  duration: 1.2,
  ease: 'none',
}

// Scale in on scroll — for cards and feature tiles
export const scrollScaleIn: GsapTweenConfig = {
  opacity: 1,
  scale: 1,
  duration: 0.6,
  ease: 'back.out(1.4)',
}
