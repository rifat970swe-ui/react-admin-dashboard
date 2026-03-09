const stats = [
  {
    title: "Revenue",
    value: "$96,420",
    delta: "+14.2%",
    note: "month over month",
    gradient: "from-blue-600 via-cyan-500 to-emerald-400",
  },
  {
    title: "Users",
    value: "8,940",
    delta: "+9.7%",
    note: "active this month",
    gradient: "from-violet-600 via-fuchsia-500 to-rose-400",
  },
  {
    title: "Orders",
    value: "3,284",
    delta: "+6.3%",
    note: "completed checkout",
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
]

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
