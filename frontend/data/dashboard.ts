import { DashboardStat } from "@/types/dashboard";

export const dashboardStats: DashboardStat[] = [
  {
    title: "Plant Health",
    value: 92,
    suffix: "%",
    trend: "+2%",
    description: "Overall operational health",
    icon: "activity",
  },
  {
    title: "Compliance",
    value: 94,
    suffix: "%",
    trend: "+1%",
    description: "Regulatory compliance",
    icon: "shield",
  },
  {
    title: "Knowledge Coverage",
    value: 87,
    suffix: "%",
    trend: "+4%",
    description: "Indexed industrial knowledge",
    icon: "brain",
  },
  {
    title: "Critical Risks",
    value: 6,
    suffix: "",
    trend: "-2",
    description: "Open high-priority risks",
    icon: "alert",
  },
];