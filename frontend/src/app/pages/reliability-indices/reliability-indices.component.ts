import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReliabilityIndicesDataService,
  ReliabilityIndicesSummary, ReliabilityIndicesHistorical, FeederReliabilityPerformance } from '../../services/reliability-indices-data.service';
import { TopicSectionComponent } from '../../components/topic-section/topic-section.component';
import { ThemeService } from '../../services/theme.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SummaryTilesComponent } from '../../components/summary-tiles/summary-tiles.component';
import { DataTableComponent, Column } from '../../components/data-table/data-table.component';
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { InsightsCardComponent } from '../../components/insights-card/insights-card.component';
import { ChartPlaceholderComponent } from '../../components/chart-placeholder/chart-placeholder.component';

@Component({
  selector: 'app-reliability-indices',
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
  templateUrl: './reliability-indices.component.html',
  styleUrl: './reliability-indices.component.css'
})
export class ReliabilityIndicesComponent implements OnInit, AfterViewInit {
  @ViewChildren(TopicSectionComponent) topicSections!: QueryList<TopicSectionComponent>;

  reliabilityIndicesSummary: ReliabilityIndicesSummary[] = [];
  reliabilityIndicesHistorical: ReliabilityIndicesHistorical[] = [];
  feederReliabilityPerformance: FeederReliabilityPerformance[] = [];

  // Column definitions
  reliabilityIndicesHistoricalColumns: Column<ReliabilityIndicesHistorical & { id: string }>[] = [];
  feederReliabilityPerformanceColumns: Column<FeederReliabilityPerformance>[] = [];

  constructor(
    private dataService: ReliabilityIndicesDataService,
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
    this.reliabilityIndicesSummary = this.dataService.getReliabilityIndicesSummary();
    this.reliabilityIndicesHistorical = this.dataService.getReliabilityIndicesHistorical();
    this.feederReliabilityPerformance = this.dataService.getFeederReliabilityPerformance();
    this.setupColumns();
  }

  setupColumns() {
    this.reliabilityIndicesHistoricalColumns = [
      { header: 'Month', accessor: 'month' },
      { header: 'SAIFI', accessor: 'saifi', className: 'text-right' },
      { header: 'SAIDI (hrs)', accessor: 'saidi', className: 'text-right' },
      { header: 'Notes', accessor: 'notes' },
    ];

    this.feederReliabilityPerformanceColumns = [
      { header: 'Feeder ID', accessor: 'feederID' },
      { header: 'SAIFI', accessor: 'saifi', className: 'text-right' },
      { header: 'SAIDI (hrs)', accessor: 'saidi', className: 'text-right' },
      { header: 'Benchmark Compliance', accessor: (row) => ({ status: row.benchmarkCompliance, variant: this.getComplianceVariant(row.benchmarkCompliance) }), className: '' },
      { header: 'Key Issue', accessor: 'keyIssue' },
    ];
  }

  getComplianceVariant(compliance: string): 'success' | 'warning' | 'danger' | 'default' | 'info' {
    const lowerCompliance = compliance.toLowerCase();
    if (lowerCompliance.includes('yes')) return 'success';
    if (lowerCompliance.includes('no')) return 'danger';
    return 'default';
  }

  getReliabilityIndicesHistoricalWithIds() {
    return this.reliabilityIndicesHistorical.map((h, i) => ({ ...h, id: String(i) }));
  }

  getFeederReliabilityPerformanceWithIds() {
    return this.feederReliabilityPerformance.map((f, i) => ({ ...f, id: String(i) }));
  }
}
