"use client";

import {
    LineChart,
    Line,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import { plantHealthTrend } from "@/data/analytics";

import DashboardSection from "@/components/dashboard/dashboard-section";

export default function PlantHealthChart() {
    return (
        <DashboardSection
            title="Plant Health Trend"
            subtitle="Overall operational health"
        >
            <div className="h-80">

                <ResponsiveContainer>

                    <LineChart data={plantHealthTrend}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="health"
                            stroke="#2563EB"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>
        </DashboardSection>
    );
}