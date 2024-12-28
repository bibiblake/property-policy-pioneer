import { DashboardStats } from "./DashboardStats";
import { QuickActions } from "./QuickActions";
import { PolicyDistribution } from "./PolicyDistribution";
import { ExpiringPolicies } from "./ExpiringPolicies";
import { RecentActivity } from "./RecentActivity";
import { CostOverview } from "./CostOverview";

/**
 * DashboardLayout Component
 * 
 * Main layout component for the dashboard view. Organizes and displays
 * all dashboard components in a responsive grid layout.
 * 
 * Component Structure:
 * - Header with title and description
 * - Statistics cards grid
 * - Quick actions and policy distribution
 * - Expiring policies and recent activity
 * - Cost overview chart
 * 
 * @returns {JSX.Element} The complete dashboard layout
 */
export function DashboardLayout() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your insurance portfolio
        </p>
      </div>

      <DashboardStats />

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