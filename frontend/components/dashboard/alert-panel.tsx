import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { alerts } from "@/data/alerts";
import { Badge } from "@/components/ui/badge";

export default function AlertPanel() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>🚨 Live Alerts</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="rounded-xl border p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">
                {alert.asset}
              </h4>

              <Badge variant="destructive">
                {alert.severity}
              </Badge>
            </div>

            <p className="text-sm text-slate-500">
              {alert.message}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}