import { useState } from 'react'
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#articles', label: 'Articles' },
    { href: '#resume', label: 'Resume' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-semibold tracking-tight text-slate-900 text-lg">
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">Dev Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-5 w-px bg-slate-300/70" />
            <div className="flex items-center gap-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 hover:text-slate-900">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-slate-900">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter/X" className="text-slate-600 hover:text-slate-900">
                <Twitter size={20} />
              </a>
            </div>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/50">
          <div className="px-4 py-3 space-y-2 bg-white/80">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-700 hover:text-slate-900">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 hover:text-slate-900">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-slate-900">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter/X" className="text-slate-600 hover:text-slate-900">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
