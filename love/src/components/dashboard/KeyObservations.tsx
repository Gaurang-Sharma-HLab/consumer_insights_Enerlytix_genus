import { keyObservations } from '@/data/zeroConsumptionData';
import { AlertCircle } from 'lucide-react';

export function KeyObservations() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="h-5 w-5 text-warning" />
        <h3 className="text-lg font-semibold">Key Observations</h3>
      </div>
      <ul className="space-y-3">
        {keyObservations.map((observation, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-semibold flex items-center justify-center">
              {index + 1}
            </span>
            <span className="text-muted-foreground">{observation}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
