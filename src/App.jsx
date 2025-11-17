import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import CertsArticles from './components/CertsArticles'
import ResumeCTA from './components/ResumeCTA'
import Footer from './components/Footer'
import Blog from './components/Blog'
import AllProjects from './components/AllProjects'
import AdminLogin from './components/admin/AdminLogin'
import AdminDashboard from './components/admin/AdminDashboard'
import Contact from './components/Contact'

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <CertsArticles />
      <ResumeCTA />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="*" element={<div className="px-6 py-20 text-center"><h1 className="text-3xl font-bold">Page not found</h1><p className="mt-2 text-slate-600 dark:text-slate-400">Return <Link className="text-sky-600" to="/">home</Link>.</p></div>} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
