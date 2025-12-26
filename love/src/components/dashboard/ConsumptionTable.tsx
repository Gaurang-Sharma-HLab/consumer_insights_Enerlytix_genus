import { ConsumerData } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface ConsumptionTableProps {
  data: ConsumerData[];
  type: 'high' | 'low';
}

export function ConsumptionTable({ data, type }: ConsumptionTableProps) {
  const getStatusBadge = (status: string) => {
    const statusClasses = {
      Working: 'status-working',
      Faulty: 'status-faulty',
      Pending: 'status-pending',
    };
    return statusClasses[status as keyof typeof statusClasses] || '';
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="data-table">
        <thead>
          <tr>
            <th>Circle</th>
            <th>Division</th>
            <th>Subdivision</th>
            <th>Consumer No.</th>
            <th className="text-right">Avg (3 mo)</th>
            <th className="text-right">Current</th>
            <th className="text-right">% Change</th>
            <th>Status</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="animate-fade-in">
              <td className="font-medium">{row.circle}</td>
              <td>{row.division}</td>
              <td>{row.subdivision}</td>
              <td className="font-mono text-primary">{row.consumerNo}</td>
              <td className="text-right font-mono">{row.avgConsumption.toLocaleString()}</td>
              <td className="text-right font-mono">{row.currentMonth.toLocaleString()}</td>
              <td className={cn(
                'text-right',
                type === 'high' ? 'change-positive' : 'change-negative'
              )}>
                {row.percentChange > 0 ? '+' : ''}{row.percentChange.toFixed(1)}%
              </td>
              <td>
                <span className={cn('status-badge', getStatusBadge(row.meterStatus))}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {row.meterStatus}
                </span>
              </td>
              <td className="text-muted-foreground max-w-[200px] truncate">{row.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
