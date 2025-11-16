import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-700">
            <a href="mailto:you@example.com" className="hover:text-slate-900"><Mail size={18} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-slate-900"><Github size={18} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-slate-900"><Linkedin size={18} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-slate-900"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
