export default function Settings() {
  return (
    <div className="space-y-6">
      <section className="surface p-5 sm:p-6">
        <h2 className="title-font text-xl font-bold tracking-tight">Profile Settings</h2>
        <p className="mt-1 text-sm muted-text">Update core profile details displayed to workspace users</p>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            defaultValue="Northstar Operations"
            className="rounded-xl border bg-[color:var(--bg-soft)] px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
          />
          <input
            defaultValue="operations@northstar.io"
            className="rounded-xl border bg-[color:var(--bg-soft)] px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
          />
        </div>

        <button className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.35)] transition hover:brightness-110">
          Save Changes
        </button>
      </section>

      <section className="surface p-5 sm:p-6">
        <h2 className="title-font text-xl font-bold tracking-tight">Preferences</h2>

        <div className="mt-4 space-y-3 text-sm">
          <label className="flex items-center justify-between rounded-xl border bg-[color:var(--bg-soft)] px-4 py-3">
            <span className="font-medium">Email Notifications</span>
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" />
          </label>

          <label className="flex items-center justify-between rounded-xl border bg-[color:var(--bg-soft)] px-4 py-3">
            <span className="font-medium">SMS Alerts</span>
            <input type="checkbox" className="h-4 w-4 accent-blue-600" />
          </label>
        </div>
      </section>

      <section className="surface p-5 sm:p-6">
        <h2 className="title-font text-xl font-bold tracking-tight">Security</h2>
        <p className="mt-1 text-sm muted-text">Password and account protection controls</p>

        <button className="mt-4 rounded-xl border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 dark:border-red-500/40 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20">
          Change Password
        </button>
      </section>
    </div>
  )
}
