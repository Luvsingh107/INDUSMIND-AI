"use client";

import {
  Activity,
  BrainCircuit,
  Database,
  Server,
} from "lucide-react";

import AppShell from "@/components/layout/app-shell";

import SettingsHero from "@/components/settings/SettingsHero";
import SettingsStatCard from "@/components/settings/SettingsStatCard";
import AIConfiguration from "@/components/settings/AIConfiguration";
import DiagnosticsCard from "@/components/settings/DiagnosticsCard";
import KnowledgeBaseCard from "@/components/settings/KnowledgeBaseCard";
import PreferencesCard from "@/components/settings/PreferencesCard";
import SecurityCard from "@/components/settings/SecurityCard";
import AboutCard from "@/components/settings/AboutCard";

export default function SettingsPage() {
  return (
    <AppShell>

      <main className="min-h-screen bg-slate-50">

        <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">

          <SettingsHero />

          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            <SettingsStatCard
              title="Backend Status"
              value="Healthy"
              subtitle="FastAPI operational"
              icon={<Server className="h-6 w-6 text-blue-600" />}
            />

            <SettingsStatCard
              title="Knowledge Base"
              value="43"
              subtitle="Indexed Documents"
              icon={<Database className="h-6 w-6 text-violet-600" />}
            />

            <SettingsStatCard
              title="Average Latency"
              value="742 ms"
              subtitle="Last 24 hours"
              icon={<Activity className="h-6 w-6 text-green-600" />}
            />

            <SettingsStatCard
              title="AI Engine"
              value="Active"
              subtitle="OpenRouter"
              icon={<BrainCircuit className="h-6 w-6 text-pink-600" />}
            />

          </section>

          <section className="grid gap-6 xl:grid-cols-2">

            <AIConfiguration />

            <DiagnosticsCard />

            <KnowledgeBaseCard />

            <SecurityCard />

            <PreferencesCard />

            <AboutCard />

          </section>

        </div>

      </main>

    </AppShell>
  );
}