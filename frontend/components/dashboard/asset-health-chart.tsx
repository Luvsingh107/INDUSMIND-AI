"use client";

import DashboardSection from "./dashboard-section";

import { assetHealth } from "@/data/assets";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = [
  "#22C55E",
  "#F59E0B",
  "#EF4444",
];

export default function AssetHealthChart() {
  return (
    <DashboardSection
      title="Asset Health Distribution"
      subtitle="Current fleet condition"
    >
      <div className="h-80">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={assetHealth}
              dataKey="value"
              outerRadius={110}
            >
              {assetHealth.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </DashboardSection>
  );
}