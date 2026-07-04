"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import {
  Activity,
  Brain,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

interface KPIProps {
  title: string;
  value: number;
  suffix: string;
  trend: string;
  description: string;
  icon: "activity" | "shield" | "brain" | "alert";
}

const icons = {
  activity: Activity,
  shield: ShieldCheck,
  brain: Brain,
  alert: TriangleAlert,
};

export default function KPICard({
  title,
  value,
  suffix,
  trend,
  description,
  icon,
}: KPIProps) {
  const Icon = icons[icon];

  const isPositiveTrend = trend.startsWith("+");

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-lg">
        <CardContent className="space-y-5 p-6">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-slate-100 p-3">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>

            <span
              className={`text-sm font-semibold ${
                isPositiveTrend
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {trend}
            </span>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              {title}
            </p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight">
              {value}
              {suffix}
            </h2>
          </div>

          <Progress value={value} className="h-2" />

          <p className="text-sm text-slate-500">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}