import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Props for the StatCard component
 * @interface
 */
interface StatCardProps {
  /** The title displayed at the top of the card */
  title: string;
  /** The main value to be displayed */
  value: string | number;
  /** Icon component to be displayed */
  icon: React.ReactNode;
  /** Optional description text below the value */
  description?: string;
}

/**
 * StatCard Component
 * 
 * A reusable card component for displaying statistics with an icon,
 * title, value, and optional description.
 * 
 * @component
 * @example
 * ```tsx
 * <StatCard
 *   title="Total Users"
 *   value={1234}
 *   icon={<UserIcon />}
 *   description="Active users this month"
 * />
 * ```
 */
export function StatCard({ title, value, icon, description }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}