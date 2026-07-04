import Sidebar from "./sidebar";
import Topbar from "./topbar";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-8">
          {children}
          <footer className="mt-12 border-t pt-6 text-center text-sm text-slate-500">
            INDUSMIND AI • Unified Asset & Operations Brain • Demo v1.0
          </footer>
        </main>
      </div>
    </div>
  );
}