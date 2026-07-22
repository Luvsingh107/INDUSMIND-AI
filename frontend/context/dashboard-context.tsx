"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface DashboardContextType {
  refreshKey: number;
  refresh: () => void;
}

const DashboardContext = createContext<DashboardContextType | null>(null);

export function DashboardProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [refreshKey, setRefreshKey] = useState(0);

  function refresh() {
    setRefreshKey((k) => k + 1);
  }

  return (
    <DashboardContext.Provider
      value={{ refreshKey, refresh }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);

  if (!ctx) {
    throw new Error("useDashboard must be used inside DashboardProvider");
  }

  return ctx;
}