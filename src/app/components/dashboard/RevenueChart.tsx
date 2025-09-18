"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: { color: "#fff" },
    },
  },
  scales: {
    x: {
      ticks: { color: "#ccc" },
      grid: { color: "rgba(255,255,255,0.1)" },
    },
    y: {
      ticks: { color: "#ccc" },
      grid: { color: "rgba(255,255,255,0.1)" },
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: [1200, 1900, 1500, 2200, 2000, 2500, 3000],
      backgroundColor: "rgba(198, 60, 81, 0.7)",
    },
    {
      label: "Expenses",
      data: [800, 1200, 1000, 1600, 1400, 1800, 2200],
      backgroundColor: "rgba(140, 48, 97, 0.7)",
    },
  ],
};

export default function RevenueChart() {
  return (
    <Card className="bg-secondary/10 border-none">
      <CardHeader>
        <CardTitle className="text-lg text-white">Revenue vs Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar options={options} data={data} />
      </CardContent>
    </Card>
  );
}
