export default function StatsGrid() {
  const stats = [
    {
      title: "Total Users",
      value: "10,893",
      change: "+12% this month",
      positive: true,
    },
    {
      title: "Revenue",
      value: "$24,350",
      change: "+8.5% this month",
      positive: true,
    },
    {
      title: "Sales",
      value: "5,421",
      change: "-1.2% this month",
      positive: false,
    },
  ];

  return (
    <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map(({ title, value, change, positive }) => (
        <div
          key={title}
          className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow"
        >
          <h3 className="mb-2 font-semibold">{title}</h3>
          <p className="mb-1 text-3xl font-bold">{value}</p>
          <p
            className={`text-sm ${
              positive ? "text-[var(--green)]" : "text-[var(--red)]"
            }`}
          >
            {change}
          </p>
        </div>
      ))}
    </div>
  );
}
