export default function Logout() {
  return (
    <div className="flex min-h-[62vh] items-center justify-center">
      <section className="surface w-full max-w-md p-7 text-center sm:p-8">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-300">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <path d="m16 17 5-5-5-5" />
            <path d="M21 12H9" />
          </svg>
        </div>

        <h2 className="title-font text-2xl font-bold tracking-tight text-red-600 dark:text-red-300">Confirm Logout</h2>

        <p className="mt-2 text-sm muted-text">
          This portfolio build uses demo-only actions. Authentication can be integrated on request.
        </p>

        <button
          onClick={() => alert("Demo only: no real auth flow connected")}
          className="mt-5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        >
          Confirm Logout
        </button>
      </section>
    </div>
  )
}
