import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LangProvider } from './i18n/LangContext'

export default function App() {
  return (
    <LangProvider>
      <div className="grain vignette min-h-screen bg-ink-950 text-cream-100 antialiased">
        <Nav />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}
