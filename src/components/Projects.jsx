export default function Projects() {
  const projects = [
    {
      title: 'Boonuu Partners — Pet Care Platform',
      tags: ['Flutter', 'BLoC', 'Firebase', 'Agora'],
      desc: 'Production app: fixed critical video-call and chat bugs, UI/UX improvements, notifications.',
      link: 'https://apps.apple.com/in/app/boonuu-partners/id6475149015'
    },
    {
      title: 'HaloDili — E‑commerce',
      tags: ['Flutter', 'GetX', 'Magento API', 'Push'],
      desc: '5K+ downloads. Built complex PDP, API integration, loading states, pagination, and notifications.',
      link: 'https://play.google.com/store/search?q=halodili&c=apps&hl=en_IN'
    },
    {
      title: 'HaloDili Delivery — Driver App',
      tags: ['Flutter', 'WorkManager', 'Google Maps'],
      desc: 'Driver app with background location tracking, maps, shimmer loading. Delivered in ~5 days.',
      link: 'https://play.google.com/store/apps/details?id=com.halodili.delivery&hl=en_IN'
    },
    {
      title: 'eMediHub — Healthcare',
      tags: ['Flutter', 'Clean Arch', 'i18n', 'PDF'],
      desc: 'Solo build. Migrated MVVM → Clean Architecture. PDF tools, family tree viz, multi-language.',
      link: 'https://www.imdb.com/title/tt10300570/'
    },
    {
      title: 'UNA (Amogam) — Social + Commerce',
      tags: ['Flutter', 'UI/UX', 'Design Systems'],
      desc: '20+ crafted screens with reusable components and premium interactions.',
      link: 'https://amogam.com/'
    },
    {
      title: 'Manifest — Meditation Platform',
      tags: ['Flutter', 'RevenueCat', 'Custom Player'],
      desc: 'Transparent video player, adaptive theming, subscriptions, dynamic app icon.',
      link: 'https://medium.com/@corporate.alok'
    }
  ]

  return (
    <section id="projects" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
          <p className="mt-2 text-slate-600">A selection of apps and platforms I helped design, build, and ship.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <a key={idx} href={p.link} target="_blank" rel="noreferrer" className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
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
