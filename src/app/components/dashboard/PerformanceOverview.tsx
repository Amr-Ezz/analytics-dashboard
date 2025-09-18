"use client";

import { Activity, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

const metrics = [
  { id: 1, title: "Server Uptime", value: "99.98%", icon: Server },
  { id: 2, title: "Active Sessions", value: "1,245", icon: Activity },
  { id: 3, title: "Error Rate", value: "0.02%", icon: Activity },
];

export default function PerformanceOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <Card key={metric.id} className="bg-secondary/10 border-none flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{metric.title}</CardTitle>
              <Icon className="w-5 h-5 text-tertiary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
