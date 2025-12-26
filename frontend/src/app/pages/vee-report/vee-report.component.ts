import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VeeReportDataService,
  VEESummary, VEEConsumerDetail, VEECircleForecast, VEECategoryBehavior } from '../../services/vee-report-data.service';
import { TopicSectionComponent } from '../../components/topic-section/topic-section.component';
import { ThemeService } from '../../services/theme.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SummaryTilesComponent } from '../../components/summary-tiles/summary-tiles.component';
import { DataTableComponent, Column } from '../../components/data-table/data-table.component';
import { InsightsCardComponent } from '../../components/insights-card/insights-card.component';

@Component({
  selector: 'app-vee-report',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TopicSectionComponent,
    SidebarComponent,
    SummaryTilesComponent,
    DataTableComponent,
    InsightsCardComponent
  ],
  templateUrl: './vee-report.component.html',
  styleUrl: './vee-report.component.css'
})
export class VeeReportComponent implements OnInit, AfterViewInit {
  @ViewChildren(TopicSectionComponent) topicSections!: QueryList<TopicSectionComponent>;

  veeSummary: VEESummary[] = [];
  veeConsumerDetails: VEEConsumerDetail[] = [];
  veeCircleForecast: VEECircleForecast[] = [];
  veeCategoryBehavior: VEECategoryBehavior[] = [];

  // Column definitions
  veeConsumerDetailColumns: Column<VEEConsumerDetail>[] = [];
  veeCircleForecastColumns: Column<VEECircleForecast & { id: string }>[] = [];
  veeCategoryBehaviorColumns: Column<VEECategoryBehavior & { id: string }>[] = [];

  constructor(
    private dataService: VeeReportDataService,
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
    this.veeSummary = this.dataService.getVEESummary();
    this.veeConsumerDetails = this.dataService.getVEEConsumerDetails();
    this.veeCircleForecast = this.dataService.getVEECircleForecast();
    this.veeCategoryBehavior = this.dataService.getVEECategoryBehavior();
    this.setupColumns();
  }

  setupColumns() {
    this.veeConsumerDetailColumns = [
      { header: 'Circle', accessor: 'circle' },
      { header: 'Division', accessor: 'division' },
      { header: 'Sub-division', accessor: 'subdivision' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Name', accessor: 'name' },
      { header: 'Category', accessor: 'category' },
      { header: 'No. of Estimations', accessor: 'noOfEstimations', className: 'text-right' },
      { header: 'No. of Editing Events', accessor: 'noOfEditingEvents', className: 'text-right' },
      { header: 'Last Edit Date', accessor: 'lastEditDate' },
    ];

    this.veeCircleForecastColumns = [
      { header: 'Circle', accessor: 'circle' },
      { header: 'Forecasted Estimation Cases', accessor: 'forecastedEstimationCases', className: 'text-right' },
      { header: 'Expected Growth %', accessor: (row) => `+${row.expectedGrowthPercent}%`, className: 'text-right' },
      { header: 'Risk Factors', accessor: 'riskFactors' },
    ];

    this.veeCategoryBehaviorColumns = [
      { header: 'Consumer Type', accessor: 'consumerType' },
      { header: 'Share of Total Estimation', accessor: 'shareOfTotalEstimation', className: 'text-right' },
      { header: 'Notes', accessor: 'notes' },
    ];
  }

  getVEECircleForecastWithIds() {
    return this.veeCircleForecast.map((f, i) => ({ ...f, id: String(i) }));
  }

  getVEECategoryBehaviorWithIds() {
    return this.veeCategoryBehavior.map((b, i) => ({ ...b, id: String(i) }));
  }
}
