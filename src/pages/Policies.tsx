import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PolicyList } from "@/components/policies/PolicyList";
import { useState } from "react";
import { AddPolicyDialog } from "@/components/policies/AddPolicyDialog";

const Policies = () => {
  const [showAddPolicy, setShowAddPolicy] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Policies</h2>
          <p className="text-muted-foreground">
            Manage your insurance policies
          </p>
        </div>
        <Button onClick={() => setShowAddPolicy(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Policy
        </Button>
      </div>

      <PolicyList />
      <AddPolicyDialog open={showAddPolicy} onOpenChange={setShowAddPolicy} />
    </div>
  );
};

export default Policies;