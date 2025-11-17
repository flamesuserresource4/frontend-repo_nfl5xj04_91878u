import { useState } from 'react'

function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="font-semibold mb-3">{title}</h2>
      {children}
    </section>
  )
}

export default function AdminDashboard() {
  const [resumeUrl, setResumeUrl] = useState('')

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="text-slate-600">Manage projects, certifications, articles, and resume. (Demo UI)</p>

      <div className="grid md:grid-cols-2 gap-6">
        <Section title="Projects">
          <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Add Project</button>
          <p className="text-sm text-slate-600 mt-2">Create, edit, and remove projects. (Coming soon)</p>
        </Section>

        <Section title="Certifications">
          <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Add Certification</button>
          <p className="text-sm text-slate-600 mt-2">Update your certification list. (Coming soon)</p>
        </Section>

        <Section title="Blog Articles">
          <button className="rounded-lg bg-slate-900 text-white px-4 py-2">New Article</button>
          <p className="text-sm text-slate-600 mt-2">Link or write posts. (Coming soon)</p>
        </Section>

        <Section title="Resume">
          <div className="space-y-2">
            <input placeholder="Public resume URL (PDF)" value={resumeUrl} onChange={e=>setResumeUrl(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
            <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Save</button>
          </div>
          <p className="text-sm text-slate-600 mt-2">Upload your resume to a public link (Drive/Notion) and paste the URL here. (Coming soon)</p>
        </Section>

        <Section title="Social Links">
          <button className="rounded-lg bg-slate-900 text-white px-4 py-2">Edit Links</button>
          <p className="text-sm text-slate-600 mt-2">LinkedIn, GitHub, Medium, Google Dev Profile, Email. (Coming soon)</p>
        </Section>
      </div>
    </div>
  )
}
