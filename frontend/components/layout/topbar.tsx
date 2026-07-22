"use client";

import { Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import RefreshButton from "@/components/dashboard/refresh-button";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <Input
        placeholder="Search documents, assets..."
        className="w-96"
      />

      <div className="flex items-center gap-4">
        <RefreshButton />

        <Bell size={20} />

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
          L
        </div>
      </div>
    </header>
  );
}