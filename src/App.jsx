import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import HireMe from './components/sections/HireMe'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div style={{ backgroundColor: '#020B18', color: '#E6F1FF', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <HireMe />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
