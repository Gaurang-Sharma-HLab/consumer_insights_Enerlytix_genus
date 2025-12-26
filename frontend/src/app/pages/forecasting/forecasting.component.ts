import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForecastingDataService,
  LoadForecastSummary, LoadForecastByCategory, ConsumerBehaviorCategory,
  ToDSummary, ToDInterval, ToDHistorical, ToDForecast, ToDSegment } from '../../services/forecasting-data.service';
import { TopicSectionComponent } from '../../components/topic-section/topic-section.component';
import { ThemeService } from '../../services/theme.service';
import { BasePageLayoutComponent } from '../../components/base-page-layout/base-page-layout.component';
import { SummaryTilesComponent } from '../../components/summary-tiles/summary-tiles.component';
import { DataTableComponent, Column } from '../../components/data-table/data-table.component';
import { InsightsCardComponent } from '../../components/insights-card/insights-card.component';
import { ChartPlaceholderComponent } from '../../components/chart-placeholder/chart-placeholder.component';

@Component({
  selector: 'app-forecasting',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TopicSectionComponent,
    BasePageLayoutComponent,
    SummaryTilesComponent,
    DataTableComponent,
    InsightsCardComponent,
    ChartPlaceholderComponent
  ],
  templateUrl: './forecasting.component.html',
  styleUrl: './forecasting.component.css'
})
export class ForecastingComponent implements OnInit, AfterViewInit {
  @ViewChildren(TopicSectionComponent) topicSections!: QueryList<TopicSectionComponent>;

  // Topic 1: Load Forecasting Report
  loadForecastSummary: LoadForecastSummary[] = [];
  loadForecastByCategory: LoadForecastByCategory[] = [];
  consumerBehaviorCategories: ConsumerBehaviorCategory[] = [];

  // Topic 2: ToD-wise Consumption Analysis
  todSummary: ToDSummary[] = [];
  todIntervals: ToDInterval[] = [];
  todHistorical: ToDHistorical[] = [];
  todForecast: ToDForecast[] = [];
  todSegments: ToDSegment[] = [];

  // Column definitions
  loadForecastByCategoryColumns: Column<LoadForecastByCategory>[] = [];
  consumerBehaviorCategoryColumns: Column<ConsumerBehaviorCategory>[] = [];
  todIntervalColumns: Column<ToDInterval & { id: string }>[] = [];
  todHistoricalColumns: Column<ToDHistorical>[] = [];
  todForecastColumns: Column<ToDForecast>[] = [];
  todSegmentColumns: Column<ToDSegment & { id: string }>[] = [];

  constructor(
    private dataService: ForecastingDataService,
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
    this.loadForecastSummary = this.dataService.getLoadForecastSummary();
    this.loadForecastByCategory = this.dataService.getLoadForecastByCategory();
    this.consumerBehaviorCategories = this.dataService.getConsumerBehaviorCategories();

    // Topic 2
    this.todSummary = this.dataService.getToDSummary();
    this.todIntervals = this.dataService.getToDIntervals();
    this.todHistorical = this.dataService.getToDHistorical();
    this.todForecast = this.dataService.getToDForecast();
    this.todSegments = this.dataService.getToDSegments();
  }

  setupColumns() {
    this.loadForecastByCategoryColumns = [
      { header: 'Category', accessor: 'category' },
      { header: 'No. of Consumers', accessor: (row) => row.noOfConsumers.toLocaleString(), className: 'text-right' },
      { header: 'Avg. Daily Load (kWh)', accessor: 'avgDailyLoad', className: 'text-right' },
      { header: 'Forecasted Peak (kWh)', accessor: 'forecastedPeak', className: 'text-right' },
      { header: 'YoY Change', accessor: 'yoyChange', className: 'text-right' },
      { header: 'Notes', accessor: 'notes' },
    ];

    this.consumerBehaviorCategoryColumns = [
      { header: 'Consumer ID', accessor: 'consumerID', className: 'font-mono text-[#3c83f6]' },
      { header: 'Type', accessor: 'type' },
      { header: 'Avg. Usage (kWh/day)', accessor: 'avgUsage', className: 'text-right' },
      { header: 'Peak Usage Time', accessor: 'peakUsageTime' },
      { header: 'Category', accessor: 'category' },
      { header: 'Notes', accessor: 'notes' },
    ];

    this.todIntervalColumns = [
      { header: 'ToD Block ID', accessor: 'todBlockID' },
      { header: 'Time Interval', accessor: 'timeInterval' },
      { header: 'Category', accessor: 'category' },
    ];

    this.todHistoricalColumns = [
      { header: 'ToD Block', accessor: 'todBlock' },
      { header: 'Avg. Consumption (kWh)', accessor: 'avgConsumption', className: 'text-right' },
      { header: 'Max Load (MW)', accessor: 'maxLoad', className: 'text-right' },
      { header: 'No. of Consumers Active', accessor: (row) => row.noOfConsumersActive.toLocaleString(), className: 'text-right' },
      { header: 'Load % Share', accessor: 'loadPercentShare', className: 'text-right' },
      { header: 'Peak Load Date', accessor: 'peakLoadDate' },
    ];

    this.todForecastColumns = [
      { header: 'ToD Block', accessor: 'todBlock' },
      { header: 'Forecasted Load (MW)', accessor: 'forecastedLoad', className: 'text-right' },
      { header: 'Expected Growth (%)', accessor: (row) => `${row.expectedGrowthPercent > 0 ? '+' : ''}${row.expectedGrowthPercent}%`, className: 'text-right' },
      { header: 'Contributing Segments', accessor: 'contributingSegments' },
      { header: 'Risk Factors', accessor: 'riskFactors' },
    ];

    this.todSegmentColumns = [
      { header: 'Consumer Type', accessor: 'consumerType' },
      { header: 'Peak Time Block', accessor: 'peakTimeBlock' },
      { header: 'Share of Total Load', accessor: 'shareOfTotalLoad', className: 'text-right' },
      { header: 'Notes', accessor: 'notes' },
    ];
  }

  getTodIntervalsWithIds() {
    return this.todIntervals.map((i, idx) => ({ ...i, id: String(idx) }));
  }

  getTodSegmentsWithIds() {
    return this.todSegments.map((s, idx) => ({ ...s, id: String(idx) }));
  }

  getLoadForecastByCategoryWithIds() {
    return this.loadForecastByCategory.map((c, i) => ({ ...c, id: String(i) }));
  }

  getConsumerBehaviorCategoriesWithIds() {
    return this.consumerBehaviorCategories.map((c, i) => ({ ...c, id: String(i) }));
  }
}
