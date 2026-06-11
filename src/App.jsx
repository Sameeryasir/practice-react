import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustMetrics from './components/TrustMetrics'
import About from './components/About'
import Services from './components/Services'
import OurWork from './components/OurWork'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustMetrics />
        <About />
        <Services />
        <OurWork />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
