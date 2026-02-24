import { COMPANY } from '@application/data'
import { SECTION_IDS } from '@application/constants'


const NAV_LINKS = [
  { label: 'Servicios', href: `#${SECTION_IDS.SERVICES}` },
  { label: 'Productos', href: `#${SECTION_IDS.PRODUCTS}` },
  { label: 'Trabajos', href: `#${SECTION_IDS.GALLERY}` },
  { label: 'Nosotros', href: `#${SECTION_IDS.ABOUT}` },
  { label: 'Contacto', href: `#${SECTION_IDS.CONTACT}` },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/6">

      {/* Top gradient separator */}
      <div className="h-px bg-linear-to-r from-transparent via-electric-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand column */}
          <div>
            <img
              src={`${import.meta.env.BASE_URL}Tesla_blanco.png`}
              alt={COMPANY.name}
              className="h-20 w-auto mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {COMPANY.tagline}
            </p>
            <p className="text-white/25 text-xs mt-4 font-semibold tracking-wider uppercase">
              Media y Baja Tensión · Desde {COMPANY.foundedYear}
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-white/25 text-xs font-bold tracking-widest uppercase mb-5">
              Navegación
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-electric-300 transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-white/25 text-xs font-bold tracking-widest uppercase mb-5">
              Contacto
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  className="text-white/50 text-sm hover:text-electric-300 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-electric-500/60">📞</span>
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-white/50 text-sm hover:text-electric-300 transition-colors duration-200 flex items-center gap-2 break-all"
                >
                  <span className="text-electric-500/60">✉</span>
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/40 text-sm">
                <span className="text-electric-500/60 shrink-0">📍</span>
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {year} {COMPANY.name}. Todos los derechos reservados.
          </p>
          <p className="text-white/15 text-xs font-semibold tracking-widest uppercase">
            Hecho con ⚡ en México
          </p>
        </div>
      </div>
    </footer>
  )
}
