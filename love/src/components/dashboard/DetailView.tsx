import { DashboardHeader } from './DashboardHeader';
import { ConsumptionTable } from './ConsumptionTable';
import { SpikeChart, DropChart, ZeroConsumptionChart } from './ConsumptionCharts';
import { highConsumptionData, lowConsumptionData } from '@/data/mockData';
import { TrendingUp, TrendingDown, Activity, AlertTriangle, ChartBar } from 'lucide-react';

export type ViewType = 'high' | 'low' | 'drop' | 'spike' | 'charts';

interface DetailViewProps {
  view: ViewType;
  onBack: () => void;
}

const viewConfig = {
  high: {
    title: 'High Consumption Cases',
    subtitle: 'Consumers with significant consumption increase',
    icon: TrendingUp,
  },
  low: {
    title: 'Low Consumption / Zero Units',
    subtitle: 'Consumers with abnormally low or zero consumption',
    icon: TrendingDown,
  },
  drop: {
    title: 'Sudden Drop Cases',
    subtitle: 'Consumers with >50% decrease in consumption',
    icon: AlertTriangle,
  },
  spike: {
    title: 'Sudden Spike Cases',
    subtitle: 'Consumers with >200% increase in consumption',
    icon: Activity,
  },
  charts: {
    title: 'Consumption Pattern Charts',
    subtitle: 'Visual analysis of consumption trends',
    icon: ChartBar,
  },
};

export function DetailView({ view, onBack }: DetailViewProps) {
  const config = viewConfig[view];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        showBack 
        onBack={onBack}
        title={config.title}
        subtitle={config.subtitle}
      />

      <main className="container mx-auto px-6 py-8 animate-slide-up">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{config.title}</h2>
            <p className="text-muted-foreground">{config.subtitle}</p>
          </div>
        </div>

        {view === 'high' && <ConsumptionTable data={highConsumptionData} type="high" />}
        {view === 'low' && <ConsumptionTable data={lowConsumptionData} type="low" />}
        {view === 'drop' && <ConsumptionTable data={lowConsumptionData} type="low" />}
        {view === 'spike' && <ConsumptionTable data={highConsumptionData} type="high" />}
        
        {view === 'charts' && (
          <div className="grid gap-6 lg:grid-cols-2">
            <SpikeChart />
            <DropChart />
            <div className="lg:col-span-2">
              <ZeroConsumptionChart />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
