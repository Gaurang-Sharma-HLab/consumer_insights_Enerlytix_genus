import { useState } from 'react';
import { 
  Users, TrendingUp, TrendingDown, AlertTriangle, Activity, ChartBar,
  Shield, Wrench, ClipboardCheck, Lock, MessageSquare, Gauge, FileText, Settings2
} from 'lucide-react';
import { StatTile } from '@/components/dashboard/StatTile';
import { DetailView, ViewType } from '@/components/dashboard/DetailView';
import { SpikeChart, DropChart, ZeroConsumptionChart } from '@/components/dashboard/ConsumptionCharts';
import { Heatmap } from '@/components/dashboard/Heatmap';
import { summaryData, circleDistribution } from '@/data/mockData';
import { MainLayout } from '@/components/layout/MainLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-xl">
        <p className="font-semibold text-foreground mb-2">{label} Circle</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: <span className="font-mono font-bold">{entry.value}</span> cases
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface DashboardSectionProps {
  title: string;
  children: React.ReactNode;
  delay?: string;
}

const DashboardSection = ({ title, children, delay = '0s' }: DashboardSectionProps) => {
  return (
    <section className="mb-8 animate-fade-in" style={{ animationDelay: delay }}>
      <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </section>
  );
};

export default function Index() {
  const [activeView, setActiveView] = useState<ViewType | null>(null);

  if (activeView) {
    return <DetailView view={activeView} onBack={() => setActiveView(null)} />;
  }

  return (
    <MainLayout title="Dashboard Overview">
      <div className="container mx-auto px-6 py-8">
        
        {/* Section 1: Consumer Data Analysis */}
        <DashboardSection title="Consumer Data Analysis" delay="0s">
          <StatTile title="Active Consumers" value="12,450" icon={<Users className="h-6 w-6" />} variant="default" subtitle="Currently active" />
          <StatTile title="New Connections" value="245" icon={<Users className="h-6 w-6" />} variant="success" subtitle="This month" />
          <StatTile title="Disconnections" value="32" icon={<Users className="h-6 w-6" />} variant="danger" subtitle="Pending review" />
          <StatTile title="Meter Changes" value="89" icon={<Settings2 className="h-6 w-6" />} variant="default" subtitle="Completed" />
        </DashboardSection>

        {/* Section 2: Revenue Protection */}
        <DashboardSection title="Revenue Protection" delay="0.05s">
          <StatTile title="Suspected Theft" value="156" icon={<Shield className="h-6 w-6" />} variant="danger" subtitle="Under investigation" />
          <StatTile title="Verified Cases" value="42" icon={<Shield className="h-6 w-6" />} variant="warning" subtitle="Confirmed theft" />
          <StatTile title="Revenue Recovered" value="₹4.2L" icon={<Shield className="h-6 w-6" />} variant="success" subtitle="This quarter" />
          <StatTile title="Pending Actions" value="78" icon={<Shield className="h-6 w-6" />} variant="default" subtitle="Awaiting action" />
        </DashboardSection>

        {/* Section 3: Preventive Maintenance */}
        <DashboardSection title="Preventive Maintenance Analysis" delay="0.1s">
          <StatTile title="Meters Due" value="1,234" icon={<Wrench className="h-6 w-6" />} variant="warning" subtitle="For maintenance" />
          <StatTile title="Completed" value="890" icon={<Wrench className="h-6 w-6" />} variant="success" subtitle="This month" />
          <StatTile title="Overdue" value="56" icon={<Wrench className="h-6 w-6" />} variant="danger" subtitle="Needs attention" />
          <StatTile title="Scheduled" value="288" icon={<Wrench className="h-6 w-6" />} variant="default" subtitle="Next month" />
        </DashboardSection>

        {/* Section 4: Energy Audit */}
        <DashboardSection title="Energy Audit" delay="0.15s">
          <StatTile title="Audits Completed" value="156" icon={<ClipboardCheck className="h-6 w-6" />} variant="success" subtitle="This quarter" />
          <StatTile title="Pending Audits" value="34" icon={<ClipboardCheck className="h-6 w-6" />} variant="warning" subtitle="In progress" />
          <StatTile title="Issues Found" value="89" icon={<ClipboardCheck className="h-6 w-6" />} variant="danger" subtitle="Requires action" />
          <StatTile title="Efficiency Score" value="87%" icon={<ClipboardCheck className="h-6 w-6" />} variant="default" subtitle="Average" />
        </DashboardSection>

        {/* Section 5: Theft Protection */}
        <DashboardSection title="Theft Protection Analysis" delay="0.2s">
          <StatTile title="Alerts Generated" value="234" icon={<Lock className="h-6 w-6" />} variant="warning" subtitle="This week" />
          <StatTile title="Verified Theft" value="18" icon={<Lock className="h-6 w-6" />} variant="danger" subtitle="Confirmed" />
          <StatTile title="False Positives" value="45" icon={<Lock className="h-6 w-6" />} variant="default" subtitle="Cleared" />
          <StatTile title="Under Review" value="171" icon={<Lock className="h-6 w-6" />} variant="warning" subtitle="Pending" />
        </DashboardSection>

        {/* Section 6: Consumer Grievance */}
        <DashboardSection title="Consumer Grievance" delay="0.25s">
          <StatTile title="Total Complaints" value="567" icon={<MessageSquare className="h-6 w-6" />} variant="default" subtitle="This month" />
          <StatTile title="Resolved" value="423" icon={<MessageSquare className="h-6 w-6" />} variant="success" subtitle="Closed cases" />
          <StatTile title="Pending" value="98" icon={<MessageSquare className="h-6 w-6" />} variant="warning" subtitle="In progress" />
          <StatTile title="Escalated" value="46" icon={<MessageSquare className="h-6 w-6" />} variant="danger" subtitle="Needs attention" />
        </DashboardSection>

        {/* Section 7: Forecasting */}
        <DashboardSection title="Forecasting" delay="0.3s">
          <StatTile title="Predicted Demand" value="45MW" icon={<TrendingUp className="h-6 w-6" />} variant="default" subtitle="Next month" />
          <StatTile title="Peak Load" value="52MW" icon={<TrendingUp className="h-6 w-6" />} variant="warning" subtitle="Expected" />
          <StatTile title="Accuracy" value="94%" icon={<TrendingUp className="h-6 w-6" />} variant="success" subtitle="Model accuracy" />
          <StatTile title="Variance" value="±3%" icon={<TrendingUp className="h-6 w-6" />} variant="default" subtitle="Prediction range" />
        </DashboardSection>

        {/* Section 8: Power Quality */}
        <DashboardSection title="Power Quality" delay="0.35s">
          <StatTile title="Voltage Issues" value="23" icon={<Gauge className="h-6 w-6" />} variant="warning" subtitle="Detected" />
          <StatTile title="Frequency Deviation" value="8" icon={<Gauge className="h-6 w-6" />} variant="danger" subtitle="Critical" />
          <StatTile title="Power Factor" value="0.92" icon={<Gauge className="h-6 w-6" />} variant="success" subtitle="Average" />
          <StatTile title="Harmonics" value="12" icon={<Gauge className="h-6 w-6" />} variant="default" subtitle="Detected" />
        </DashboardSection>

        {/* Section 9: Reliability Indices */}
        <DashboardSection title="Reliability Indices" delay="0.4s">
          <StatTile title="SAIDI" value="2.4h" icon={<Activity className="h-6 w-6" />} variant="default" subtitle="Avg interruption" />
          <StatTile title="SAIFI" value="1.2" icon={<Activity className="h-6 w-6" />} variant="default" subtitle="Frequency index" />
          <StatTile title="CAIDI" value="2.0h" icon={<Activity className="h-6 w-6" />} variant="warning" subtitle="Duration index" />
          <StatTile title="ASAI" value="99.7%" icon={<Activity className="h-6 w-6" />} variant="success" subtitle="Availability" />
        </DashboardSection>

        {/* Section 10: VEE Report */}
        <DashboardSection title="VEE Report" delay="0.45s">
          <StatTile title="VEE Processed" value="98.5%" icon={<FileText className="h-6 w-6" />} variant="success" subtitle="Data validated" />
          <StatTile title="Estimation Cases" value="245" icon={<FileText className="h-6 w-6" />} variant="warning" subtitle="Data estimated" />
          <StatTile title="Edit Cases" value="67" icon={<FileText className="h-6 w-6" />} variant="default" subtitle="Manual edits" />
          <StatTile title="Failed Validation" value="23" icon={<FileText className="h-6 w-6" />} variant="danger" subtitle="Needs review" />
        </DashboardSection>

        {/* Section 11: Operational Reports */}
        <DashboardSection title="Operational Reports" delay="0.5s">
          <StatTile title="Daily Reports" value="45" icon={<FileText className="h-6 w-6" />} variant="default" subtitle="Generated today" />
          <StatTile title="Weekly Summary" value="12" icon={<FileText className="h-6 w-6" />} variant="success" subtitle="Completed" />
          <StatTile title="Pending Reports" value="8" icon={<FileText className="h-6 w-6" />} variant="warning" subtitle="In queue" />
          <StatTile title="Failed Reports" value="2" icon={<FileText className="h-6 w-6" />} variant="danger" subtitle="Needs retry" />
        </DashboardSection>

        {/* Heatmap Section */}
        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.55s' }}>
          <Heatmap title="Consumption Issues Heatmap by Subdivision" />
        </section>

        {/* Circle Distribution */}
        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
              Distribution by Circle
            </h2>
          </div>
          
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={circleDistribution} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 17%)" vertical={false} />
                  <XAxis dataKey="name" stroke="hsl(215 20% 55%)" fontSize={12} />
                  <YAxis stroke="hsl(215 20% 55%)" fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    wrapperStyle={{ paddingTop: '20px' }}
                    formatter={(value) => <span className="text-muted-foreground text-sm">{value}</span>}
                  />
                  <Bar dataKey="high" fill="hsl(0 84% 60%)" name="High Consumption" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="low" fill="hsl(38 92% 50%)" name="Low Consumption" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* Charts Preview */}
        <section className="animate-fade-in" style={{ animationDelay: '0.65s' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">
              Consumption Patterns
            </h2>
            <button 
              onClick={() => setActiveView('charts')}
              className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ChartBar className="h-4 w-4" />
              View All Charts
            </button>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
            <SpikeChart />
            <DropChart />
          </div>
          
          <div className="mt-6">
            <ZeroConsumptionChart />
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
