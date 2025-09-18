import LineChart from "./LineCharts";
import BarChart from "./BarCharts";

export default function ChartsGrid() {
  return (
    <div className="mb-6 grid gap-6 lg:grid-cols-2">
      {/* Line Chart Card */}
      <div className="flex min-h-[350px] flex-col rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow">
        <h3 className="mb-4 font-semibold">Data Trends</h3>
        <LineChart />
      </div>

      {/* Bar Chart Card */}
      <div className="flex min-h-[350px] flex-col rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow">
        <h3 className="mb-4 font-semibold">Category Comparison</h3>
        <BarChart />
      </div>
    </div>
  );
}
