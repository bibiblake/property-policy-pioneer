import { Building2, DollarSign, FileText, AlertCircle } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { ExpiringPolicies } from "@/components/dashboard/ExpiringPolicies";
import { CostOverview } from "@/components/dashboard/CostOverview";
import { PolicyDistribution } from "@/components/dashboard/PolicyDistribution";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Index = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your insurance portfolio
        </p>
      </div>

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

      <div className="grid gap-4 md:grid-cols-7">
        <QuickActions />
        <PolicyDistribution />
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <ExpiringPolicies />
        <RecentActivity />
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <CostOverview />
      </div>
    </div>
  );
}

export default Index;