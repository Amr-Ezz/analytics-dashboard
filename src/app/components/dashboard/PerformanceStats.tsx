"use client";

import { TrendingUp, TrendingDown, Users, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

const stats = [
  {
    id: 1,
    title: "New Users",
    value: "1,245",
    change: "+12%",
    icon: Users,
    trend: "up",
  },
  {
    id: 2,
    title: "Total Sales",
    value: "$23,400",
    change: "+8%",
    icon: ShoppingBag,
    trend: "up",
  },
  {
    id: 3,
    title: "Bounce Rate",
    value: "32%",
    change: "-4%",
    icon: TrendingDown,
    trend: "down",
  },
];

export default function PerformanceStats() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.id}
            className="bg-secondary/10 border-none flex flex-col"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                {stat.title}
              </CardTitle>
              <Icon className="w-5 h-5 text-tertiary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p
                className={`text-xs mt-1 ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change} from last week
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
