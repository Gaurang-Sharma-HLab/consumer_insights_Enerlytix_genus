import { Users, Zap, WifiOff, AlertTriangle, Radio, Ban, Receipt } from 'lucide-react';
import { StatTile } from '@/components/dashboard/StatTile';
import { Heatmap } from '@/components/dashboard/Heatmap';
import { ZeroConsumptionTable } from '@/components/dashboard/ZeroConsumptionTable';
import { CategoryBreakdownTable } from '@/components/dashboard/CategoryBreakdownTable';
import { ActionPlanTable } from '@/components/dashboard/ActionPlanTable';
import { KeyObservations } from '@/components/dashboard/KeyObservations';
import { RootCausePieChart, CircleZeroConsumptionChart } from '@/components/dashboard/RootCauseCharts';
import {
  zeroConsumptionSummary,
  zeroConsumptionConsumers,
  categoryBreakdown,
  actionPlanData,
} from '@/data/zeroConsumptionData';
import { MainLayout } from '@/components/layout/MainLayout';

export default function ZeroConsumption() {
  return (
    <MainLayout 
      title="Zero Consumption Analysis" 
      breadcrumbs={[{ label: 'Reports' }, { label: 'Zero Consumption Analysis' }]}
    >
      <div className="container mx-auto px-6 py-8">
        {/* Report Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold">Zero Consumption Analysis Report</h1>
            <div className="text-right text-sm text-muted-foreground">
              <p>Period: {zeroConsumptionSummary.periodOfAnalysis}</p>
              <p>Report Date: {zeroConsumptionSummary.reportPreparedOn}</p>
            </div>
          </div>
        </div>

        {/* Summary Dashboard */}
        <section className="mb-10 animate-fade-in">
          <h2 className="text-lg font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
            Summary Dashboard
          </h2>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            <StatTile
              title="Total Smart Consumers"
              value={zeroConsumptionSummary.totalSmartConsumers}
              icon={<Users className="h-6 w-6" />}
              variant="default"
            />
            <StatTile
              title="Zero (1 Month)"
              value={zeroConsumptionSummary.zeroConsumption1Month}
              icon={<Zap className="h-6 w-6" />}
              variant="warning"
            />
            <StatTile
              title="Zero (2+ Months)"
              value={zeroConsumptionSummary.zeroConsumption2PlusMonths}
              icon={<AlertTriangle className="h-6 w-6" />}
              variant="danger"
            />
            <StatTile
              title="Healthy + Zero"
              value={zeroConsumptionSummary.communicationHealthyZeroUnits}
              icon={<Radio className="h-6 w-6" />}
              variant="warning"
            />
            <StatTile
              title="Comm Fail + Zero"
              value={zeroConsumptionSummary.communicationFailZeroUnits}
              icon={<WifiOff className="h-6 w-6" />}
              variant="danger"
            />
            <StatTile
              title="Not Energized"
              value={zeroConsumptionSummary.meterInstalledNotEnergized}
              icon={<Ban className="h-6 w-6" />}
              variant="default"
            />
            <StatTile
              title="Zero Billing"
              value={zeroConsumptionSummary.zeroBillingInstances}
              icon={<Receipt className="h-6 w-6" />}
              variant="warning"
            />
          </div>
        </section>

        {/* Category Breakdown */}
        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <CategoryBreakdownTable data={categoryBreakdown} />
        </section>

        {/* Charts Row */}
        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.15s' }}>
          <h2 className="text-lg font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
            Geo-Level Summary & Visualizations
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <RootCausePieChart />
            <CircleZeroConsumptionChart />
          </div>
        </section>

        {/* Heatmap */}
        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Heatmap />
        </section>

        {/* Consumer Data Table */}
        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.25s' }}>
          <h2 className="text-lg font-semibold text-muted-foreground mb-6 uppercase tracking-wider">
            Sample Consumer-wise Data
          </h2>
          <ZeroConsumptionTable data={zeroConsumptionConsumers} />
        </section>

        {/* Action Plan */}
        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <ActionPlanTable data={actionPlanData} />
        </section>

        {/* Key Observations */}
        <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.35s' }}>
          <KeyObservations />
        </section>
      </div>
    </MainLayout>
  );
}
