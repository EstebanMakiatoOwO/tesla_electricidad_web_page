import { Lightning } from '@components/ui'

export function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* WebGL lightning — fills entire hero */}
      <div className="absolute inset-0 opacity-75">
        <Lightning hue={220} speed={1.1} intensity={1.4} size={0.9} />
      </div>

      {/* Center vignette — keeps text readable over the bright lightning */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_10%,rgba(0,0,0,0.55)_65%,rgba(0,0,0,0.82)_100%)]" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black to-transparent" />
    </div>
  )
}
