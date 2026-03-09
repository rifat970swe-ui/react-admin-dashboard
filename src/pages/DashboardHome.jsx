import StatCards from "../components/StatCards"
import RevenueChart from "../components/RevenueChart"
import RecentOrders from "../components/RecentOrders"
import UserTable from "../components/UserTable"

export default function DashboardHome() {
  return (
    <div>
      <section className="surface mb-6 overflow-hidden p-6 sm:p-7">
        <div className="relative">
          <div className="pointer-events-none absolute -right-14 -top-12 h-36 w-36 rounded-full bg-blue-500/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 right-12 h-28 w-28 rounded-full bg-emerald-500/15 blur-2xl" />
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
            Executive Summary
          </p>
          <h2 className="title-font mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Key SaaS metrics are improving across every core funnel
          </h2>
          <p className="mt-3 max-w-2xl text-sm muted-text sm:text-base">
            Track business performance from one place with clear analytics cards,
            growth chart insights, and user operations controls.
          </p>
        </div>
      </section>

      <StatCards />
      <RevenueChart />
      <UserTable
        title="Top Active Users"
        subtitle="Most engaged team accounts this week"
        limit={5}
        showActions={false}
      />
      <RecentOrders />
    </div>
  )
}
