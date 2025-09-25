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
      <div className="space-y-12 scroll-smooth">
        
        {/* Overview */}
        <section id="overview">
          <PerformanceStats />
        </section>

        {/* Analytics */}
        <section id="analytics" className="grid gap-6 md:grid-cols-2">
          <RevenueChart />
          <TrafficSources />
        </section>

        {/* Tasks */}
        <section id="tasks" className="grid gap-6 md:grid-cols-2">
          <PerformanceOverview />
          <Tasks />
        </section>

        {/* Recent Orders */}
        <section id="recentorders" className="grid gap-6 md:grid-cols-2">
          <Notifications />
          <RecentOrders />
        </section>
      </div>
    </DashboardLayout>
  );
}
