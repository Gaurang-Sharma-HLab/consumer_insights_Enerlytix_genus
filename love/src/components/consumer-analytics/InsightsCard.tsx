import { Lightbulb } from 'lucide-react';

interface InsightsCardProps {
  insights: string[];
  title?: string;
}

export function InsightsCard({ insights, title = "Key Insights" }: InsightsCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="h-5 w-5 text-primary" />
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      </div>
      <ul className="space-y-2">
        {insights.map((insight, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary mt-1">•</span>
            <span>{insight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
