const users = [
  {
    id: 1,
    name: "Avery Stone",
    email: "avery.stone@northstar.io",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Mia Jenkins",
    email: "mia.jenkins@northstar.io",
    role: "Manager",
    status: "Active",
  },
  {
    id: 3,
    name: "Noah Patel",
    email: "noah.patel@northstar.io",
    role: "Support",
    status: "Blocked",
  },
  {
    id: 4,
    name: "Liam Carter",
    email: "liam.carter@northstar.io",
    role: "Editor",
    status: "Active",
  },
]

const roleStyle = {
  Admin: "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300",
  Manager: "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300",
  Support: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  Editor: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
}

const statusStyle = {
  Active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  Blocked: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
}

export default function Users() {
  return (
    <section className="surface overflow-hidden p-4 sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b pb-4">
        <div>
          <h2 className="title-font text-xl font-bold tracking-tight">Team Directory</h2>
          <p className="text-sm muted-text">Manage user roles and account status</p>
        </div>
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.35)] transition hover:brightness-110">
          Add User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b text-left text-xs uppercase tracking-wide muted-text">
              <th className="px-3 py-3">User</th>
              <th className="px-3 py-3">Role</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b last:border-0 transition hover:bg-slate-50/70 dark:hover:bg-slate-800/30">
                <td className="px-3 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--bg-soft)] text-sm font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs muted-text">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${roleStyle[user.role]}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-3 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[user.status]}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-3 py-4 text-right">
                  <div className="inline-flex gap-2">
                    <button className="rounded-lg border bg-[color:var(--bg-soft)] px-3 py-1.5 text-xs font-semibold transition hover:scale-[1.02]">
                      Edit
                    </button>
                    <button className="rounded-lg border border-red-300 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-100 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20">
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
