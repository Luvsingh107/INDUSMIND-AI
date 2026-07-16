import AppShell from "@/components/layout/app-shell";
import CopilotPage from "@/components/copilot/CopilotPage";

export default function Copilot() {
  return (
    <AppShell>

      <div className="h-[calc(100vh-140px)]">

        <CopilotPage />

      </div>

    </AppShell>
  );
}