"use client";

import {
  Info,
  Cpu,
  Database,
  Globe,
  BrainCircuit,
  Layers3,
} from "lucide-react";
import SectionCard from "./SectionCard";

const technologies = [
  {
    label: "Frontend",
    value: "Next.js 15",
    icon: <Globe className="h-5 w-5 text-blue-600" />,
  },
  {
    label: "Backend",
    value: "FastAPI",
    icon: <Cpu className="h-5 w-5 text-emerald-600" />,
  },
  {
    label: "Vector Database",
    value: "ChromaDB",
    icon: <Database className="h-5 w-5 text-violet-600" />,
  },
  {
    label: "Embeddings",
    value: "Sentence Transformers",
    icon: <Layers3 className="h-5 w-5 text-orange-600" />,
  },
  {
    label: "LLM Gateway",
    value: "OpenRouter",
    icon: <BrainCircuit className="h-5 w-5 text-pink-600" />,
  },
];

export default function AboutCard() {
  return (
    <SectionCard
      title="About INDUSMIND AI"
      description="Platform information and technology stack."
      icon={<Info className="h-5 w-5 text-sky-600" />}
    >
      <div className="space-y-6">

        <div className="rounded-2xl border bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white">

          <h3 className="text-xl font-bold">
            INDUSMIND AI
          </h3>

          <p className="mt-2 text-slate-300">
            Enterprise Industrial Intelligence Platform
          </p>

          <div className="mt-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm">
            Version 1.0.0
          </div>

        </div>

        <div className="space-y-3">

          {technologies.map((tech) => (

            <div
              key={tech.label}
              className="flex items-center justify-between rounded-xl border bg-slate-50 px-4 py-3"
            >
              <div className="flex items-center gap-3">

                {tech.icon}

                <span className="font-medium">
                  {tech.label}
                </span>

              </div>

              <span className="text-slate-600">
                {tech.value}
              </span>

            </div>

          ))}

        </div>

      </div>
    </SectionCard>
  );
}