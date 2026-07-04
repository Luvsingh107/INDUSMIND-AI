import {
  LayoutDashboard,
  BookOpen,
  Boxes,
  Wrench,
  ShieldCheck,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

export const navigationItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Knowledge Hub",
    href: "/knowledge",
    icon: BookOpen,
  },
  {
    title: "Asset Explorer",
    href: "/assets",
    icon: Boxes,
  },
  {
    title: "Maintenance",
    href: "/maintenance",
    icon: Wrench,
  },
  {
    title: "Compliance",
    href: "/compliance",
    icon: ShieldCheck,
  },
  {
    title: "Industrial Copilot",
    href: "/copilot",
    icon: Bot,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];