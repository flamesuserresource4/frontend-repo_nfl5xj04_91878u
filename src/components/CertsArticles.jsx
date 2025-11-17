export default function CertsArticles() {
  const certs = [
    { name: 'Version Control', issuer: 'Meta', date: '2023' },
    { name: 'Introduction to Front-End Development', issuer: 'Meta', date: '2023' },
    { name: 'HTML & CSS in Depth', issuer: 'Meta', date: '2023' },
    { name: 'Programming with JavaScript', issuer: 'Meta', date: '2023' },
    { name: 'Introduction to Back-End Development', issuer: 'Meta', date: '2023' },
  ]

  const articles = [
    { title: 'Transparent video in Flutter (alpha channel player)', excerpt: 'Render RGBA videos for clean overlays in Flutter.', date: '2024-06-12', link: 'https://medium.com/@corporate.alok' },
    { title: 'Clean Architecture in Flutter — migrating from MVVM', excerpt: 'Scale Flutter apps with clear boundaries and testability.', date: '2024-04-02', link: 'https://medium.com/@corporate.alok' },
    { title: 'Shipping production Flutter apps: patterns and pitfalls', excerpt: 'Battle-tested tactics for performance and stability.', date: '2024-01-18', link: 'https://medium.com/@corporate.alok' },
  ]

  return (
    <section id="certifications" className="relative py-20 bg-gradient-to-b from-white to-sky-50/60 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Certifications</h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              {certs.map((c) => (
                <li key={c.name} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
                  <p className="font-medium text-slate-900 dark:text-white">{c.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{c.issuer}</p>
                  <span className="mt-2 inline-block text-xs text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div id="articles">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Technical Articles</h2>
            <div className="mt-6 grid gap-4">
              {articles.map((a) => (
                <a key={a.title} href={a.link} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm hover:shadow-md transition">
                  <div className="text-xs text-slate-500 dark:text-slate-400">{new Date(a.date).toLocaleDateString()}</div>
                  <p className="font-medium text-slate-900 dark:text-white">{a.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{a.excerpt}</p>
                  <span className="mt-1 inline-block text-sky-700 dark:text-sky-400 text-sm">Read more →</span>
                </a>
              ))}
              <a href="https://medium.com/@corporate.alok" target="_blank" rel="noreferrer" className="inline-block mt-2 text-sm text-sky-700 dark:text-sky-400 hover:underline">View more on Medium →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
