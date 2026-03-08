import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const analyticsData = [
  { month: "Jan", users: 950, revenue: 22.4 },
  { month: "Feb", users: 1020, revenue: 24.1 },
  { month: "Mar", users: 1145, revenue: 28.3 },
  { month: "Apr", users: 1260, revenue: 31.7 },
  { month: "May", users: 1390, revenue: 36.8 },
  { month: "Jun", users: 1520, revenue: 40.9 },
]

const kpis = [
  { label: "Total Revenue", value: "$248K", trend: "+14.8%" },
  { label: "Active Users", value: "6,132", trend: "+9.2%" },
  { label: "Conversion Rate", value: "6.3%", trend: "+1.2%" },
]

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {kpis.map((item) => (
          <article key={item.label} className="surface p-5">
            <p className="text-sm muted-text">{item.label}</p>
            <p className="mt-2 text-3xl font-extrabold tracking-tight">{item.value}</p>
            <p className="mt-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
              {item.trend} this quarter
            </p>
          </article>
        ))}
      </div>

      <section className="surface p-5 sm:p-6">
        <h3 className="title-font text-lg font-bold tracking-tight">Users and Revenue Growth</h3>
        <p className="mt-1 text-sm muted-text">Performance trend by month</p>

        <div className="mt-4 h-72 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analyticsData} margin={{ top: 10, right: 8, left: -12, bottom: 0 }}>
              <CartesianGrid strokeDasharray="4 6" stroke="rgba(148, 163, 184, 0.25)" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis yAxisId="left" tickLine={false} axisLine={false} />
              <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="users" stroke="#0ea5e9" strokeWidth={3} dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  )
}
