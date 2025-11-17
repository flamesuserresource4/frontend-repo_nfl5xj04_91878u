import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const initial = localStorage.getItem('theme') || 'light'
    const isDark = initial === 'dark' || (initial === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const navItems = [
    { href: '#projects', label: 'Projects', type: 'anchor' },
    { href: '#certifications', label: 'Certifications', type: 'anchor' },
    { href: '/blog', label: 'Blog', type: 'route' },
    { href: '#resume', label: 'Resume', type: 'anchor' },
    { href: '#contact', label: 'Contact', type: 'anchor' },
  ]

  const NavLink = ({ item }) => item.type === 'route' ? (
    <Link to={item.href} className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">{item.label}</Link>
  ) : (
    <a href={item.href} className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">{item.label}</a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/70 border-b border-white/40 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-semibold tracking-tight text-slate-900 dark:text-white text-lg">
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">Alok Singh</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <NavLink key={item.href + item.label} item={item} />
            ))}
            <div className="h-5 w-px bg-slate-300/70 dark:bg-slate-700" />
            <div className="flex items-center gap-4">
              <a href="https://github.com/Alok-Sci" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/alok--singh" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                <Linkedin size={20} />
              </a>
              <button onClick={toggleTheme} aria-label="Toggle dark mode" className="rounded-md p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link to="/admin" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm hover:opacity-90">Admin</Link>
            </div>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/50 dark:border-slate-800">
          <div className="px-4 py-3 space-y-2 bg-white/80 dark:bg-slate-900/80">
            {navItems.map(item => (
              item.type === 'route' ? (
                <Link key={item.href} to={item.href} onClick={() => setOpen(false)} className="block text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">{item.label}</Link>
              ) : (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">{item.label}</a>
              )
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/Alok-Sci" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/alok--singh" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                <Linkedin size={20} />
              </a>
              <button onClick={toggleTheme} className="rounded-md p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200">
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Link to="/admin" onClick={() => setOpen(false)} className="inline-flex items-center rounded-lg bg-slate-900 text-white px-3 py-1.5 text-sm">Admin</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
