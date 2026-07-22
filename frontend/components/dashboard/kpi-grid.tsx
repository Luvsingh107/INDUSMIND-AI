"use client";

import { useEffect, useState } from "react";

import KPICard from "./kpi-card";

import { dashboardStats } from "@/data/dashboard";

import { getDashboardStats } from "@/services/dashboard";

import { useDashboard } from "@/context/dashboard-context";

export default function KPIGrid() {
  const { refreshKey } = useDashboard();

  const [stats, setStats] = useState(dashboardStats);

  async function load() {
    try {
      const data = await getDashboardStats();

      setStats([
        {
          title: "Documents",
          value: data.documents,
          suffix: "",
          trend: "+100%",
          description: "Indexed industrial documents",
          icon: "activity",
        },
        {
          title: "Knowledge Chunks",
          value: data.chunks,
          suffix: "",
          trend: "+100%",
          description: "Embeddings available",
          icon: "brain",
        },
        {
          title: "Collections",
          value: data.collections,
          suffix: "",
          trend: "+0%",
          description: "Vector database collections",
          icon: "shield",
        },
        {
          title: "AI Status",
          value: 100,
          suffix: "%",
          trend: "Ready",
          description: "Copilot operational",
          icon: "alert",
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    load();
  }, [refreshKey]);

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <KPICard
          key={item.title}
          {...item}
        />
      ))}
    </section>
  );
}