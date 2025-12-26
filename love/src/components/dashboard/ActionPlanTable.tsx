import { ActionPlan } from '@/data/zeroConsumptionData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface ActionPlanTableProps {
  data: ActionPlan[];
}

const statusStyles = {
  'Pending': 'bg-warning/20 text-warning hover:bg-warning/30',
  'In Progress': 'bg-primary/20 text-primary hover:bg-primary/30',
  'Scheduled': 'bg-muted text-muted-foreground hover:bg-muted/80',
  'Completed': 'bg-success/20 text-success hover:bg-success/30',
};

export function ActionPlanTable({ data }: ActionPlanTableProps) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold">Root Cause Action Plan – AMISP Responsibility</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/30">
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Root Cause</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Action to be Taken</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Owner</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Deadline</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-medium">{item.rootCause}</TableCell>
              <TableCell className="text-sm">{item.action}</TableCell>
              <TableCell className="text-sm text-muted-foreground">{item.owner}</TableCell>
              <TableCell className="font-mono text-sm">{item.deadline}</TableCell>
              <TableCell>
                <Badge className={statusStyles[item.status]}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
