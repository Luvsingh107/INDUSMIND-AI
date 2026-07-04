import AppShell from "@/components/layout/app-shell";

export default function HomePage() {
  return (
    <AppShell>
      <div>
        <h1 className="text-4xl font-bold">
          Executive Dashboard
        </h1>

        <p className="text-muted-foreground mt-2">
          Welcome to INDUSMIND AI
        </p>
      </div>
    </AppShell>
  );
}