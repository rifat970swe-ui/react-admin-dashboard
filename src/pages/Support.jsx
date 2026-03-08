const channels = [
  {
    title: "Documentation",
    detail: "Feature guide and setup instructions for clients and teams.",
    icon: "DOC",
  },
  {
    title: "Live Chat",
    detail: "Fast support for urgent product and implementation issues.",
    icon: "CHAT",
  },
  {
    title: "Email Support",
    detail: "Share bug reports and project requirements with full context.",
    icon: "MAIL",
  },
]

export default function Support() {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="title-font text-2xl font-bold tracking-tight">Support Center</h2>
        <p className="mt-1 text-sm muted-text">Get help, ask implementation questions, or submit a support ticket.</p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {channels.map((channel) => (
          <article key={channel.title} className="surface p-5">
            <span className="inline-flex rounded-lg bg-blue-600 px-2.5 py-1 text-xs font-bold tracking-wide text-white">
              {channel.icon}
            </span>
            <h3 className="mt-3 title-font text-lg font-bold tracking-tight">{channel.title}</h3>
            <p className="mt-2 text-sm muted-text">{channel.detail}</p>
          </article>
        ))}
      </section>

      <section className="surface p-5 sm:p-6">
        <h3 className="title-font text-lg font-bold tracking-tight">Contact Support</h3>

        <div className="mt-4 space-y-4">
          <input
            placeholder="Subject"
            className="w-full rounded-xl border bg-[color:var(--bg-soft)] px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
          />

          <textarea
            rows="4"
            placeholder="Describe your issue"
            className="w-full rounded-xl border bg-[color:var(--bg-soft)] px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
          />

          <button
            onClick={() => alert("Demo request submitted")}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.35)] transition hover:brightness-110"
          >
            Submit Request
          </button>
        </div>
      </section>
    </div>
  )
}
