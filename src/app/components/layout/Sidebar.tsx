"use client";

import { LayoutGrid, BarChart3, FileText, Settings } from "lucide-react";

const navItems = [
  { label: "Overview", href: "#overview", icon: LayoutGrid },
  { label: "Analytics", href: "#analytics", icon: BarChart3 },
  { label: "Tasks", href: "#tasks", icon: FileText },
  { label: "Recent Orders", href: "#recentorders", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 p-6 z-40 hidden md:block">
      <h1 className="text-2xl font-bold text-purple-500 mb-8">Metrics</h1>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => { 
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 p-2 rounded-md font-medium text-gray-400 hover:bg-purple-800 hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
