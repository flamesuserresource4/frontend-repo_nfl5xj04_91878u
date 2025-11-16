export default function Projects() {
  const projects = [
    {
      title: 'Fintech Flutter App',
      tags: ['Flutter', 'Dart', 'Firebase'],
      desc: 'A modern mobile banking experience with biometrics and beautiful motion.',
      link: '#'
    },
    {
      title: 'React SaaS Dashboard',
      tags: ['React', 'Tailwind', 'Node'],
      desc: 'Responsive admin dashboard with charts, roles, and dark mode.',
      link: '#'
    },
    {
      title: 'Portfolio v3',
      tags: ['Next.js', 'Framer Motion'],
      desc: 'Personal site focused on performance and accessibility.',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
          <p className="mt-2 text-slate-600">A few things I loved building recently.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <a key={idx} href={p.link} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
              <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 mb-4" />
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <span className="text-xs text-sky-700 bg-sky-50 px-2 py-1 rounded-full">Case Study</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-slate-700 bg-slate-100 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
