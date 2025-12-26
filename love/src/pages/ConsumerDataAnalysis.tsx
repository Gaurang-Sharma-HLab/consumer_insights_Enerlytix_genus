import { MainLayout } from '@/components/layout/MainLayout';
import { TopicSection } from '@/components/consumer-analytics/TopicSection';
import { SummaryTiles } from '@/components/consumer-analytics/SummaryTiles';
import { DataTable } from '@/components/consumer-analytics/DataTable';
import { SpikeDropChart, TrendChart, CategoryPieChart, CircleBarChart } from '@/components/consumer-analytics/ConsumptionCharts';
import { InsightsCard } from '@/components/consumer-analytics/InsightsCard';
import { StatusBadge, getStatusVariant } from '@/components/consumer-analytics/StatusBadge';
import { BucketLogicTable, BucketSummaryTable } from '@/components/consumer-analytics/BucketTable';
import {
  abnormalConsumptionSummary, highConsumptionCases, lowConsumptionCases, spikeChartData, dropChartData,
  zeroConsumptionMetrics, zeroConsumptionCategories, zeroConsumptionConsumers, zeroConsumptionTrendData, circleZeroConsumptionData,
  consumptionDropSummary, consumptionDropConsumers,
  lowConsumptionSummary, lowConsumptionConsumers,
  lowerThanExpectedConsumers,
  dayNightSummary, dayNightConsumers,
  bucketLogic, consumerProfiles, bucketSummary,
} from '@/data/consumerAnalyticsData';

export default function ConsumerDataAnalysis() {
  return (
    <MainLayout title="Consumer Data Analysis">
      <div className="container mx-auto px-6 py-8">
        {/* Topic 1: Abnormal Consumption Pattern */}
        <TopicSection title="Abnormal Consumption Pattern" topicNumber={1} defaultOpen={true}>
          <SummaryTiles data={abnormalConsumptionSummary} />
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-foreground">1.1 High Consumption Cases</h3>
            <DataTable
              data={highConsumptionCases}
              columns={[
                { header: 'Circle', accessor: 'circle' },
                { header: 'Division', accessor: 'division' },
                { header: 'Subdivision', accessor: 'subdivision' },
                { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-primary' },
                { header: 'Avg (3 mo)', accessor: 'avgConsumption', className: 'text-right' },
                { header: 'Current', accessor: 'currentMonth', className: 'text-right' },
                { header: '% Change', accessor: (row) => <span className="text-emerald-500">+{row.percentChange}%</span>, className: 'text-right' },
                { header: 'Status', accessor: (row) => <StatusBadge status={row.meterStatus} variant={getStatusVariant(row.meterStatus)} /> },
                { header: 'Remarks', accessor: 'remarks' },
              ]}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-foreground">1.2 Low Consumption / Zero Units Cases</h3>
            <DataTable
              data={lowConsumptionCases}
              columns={[
                { header: 'Circle', accessor: 'circle' },
                { header: 'Division', accessor: 'division' },
                { header: 'Subdivision', accessor: 'subdivision' },
                { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-primary' },
                { header: 'Avg (3 mo)', accessor: 'avgConsumption', className: 'text-right' },
                { header: 'Current', accessor: 'currentMonth', className: 'text-right' },
                { header: '% Change', accessor: (row) => <span className="text-red-500">{row.percentChange}%</span>, className: 'text-right' },
                { header: 'Status', accessor: (row) => <StatusBadge status={row.meterStatus} variant={getStatusVariant(row.meterStatus)} /> },
                { header: 'Remarks', accessor: 'remarks' },
              ]}
            />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <SpikeDropChart data={spikeChartData} type="spike" title="Top 10 Consumers – Sudden Spike" />
            <SpikeDropChart data={dropChartData} type="drop" title="Top 10 Consumers – Sudden Drop" />
          </div>
        </TopicSection>

        {/* Topic 2: Zero Consumption Analysis */}
        <TopicSection title="Zero Consumption Analysis Report" topicNumber={2}>
          <SummaryTiles data={zeroConsumptionMetrics} />
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-foreground">2.1 Categorized Breakdown</h3>
            <DataTable
              data={zeroConsumptionCategories.map((c, i) => ({ ...c, id: String(i) }))}
              columns={[
                { header: 'Category', accessor: 'category' },
                { header: 'Count', accessor: 'count', className: 'text-right' },
                { header: '% of Total', accessor: (row) => `${row.percentage}%`, className: 'text-right' },
                { header: 'Comments', accessor: 'comments' },
              ]}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-foreground">2.2 Sample Consumer-wise Data</h3>
            <DataTable
              data={zeroConsumptionConsumers}
              columns={[
                { header: 'Circle', accessor: 'circle' },
                { header: 'Division', accessor: 'division' },
                { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-primary' },
                { header: 'Meter Serial', accessor: 'meterSerialNo' },
                { header: 'Last Data', accessor: 'lastDataReceived' },
                { header: 'Last kWh', accessor: 'lastConsumption', className: 'text-right' },
                { header: 'Status', accessor: (row) => <StatusBadge status={row.communicationStatus} variant={getStatusVariant(row.communicationStatus)} /> },
                { header: 'Remarks', accessor: 'remarks' },
              ]}
            />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <CategoryPieChart data={zeroConsumptionCategories} title="Root Cause Distribution" />
            <CircleBarChart data={circleZeroConsumptionData} title="Zero Consumption by Circle" />
            <TrendChart data={zeroConsumptionTrendData} title="Zero Consumption Trend (Monthly)" />
          </div>
          <InsightsCard insights={[
            '25% of zero consumption cases are from non-communicating meters.',
            'Repeated cases from North subdivision indicating possible field process issue.',
            '12% cases have meter energy data but not billed – MDMS to UBS sync issue suspected.',
          ]} />
        </TopicSection>

        {/* Topic 3: Consumption Drop Analysis */}
        <TopicSection title="Consumption Drop Analysis Report – Post Smart Meter Installation" topicNumber={3}>
          <DataTable
            data={consumptionDropSummary.map((s, i) => ({ ...s, id: String(i) }))}
            columns={[
              { header: 'Parameter', accessor: 'parameter' },
              { header: 'Count of Consumers', accessor: 'consumerCount', className: 'text-right' },
              { header: 'Total Drop (kWh)', accessor: 'totalDrop', className: 'text-right' },
              { header: 'Avg. % Drop', accessor: (row) => `${row.avgDropPercent}%`, className: 'text-right text-red-500' },
            ]}
          />
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-foreground">3.1 Consumer-Wise Consumption Comparison</h3>
            <DataTable
              data={consumptionDropConsumers}
              columns={[
                { header: 'S.No', accessor: 'sNo' },
                { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-primary' },
                { header: 'Name', accessor: 'consumerName' },
                { header: 'Current', accessor: 'currentMonth', className: 'text-right' },
                { header: 'Same Month LY', accessor: 'sameMonthLastYear', className: 'text-right' },
                { header: 'Last Month', accessor: 'lastMonth', className: 'text-right' },
                { header: '% Drop', accessor: (row) => <span className="text-red-500">{row.dropPercent}%</span>, className: 'text-right' },
              ]}
            />
          </div>
        </TopicSection>

        {/* Topic 4: Low Consumption Trend */}
        <TopicSection title="Low Consumption Trend Report" topicNumber={4}>
          <DataTable
            data={lowConsumptionSummary.map((s, i) => ({ ...s, id: String(i) }))}
            columns={[
              { header: 'Category', accessor: 'category' },
              { header: 'No. of Consumers', accessor: 'consumerCount', className: 'text-right' },
              { header: '% of Total', accessor: (row) => row.percentOfTotal > 0 ? `${row.percentOfTotal}%` : '—', className: 'text-right' },
            ]}
          />
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-foreground">4.1 Consumer-Wise Analysis</h3>
            <DataTable
              data={lowConsumptionConsumers}
              columns={[
                { header: 'S.No', accessor: 'sNo' },
                { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-primary' },
                { header: 'Name', accessor: 'name' },
                { header: 'SL (kW)', accessor: 'sanctionedLoad', className: 'text-right' },
                { header: 'Avg Monthly', accessor: 'avgMonthlyConsumption', className: 'text-right' },
                { header: 'Expected', accessor: 'expectedConsumption', className: 'text-right' },
                { header: '% Deviation', accessor: (row) => <span className="text-red-500">{row.deviation}%</span>, className: 'text-right' },
                { header: 'Status', accessor: (row) => <StatusBadge status={row.meterStatus} variant={getStatusVariant(row.meterStatus)} /> },
              ]}
            />
          </div>
          <InsightsCard insights={[
            'Majority of the drops observed in LT Commercial / HT Industrial category.',
            'Possible causes: Consumer energy optimization, Meter under-recording, Load shifting or seasonal impact.',
            'Total of 567 consumers show more than 30% drop YoY.',
          ]} />
        </TopicSection>

        {/* Topic 5: Consumption Lower Than Expected */}
        <TopicSection title="Consumers with Consumption Lower Than Expected Pattern" topicNumber={5}>
          <DataTable
            data={lowerThanExpectedConsumers}
            columns={[
              { header: 'Sr.No', accessor: 'srNo' },
              { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-primary' },
              { header: 'Name', accessor: 'consumerName' },
              { header: 'Meter No.', accessor: 'meterNo' },
              { header: 'Avg LY (kWh)', accessor: 'avgMonthlyLastYear', className: 'text-right' },
              { header: 'Current (kWh)', accessor: 'currentMonthConsumption', className: 'text-right' },
              { header: '% Deviation', accessor: (row) => <span className="text-red-500">{row.deviation}%</span>, className: 'text-right' },
              { header: 'Expected Range', accessor: 'expectedRange' },
              { header: 'Remarks', accessor: 'remarks' },
            ]}
          />
          <InsightsCard insights={[
            'AMISP to Validate: Check for potential metering issues or communication gaps.',
            'Field Team to Investigate: Physical site inspection where deviation >25%.',
            'Consumer Notification: Alert to be issued in case of recurring anomalies.',
          ]} />
        </TopicSection>

        {/* Topic 6: Day Use with Zero Night */}
        <TopicSection title="Abnormal Consumption Pattern – Day Use with Zero Night Consumption" topicNumber={6}>
          <SummaryTiles data={dayNightSummary} />
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-foreground">6.1 Consumer-wise Report</h3>
            <DataTable
              data={dayNightConsumers}
              columns={[
                { header: 'S.No', accessor: 'sNo' },
                { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-primary' },
                { header: 'Name', accessor: 'consumerName' },
                { header: 'Meter No.', accessor: 'meterNo' },
                { header: 'Load (kW)', accessor: 'connectedLoad', className: 'text-right' },
                { header: 'Day (kWh)', accessor: 'dayConsumption', className: 'text-right' },
                { header: 'Night (kWh)', accessor: 'nightConsumption', className: 'text-right' },
                { header: 'Suspicion', accessor: (row) => <StatusBadge status={row.suspicionFlag} variant={getStatusVariant(row.suspicionFlag)} /> },
                { header: 'Remarks', accessor: 'remarks' },
              ]}
            />
          </div>
          <InsightsCard insights={[
            '342 consumers show consistent zero-night consumption despite normal day usage.',
            'Mostly observed in urban slums / high-density residential areas.',
            'Possible bypassing or night-time disconnect of metering circuit.',
          ]} />
        </TopicSection>

        {/* Topic 7: Consumer Profiling & Bucketing */}
        <TopicSection title="Consumer Consumption Profiling & Bucketing Report" topicNumber={7}>
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-foreground">7.1 Bucketing Logic</h3>
            <BucketLogicTable data={bucketLogic} />
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-foreground">7.2 Consumer-Wise Profiling</h3>
            <DataTable
              data={consumerProfiles}
              columns={[
                { header: 'S.No', accessor: 'sNo' },
                { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-primary' },
                { header: 'Name', accessor: 'name' },
                { header: 'Category', accessor: 'category' },
                { header: 'SL (kW)', accessor: 'sanctionedLoad', className: 'text-right' },
                { header: 'Avg MD', accessor: 'avgMD', className: 'text-right' },
                { header: 'Bucket', accessor: (row) => <StatusBadge status={row.bucket} variant={row.bucket.includes('High') ? 'danger' : row.bucket.includes('Medium') ? 'warning' : 'success'} /> },
                { header: 'Tamper', accessor: 'tamperEvents', className: 'text-right' },
                { header: 'Actions', accessor: 'actionsRequired' },
              ]}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-foreground">7.3 Summary by Category & Bucket</h3>
            <BucketSummaryTable data={bucketSummary} />
          </div>
          <InsightsCard insights={[
            'Prioritize High Risk consumers for inspection and automated alerts.',
            'Issue load enhancement notices where MD consistently exceeds SL.',
            'Investigate zero use consumers with sanctioned load >1 kW.',
            'Update risk categorization monthly or as per data availability.',
          ]} />
        </TopicSection>
      </div>
    </MainLayout>
  );
}
