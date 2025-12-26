import { cn } from '@/lib/utils';
import { BucketLogic, BucketSummary } from '@/data/consumerAnalyticsData';

interface BucketLogicTableProps {
  data: BucketLogic[];
}

export function BucketLogicTable({ data }: BucketLogicTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Bucket Name</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Description</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Criteria Example</th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">Purpose</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.bucketName}
              className={cn(
                "border-b border-border/50 hover:bg-muted/30 transition-colors",
                index % 2 === 0 ? "bg-transparent" : "bg-muted/10"
              )}
            >
              <td className="px-4 py-3 font-medium text-primary whitespace-nowrap">{row.bucketName}</td>
              <td className="px-4 py-3 text-muted-foreground max-w-[200px]">{row.description}</td>
              <td className="px-4 py-3 text-muted-foreground max-w-[200px]">{row.criteriaExample}</td>
              <td className="px-4 py-3 text-muted-foreground max-w-[200px]">{row.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface BucketSummaryTableProps {
  data: BucketSummary[];
}

export function BucketSummaryTable({ data }: BucketSummaryTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-3 text-left font-semibold text-foreground">Consumer Category</th>
            <th className="px-4 py-3 text-right font-semibold text-foreground">High Risk</th>
            <th className="px-4 py-3 text-right font-semibold text-foreground">Medium Risk</th>
            <th className="px-4 py-3 text-right font-semibold text-foreground">Low Risk</th>
            <th className="px-4 py-3 text-right font-semibold text-foreground">Zero Use</th>
            <th className="px-4 py-3 text-right font-semibold text-foreground">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.category}
              className={cn(
                "border-b border-border/50 hover:bg-muted/30 transition-colors",
                row.category === 'Total' ? "font-bold bg-muted/20" : "",
                index % 2 === 0 ? "bg-transparent" : "bg-muted/10"
              )}
            >
              <td className="px-4 py-3 font-medium">{row.category}</td>
              <td className="px-4 py-3 text-right font-mono text-red-500">{row.highRisk.toLocaleString()}</td>
              <td className="px-4 py-3 text-right font-mono text-amber-500">{row.mediumRisk.toLocaleString()}</td>
              <td className="px-4 py-3 text-right font-mono text-emerald-500">{row.lowRisk.toLocaleString()}</td>
              <td className="px-4 py-3 text-right font-mono text-muted-foreground">{row.zeroUse.toLocaleString()}</td>
              <td className="px-4 py-3 text-right font-mono font-bold">{row.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
