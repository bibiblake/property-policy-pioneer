import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const MOCK_DATA = [
  { name: "Property Liability", value: 35 },
  { name: "Flood Insurance", value: 25 },
  { name: "Fire Insurance", value: 20 },
  { name: "Natural Disaster", value: 20 },
];

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];

export function PolicyDistribution() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Policy Distribution</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={MOCK_DATA}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {MOCK_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}