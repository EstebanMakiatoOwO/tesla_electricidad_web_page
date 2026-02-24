import { NAV_LINKS } from '@application/constants'
import { COMPANY } from '@application/data'
import { StaggeredMenu } from '@components/ui'

const ITEMS = NAV_LINKS.map(link => ({ label: link.label, link: link.href }))

const SOCIAL_ITEMS = [
  { label: 'WhatsApp', link: `https://wa.me/${COMPANY.phone.replace(/\D/g, '')}` },
  { label: 'Email',    link: `mailto:${COMPANY.email}` },
]

const Logo = (
  <a href="#hero" className="flex items-center no-underline" aria-label={COMPANY.name}>
    <img src={`${import.meta.env.BASE_URL}Tesla_blanco_ico.png`} alt={COMPANY.name} className="h-20 w-auto" />
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
