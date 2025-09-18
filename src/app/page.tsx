"use client";

import PerformanceStats from "@/app/components/dashboard/PerformanceStats";
import Tasks from "@/app/components/dashboard/Tasks";
import RevenueChart from "@/app/components/dashboard/RevenueChart";
import TrafficSources from "@/app/components/dashboard/TrafficResources";
import PerformanceOverview from "@/app/components/dashboard/PerformanceOverview";
import RecentOrders from "@/app/components/dashboard/RecentOrders";
import Notifications from "@/app/components/dashboard/Notifications";
import DashboardLayout from "./components/layout/DashBoard";

export default function DashboardPage() {
  return (
   <DashboardLayout>
      <div className="space-y-6">
        {/* Top: Performance Stats */}
        <PerformanceStats />

        {/* Revenue & Traffic Sources side by side on md+ */}
        <div className="grid gap-6 md:grid-cols-2">
          <RevenueChart />
          <TrafficSources />
        </div>

        {/* Performance Overview & Tasks side by side on md+ */}
        <div className="grid gap-6 md:grid-cols-2">
          <PerformanceOverview />
          <Tasks />
        </div>

        {/* Notifications & Recent Orders side by side on md+ */}
        <div className="grid gap-6 md:grid-cols-2">
          <Notifications />
          <RecentOrders />
        </div>
      </div>
    </DashboardLayout>
  );
}
