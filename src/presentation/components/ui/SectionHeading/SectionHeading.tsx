interface SectionHeadingProps {
  readonly label?: string
  readonly title: string
  readonly subtitle?: string
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      {label && (
        <span className="inline-block text-electric-400 text-sm font-semibold uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/70 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
