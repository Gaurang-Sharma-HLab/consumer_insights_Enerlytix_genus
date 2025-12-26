import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConsumerGrievanceDataService,
  ComplaintComparisonSummary, ComplaintCategory, MonthlyComplaintTrend, RootCauseAnalysis,
  ResolutionTimeSummary, ResolutionTimeByType, ResolutionTimeDistribution } from '../../services/consumer-grievance-data.service';
import { TopicSectionComponent } from '../../components/topic-section/topic-section.component';
import { ThemeService } from '../../services/theme.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SummaryTilesComponent } from '../../components/summary-tiles/summary-tiles.component';
import { DataTableComponent, Column } from '../../components/data-table/data-table.component';
import { InsightsCardComponent } from '../../components/insights-card/insights-card.component';
import { ChartPlaceholderComponent } from '../../components/chart-placeholder/chart-placeholder.component';

@Component({
  selector: 'app-consumer-grievance',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TopicSectionComponent,
    SidebarComponent,
    SummaryTilesComponent,
    DataTableComponent,
    InsightsCardComponent,
    ChartPlaceholderComponent
  ],
  templateUrl: './consumer-grievance.component.html',
  styleUrl: './consumer-grievance.component.css'
})
export class ConsumerGrievanceComponent implements OnInit, AfterViewInit {
  @ViewChildren(TopicSectionComponent) topicSections!: QueryList<TopicSectionComponent>;

  // Topic 1: Consumer Complaints Analysis Report
  complaintComparisonSummary: ComplaintComparisonSummary[] = [];
  complaintCategories: ComplaintCategory[] = [];
  monthlyComplaintTrends: MonthlyComplaintTrend[] = [];
  rootCauseAnalysis: RootCauseAnalysis[] = [];

  // Topic 2: Complaint Resolution Time Analysis Report
  resolutionTimeSummary: ResolutionTimeSummary[] = [];
  resolutionTimeByType: ResolutionTimeByType[] = [];
  resolutionTimeDistribution: ResolutionTimeDistribution[] = [];

  // Column definitions
  complaintComparisonColumns: Column<ComplaintComparisonSummary & { id: string }>[] = [];
  complaintCategoryColumns: Column<ComplaintCategory & { id: string }>[] = [];
  monthlyComplaintTrendColumns: Column<MonthlyComplaintTrend & { id: string }>[] = [];
  rootCauseAnalysisColumns: Column<RootCauseAnalysis & { id: string }>[] = [];
  resolutionTimeByTypeColumns: Column<ResolutionTimeByType>[] = [];
  resolutionTimeDistributionColumns: Column<ResolutionTimeDistribution & { id: string }>[] = [];

  constructor(
    private dataService: ConsumerGrievanceDataService,
    private themeService: ThemeService
  ) {}

  ngAfterViewInit() {}

  onTopicSectionOpened(openedSection: TopicSectionComponent) {
    if (this.topicSections) {
      this.topicSections.forEach(section => {
        if (section !== openedSection) {
          section.close();
        }
      });
    }
  }

  ngOnInit() {
    this.loadAllData();
    this.setupColumns();
  }

  loadAllData() {
    // Topic 1
    this.complaintComparisonSummary = this.dataService.getComplaintComparisonSummary();
    this.complaintCategories = this.dataService.getComplaintCategories();
    this.monthlyComplaintTrends = this.dataService.getMonthlyComplaintTrends();
    this.rootCauseAnalysis = this.dataService.getRootCauseAnalysis();

    // Topic 2
    this.resolutionTimeSummary = this.dataService.getResolutionTimeSummary();
    this.resolutionTimeByType = this.dataService.getResolutionTimeByType();
    this.resolutionTimeDistribution = this.dataService.getResolutionTimeDistribution();
  }

  setupColumns() {
    this.complaintComparisonColumns = [
      { header: 'Metric', accessor: 'label' },
      { header: 'Before Smart Metering', accessor: 'beforeSmartMetering', className: 'text-right' },
      { header: 'After Smart Metering', accessor: 'afterSmartMetering', className: 'text-right' },
      { header: '% Change', accessor: 'percentChange', className: 'text-right' },
    ];

    this.complaintCategoryColumns = [
      { header: 'Complaint Type', accessor: 'complaintType' },
      { header: 'Before Count', accessor: 'beforeCount', className: 'text-right' },
      { header: 'After Count', accessor: 'afterCount', className: 'text-right' },
      { header: '% Change', accessor: 'percentChange', className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.monthlyComplaintTrendColumns = [
      { header: 'Month', accessor: 'month' },
      { header: 'Complaints (Before)', accessor: 'complaintsBefore', className: 'text-right' },
      { header: 'Complaints (After)', accessor: 'complaintsAfter', className: 'text-right' },
    ];

    this.rootCauseAnalysisColumns = [
      { header: 'Root Cause', accessor: 'rootCause' },
      { header: '% of Cases', accessor: 'percentOfCases', className: 'text-right' },
      { header: 'Resolution Measures Taken', accessor: 'resolutionMeasuresTaken' },
    ];

    this.resolutionTimeByTypeColumns = [
      { header: 'Complaint Type', accessor: 'complaintType' },
      { header: 'No. of Complaints', accessor: 'noOfComplaints', className: 'text-right' },
      { header: 'Avg. Resolution Time (hh:mm)', accessor: 'avgResolutionTime', className: 'text-right' },
      { header: 'Max Time (hh:mm)', accessor: 'maxTime', className: 'text-right' },
      { header: '% Resolved Within SLA', accessor: (row) => `${row.percentResolvedWithinSLA}%`, className: 'text-right' },
      { header: 'SLA Limit', accessor: 'slaLimit' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.resolutionTimeDistributionColumns = [
      { header: 'Time Bucket', accessor: 'timeBucket' },
      { header: 'No. of Complaints', accessor: 'noOfComplaints', className: 'text-right' },
      { header: '% of Total', accessor: 'percentOfTotal', className: 'text-right' },
    ];
  }

  getComplaintComparisonSummaryWithIds() {
    return this.complaintComparisonSummary.map((s, i) => ({ ...s, id: String(i) }));
  }

  getComplaintCategoriesWithIds() {
    return this.complaintCategories.map((c, i) => ({ ...c, id: String(i) }));
  }

  getMonthlyComplaintTrendsWithIds() {
    return this.monthlyComplaintTrends.map((t, i) => ({ ...t, id: String(i) }));
  }

  getRootCauseAnalysisWithIds() {
    return this.rootCauseAnalysis.map((r, i) => ({ ...r, id: String(i) }));
  }

  getResolutionTimeDistributionWithIds() {
    return this.resolutionTimeDistribution.map((d, i) => ({ ...d, id: String(i) }));
  }

  getResolutionTimeByTypeWithIds() {
    return this.resolutionTimeByType.map((r, i) => ({ ...r, id: String(i) }));
  }
}
