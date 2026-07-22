"use client";

import { useEffect, useState } from "react";

import AppShell from "@/components/layout/app-shell";
import MetricCard from "@/components/analytics/MetricCard";

import {
  DashboardStats,
  getDashboardStats,
} from "@/services/dashboard";

export default function AnalyticsPage() {

  const [stats, setStats] =
    useState<DashboardStats | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function load() {

      try {

        const data =
          await getDashboardStats();

        setStats(data);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    load();

  }, []);

  return (

    <AppShell>

      <div className="mx-auto max-w-7xl">

        <h1 className="text-4xl font-bold">
          AI Platform Analytics
        </h1>

        <p className="mt-2 text-slate-500">
          Live statistics from the INDUSMIND AI knowledge platform.
        </p>

        {loading && (

          <div className="mt-8">
            Loading analytics...
          </div>

        )}

        {stats && (

          <>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

              <MetricCard
                title="Documents"
                value={stats.documents}
                icon="📄"
                color="bg-blue-100"
              />

              <MetricCard
                title="Knowledge Chunks"
                value={stats.chunks}
                icon="🧩"
                color="bg-green-100"
              />

              <MetricCard
                title="Collections"
                value={stats.collections}
                icon="🗂️"
                color="bg-yellow-100"
              />

              <MetricCard
                title="Document Types"
                value={
                  Object.keys(stats.document_types).length
                }
                icon="📚"
                color="bg-purple-100"
              />

            </div>

            <div className="mt-10 rounded-2xl border bg-white p-8 shadow-sm">

              <h2 className="mb-6 text-2xl font-semibold">
                Indexed Document Types
              </h2>

              <div className="space-y-4">

                {Object.entries(
                  stats.document_types
                ).map(([type, count]) => (

                  <div
                    key={type}
                    className="flex items-center justify-between rounded-xl border p-4"
                  >

                    <span className="font-medium">
                      {type}
                    </span>

                    <span className="rounded-full bg-blue-100 px-4 py-1 font-semibold text-blue-700">
                      {count}
                    </span>

                  </div>

                ))}

                {Object.keys(stats.document_types).length === 0 && (

                  <div className="text-gray-500">
                    No document types detected yet.
                  </div>

                )}

              </div>

            </div>

          </>

        )}

      </div>

    </AppShell>

  );

}