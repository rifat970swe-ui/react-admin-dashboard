export default function Login({ onLogin }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--bg-primary)] px-4">
      <section className="surface w-full max-w-sm p-6">
        <h2 className="title-font text-center text-2xl font-bold tracking-tight">Admin Login</h2>

        <div className="mt-5 space-y-4">
          <input
            placeholder="Email"
            className="w-full rounded-xl border bg-[color:var(--bg-soft)] px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border bg-[color:var(--bg-soft)] px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>

        <button
          onClick={onLogin}
          className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.35)] transition hover:brightness-110"
        >
          Login
        </button>

        <p className="mt-4 text-center text-xs muted-text">
          Demo login only. Authentication can be wired to any backend.
        </p>
      </section>
    </div>
  )
}
