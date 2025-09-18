"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#fff", // adapt for dark theme
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

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const data = {
  labels,
  datasets: [
    {
      label: "Users",
      data: [120, 190, 150, 200, 170, 220, 250],
      borderColor: "rgb(198, 60, 81)",
      backgroundColor: "rgba(198, 60, 81, 0.5)",
    },
    {
      label: "Sales",
      data: [80, 130, 100, 160, 140, 180, 210],
      borderColor: "rgb(140, 48, 97)",
      backgroundColor: "rgba(140, 48, 97, 0.5)",
    },
  ],
};

export default function LineChart() {
  return <Line options={options} data={data} />;
}
