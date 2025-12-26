import { CategoryBreakdown } from '@/data/zeroConsumptionData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

interface CategoryBreakdownTableProps {
  data: CategoryBreakdown[];
}

export function CategoryBreakdownTable({ data }: CategoryBreakdownTableProps) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold">Categorized Breakdown</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/30">
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Category</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider text-center">Count</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">% of Total</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Comments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.category} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-medium">{item.category}</TableCell>
              <TableCell className="text-center">
                <span className="font-mono font-semibold text-primary">{item.count}</span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={item.percentage} className="h-2 w-20" />
                  <span className="font-mono text-sm text-muted-foreground">{item.percentage}%</span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">{item.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
