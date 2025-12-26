import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TheftProtectionDataService,
  LowerThanExpectedSummary, LowerThanExpectedConsumer,
  DayNightSummary, DayNightConsumer,
  NetMeterExportSummary, NetMeterExport,
  TamperAnalyticsSummary, TamperEvent, SuspectedTamperConsumer, AreaWiseTamperHeatmap } from '../../services/theft-protection-data.service';
import { TopicSectionComponent } from '../../components/topic-section/topic-section.component';
import { ThemeService } from '../../services/theme.service';
import { BasePageLayoutComponent } from '../../components/base-page-layout/base-page-layout.component';
import { SummaryTilesComponent } from '../../components/summary-tiles/summary-tiles.component';
import { DataTableComponent, Column } from '../../components/data-table/data-table.component';
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { InsightsCardComponent } from '../../components/insights-card/insights-card.component';
import { ChartPlaceholderComponent } from '../../components/chart-placeholder/chart-placeholder.component';

@Component({
  selector: 'app-theft-protection',
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
    ChartPlaceholderComponent
  ],
  templateUrl: './theft-protection.component.html',
  styleUrl: './theft-protection.component.css'
})
export class TheftProtectionComponent implements OnInit, AfterViewInit {
  @ViewChildren(TopicSectionComponent) topicSections!: QueryList<TopicSectionComponent>;

  // Topic 1: Consumers with Consumption Lower Than Expected Pattern
  lowerThanExpectedSummary: LowerThanExpectedSummary[] = [];
  lowerThanExpectedConsumers: LowerThanExpectedConsumer[] = [];

  // Topic 2: Day Use with Zero Night Consumption
  dayNightSummary: DayNightSummary[] = [];
  dayNightConsumers: DayNightConsumer[] = [];

  // Topic 3: Net Meters with Export During Odd Hours
  netMeterExportSummary: NetMeterExportSummary[] = [];
  netMeterExports: NetMeterExport[] = [];

  // Topic 4: Suspected Consumers Report – Tamper Analytics & Profiling
  tamperAnalyticsSummary: TamperAnalyticsSummary[] = [];
  tamperEvents: TamperEvent[] = [];
  suspectedTamperConsumers: SuspectedTamperConsumer[] = [];
  areaWiseTamperHeatmap: AreaWiseTamperHeatmap[] = [];

  // Column definitions
  lowerThanExpectedColumns: Column<LowerThanExpectedConsumer>[] = [];
  dayNightConsumerColumns: Column<DayNightConsumer>[] = [];
  netMeterExportColumns: Column<NetMeterExport>[] = [];
  tamperEventColumns: Column<TamperEvent & { id: string }>[] = [];
  suspectedTamperConsumerColumns: Column<SuspectedTamperConsumer>[] = [];
  areaWiseTamperHeatmapColumns: Column<AreaWiseTamperHeatmap>[] = [];

  constructor(
    private dataService: TheftProtectionDataService,
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
    this.lowerThanExpectedSummary = this.dataService.getLowerThanExpectedSummary();
    this.lowerThanExpectedConsumers = this.dataService.getLowerThanExpectedConsumers();

    // Load Topic 2 data
    this.dayNightSummary = this.dataService.getDayNightSummary();
    this.dayNightConsumers = this.dataService.getDayNightConsumers();

    // Load Topic 3 data
    this.netMeterExportSummary = this.dataService.getNetMeterExportSummary();
    this.netMeterExports = this.dataService.getNetMeterExports();

    // Load Topic 4 data
    this.tamperAnalyticsSummary = this.dataService.getTamperAnalyticsSummary();
    this.tamperEvents = this.dataService.getTamperEvents();
    this.suspectedTamperConsumers = this.dataService.getSuspectedTamperConsumers();
    this.areaWiseTamperHeatmap = this.dataService.getAreaWiseTamperHeatmap();

    // Define columns
    this.setupColumns();
  }

  setupColumns() {
    this.lowerThanExpectedColumns = [
      { header: 'Sr. No.', accessor: 'srNo' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Consumer Name', accessor: 'consumerName' },
      { header: 'Meter No.', accessor: 'meterNo' },
      { header: 'Avg. Monthly Consumption Last Year (kWh)', accessor: 'avgMonthlyConsumptionLastYear', className: 'text-right' },
      { header: 'Current Month Consumption (kWh)', accessor: 'currentMonthConsumption', className: 'text-right' },
      { header: '% Deviation', accessor: (row) => `${row.percentDeviation}%`, className: 'text-right text-red-500' },
      { header: 'Expected Range (±15%)', accessor: 'expectedRange' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.dayNightConsumerColumns = [
      { header: 'S. No.', accessor: 'sNo' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Consumer Name', accessor: 'consumerName' },
      { header: 'Meter No.', accessor: 'meterNo' },
      { header: 'Connected Load (kW)', accessor: 'connectedLoad', className: 'text-right' },
      { header: 'Day Consumption (6 AM – 6 PM) (kWh)', accessor: 'dayConsumption', className: 'text-right' },
      { header: 'Night Consumption (6 PM – 6 AM) (kWh)', accessor: 'nightConsumption', className: 'text-right' },
      { header: 'Total Daily Consumption (kWh)', accessor: 'totalConsumption', className: 'text-right' },
      { header: '% Night Use', accessor: (row) => `${row.percentNightUse.toFixed(2)}%`, className: 'text-right' },
      { header: 'Meter Status', accessor: (row) => ({ status: row.meterStatus, variant: this.getStatusVariant(row.meterStatus) }), className: '' },
      { header: 'Suspicion Flag', accessor: (row) => ({ status: row.suspicionFlag, variant: this.getSuspicionFlagVariant(row.suspicionFlag) }), className: '' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.netMeterExportColumns = [
      { header: 'Sr. No.', accessor: 'srNo' },
      { header: 'Consumer Number', accessor: 'consumerNumber', className: 'font-mono text-[#3c83f6]' },
      { header: 'Consumer Name', accessor: 'consumerName' },
      { header: 'Meter No.', accessor: 'meterNo' },
      { header: 'Sanctioned Load (kW)', accessor: 'sanctionedLoad', className: 'text-right' },
      { header: 'Export kWh (Odd Hours)', accessor: 'exportKwhOddHours', className: 'text-right' },
      { header: 'Time Slot of Export', accessor: 'timeSlotOfExport' },
      { header: 'Date(s) of Occurrence', accessor: 'datesOfOccurrence' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.tamperEventColumns = [
      { header: 'Tamper Event', accessor: 'tamperEvent' },
      { header: 'Weightage', accessor: 'weightage', className: 'text-right' },
      { header: 'Description', accessor: 'description' },
    ];

    this.suspectedTamperConsumerColumns = [
      { header: 'S. No.', accessor: 'sNo' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Consumer Name', accessor: 'consumerName' },
      { header: 'Location / Feeder', accessor: 'locationFeeder' },
      { header: 'Tamper Events (Last 30 Days)', accessor: 'tamperEventsLast30Days' },
      { header: 'Event Score', accessor: 'eventScore', className: 'text-right font-bold' },
      { header: 'Risk Category', accessor: (row) => ({ status: row.riskCategory, variant: this.getRiskCategoryVariant(row.riskCategory) }), className: '' },
      { header: 'Theft History', accessor: (row) => ({ status: row.theftHistory, variant: this.getTheftHistoryVariant(row.theftHistory) }), className: '' },
      { header: 'No. of Past Theft Cases', accessor: 'noOfPastTheftCases', className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.areaWiseTamperHeatmapColumns = [
      { header: 'Feeder / Area', accessor: 'feederArea' },
      { header: 'High-Risk Consumers', accessor: 'highRiskConsumers', className: 'text-right text-red-500 font-bold' },
      { header: 'Medium-Risk', accessor: 'mediumRisk', className: 'text-right text-amber-500' },
      { header: 'Theft History Count', accessor: 'theftHistoryCount', className: 'text-right' },
      { header: 'Recent Site Visits', accessor: 'recentSiteVisits', className: 'text-right' },
      { header: 'Action Taken', accessor: 'actionTaken' },
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

  getSuspicionFlagVariant(flag: string): 'success' | 'warning' | 'danger' | 'default' | 'info' {
    const lowerFlag = flag.toLowerCase();
    if (lowerFlag === 'yes') return 'danger';
    if (lowerFlag === 'borderline') return 'warning';
    return 'info';
  }

  getRiskCategoryVariant(category: string): 'success' | 'warning' | 'danger' | 'default' | 'info' {
    if (category === 'High Risk') return 'danger';
    if (category === 'Medium Risk') return 'warning';
    return 'info';
  }

  getTheftHistoryVariant(history: string): 'success' | 'warning' | 'danger' | 'default' | 'info' {
    return history === 'Yes' ? 'danger' : 'info';
  }

  getTamperEventsWithIds() {
    return this.tamperEvents.map((e, i) => ({ ...e, id: String(i) }));
  }
}
