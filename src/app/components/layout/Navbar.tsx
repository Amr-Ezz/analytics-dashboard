"use client";

import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-800 border-b border-gray-700 shadow-sm sticky top-0 z-20">
      
      {/* Left: Search bar */}
      <div className="flex items-center gap-3 bg-gray-700 rounded-lg px-3 py-2 w-full max-w-md">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none border-none text-white placeholder-gray-400 w-full text-sm"
        />
      </div>

      {/* Right: Notifications & Avatar */}
      <div className="flex items-center gap-4 ml-6">
        {/* Notification Bell */}
        <button className="relative p-2 rounded-full hover:bg-gray-700 transition">
          <Bell className="w-6 h-6 text-gray-300" />
          {/* Optional: notification dot */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition">
          <img
            src="/user-avatar.png"
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-purple-600"
          />
          <span className="hidden md:block text-sm font-medium text-white">
            John Doe
          </span>
        </div>
      </div>
    </header>
  );
}
