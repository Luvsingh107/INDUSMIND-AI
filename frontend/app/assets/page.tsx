"use client";

import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Factory,
} from "lucide-react";

import AppShell from "@/components/layout/app-shell";

import AssetHero from "@/components/assets/AssetHero";
import AssetStatCard from "@/components/assets/AssetStatCard";
import AssetSearch from "@/components/assets/AssetSearch";
import AssetCard from "@/components/assets/AssetCard";
import AssetDetails from "@/components/assets/AssetDetails";
import AssetRecommendation from "@/components/assets/AssetRecommendation";
import AssetDocuments from "@/components/assets/AssetDocuments";

const assets = [
  {
    name: "Pump A101",
    status: "Running",
    health: 96,
    location: "Plant 2",
    hours: 842,
    temperature: 64,
  },
  {
    name: "Compressor C310",
    status: "Critical",
    health: 42,
    location: "Plant 1",
    hours: 1240,
    temperature: 91,
  },
  {
    name: "Boiler E221",
    status: "Running",
    health: 93,
    location: "Plant 3",
    hours: 634,
    temperature: 71,
  },
  {
    name: "Conveyor B205",
    status: "Maintenance",
    health: 74,
    location: "Warehouse",
    hours: 918,
    temperature: 68,
  },
] as const;

export default function AssetsPage() {
  return (
    <AppShell>
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">

          <AssetHero />

          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            <AssetStatCard
              title="Total Assets"
              value="138"
              subtitle="Across all plants"
              icon={<Factory className="h-6 w-6 text-cyan-600" />}
            />

            <AssetStatCard
              title="Healthy"
              value="129"
              subtitle="Operating normally"
              icon={<CheckCircle2 className="h-6 w-6 text-green-600" />}
            />

            <AssetStatCard
              title="Maintenance Due"
              value="7"
              subtitle="Scheduled inspection"
              icon={<Activity className="h-6 w-6 text-amber-600" />}
            />

            <AssetStatCard
              title="Critical"
              value="2"
              subtitle="Immediate attention"
              icon={<AlertTriangle className="h-6 w-6 text-red-600" />}
            />

          </section>

          <AssetSearch />

          <section className="grid gap-8 xl:grid-cols-3">

            <div className="space-y-6 xl:col-span-2">

              <div className="grid gap-6 lg:grid-cols-2">

                {assets.map((asset) => (
                  <AssetCard
                    key={asset.name}
                    {...asset}
                  />
                ))}

              </div>

            </div>

            <div className="space-y-6">

              <AssetDetails />

              <AssetRecommendation />

              <AssetDocuments />

            </div>

          </section>

        </div>
      </main>
    </AppShell>
  );
}