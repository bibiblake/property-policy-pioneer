import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PropertyList } from "@/components/properties/PropertyList";
import { AddPropertyDialog } from "@/components/properties/AddPropertyDialog";

const Properties = () => {
  const [showAddProperty, setShowAddProperty] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
          <p className="text-muted-foreground">
            Manage your property portfolio
          </p>
        </div>
        <Button onClick={() => setShowAddProperty(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      <PropertyList />
      <AddPropertyDialog open={showAddProperty} onOpenChange={setShowAddProperty} />
    </div>
  );
};

export default Properties;