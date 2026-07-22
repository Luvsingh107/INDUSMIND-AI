import api from "./api";

export interface DashboardStats {
  documents: number;
  chunks: number;
  collections: number;
  document_types: Record<string, number>;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const { data } = await api.get<DashboardStats>(
    "/dashboard/stats"
  );

  return data;
}