"use client";

import { BrainCircuit } from "lucide-react";
import SectionCard from "./SectionCard";

export default function AIConfiguration() {
  return (
    <SectionCard
      title="AI Configuration"
      description="Configure the intelligence powering your industrial copilot."
      icon={<BrainCircuit className="h-5 w-5 text-blue-600" />}
    >
      <div className="space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Large Language Model
            </label>

            <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
              <option>GPT-4.1</option>
              <option>GPT-4o</option>
              <option>Claude 4 Sonnet</option>
              <option>Gemini 2.5 Pro</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Embedding Model
            </label>

            <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
              <option>all-MiniLM-L6-v2</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Retrieval Top-K
            </label>

            <input
              defaultValue={5}
              type="number"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Confidence Threshold
            </label>

            <input
              defaultValue={70}
              type="number"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Temperature
            </label>

            <input
              defaultValue={0.2}
              type="number"
              step="0.1"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Maximum Tokens
            </label>

            <input
              defaultValue={2048}
              type="number"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <h4 className="font-semibold text-slate-900">
            Current Configuration
          </h4>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
            <div>
              <span className="text-slate-500">LLM</span>
              <p className="font-medium">GPT-4.1</p>
            </div>

            <div>
              <span className="text-slate-500">Top-K</span>
              <p className="font-medium">5</p>
            </div>

            <div>
              <span className="text-slate-500">Temperature</span>
              <p className="font-medium">0.2</p>
            </div>

            <div>
              <span className="text-slate-500">Confidence</span>
              <p className="font-medium">70%</p>
            </div>

            <div>
              <span className="text-slate-500">Embedding</span>
              <p className="font-medium">MiniLM</p>
            </div>

            <div>
              <span className="text-slate-500">Status</span>
              <p className="font-medium text-green-600">Active</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
            Save Configuration
          </button>
        </div>
      </div>
    </SectionCard>
  );
}