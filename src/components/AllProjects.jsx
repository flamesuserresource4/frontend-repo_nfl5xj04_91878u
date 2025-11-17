import { useMemo, useState } from 'react'

export default function AllProjects() {
  const all = useMemo(() => [
    { name: 'Boonuu Partners', tags: ['Flutter','BLoC','Firebase'], url: 'https://apps.apple.com/in/app/boonuu-partners/id6475149015' },
    { name: 'HaloDili', tags: ['Flutter','GetX','Magento'], url: 'https://play.google.com/store/search?q=halodili&c=apps&hl=en_IN' },
    { name: 'HaloDili Delivery', tags: ['Flutter','WorkManager'], url: 'https://play.google.com/store/apps/details?id=com.halodili.delivery&hl=en_IN' },
    { name: 'eMediHub', tags: ['Flutter','Clean Arch'], url: 'https://www.imdb.com/title/tt10300570/' },
    { name: 'UNA (Amogam)', tags: ['Flutter','UI/UX'], url: 'https://amogam.com/' },
    { name: 'Manifest', tags: ['Flutter','RevenueCat'], url: 'https://medium.com/@corporate.alok' },
    { name: 'WhatsApp Bulk Messenger', tags: ['Flutter','Automation'], url: '#' },
    { name: 'Morse Code Converter', tags: ['Flutter'], url: '#' },
    { name: 'Quizify', tags: ['Flutter'], url: '#' },
  ], [])

  const [q, setQ] = useState('')
  const [filter, setFilter] = useState('All')

  const tags = ['All', ...Array.from(new Set(all.flatMap(p => p.tags)))]
  const filtered = all.filter(p => (filter === 'All' || p.tags.includes(filter)) && p.name.toLowerCase().includes(q.toLowerCase()))

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">All Projects</h1>
        <p className="text-slate-600">Search and filter through everything I’ve built.</p>
      </header>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search projects..." className="w-full sm:w-80 rounded-lg border border-slate-300 px-3 py-2" />
        <div className="flex gap-2 overflow-auto">
          {tags.map(t => (
            <button key={t} onClick={()=>setFilter(t)} className={`px-3 py-1.5 rounded-full border ${filter===t? 'bg-slate-900 text-white border-slate-900':'bg-white text-slate-700 border-slate-300'}`}>{t}</button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-md">
            <div className="aspect-[16/10] rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 mb-4" />
            <h3 className="font-semibold">{p.name}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map(t => (<span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">{t}</span>))}
            </div>
            <span className="text-sky-700 text-sm mt-3 inline-block">Open →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
