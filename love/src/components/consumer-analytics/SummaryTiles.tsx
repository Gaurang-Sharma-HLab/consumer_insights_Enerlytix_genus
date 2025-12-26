import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SummaryTile {
  label: string;
  value: number | string;
}

interface SummaryTilesProps {
  data: SummaryTile[];
  icon?: LucideIcon;
  className?: string;
}

export function SummaryTiles({ data, icon: Icon, className }: SummaryTilesProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4", className)}>
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="text-2xl font-bold text-foreground">
                {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
              </p>
            </div>
            {Icon && <Icon className="h-5 w-5 text-primary shrink-0" />}
          </div>
        </div>
      ))}
    </div>
  );
}
