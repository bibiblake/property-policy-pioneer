import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Claims = () => {
  const [showAddClaim, setShowAddClaim] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Claims</h2>
          <p className="text-muted-foreground">
            Manage and track your insurance claims
          </p>
        </div>
        <Button onClick={() => setShowAddClaim(true)}>
          <AlertCircle className="mr-2 h-4 w-4" />
          File New Claim
        </Button>
      </div>

      <div className="rounded-md border p-8 text-center">
        <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold">No Claims Yet</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          You haven't filed any claims yet. Click the button above to file a new claim.
        </p>
      </div>
    </div>
  );
};

export default Claims;