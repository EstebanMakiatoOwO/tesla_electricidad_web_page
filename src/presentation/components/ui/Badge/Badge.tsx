import type { ReactNode } from 'react'

type BadgeVariant = 'electric' | 'accent' | 'neutral'

interface BadgeProps {
  readonly children: ReactNode
  readonly variant?: BadgeVariant
}

const badgeVariantClasses: Record<BadgeVariant, string> = {
  electric: 'bg-electric-500/20 text-electric-300 border border-electric-500/30',
  accent: 'bg-accent-500/20 text-accent-300 border border-accent-500/30',
  neutral: 'bg-white/10 text-white/80 border border-white/20',
}

export function Badge({ children, variant = 'electric' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center px-3 py-1 rounded-pill text-xs font-semibold',
        badgeVariantClasses[variant],
      ].join(' ')}
    >
      {children}
    </span>
  )
}
