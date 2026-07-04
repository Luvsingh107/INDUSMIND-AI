"use client";

import { Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <Input
        placeholder="Search documents, assets..."
        className="w-96"
      />

      <div className="flex items-center gap-4">
        <Bell size={20} />

        <div className="h-10 w-10 rounded-full bg-blue-600" />
      </div>
    </header>
  );
}