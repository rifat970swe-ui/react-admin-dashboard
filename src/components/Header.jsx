const pageSubtitle = {
  Dashboard: "Business health snapshot and trend tracking",
  Users: "Team management and permissions overview",
  Analytics: "Performance metrics and growth insights",
  Settings: "Profile, notifications, and security preferences",
  Support: "Support channels and ticket submission",
  Logout: "Exit confirmation and account safety",
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  )
}

export default function Header({
  setIsOpen,
  theme,
  setTheme,
  title,
}) {
  const dateLabel = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <header className="sticky top-0 z-30 border-b bg-[color:var(--bg-secondary)]/80 px-4 py-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-[color:var(--bg-soft)] text-[color:var(--text-primary)] transition hover:scale-[1.03] md:hidden"
            aria-label="Open sidebar"
          >
            <MenuIcon />
          </button>

          <div className="min-w-0">
            <h1 className="title-font truncate text-xl font-bold tracking-tight">{title}</h1>
            <p className="truncate text-sm muted-text">{pageSubtitle[title]}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-xl border bg-[color:var(--bg-soft)] px-3 py-2 text-xs font-semibold sm:inline-flex">
            {dateLabel}
          </span>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="inline-flex h-10 items-center gap-3 rounded-xl border bg-[color:var(--bg-soft)] px-3 text-sm font-semibold transition hover:scale-[1.03]"
            aria-label="Toggle dark mode"
          >
            <span className="text-xs font-semibold uppercase tracking-wide muted-text">
              {theme === "light" ? "Light" : "Dark"}
            </span>
            <span className="relative inline-flex h-5 w-10 items-center rounded-full bg-slate-300/80 p-0.5 dark:bg-slate-700">
              <span
                className={`absolute left-0.5 top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-slate-700 shadow transition-transform dark:bg-slate-900 dark:text-slate-200 ${
                  theme === "dark" ? "translate-x-5" : "translate-x-0"
                }`}
              >
                {theme === "light" ? <SunIcon /> : <MoonIcon />}
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
