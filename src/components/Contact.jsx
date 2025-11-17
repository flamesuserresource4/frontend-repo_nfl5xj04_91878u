import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Let’s build something great</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Open to full-time Flutter roles and impactful freelance work.</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:corporate.alok@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2"><Mail size={18}/>Email</a>
              <a href="https://github.com/Alok-Sci" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2"><Github size={18}/>GitHub</a>
              <a href="https://linkedin.com/in/alok--singh" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 px-4 py-2"><Linkedin size={18}/>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
