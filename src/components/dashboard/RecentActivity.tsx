import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertCircle, CheckCircle2 } from "lucide-react";

const MOCK_ACTIVITIES = [
  {
    id: 1,
    type: "policy_renewed",
    description: "Property Liability Insurance renewed",
    property: "Sunset Apartments",
    timestamp: "2 hours ago",
    icon: FileText,
  },
  {
    id: 2,
    type: "claim_filed",
    description: "New claim filed for water damage",
    property: "Riverside Complex",
    timestamp: "5 hours ago",
    icon: AlertCircle,
  },
  {
    id: 3,
    type: "payment_processed",
    description: "Premium payment processed",
    property: "Downtown Office",
    timestamp: "1 day ago",
    icon: CheckCircle2,
  },
];

export function RecentActivity() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {MOCK_ACTIVITIES.map((activity) => (
            <div key={activity.id} className="flex items-center">
              <activity.icon className="h-8 w-8 text-muted-foreground" />
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.property}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}