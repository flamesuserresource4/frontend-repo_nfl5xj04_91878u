import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [splineError, setSplineError] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    'Flutter',
    'Dart',
    'Clean Architecture',
    'Firebase',
    'GetX / BLoC',
    'REST APIs',
    'Git & GitHub',
    'CI/CD'
  ]

  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_40%_80%,rgba(16,185,129,0.15),transparent_35%)]" />

      {/* 3D Card */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/50 bg-white/60 px-3 py-1 text-xs text-sky-700 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              Currently building production Flutter apps
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
              Alok Singh — <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">Flutter Developer</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
              Web developer turned mobile engineer. I design and ship fast, reliable apps with clean architecture, smooth animations, and real-world polish.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 max-w-xl">
              {skills.map((s) => (
                <span key={s} className="text-xs text-slate-700 bg-white/80 border border-slate-200 px-2.5 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-white shadow-lg shadow-slate-900/10 hover:translate-y-[-1px] hover:shadow-xl transition">
                View Projects
              </a>
              <a href="#resume" className="inline-flex items-center justify-center rounded-lg bg-white/80 px-5 py-2.5 text-slate-900 border border-slate-200 hover:bg-white transition">
                View Resume
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-600">
              <div className="flex -space-x-2">
                <img alt="tech" src="https://avatars.githubusercontent.com/u/9919?v=4" className="h-8 w-8 rounded-full border border-white" />
                <img alt="tech" src="https://avatars.githubusercontent.com/u/3171503?v=4" className="h-8 w-8 rounded-full border border-white" />
                <img alt="tech" src="https://avatars.githubusercontent.com/u/1335026?v=4" className="h-8 w-8 rounded-full border border-white" />
              </div>
              <p className="text-sm">From web foundations to shipping mobile apps at scale</p>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0 rounded-3xl border border-white/30 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl shadow-xl" />
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_30%_20%,rgba(59,130,246,0.18),transparent),radial-gradient(60%_60%_at_70%_10%,rgba(14,165,233,0.18),transparent)]" />
              {mounted && !splineError ? (
                <Spline
                  scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                  style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
                  onError={(e) => setSplineError(e?.message || 'Failed to load 3D scene')}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-white/40">
                  <div className="text-sm text-slate-600">{splineError ? '3D preview unavailable' : 'Loading 3D preview...'}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
