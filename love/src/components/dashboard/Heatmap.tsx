import { heatmapData } from '@/data/zeroConsumptionData';
import { cn } from '@/lib/utils';

interface HeatmapProps {
  title?: string;
}

const getIntensity = (value: number, max: number) => {
  const ratio = value / max;
  if (ratio >= 0.8) return 'bg-destructive/80 text-destructive-foreground';
  if (ratio >= 0.6) return 'bg-destructive/60 text-foreground';
  if (ratio >= 0.4) return 'bg-warning/60 text-foreground';
  if (ratio >= 0.2) return 'bg-warning/30 text-foreground';
  return 'bg-success/30 text-foreground';
};

const categories = ['zeroConsumption', 'communicationFail', 'meterFault', 'tampering'] as const;
const categoryLabels = {
  zeroConsumption: 'Zero Consumption',
  communicationFail: 'Comm. Fail',
  meterFault: 'Meter Fault',
  tampering: 'Tampering',
};

export function Heatmap({ title = 'Zero Consumption Heatmap by Subdivision' }: HeatmapProps) {
  // Calculate max values for each category
  const maxValues = categories.reduce((acc, cat) => {
    acc[cat] = Math.max(...heatmapData.map(d => d[cat]));
    return acc;
  }, {} as Record<typeof categories[number], number>);

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left py-2 px-3 text-muted-foreground font-medium">Subdivision</th>
              {categories.map(cat => (
                <th key={cat} className="text-center py-2 px-3 text-muted-foreground font-medium">
                  {categoryLabels[cat]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {heatmapData.map((row) => (
              <tr key={row.subdivision} className="border-t border-border/50">
                <td className="py-2 px-3 font-medium">{row.subdivision}</td>
                {categories.map(cat => (
                  <td key={cat} className="py-2 px-3">
                    <div className={cn(
                      "flex items-center justify-center h-10 rounded-md font-mono font-semibold transition-all hover:scale-105",
                      getIntensity(row[cat], maxValues[cat])
                    )}>
                      {row[cat]}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <span>Intensity:</span>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-success/30" />
          <span>Low</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-warning/30" />
          <span>Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-warning/60" />
          <span>High</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-destructive/60" />
          <span>Very High</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-destructive/80" />
          <span>Critical</span>
        </div>
      </div>
    </div>
  );
}
