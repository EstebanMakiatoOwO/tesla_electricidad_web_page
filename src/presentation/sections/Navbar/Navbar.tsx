import { NAV_LINKS } from '@application/constants'
import { COMPANY } from '@application/data'
import { StaggeredMenu } from '@components/ui'

const ITEMS = NAV_LINKS.map(link => ({ label: link.label, link: link.href }))

const SOCIAL_ITEMS = [
  { label: 'WhatsApp', link: `https://wa.me/${COMPANY.phone.replace(/\D/g, '')}` },
  { label: 'Email',    link: `mailto:${COMPANY.email}` },
]

const Logo = (
  <a href="#hero" className="flex items-center gap-2 no-underline" aria-label={COMPANY.name}>
    <span className="text-electric-400 text-2xl select-none" aria-hidden="true">⚡</span>
    <span className="text-lg font-bold tracking-tight">
      <span className="text-electric-400">Tesla</span>
      <span className="text-white"> Electricidad</span>
    </span>
  </a>
)

export function Navbar() {
  return (
    <StaggeredMenu
      isFixed
      position="right"
      items={ITEMS}
      socialItems={SOCIAL_ITEMS}
      displaySocials
      displayItemNumbering
      logo={Logo}
      colors={['#07070b', '#0d1a33']}
      accentColor="#60a5fa"
    />
  )
}
