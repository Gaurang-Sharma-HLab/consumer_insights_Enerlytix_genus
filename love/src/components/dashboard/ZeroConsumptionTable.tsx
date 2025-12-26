import { ZeroConsumptionConsumer } from '@/data/zeroConsumptionData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface ZeroConsumptionTableProps {
  data: ZeroConsumptionConsumer[];
}

export function ZeroConsumptionTable({ data }: ZeroConsumptionTableProps) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/30">
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Circle</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Division</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Subdivision</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Consumer No.</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Meter Serial</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Last Data</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider text-center">Last kWh</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Comm. Status</TableHead>
            <TableHead className="text-xs font-semibold uppercase tracking-wider">Remarks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((consumer) => (
            <TableRow key={consumer.id} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-medium">{consumer.circle}</TableCell>
              <TableCell>{consumer.division}</TableCell>
              <TableCell>{consumer.subdivision}</TableCell>
              <TableCell className="font-mono text-xs">{consumer.consumerNo}</TableCell>
              <TableCell className="font-mono text-xs">{consumer.meterSerialNo}</TableCell>
              <TableCell className="text-muted-foreground">{consumer.lastDataReceived}</TableCell>
              <TableCell className="text-center">
                <span className="font-mono text-destructive font-semibold">{consumer.lastConsumption}</span>
              </TableCell>
              <TableCell>
                <Badge 
                  variant={consumer.communicationStatus === 'Healthy' ? 'default' : 'destructive'}
                  className={consumer.communicationStatus === 'Healthy' 
                    ? 'bg-success/20 text-success hover:bg-success/30' 
                    : 'bg-destructive/20 text-destructive hover:bg-destructive/30'
                  }
                >
                  {consumer.communicationStatus}
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground max-w-[200px] truncate" title={consumer.remarks}>
                {consumer.remarks}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
