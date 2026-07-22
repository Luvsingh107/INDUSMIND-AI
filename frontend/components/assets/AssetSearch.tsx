"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function AssetSearch() {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row">

        <div className="relative flex-1">

          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            placeholder="Search assets, location or manufacturer..."
            className="w-full rounded-2xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
          />

        </div>

        <select
          defaultValue="All Assets"
          className="rounded-2xl border border-slate-200 px-5 py-3"
        >
          <option>All Assets</option>
          <option>Running</option>
          <option>Maintenance Due</option>
          <option>Critical</option>
          <option>Offline</option>
        </select>

        <button className="flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3 font-medium text-white transition hover:bg-cyan-700">

          <SlidersHorizontal className="h-5 w-5" />

          Filters

        </button>

      </div>

    </div>
  );
}