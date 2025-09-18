"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        color: "#fff",
      },
    },
  },
};

const data = {
  labels: ["Electronics", "Gaming", "TVs", "Earphones"],
  datasets: [
    {
      label: "Category Share",
      data: [35, 25, 20, 20],
      backgroundColor: [
        "rgba(198, 60, 81, 0.7)",
        "rgba(140, 48, 97, 0.7)",
        "rgba(82, 34, 88, 0.7)",
        "rgba(217, 95, 89, 0.7)",
      ],
      borderColor: [
        "rgb(198, 60, 81)",
        "rgb(140, 48, 97)",
        "rgb(82, 34, 88)",
        "rgb(217, 95, 89)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChart() {
  return <Pie options={options} data={data} />;
}
