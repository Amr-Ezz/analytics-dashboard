"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

const orders = [
  { id: "ORD-001", customer: "John Doe", amount: "$250", status: "Completed" },
  { id: "ORD-002", customer: "Jane Smith", amount: "$120", status: "Pending" },
  { id: "ORD-003", customer: "Michael Brown", amount: "$500", status: "Completed" },
  { id: "ORD-004", customer: "Emily Johnson", amount: "$80", status: "Cancelled" },
  { id: "ORD-005", customer: "Chris Lee", amount: "$320", status: "Pending" },
];

export default function RecentOrders() {
  return (
    <Card className="bg-secondary/10 border-none">
      <CardHeader>
        <CardTitle className="text-lg text-white">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-white">
            <thead className="text-xs uppercase bg-secondary/20 text-gray-300">
              <tr>
                <th scope="col" className="px-4 py-3">Order ID</th>
                <th scope="col" className="px-4 py-3">Customer</th>
                <th scope="col" className="px-4 py-3">Amount</th>
                <th scope="col" className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-700 hover:bg-secondary/30"
                >
                  <td className="px-4 py-3">{order.id}</td>
                  <td className="px-4 py-3">{order.customer}</td>
                  <td className="px-4 py-3">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        order.status === "Completed"
                          ? "bg-green-600 text-white"
                          : order.status === "Pending"
                          ? "bg-yellow-500 text-black"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
