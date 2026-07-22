import {
  Database,
  Brain,
  Server,
  ShieldCheck,
  Bot,
  BookOpen,
} from "lucide-react";

const services = [
  {
    title: "FastAPI Backend",
    status: "Healthy",
    icon: Server,
  },
  {
    title: "Chroma Vector DB",
    status: "Connected",
    icon: Database,
  },
  {
    title: "Embedding Engine",
    status: "Ready",
    icon: Brain,
  },
  {
    title: "OpenRouter LLM",
    status: "Active",
    icon: Bot,
  },
  {
    title: "Knowledge Base",
    status: "Operational",
    icon: BookOpen,
  },
  {
    title: "AI Copilot",
    status: "Verified",
    icon: ShieldCheck,
  },
];

export default function SystemHealth() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold">
            INDUSMIND AI System Overview
          </h2>

          <p className="text-sm text-slate-500">
            Live infrastructure status
          </p>

        </div>

        <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          All Systems Operational
        </div>

      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service) => {

          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="rounded-xl border bg-slate-50 p-5"
            >
              <div className="flex items-center gap-3">

                <div className="rounded-full bg-green-100 p-3">
                  <Icon className="h-5 w-5 text-green-600" />
                </div>

                <div>

                  <div className="font-semibold">
                    {service.title}
                  </div>

                  <div className="text-sm text-green-600">
                    ● {service.status}
                  </div>

                </div>

              </div>
            </div>
          );

        })}

      </div>

    </div>
  );
}