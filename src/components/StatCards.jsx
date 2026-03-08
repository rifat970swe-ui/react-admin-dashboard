const stats = [
  {
    title: "Monthly Revenue",
    value: "$84.2K",
    delta: "+12.4%",
    note: "vs last month",
    gradient: "from-blue-600 via-cyan-500 to-emerald-400",
  },
  {
    title: "New Customers",
    value: "1,286",
    delta: "+8.1%",
    note: "organic + paid",
    gradient: "from-violet-600 via-fuchsia-500 to-rose-400",
  },
  {
    title: "Orders Completed",
    value: "2,944",
    delta: "+5.7%",
    note: "delivery success 97%",
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    title: "Conversion Rate",
    value: "6.3%",
    delta: "+1.2%",
    note: "checkout funnel",
    gradient: "from-teal-600 via-emerald-500 to-lime-400",
  },
]

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <article
          key={item.title}
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} p-5 text-white shadow-[0_14px_34px_rgba(15,23,42,0.25)]`}
        >
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/15" />
          <p className="text-sm font-semibold text-white/85">{item.title}</p>
          <p className="mt-3 text-3xl font-extrabold tracking-tight">{item.value}</p>
          <p className="mt-2 text-sm font-semibold">
            {item.delta} <span className="font-medium text-white/80">{item.note}</span>
          </p>
        </article>
      ))}
    </div>
  )
}
