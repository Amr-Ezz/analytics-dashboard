"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: 1, title: "Update product stock", completed: false },
  { id: 2, title: "Review sales report", completed: true },
  { id: 3, title: "Respond to customer emails", completed: false },
  { id: 4, title: "Check server logs", completed: false },
];

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Card className="bg-secondary/10 border-none">
      <CardHeader>
        <CardTitle className="text-lg text-white">Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-secondary/30 transition"
            >
              {task.completed ? (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              ) : (
                <Circle className="w-5 h-5 text-gray-400" />
              )}
              <span
                className={`text-sm ${
                  task.completed ? "line-through text-gray-400" : "text-white"
                }`}
              >
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
