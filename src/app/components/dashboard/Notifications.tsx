"use client";

import { Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

const notifications = [
  { id: 1, message: "New user registered", time: "2m ago" },
  { id: 2, message: "Order #ORD-006 placed", time: "10m ago" },
  { id: 3, message: "Server backup completed", time: "30m ago" },
  { id: 4, message: "Payment failed for Order #ORD-007", time: "1h ago" },
  { id: 5, message: "Low stock alert: Earphones", time: "2h ago" },
];

export default function Notifications() {
  return (
    <Card className="bg-secondary/10 border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg text-white flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {notifications.map((note) => (
            <li
              key={note.id}
              className="flex items-center justify-between p-2 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition"
            >
              <span className="text-sm text-white">{note.message}</span>
              <span className="text-xs text-gray-400">{note.time}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
