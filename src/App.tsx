import { RootLayout } from '@layouts/RootLayout'
import { PageLayout } from '@layouts/PageLayout'
import { Navbar } from '@sections/Navbar'
import { Hero } from '@sections/Hero'
import { Services } from '@sections/Services'
import { Products } from '@sections/Products'
import { Gallery } from '@sections/Gallery'
import { About } from '@sections/About'
import { Testimonials } from '@sections/Testimonials'
import { ContactCTA } from '@sections/ContactCTA'
import { Footer } from '@sections/Footer'

/* Each section slides up (GSAP scrub) as it enters — and slides back down
   when scrolling up. Higher z-index sections render on top of previous ones,
   and the dark top shadow creates the "overlay" feeling. */
const SECTION_ITEMS = [
  { id: 'services',      el: <Services /> },
  { id: 'products',      el: <Products /> },
  { id: 'gallery',       el: <Gallery /> },
  { id: 'about',         el: <About /> },
  { id: 'testimonials',  el: <Testimonials /> },
  { id: 'cta',           el: <ContactCTA /> },
]

function App() {
  return (
    <RootLayout>
      <Navbar />
      <PageLayout>
        <Hero />
        {SECTION_ITEMS.map(({ id, el }) => (
            <div key={id}>{el}</div>
        ))}
      </PageLayout>
        <Footer />
    </RootLayout>
  )
}

export default App
