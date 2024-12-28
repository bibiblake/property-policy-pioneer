import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

const dummyPolicies = [
  {
    id: 1,
    name: "Commercial Liability",
    property: "Office Building A",
    insurer: "ABC Insurance",
    type: "Liability",
    coverage: 1000000,
    policyNumber: "POL-001",
    startDate: new Date(2024, 0, 1),
    endDate: new Date(2024, 11, 31),
    status: "active",
  },
  {
    id: 2,
    name: "Property Insurance",
    property: "Retail Space B",
    insurer: "XYZ Insurance",
    type: "Property",
    coverage: 500000,
    policyNumber: "POL-002",
    startDate: new Date(2024, 1, 1),
    endDate: new Date(2024, 5, 30),
    status: "expiring",
  },
];

export function PolicyList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Policy Name</TableHead>
            <TableHead>Property</TableHead>
            <TableHead>Insurer</TableHead>
            <TableHead>Coverage</TableHead>
            <TableHead>Policy Number</TableHead>
            <TableHead>Term</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyPolicies.map((policy) => (
            <TableRow key={policy.id}>
              <TableCell className="font-medium">{policy.name}</TableCell>
              <TableCell>{policy.property}</TableCell>
              <TableCell>{policy.insurer}</TableCell>
              <TableCell>${policy.coverage.toLocaleString()}</TableCell>
              <TableCell>{policy.policyNumber}</TableCell>
              <TableCell>
                {format(policy.startDate, "MMM d, yyyy")} -{" "}
                {format(policy.endDate, "MMM d, yyyy")}
              </TableCell>
              <TableCell>
                <Badge
                  variant={policy.status === "active" ? "default" : "destructive"}
                >
                  {policy.status === "active" ? "Active" : "Expiring Soon"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}