"use client";

import { BrainCircuit, Clock3, Database, Cpu } from "lucide-react";
import { RAGMetrics } from "@/types/chat";

type Props = {
  metrics?: RAGMetrics;
};

export default function ExplainabilityPanel({ metrics }: Props) {
  if (!metrics) return null;

  return (
    <div className="border-t px-6 py-6">

      <div className="mb-5 flex items-center gap-2">
        <BrainCircuit className="h-5 w-5 text-blue-600" />
        <h4 className="text-lg font-semibold">
          AI Explainability
        </h4>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

        <Metric
          title="Documents"
          value={metrics.documents_found}
        />

        <Metric
          title="Chunks Retrieved"
          value={metrics.chunks_retrieved}
        />

        <Metric
          title="Chunks Used"
          value={metrics.chunks_used}
        />

        <Metric
          title="Embedding"
          value={metrics.embedding_model}
        />

        <Metric
          title="LLM"
          value={metrics.llm}
        />

        <Metric
          title="Retrieval"
          value={`${metrics.retrieval_time_ms} ms`}
          icon={<Database className="h-4 w-4" />}
        />

        <Metric
          title="Generation"
          value={`${metrics.generation_time_ms} ms`}
          icon={<Cpu className="h-4 w-4" />}
        />

        <Metric
          title="Total"
          value={`${metrics.total_time_ms} ms`}
          icon={<Clock3 className="h-4 w-4" />}
        />

      </div>
    </div>
  );
}

function Metric({
  title,
  value,
  icon,
}: {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border bg-slate-50 p-4">

      <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
        {icon}
        {title}
      </div>

      <div className="break-all text-lg font-semibold">
        {value}
      </div>

    </div>
  );
}