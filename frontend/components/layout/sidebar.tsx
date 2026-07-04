"use client";

import Link from "next/link";
import { navigationItems } from "@/constants/navigation";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold">
          INDUSMIND AI
        </h1>

        <p className="text-sm text-gray-500">
          Unified Asset & Operations Brain
        </p>
      </div>

      <nav className="space-y-2 p-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-slate-100"
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}