import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConsumerAnalyticsDataService, 
  AbnormalConsumptionSummary, ConsumptionCase, 
  ZeroConsumptionMetric, ZeroConsumptionCategory, ZeroConsumptionConsumer,
  ConsumptionDropSummary, ConsumptionDropConsumer,
  LowConsumptionSummary, LowConsumptionConsumer,
  LowerThanExpectedConsumer,
  BucketLogic, ConsumerProfile, BucketSummary,
  CommunicationGapSummary, CommunicationAgeingCategory, CommunicationCircleBreakdown,
  CommunicationMeterDetail, CommunicationRootCause, CommunicationActionTracker,
  ChartDataPoint } from '../../services/consumer-analytics-data.service';
import { TopicSectionComponent } from '../../components/topic-section/topic-section.component';
import { ThemeService } from '../../services/theme.service';
import { BasePageLayoutComponent } from '../../components/base-page-layout/base-page-layout.component';
import { SummaryTilesComponent } from '../../components/summary-tiles/summary-tiles.component';
import { DataTableComponent, Column } from '../../components/data-table/data-table.component';
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { InsightsCardComponent } from '../../components/insights-card/insights-card.component';
import { BucketLogicTableComponent, BucketSummaryTableComponent } from '../../components/bucket-table/bucket-table.component';
import { ChartPlaceholderComponent } from '../../components/chart-placeholder/chart-placeholder.component';

@Component({
  selector: 'app-consumer-data-analysis',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    TopicSectionComponent,
    BasePageLayoutComponent,
    SummaryTilesComponent,
    DataTableComponent,
    StatusBadgeComponent,
    InsightsCardComponent,
    BucketLogicTableComponent,
    BucketSummaryTableComponent,
    ChartPlaceholderComponent
  ],
  templateUrl: './consumer-data-analysis.component.html',
  styleUrl: './consumer-data-analysis.component.css'
})
export class ConsumerDataAnalysisComponent implements OnInit, AfterViewInit {
  @ViewChildren(TopicSectionComponent) topicSections!: QueryList<TopicSectionComponent>;
  // Topic 1
  abnormalConsumptionSummary: AbnormalConsumptionSummary[] = [];
  highConsumptionCases: ConsumptionCase[] = [];
  lowConsumptionCases: ConsumptionCase[] = [];
  spikeChartData: ChartDataPoint[] = [];
  dropChartData: ChartDataPoint[] = [];

  // Topic 2
  zeroConsumptionMetrics: ZeroConsumptionMetric[] = [];
  zeroConsumptionCategories: ZeroConsumptionCategory[] = [];
  zeroConsumptionConsumers: ZeroConsumptionConsumer[] = [];
  zeroConsumptionTrendData: ChartDataPoint[] = [];
  circleZeroConsumptionData: ChartDataPoint[] = [];

  // Topic 3
  consumptionDropSummary: ConsumptionDropSummary[] = [];
  consumptionDropConsumers: ConsumptionDropConsumer[] = [];

  // Topic 4
  lowConsumptionSummary: LowConsumptionSummary[] = [];
  lowConsumptionConsumers: LowConsumptionConsumer[] = [];

  // Topic 5
  lowerThanExpectedConsumers: LowerThanExpectedConsumer[] = [];

  // Topic 7
  bucketLogic: BucketLogic[] = [];
  consumerProfiles: ConsumerProfile[] = [];
  bucketSummary: BucketSummary[] = [];

  // Topic 8
  communicationGapSummary: CommunicationGapSummary[] = [];
  communicationAgeingCategories: CommunicationAgeingCategory[] = [];
  communicationCircleBreakdown: CommunicationCircleBreakdown[] = [];
  communicationMeterDetails: CommunicationMeterDetail[] = [];
  communicationRootCauses: CommunicationRootCause[] = [];
  communicationActionTracker: CommunicationActionTracker[] = [];

  // Column definitions for tables
  highConsumptionColumns: Column<ConsumptionCase>[] = [];
  lowConsumptionColumns: Column<ConsumptionCase>[] = [];
  zeroConsumptionCategoryColumns: Column<ZeroConsumptionCategory & { id: string }>[] = [];
  zeroConsumptionConsumerColumns: Column<ZeroConsumptionConsumer>[] = [];
  consumptionDropSummaryColumns: Column<ConsumptionDropSummary & { id: string }>[] = [];
  consumptionDropConsumerColumns: Column<ConsumptionDropConsumer>[] = [];
  lowConsumptionSummaryColumns: Column<LowConsumptionSummary & { id: string }>[] = [];
  lowConsumptionConsumerColumns: Column<LowConsumptionConsumer>[] = [];
  lowerThanExpectedColumns: Column<LowerThanExpectedConsumer>[] = [];
  consumerProfileColumns: Column<ConsumerProfile>[] = [];
  communicationAgeingCategoryColumns: Column<CommunicationAgeingCategory & { id: string }>[] = [];
  communicationCircleBreakdownColumns: Column<CommunicationCircleBreakdown>[] = [];
  communicationMeterDetailColumns: Column<CommunicationMeterDetail>[] = [];
  communicationRootCauseColumns: Column<CommunicationRootCause & { id: string }>[] = [];
  communicationActionTrackerColumns: Column<CommunicationActionTracker>[] = [];

  constructor(
    private dataService: ConsumerAnalyticsDataService,
    private themeService: ThemeService
  ) {}

  ngAfterViewInit() {
    // ViewChildren is available after view init
  }

  onTopicSectionOpened(openedSection: TopicSectionComponent) {
    // Close all other sections
    if (this.topicSections) {
      this.topicSections.forEach(section => {
        if (section !== openedSection) {
          section.close();
        }
      });
    }
  }

  ngOnInit() {
    // Load Topic 1 data
    this.abnormalConsumptionSummary = this.dataService.getAbnormalConsumptionSummary();
    this.highConsumptionCases = this.dataService.getHighConsumptionCases();
    this.lowConsumptionCases = this.dataService.getLowConsumptionCases();
    this.spikeChartData = this.dataService.getSpikeChartData();
    this.dropChartData = this.dataService.getDropChartData();

    // Load Topic 2 data
    this.zeroConsumptionMetrics = this.dataService.getZeroConsumptionMetrics();
    this.zeroConsumptionCategories = this.dataService.getZeroConsumptionCategories();
    this.zeroConsumptionConsumers = this.dataService.getZeroConsumptionConsumers();
    this.zeroConsumptionTrendData = this.dataService.getZeroConsumptionTrendData();
    this.circleZeroConsumptionData = this.dataService.getCircleZeroConsumptionData();

    // Load Topic 3 data
    this.consumptionDropSummary = this.dataService.getConsumptionDropSummary();
    this.consumptionDropConsumers = this.dataService.getConsumptionDropConsumers();

    // Load Topic 4 data
    this.lowConsumptionSummary = this.dataService.getLowConsumptionSummary();
    this.lowConsumptionConsumers = this.dataService.getLowConsumptionConsumers();

    // Load Topic 5 data
    this.lowerThanExpectedConsumers = this.dataService.getLowerThanExpectedConsumers();

    // Load Topic 7 data
    this.bucketLogic = this.dataService.getBucketLogic();
    this.consumerProfiles = this.dataService.getConsumerProfiles();
    this.bucketSummary = this.dataService.getBucketSummary();

    // Load Topic 8 data
    this.communicationGapSummary = this.dataService.getCommunicationGapSummary();
    this.communicationAgeingCategories = this.dataService.getCommunicationAgeingCategories();
    this.communicationCircleBreakdown = this.dataService.getCommunicationCircleBreakdown();
    this.communicationMeterDetails = this.dataService.getCommunicationMeterDetails();
    this.communicationRootCauses = this.dataService.getCommunicationRootCauses();
    this.communicationActionTracker = this.dataService.getCommunicationActionTracker();

    // Define columns
    this.setupColumns();
  }

  setupColumns() {
    this.highConsumptionColumns = [
      { header: 'Circle', accessor: 'circle' },
      { header: 'Division', accessor: 'division' },
      { header: 'Subdivision', accessor: 'subdivision' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Avg (3 mo)', accessor: 'avgConsumption', className: 'text-right' },
      { header: 'Current', accessor: 'currentMonth', className: 'text-right' },
      { header: '% Change', accessor: (row) => `+${row.percentChange}%`, className: 'text-right text-emerald-500' },
      { header: 'Status', accessor: (row) => ({ status: row.meterStatus, variant: this.getStatusVariant(row.meterStatus) }), className: '' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.lowConsumptionColumns = [
      { header: 'Circle', accessor: 'circle' },
      { header: 'Division', accessor: 'division' },
      { header: 'Subdivision', accessor: 'subdivision' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Avg (3 mo)', accessor: 'avgConsumption', className: 'text-right' },
      { header: 'Current', accessor: 'currentMonth', className: 'text-right' },
      { header: '% Change', accessor: (row) => `${row.percentChange}%`, className: 'text-right text-red-500' },
      { header: 'Status', accessor: (row) => ({ status: row.meterStatus, variant: this.getStatusVariant(row.meterStatus) }), className: '' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.zeroConsumptionCategoryColumns = [
      { header: 'Category', accessor: 'category' },
      { header: 'Count', accessor: 'count', className: 'text-right' },
      { header: '% of Total', accessor: (row) => `${row.percentage}%`, className: 'text-right' },
      { header: 'Comments', accessor: 'comments' },
    ];

    this.zeroConsumptionConsumerColumns = [
      { header: 'Circle', accessor: 'circle' },
      { header: 'Division', accessor: 'division' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Meter Serial', accessor: 'meterSerialNo' },
      { header: 'Last Data', accessor: 'lastDataReceived' },
      { header: 'Last kWh', accessor: 'lastConsumption', className: 'text-right' },
      { header: 'Status', accessor: (row) => ({ status: row.communicationStatus, variant: this.getStatusVariant(row.communicationStatus) }), className: '' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.consumptionDropSummaryColumns = [
      { header: 'Parameter', accessor: 'parameter' },
      { header: 'Count of Consumers', accessor: 'consumerCount', className: 'text-right' },
      { header: 'Total Drop (kWh)', accessor: 'totalDrop', className: 'text-right' },
      { header: 'Avg. % Drop', accessor: (row) => `${row.avgDropPercent}%`, className: 'text-right text-red-500' },
    ];

    this.consumptionDropConsumerColumns = [
      { header: 'S.No', accessor: 'sNo' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Name', accessor: 'consumerName' },
      { header: 'Current', accessor: 'currentMonth', className: 'text-right' },
      { header: 'Same Month LY', accessor: 'sameMonthLastYear', className: 'text-right' },
      { header: 'Last Month', accessor: 'lastMonth', className: 'text-right' },
      { header: '% Drop', accessor: (row) => `${row.dropPercent}%`, className: 'text-right text-red-500' },
    ];

    this.lowConsumptionSummaryColumns = [
      { header: 'Category', accessor: 'category' },
      { header: 'No. of Consumers', accessor: 'consumerCount', className: 'text-right' },
      { header: '% of Total', accessor: (row) => row.percentOfTotal > 0 ? `${row.percentOfTotal}%` : '—', className: 'text-right' },
    ];

    this.lowConsumptionConsumerColumns = [
      { header: 'S.No', accessor: 'sNo' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Name', accessor: 'name' },
      { header: 'SL (kW)', accessor: 'sanctionedLoad', className: 'text-right' },
      { header: 'Avg Monthly', accessor: 'avgMonthlyConsumption', className: 'text-right' },
      { header: 'Expected', accessor: 'expectedConsumption', className: 'text-right' },
      { header: '% Deviation', accessor: (row) => `${row.deviation}%`, className: 'text-right text-red-500' },
      { header: 'Status', accessor: (row) => ({ status: row.meterStatus, variant: this.getStatusVariant(row.meterStatus) }), className: '' },
    ];

    this.lowerThanExpectedColumns = [
      { header: 'Sr.No', accessor: 'srNo' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Name', accessor: 'consumerName' },
      { header: 'Meter No.', accessor: 'meterNo' },
      { header: 'Avg LY (kWh)', accessor: 'avgMonthlyLastYear', className: 'text-right' },
      { header: 'Current (kWh)', accessor: 'currentMonthConsumption', className: 'text-right' },
      { header: '% Deviation', accessor: (row) => `${row.deviation}%`, className: 'text-right text-red-500' },
      { header: 'Expected Range', accessor: 'expectedRange' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.consumerProfileColumns = [
      { header: 'S.No', accessor: 'sNo' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Name', accessor: 'name' },
      { header: 'Category', accessor: 'category' },
      { header: 'SL (kW)', accessor: 'sanctionedLoad', className: 'text-right' },
      { header: 'Avg MD', accessor: 'avgMD', className: 'text-right' },
      { header: 'Bucket', accessor: (row) => ({ 
        status: row.bucket, 
        variant: row.bucket.includes('High') ? 'danger' : row.bucket.includes('Medium') ? 'warning' : 'success' 
      }), className: '' },
      { header: 'Tamper', accessor: 'tamperEvents', className: 'text-right' },
      { header: 'Actions', accessor: 'actionsRequired' },
    ];

    this.communicationAgeingCategoryColumns = [
      { header: 'Ageing Category', accessor: 'ageingCategory' },
      { header: 'Count', accessor: 'count', className: 'text-right' },
      { header: '% of Total Failures', accessor: (row) => `${row.percentOfTotalFailures}%`, className: 'text-right' },
      { header: 'Comments', accessor: 'comments' },
    ];

    this.communicationCircleBreakdownColumns = [
      { header: 'Circle', accessor: 'circle' },
      { header: 'Division', accessor: 'division' },
      { header: 'Subdivision', accessor: 'subdivision' },
      { header: 'Total Meters', accessor: 'totalMeters', className: 'text-right' },
      { header: 'Communication Failures', accessor: 'communicationFailures', className: 'text-right' },
      { header: '>30 Days Ageing', accessor: 'ageing30Days', className: 'text-right' },
      { header: 'Never Communicated', accessor: 'neverCommunicated', className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.communicationMeterDetailColumns = [
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Meter No.', accessor: 'meterNo' },
      { header: 'Circle', accessor: 'circle' },
      { header: 'Last Data Received', accessor: 'lastDataReceived' },
      { header: 'No. of Days Silent', accessor: 'daysSilent', className: 'text-right' },
      { header: 'Comm. Mode', accessor: 'commMode' },
      { header: 'Signal Strength', accessor: 'signalStrength' },
      { header: 'Site Visit Done?', accessor: (row) => ({ status: row.siteVisitDone, variant: row.siteVisitDone === 'Yes' ? 'success' : 'warning' }), className: '' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.communicationRootCauseColumns = [
      { header: 'Root Cause', accessor: 'rootCause' },
      { header: 'No. of Cases', accessor: 'caseCount', className: 'text-right' },
      { header: '%', accessor: (row) => `${row.percentage}%`, className: 'text-right' },
      { header: 'Action Needed', accessor: 'actionNeeded' },
    ];

    this.communicationActionTrackerColumns = [
      { header: 'Circle', accessor: 'circle' },
      { header: 'Category', accessor: 'category' },
      { header: 'Meter Count', accessor: 'meterCount', className: 'text-right' },
      { header: 'Action Owner', accessor: 'actionOwner' },
      { header: 'Deadline', accessor: 'deadline' },
      { header: 'Status', accessor: (row) => ({ status: row.status, variant: this.getStatusVariant(row.status) }), className: '' },
    ];
  }

  getStatusVariant(status: string): 'success' | 'warning' | 'danger' | 'default' | 'info' {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes('working') || lowerStatus.includes('healthy') || lowerStatus.includes('normal') || lowerStatus.includes('communicating')) {
      return 'success';
    }
    if (lowerStatus.includes('pending') || lowerStatus.includes('borderline') || lowerStatus.includes('issue')) {
      return 'warning';
    }
    if (lowerStatus.includes('faulty') || lowerStatus.includes('fail') || lowerStatus.includes('yes')) {
      return 'danger';
    }
    if (lowerStatus.includes('no')) {
      return 'info';
    }
    return 'default';
  }

  // Helper to get zero consumption categories with IDs
  getZeroConsumptionCategoriesWithIds() {
    return this.zeroConsumptionCategories.map((c, i) => ({ ...c, id: String(i) }));
  }

  // Helper to get consumption drop summary with IDs
  getConsumptionDropSummaryWithIds() {
    return this.consumptionDropSummary.map((s, i) => ({ ...s, id: String(i) }));
  }

  // Helper to get low consumption summary with IDs
  getLowConsumptionSummaryWithIds() {
    return this.lowConsumptionSummary.map((s, i) => ({ ...s, id: String(i) }));
  }

  // Helper to get communication ageing categories with IDs
  getCommunicationAgeingCategoriesWithIds() {
    return this.communicationAgeingCategories.map((c, i) => ({ ...c, id: String(i) }));
  }

  // Helper to get communication root causes with IDs
  getCommunicationRootCausesWithIds() {
    return this.communicationRootCauses.map((r, i) => ({ ...r, id: String(i) }));
  }
}
