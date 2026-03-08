const orders = [
  {
    id: "#ORD-3124",
    customer: "Avery Stone",
    amount: "$1,230",
    status: "Paid",
    channel: "Website",
  },
  {
    id: "#ORD-3125",
    customer: "Mia Jenkins",
    amount: "$830",
    status: "Processing",
    channel: "Mobile App",
  },
  {
    id: "#ORD-3126",
    customer: "Noah Patel",
    amount: "$2,140",
    status: "Paid",
    channel: "Marketplace",
  },
  {
    id: "#ORD-3127",
    customer: "Liam Carter",
    amount: "$450",
    status: "Cancelled",
    channel: "Website",
  },
]

const statusStyle = {
  Paid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  Processing: "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300",
  Cancelled: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
}

export default function RecentOrders() {
  return (
    <section className="surface mt-6 p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="title-font text-lg font-bold tracking-tight">Recent Orders</h3>
        <button className="rounded-lg border bg-[color:var(--bg-soft)] px-3 py-1.5 text-xs font-semibold transition hover:scale-[1.02]">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b text-left text-xs uppercase tracking-wide muted-text">
              <th className="pb-3">Order</th>
              <th className="pb-3">Customer</th>
              <th className="pb-3">Channel</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-0 transition hover:bg-slate-50/70 dark:hover:bg-slate-800/30">
                <td className="py-3.5 font-semibold">{order.id}</td>
                <td className="py-3.5">{order.customer}</td>
                <td className="py-3.5 muted-text">{order.channel}</td>
                <td className="py-3.5 font-semibold">{order.amount}</td>
                <td className="py-3.5">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[order.status]}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
