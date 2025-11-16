export default function CertsArticles() {
  const certs = [
    { name: 'Google Associate Android Developer', issuer: 'Google', year: '2022' },
    { name: 'Meta Front-End Developer', issuer: 'Meta', year: '2023' },
    { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2021' },
  ]

  const articles = [
    { title: 'Flutter animations that feel native', platform: 'Medium', link: 'https://medium.com/'},
    { title: 'Clean architecture for React & Flutter', platform: 'Medium', link: 'https://medium.com/'},
    { title: 'From web to mobile: lessons learned', platform: 'Medium', link: 'https://medium.com/'},
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
