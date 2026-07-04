import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recommendations } from "@/data/recommendations";
import { Badge } from "@/components/ui/badge";

export default function RecommendationPanel() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>🤖 AI Recommendations</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {recommendations.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{item.title}</h4>

              <Badge>{item.priority}</Badge>
            </div>

            <p className="text-sm text-slate-500">
              {item.asset}
            </p>

            <p className="text-sm">
              {item.reason}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}