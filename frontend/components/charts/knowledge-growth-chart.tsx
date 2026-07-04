"use client";

import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import DashboardSection from "@/components/dashboard/dashboard-section";

import { knowledgeGrowth } from "@/data/analytics";

export default function KnowledgeGrowthChart() {
    return (
        <DashboardSection
            title="Knowledge Growth"
            subtitle="Indexed industrial knowledge"
        >
            <div className="h-80">

                <ResponsiveContainer>

                    <AreaChart data={knowledgeGrowth}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Area
                            dataKey="docs"
                            stroke="#16A34A"
                            fill="#DCFCE7"
                        />

                    </AreaChart>

                </ResponsiveContainer>

            </div>
        </DashboardSection>
    );
}