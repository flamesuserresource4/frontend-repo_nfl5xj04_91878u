export default function ResumeCTA() {
  return (
    <section id="resume" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 text-white overflow-hidden relative">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl font-semibold">Grab my resume</h3>
            <p className="mt-2 text-white/80 max-w-xl">One page snapshot of my journey across web and mobile. Contains experience, skills, and notable wins.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-2.5 font-medium hover:opacity-90 transition">Download PDF</a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/30 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition">View Online</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
