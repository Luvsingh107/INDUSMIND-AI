export interface DashboardStat {
  title: string;
  value: number;
  suffix: string;
  trend: string;
  description: string;
  icon: "activity" | "shield" | "brain" | "alert";
}