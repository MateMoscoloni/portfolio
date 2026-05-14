import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { LazyAbout, LazySkills, LazyExperience, LazyServices } from '@/components/LazySection'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LazyAbout />
      <LazySkills />
      <LazyExperience />
      <LazyServices />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
