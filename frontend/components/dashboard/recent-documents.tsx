import DashboardSection from "./dashboard-section";
import { recentDocuments } from "@/data/documents";

export default function RecentDocuments() {
  return (
    <DashboardSection
      title="Recent Documents"
      subtitle="Latest uploaded industrial knowledge"
    >
      <div className="space-y-4">
        {recentDocuments.map((doc) => (
          <div
            key={doc.id}
            className="rounded-xl border p-4 transition hover:bg-slate-50"
          >
            <h4 className="font-medium">{doc.title}</h4>

            <p className="text-sm text-slate-500">
              {doc.type} • {doc.uploadedBy}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              {doc.time}
            </p>
          </div>
        ))}
      </div>
    </DashboardSection>
  );
}