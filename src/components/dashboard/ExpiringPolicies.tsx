import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

const MOCK_POLICIES = [
  {
    id: 1,
    name: "Property Liability Insurance",
    property: "Sunset Apartments",
    expiryDate: "2024-05-15",
    daysUntilExpiry: 30,
  },
  {
    id: 2,
    name: "Flood Insurance",
    property: "Riverside Complex",
    expiryDate: "2024-05-01",
    daysUntilExpiry: 15,
  },
  {
    id: 3,
    name: "Fire Insurance",
    property: "Downtown Office",
    expiryDate: "2024-04-20",
    daysUntilExpiry: 7,
  },
];

export function ExpiringPolicies() {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">Expiring Policies</CardTitle>
        <AlertTriangle className="h-4 w-4 text-warning" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {MOCK_POLICIES.map((policy) => (
            <div
              key={policy.id}
              className="flex items-center justify-between border-b pb-2 last:border-0"
            >
              <div>
                <p className="font-medium">{policy.name}</p>
                <p className="text-sm text-muted-foreground">
                  {policy.property}
                </p>
              </div>
              <Badge
                variant={
                  policy.daysUntilExpiry <= 7
                    ? "destructive"
                    : policy.daysUntilExpiry <= 15
                    ? "warning"
                    : "default"
                }
              >
                Expires in {policy.daysUntilExpiry} days
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}