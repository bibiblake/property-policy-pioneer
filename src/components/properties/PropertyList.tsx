import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const dummyProperties = [
  {
    id: 1,
    name: "Office Building A",
    address: "123 Business Ave",
    type: "Commercial",
    units: 12,
    activePolicies: 3,
  },
  {
    id: 2,
    name: "Retail Space B",
    address: "456 Market St",
    type: "Retail",
    units: 8,
    activePolicies: 2,
  },
  {
    id: 3,
    name: "Warehouse C",
    address: "789 Industrial Pkwy",
    type: "Industrial",
    units: 1,
    activePolicies: 4,
  },
];

export function PropertyList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Units</TableHead>
            <TableHead>Active Policies</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyProperties.map((property) => (
            <TableRow key={property.id}>
              <TableCell className="font-medium">{property.name}</TableCell>
              <TableCell>{property.address}</TableCell>
              <TableCell>{property.type}</TableCell>
              <TableCell>{property.units}</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  {property.activePolicies} policies
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}