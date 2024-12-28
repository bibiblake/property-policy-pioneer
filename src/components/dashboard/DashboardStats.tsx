import { Building2, FileText, AlertCircle, DollarSign } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";

/**
 * DashboardStats Component
 * 
 * Displays key metrics and statistics in a grid layout at the top of the dashboard.
 * Each stat is represented by a StatCard component with an icon and value.
 * 
 * @component
 * @example
 * ```tsx
 * <DashboardStats />
 * ```
 */
export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Properties"
        value="12"
        icon={<Building2 className="h-4 w-4 text-muted-foreground" />}
      />
      <StatCard
        title="Active Policies"
        value="24"
        icon={<FileText className="h-4 w-4 text-muted-foreground" />}
      />
      <StatCard
        title="Open Claims"
        value="3"
        icon={<AlertCircle className="h-4 w-4 text-muted-foreground" />}
      />
      <StatCard
        title="Annual Premium"
        value="$48,500"
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
}