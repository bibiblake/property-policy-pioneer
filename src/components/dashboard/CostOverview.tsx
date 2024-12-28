import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from "recharts";

const data = [
  { name: "Jan", premium: 4000, claims: 2400 },
  { name: "Feb", premium: 3000, claims: 1398 },
  { name: "Mar", premium: 2000, claims: 9800 },
  { name: "Apr", premium: 2780, claims: 3908 },
  { name: "May", premium: 1890, claims: 4800 },
  { name: "Jun", premium: 2390, claims: 3800 },
];

export function CostOverview() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Premium vs Claims Overview</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="premium" fill="#3B82F6" />
            <Line type="monotone" dataKey="claims" stroke="#EF4444" />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}