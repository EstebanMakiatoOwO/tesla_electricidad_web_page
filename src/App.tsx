// Composition Root — App.tsx wires the entire section tree.
// It contains zero business logic, zero state, and zero animation code.
// Adding a new section = one import + one JSX line. Nothing else changes.
// This is the Open/Closed Principle: open for extension, closed for modification.
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

function App() {
  return (
    <RootLayout>
      <Navbar />
      <PageLayout>
        <Hero />
        <Services />
        <Products />
        <Gallery />
        <About />
        <Testimonials />
        <ContactCTA />
      </PageLayout>
      <Footer />
    </RootLayout>
  )
}

export default App
