import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const trendData = [
  { month: "Jan", revenue: 58, users: 6.2, orders: 2.1 },
  { month: "Feb", revenue: 61, users: 6.7, orders: 2.3 },
  { month: "Mar", revenue: 66, users: 7.1, orders: 2.5 },
  { month: "Apr", revenue: 72, users: 7.6, orders: 2.7 },
  { month: "May", revenue: 81, users: 8.1, orders: 3.0 },
  { month: "Jun", revenue: 88, users: 8.6, orders: 3.2 },
  { month: "Jul", revenue: 96, users: 8.9, orders: 3.3 },
]

function GrowthTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null
  }

  const revenue = payload.find((entry) => entry.dataKey === "revenue")
  const users = payload.find((entry) => entry.dataKey === "users")
  const orders = payload.find((entry) => entry.dataKey === "orders")

  return (
    <div className="rounded-xl border bg-white/95 p-3 shadow-lg dark:bg-slate-900/95">
      <p className="text-xs font-semibold muted-text">{label}</p>
      <p className="text-sm font-bold text-[color:var(--text-primary)]">Revenue: ${revenue?.value}K</p>
      <p className="text-sm font-semibold text-[color:var(--text-muted)]">Users: {users?.value}K</p>
      <p className="text-sm font-semibold text-[color:var(--text-muted)]">Orders: {orders?.value}K</p>
    </div>
  )
}

export default function RevenueChart() {
  return (
    <section className="surface mt-6 p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h3 className="title-font text-lg font-bold tracking-tight">Growth Overview</h3>
          <p className="text-sm muted-text">Revenue, active users, and orders across the last 7 months</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
          Healthy Trend
        </span>
      </div>

      <div className="h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="4 6" stroke="rgba(148, 163, 184, 0.25)" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: "var(--text-muted)", fontSize: 12 }} />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}K`}
              tick={{ fill: "var(--text-muted)", fontSize: 12 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}K`}
              tick={{ fill: "var(--text-muted)", fontSize: 12 }}
            />
            <Tooltip content={<GrowthTooltip />} />
            <Legend wrapperStyle={{ fontSize: "12px" }} />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
              name="Revenue"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="users"
              stroke="#7c3aed"
              strokeWidth={2.5}
              dot={false}
              name="Users"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="orders"
              stroke="#f97316"
              strokeWidth={2.5}
              dot={false}
              strokeDasharray="5 4"
              name="Orders"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
