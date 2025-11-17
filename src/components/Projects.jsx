import { useState } from 'react'

function ProjectCard({ project, onOpen }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
      <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 mb-4" />
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-slate-900">{project.title}</h3>
        <span className="text-xs text-sky-700 bg-sky-50 px-2 py-1 rounded-full">Featured</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">{project.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map(t => (
          <span key={t} className="text-xs text-slate-700 bg-slate-100 px-2 py-1 rounded-full">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <a href={project.link} target="_blank" rel="noreferrer" className="text-sky-700 text-sm">Open on Store →</a>
        <button onClick={() => onOpen(project)} className="text-slate-900 text-sm font-medium">View Details</button>
      </div>
    </div>
  )
}

function ProjectModal({ open, onClose, project }) {
  if (!open || !project) return null
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/50">
      <div className="w-full max-w-3xl rounded-2xl bg-white p-6 overflow-auto max-h-[90vh]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <button onClick={onClose} className="px-3 py-1.5 rounded-md border border-slate-300">Close</button>
        </div>
        <p className="text-slate-600">{project.long || project.desc}</p>
        <div className="mt-4">
          <h4 className="font-medium">Technologies</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map(t => (<span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{t}</span>))}
          </div>
        </div>
        {project.features?.length ? (
          <div className="mt-4">
            <h4 className="font-medium">Key features</h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
              {project.features.map((f, i) => (<li key={i}>{f}</li>))}
            </ul>
          </div>
        ) : null}
        {project.images?.length ? (
          <div className="mt-4 grid grid-cols-2 gap-3">
            {project.images.map((src, i) => (<img key={i} src={src} alt="screenshot" className="rounded-lg border" />))}
          </div>
        ) : null}
        <div className="mt-6 flex gap-3">
          <a href={project.link} target="_blank" rel="noreferrer" className="rounded-lg bg-slate-900 text-white px-4 py-2">Open Store</a>
          {project.caseStudy && <a href={project.caseStudy} target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-4 py-2">Case Study</a>}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const projects = [
    {
      title: 'Boonuu Partners — Pet Care Platform',
      tags: ['Flutter', 'BLoC', 'Firebase', 'Agora'],
      desc: 'Production app: fixed critical video-call and chat bugs, UI/UX improvements, notifications.',
      link: 'https://apps.apple.com/in/app/boonuu-partners/id6475149015',
      features: ['Agora video & chat','Notifications','UI/UX iterations','Bug fixing & performance'],
    },
    {
      title: 'HaloDili — E‑commerce',
      tags: ['Flutter', 'GetX', 'Magento API', 'Push'],
      desc: '5K+ downloads. Built complex PDP, API integration, loading states, pagination, and notifications.',
      link: 'https://play.google.com/store/search?q=halodili&c=apps&hl=en_IN',
      features: ['Product catalogue & PDP','Pagination & shimmer','Notifications','State management with GetX'],
    },
    {
      title: 'HaloDili Delivery — Driver App',
      tags: ['Flutter', 'WorkManager', 'Google Maps'],
      desc: 'Driver app with background location tracking, maps, shimmer loading. Delivered in ~5 days.',
      link: 'https://play.google.com/store/apps/details?id=com.halodili.delivery&hl=en_IN',
      features: ['Background location','Google Maps','Shimmer states'],
    },
    {
      title: 'eMediHub — Healthcare',
      tags: ['Flutter', 'Clean Arch', 'i18n', 'PDF'],
      desc: 'Solo build. Migrated MVVM → Clean Architecture. PDF tools, family tree viz, multi-language.',
      link: 'https://www.imdb.com/title/tt10300570/',
      features: ['Clean architecture','Internationalization','PDF generation','Family tree visuals'],
    },
    {
      title: 'UNA (Amogam) — Social + Commerce',
      tags: ['Flutter', 'UI/UX', 'Design Systems'],
      desc: '20+ crafted screens with reusable components and premium interactions.',
      link: 'https://amogam.com/',
      features: ['Component library','Premium interactions','Design system'],
    },
    {
      title: 'Manifest — Meditation Platform',
      tags: ['Flutter', 'RevenueCat', 'Custom Player'],
      desc: 'Transparent video player, adaptive theming, subscriptions, dynamic app icon.',
      link: 'https://medium.com/@corporate.alok',
      features: ['RevenueCat subscriptions','Custom video player','Dynamic app icon'],
    }
  ]

  const onOpen = (p) => { setActive(p); setOpen(true) }
  const onClose = () => { setOpen(false); setActive(null) }

  return (
    <section id="projects" className="relative py-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">A selection of apps and platforms I helped design, build, and ship.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={idx} project={p} onOpen={onOpen} />
          ))}
        </div>
      </div>

      <ProjectModal open={open} onClose={onClose} project={active} />
    </section>
  )
}
