import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileText, AlertCircle, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center space-y-2"
            onClick={() => navigate("/policies")}
          >
            <FileText className="h-6 w-6" />
            <span>New Policy</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center space-y-2"
            onClick={() => navigate("/properties")}
          >
            <Building2 className="h-6 w-6" />
            <span>Add Property</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center space-y-2"
            onClick={() => navigate("/claims")}
          >
            <AlertCircle className="h-6 w-6" />
            <span>File Claim</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center space-y-2"
          >
            <PlusCircle className="h-6 w-6" />
            <span>Request Quote</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}