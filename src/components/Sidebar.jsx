const menuItems = [
  { name: "Dashboard", icon: DashboardIcon },
  { name: "Users", icon: UsersIcon },
  { name: "Analytics", icon: AnalyticsIcon },
  { name: "Settings", icon: SettingsIcon },
]

const bottomItems = [
  { name: "Support", icon: SupportIcon },
  { name: "Logout", icon: LogoutIcon, danger: true },
]

function IconFrame({ children }) {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/8 ring-1 ring-white/10">
      {children}
    </span>
  )
}

function DashboardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 13h6V4H4zM14 20h6v-9h-6zM14 10h6V4h-6zM4 20h6v-5H4z" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M20 8v6M23 11h-6" />
    </svg>
  )
}

function AnalyticsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m3 17 5-5 4 4 7-8" />
      <path d="M14 8h5v5" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m12 3 2.6 1.5 3-.4 1.5 2.6-1.2 2.8 1.2 2.8-1.5 2.6-3-.4L12 21l-2.6-1.5-3 .4-1.5-2.6 1.2-2.8-1.2-2.8 1.5-2.6 3 .4z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10a6 6 0 1 0-12 0v4a2 2 0 0 0 2 2h2" />
      <path d="M16 18h2a2 2 0 0 0 2-2v-6" />
      <path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2Z" />
    </svg>
  )
}

function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  )
}

export default function Sidebar({
  isOpen,
  setIsOpen,
  page,
  setPage,
}) {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[17rem] transform border-r border-slate-800/50 bg-slate-950 px-5 py-6 text-slate-100 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 rounded-2xl border border-slate-700/50 bg-slate-900/80 p-4">
          <p className="title-font text-lg font-semibold tracking-tight">Northstar Admin</p>
          <p className="mt-1 text-xs text-slate-400">Client Analytics Workspace</p>
        </div>

        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = page === item.name

            return (
              <button
                key={item.name}
                onClick={() => {
                  setPage(item.name)
                  setIsOpen(false)
                }}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  active
                    ? "bg-blue-600 text-white shadow-[0_10px_28px_rgba(37,99,235,0.45)]"
                    : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                }`}
              >
                <IconFrame>
                  <Icon />
                </IconFrame>
                <span className="font-semibold">{item.name}</span>
              </button>
            )
          })}
        </nav>

        <div className="mt-8 space-y-1.5 border-t border-slate-800 pt-4">
          {bottomItems.map((item) => {
            const Icon = item.icon
            const active = page === item.name

            return (
              <button
                key={item.name}
                onClick={() => {
                  setPage(item.name)
                  setIsOpen(false)
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  active
                    ? "bg-slate-800 text-white"
                    : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                } ${item.danger ? "hover:bg-red-500/10 hover:text-red-200" : ""}`}
              >
                <IconFrame>
                  <Icon />
                </IconFrame>
                <span className="font-semibold">{item.name}</span>
              </button>
            )
          })}
        </div>

      </aside>
    </>
  )
}
