import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import CertsArticles from './components/CertsArticles'
import ResumeCTA from './components/ResumeCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-900">
      <Navbar />
      <Hero />
      <Projects />
      <CertsArticles />
      <ResumeCTA />
      <Footer />
    </div>
  )
}

export default App
