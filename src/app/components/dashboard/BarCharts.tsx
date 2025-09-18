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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#fff", // works better with dark theme
      },
    },
    title: {
      display: false,
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

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const data = {
  labels,
  datasets: [
    {
      label: "Orders",
      data: [50, 75, 60, 90, 100, 80, 120],
      backgroundColor: "rgba(198, 60, 81, 0.6)",
    },
    {
      label: "Revenue",
      data: [200, 300, 250, 400, 450, 350, 500],
      backgroundColor: "rgba(140, 48, 97, 0.6)",
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
