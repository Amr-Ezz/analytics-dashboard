"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: { color: "#fff" },
    },
  },
};

const data = {
  labels: ["Organic Search", "Social Media", "Referrals", "Email"],
  datasets: [
    {
      label: "Traffic Sources",
      data: [45, 25, 20, 10],
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

export default function TrafficSources() {
  return (
    <Card className="bg-secondary/10 border-none">
      <CardHeader>
        <CardTitle className="text-lg text-white">Traffic Sources</CardTitle>
      </CardHeader>
      <CardContent>
        <Doughnut options={options} data={data} />
      </CardContent>
    </Card>
  );
}
