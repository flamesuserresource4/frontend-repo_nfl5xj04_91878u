import { useMemo } from 'react'

export default function Blog() {
  const posts = useMemo(() => [
    { title: 'Transparent video in Flutter (alpha channel player)', excerpt: 'How to render RGBA videos with seamless blending in Flutter.', date: '2024-06-12', link: 'https://medium.com/@corporate.alok' },
    { title: 'Clean Architecture in Flutter — migrating from MVVM', excerpt: 'A pragmatic guide to structuring large Flutter apps.', date: '2024-04-02', link: 'https://medium.com/@corporate.alok' },
    { title: 'Shipping production Flutter apps: patterns and pitfalls', excerpt: 'Real-world tactics for stability, performance, and UX.', date: '2024-01-18', link: 'https://medium.com/@corporate.alok' },
  ], [])

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Blog Articles</h1>
        <p className="text-slate-600 mt-1">Thoughts on Flutter, architecture, and shipping apps.</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition">
            <div className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString()}</div>
            <h3 className="mt-1 font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
            <span className="mt-3 inline-block text-sky-700 text-sm">Read more →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
