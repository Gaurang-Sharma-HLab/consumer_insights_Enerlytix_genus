import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PreventiveMaintenanceDataService,
  DTLoadingSummary, DTLoadingDetail, PreventiveMaintenanceSummary, OverloadedDT, LoadRisingTrend } from '../../services/preventive-maintenance-data.service';
import { TopicSectionComponent } from '../../components/topic-section/topic-section.component';
import { ThemeService } from '../../services/theme.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SummaryTilesComponent } from '../../components/summary-tiles/summary-tiles.component';
import { DataTableComponent, Column } from '../../components/data-table/data-table.component';
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { InsightsCardComponent } from '../../components/insights-card/insights-card.component';
import { ChartPlaceholderComponent } from '../../components/chart-placeholder/chart-placeholder.component';

@Component({
  selector: 'app-preventive-maintenance',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TopicSectionComponent,
    SidebarComponent,
    SummaryTilesComponent,
    DataTableComponent,
    StatusBadgeComponent,
    InsightsCardComponent,
    ChartPlaceholderComponent
  ],
  templateUrl: './preventive-maintenance.component.html',
  styleUrl: './preventive-maintenance.component.css'
})
export class PreventiveMaintenanceComponent implements OnInit, AfterViewInit {
  @ViewChildren(TopicSectionComponent) topicSections!: QueryList<TopicSectionComponent>;

  // Topic 1: Distribution Transformer (DT) Loading Report
  dtLoadingSummary: DTLoadingSummary[] = [];
  dtLoadingDetails: DTLoadingDetail[] = [];

  // Topic 2: Load Management & Preventive Maintenance Analysis Report
  preventiveMaintenanceSummary: PreventiveMaintenanceSummary[] = [];
  overloadedDTs: OverloadedDT[] = [];
  loadRisingTrends: LoadRisingTrend[] = [];

  // Column definitions
  dtLoadingSummaryColumns: Column<DTLoadingSummary & { id: string }>[] = [];
  dtLoadingDetailColumns: Column<DTLoadingDetail>[] = [];
  overloadedDTColumns: Column<OverloadedDT>[] = [];
  loadRisingTrendColumns: Column<LoadRisingTrend>[] = [];

  constructor(
    private dataService: PreventiveMaintenanceDataService,
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
    this.dtLoadingSummary = this.dataService.getDTLoadingSummary();
    this.dtLoadingDetails = this.dataService.getDTLoadingDetails();

    // Topic 2
    this.preventiveMaintenanceSummary = this.dataService.getPreventiveMaintenanceSummary();
    this.overloadedDTs = this.dataService.getOverloadedDTs();
    this.loadRisingTrends = this.dataService.getLoadRisingTrends();
  }

  setupColumns() {
    this.dtLoadingSummaryColumns = [
      { header: 'Category', accessor: 'category' },
      { header: 'No. of DTs', accessor: 'noOfDTs', className: 'text-right' },
      { header: '% of Total DTs', accessor: 'percentOfTotalDTs', className: 'text-right' },
      { header: 'Total Connected Load (kW)', accessor: 'totalConnectedLoad', className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.dtLoadingDetailColumns = [
      { header: 'S. No.', accessor: 'sNo', className: 'text-right' },
      { header: 'DT Code / Name', accessor: 'dtCode', className: 'font-mono text-[#3c83f6]' },
      { header: 'Location', accessor: 'location' },
      { header: 'Capacity (kVA)', accessor: 'capacity', className: 'text-right' },
      { header: 'Max Load (kW)', accessor: 'maxLoad', className: 'text-right' },
      { header: 'Loading %', accessor: (row) => `${row.loadingPercent}%`, className: 'text-right' },
      { header: 'Category', accessor: (row) => ({ status: row.category, variant: this.getCategoryVariant(row.category) }) },
      { header: 'No. of Connected Consumers', accessor: 'noOfConnectedConsumers', className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.overloadedDTColumns = [
      { header: 'Rank', accessor: 'rank', className: 'text-right' },
      { header: 'DT Code / Name', accessor: 'dtCode', className: 'font-mono text-[#3c83f6]' },
      { header: 'Location', accessor: 'location' },
      { header: 'Capacity (kVA)', accessor: 'capacity', className: 'text-right' },
      { header: 'Peak Load (kW)', accessor: 'peakLoad', className: 'text-right' },
      { header: 'Load %', accessor: (row) => `${row.loadPercent}%`, className: 'text-right' },
      { header: 'Overload Days (Last 30)', accessor: 'overloadDays', className: 'text-right' },
      { header: 'Growth Trend', accessor: 'growthTrend', className: 'text-center' },
      { header: 'Risk Level', accessor: (row) => ({ status: row.riskLevel, variant: this.getRiskVariant(row.riskLevel) }) },
      { header: 'Maintenance Action', accessor: 'maintenanceAction' },
    ];

    this.loadRisingTrendColumns = [
      { header: 'DT Code', accessor: 'dtCode', className: 'font-mono text-[#3c83f6]' },
      { header: 'Capacity (kVA)', accessor: 'capacity', className: 'text-right' },
      { header: 'Feb', accessor: 'feb', className: 'text-right' },
      { header: 'Mar', accessor: 'mar', className: 'text-right' },
      { header: 'Apr', accessor: 'apr', className: 'text-right' },
      { header: 'May', accessor: 'may', className: 'text-right' },
      { header: 'Jun', accessor: 'jun', className: 'text-right' },
      { header: 'Jul', accessor: 'jul', className: 'text-right' },
      { header: 'Trend', accessor: 'trend', className: 'text-center' },
      { header: 'MoM Avg Growth', accessor: 'momAvgGrowth', className: 'text-right' },
    ];
  }

  getCategoryVariant(category: string): 'success' | 'warning' | 'danger' | 'default' | 'info' {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes('overloaded')) return 'danger';
    if (lowerCategory.includes('optimal')) return 'success';
    if (lowerCategory.includes('near optimal')) return 'warning';
    return 'default';
  }

  getRiskVariant(riskLevel: string): 'success' | 'warning' | 'danger' | 'default' | 'info' {
    if (riskLevel === 'High') return 'danger';
    if (riskLevel === 'Medium') return 'warning';
    return 'default';
  }

  getDTLoadingSummaryWithIds() {
    return this.dtLoadingSummary.map((s, i) => ({ ...s, id: String(i) }));
  }
}
