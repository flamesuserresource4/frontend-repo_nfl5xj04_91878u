export default function CertsArticles() {
  const certs = [
    { name: 'Version Control', issuer: 'Meta', year: '2023' },
    { name: 'Introduction to Front-End Development', issuer: 'Meta', year: '2023' },
    { name: 'HTML & CSS in Depth', issuer: 'Meta', year: '2023' },
    { name: 'Programming with JavaScript', issuer: 'Meta', year: '2023' },
    { name: 'Introduction to Back-End Development', issuer: 'Meta', year: '2023' },
  ]

  const articles = [
    { title: 'Transparent video in Flutter (alpha channel player)', platform: 'Medium', link: 'https://medium.com/@corporate.alok' },
    { title: 'Clean Architecture in Flutter — migrating from MVVM', platform: 'Medium', link: 'https://medium.com/@corporate.alok' },
    { title: 'Shipping production Flutter apps: patterns and pitfalls', platform: 'Medium', link: 'https://medium.com/@corporate.alok' },
  ]

  return (
    <section id="certifications" className="relative py-20 bg-gradient-to-b from-white to-sky-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Certifications</h2>
            <ul className="mt-6 space-y-4">
              {certs.map((c) => (
                <li key={c.name} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div>
                    <p className="font-medium text-slate-900">{c.name}</p>
                    <p className="text-sm text-slate-600">{c.issuer}</p>
                  </div>
                  <span className="text-xs text-slate-700 bg-slate-100 px-2 py-1 rounded-full">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div id="articles">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Technical Articles</h2>
            <div className="mt-6 space-y-4">
              {articles.map((a) => (
                <a key={a.title} href={a.link} target="_blank" rel="noreferrer" className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                  <p className="font-medium text-slate-900">{a.title}</p>
                  <p className="text-sm text-slate-600">{a.platform}</p>
                </a>
              ))}
              <a href="https://medium.com/@corporate.alok" target="_blank" rel="noreferrer" className="inline-block mt-2 text-sm text-sky-700 hover:underline">View more on Medium →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
