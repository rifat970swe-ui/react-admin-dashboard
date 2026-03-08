import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const revenueData = [
  { month: "Jan", revenue: 41, target: 36 },
  { month: "Feb", revenue: 38, target: 37 },
  { month: "Mar", revenue: 46, target: 40 },
  { month: "Apr", revenue: 52, target: 44 },
  { month: "May", revenue: 58, target: 48 },
  { month: "Jun", revenue: 64, target: 54 },
  { month: "Jul", revenue: 69, target: 60 },
]

function CurrencyTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null
  }

  const revenue = payload.find((entry) => entry.dataKey === "revenue")
  const target = payload.find((entry) => entry.dataKey === "target")

  return (
    <div className="rounded-xl border bg-white/95 p-3 shadow-lg dark:bg-slate-900/95">
      <p className="text-xs font-semibold muted-text">{label}</p>
      <p className="text-sm font-bold text-[color:var(--text-primary)]">Revenue: ${revenue?.value}K</p>
      <p className="text-sm font-semibold text-[color:var(--text-muted)]">Target: ${target?.value}K</p>
    </div>
  )
}

export default function RevenueChart() {
  return (
    <section className="surface mt-6 p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h3 className="title-font text-lg font-bold tracking-tight">Revenue Performance</h3>
          <p className="text-sm muted-text">Monthly actuals compared to planned target</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
          On Track
        </span>
      </div>

      <div className="h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 6" stroke="rgba(148, 163, 184, 0.25)" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}K`} />
            <Tooltip content={<CurrencyTooltip />} />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#94a3b8"
              strokeWidth={2}
              fill="transparent"
              strokeDasharray="5 6"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
              fill="url(#revenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
