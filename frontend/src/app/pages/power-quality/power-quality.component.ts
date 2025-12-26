import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PowerQualityDataService,
  OutageSummary, OutageInterval, OutageHistorical, OutageForecast, OutageSegment,
  VoltageDeviationSummary, VoltageInterval, VoltageHistorical, VoltageForecast, VoltageSegment,
  FrequencyDeviationSummary, FrequencyBlock, FrequencyHistorical, FrequencyForecast, FrequencyEquipmentType,
  SystemPowerFactorSummary, SystemPowerFactorHistorical, SystemPowerFactorForecast, SystemPowerFactorSegment } from '../../services/power-quality-data.service';
import { TopicSectionComponent } from '../../components/topic-section/topic-section.component';
import { ThemeService } from '../../services/theme.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SummaryTilesComponent } from '../../components/summary-tiles/summary-tiles.component';
import { DataTableComponent, Column } from '../../components/data-table/data-table.component';
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { InsightsCardComponent } from '../../components/insights-card/insights-card.component';

@Component({
  selector: 'app-power-quality',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TopicSectionComponent,
    SidebarComponent,
    SummaryTilesComponent,
    DataTableComponent,
    StatusBadgeComponent,
    InsightsCardComponent
  ],
  templateUrl: './power-quality.component.html',
  styleUrl: './power-quality.component.css'
})
export class PowerQualityComponent implements OnInit, AfterViewInit {
  @ViewChildren(TopicSectionComponent) topicSections!: QueryList<TopicSectionComponent>;

  // Topic 1: Outage Monitoring & Analysis
  outageSummary: OutageSummary[] = [];
  outageIntervals: OutageInterval[] = [];
  outageHistorical: OutageHistorical[] = [];
  outageForecast: OutageForecast[] = [];
  outageSegments: OutageSegment[] = [];

  // Topic 2: Voltage Deviation Index
  voltageDeviationSummary: VoltageDeviationSummary[] = [];
  voltageIntervals: VoltageInterval[] = [];
  voltageHistorical: VoltageHistorical[] = [];
  voltageForecast: VoltageForecast[] = [];
  voltageSegments: VoltageSegment[] = [];

  // Topic 3: Frequency Deviation Index
  frequencyDeviationSummary: FrequencyDeviationSummary[] = [];
  frequencyBlocks: FrequencyBlock[] = [];
  frequencyHistorical: FrequencyHistorical[] = [];
  frequencyForecast: FrequencyForecast[] = [];
  frequencyEquipmentTypes: FrequencyEquipmentType[] = [];

  // Topic 4: Low Power Factor Analysis
  systemPowerFactorSummary: SystemPowerFactorSummary[] = [];
  systemPowerFactorHistorical: SystemPowerFactorHistorical[] = [];
  systemPowerFactorForecast: SystemPowerFactorForecast[] = [];
  systemPowerFactorSegments: SystemPowerFactorSegment[] = [];

  // Column definitions
  outageIntervalColumns: Column<OutageInterval & { id: string }>[] = [];
  outageHistoricalColumns: Column<OutageHistorical>[] = [];
  outageForecastColumns: Column<OutageForecast>[] = [];
  outageSegmentColumns: Column<OutageSegment & { id: string }>[] = [];
  voltageIntervalColumns: Column<VoltageInterval & { id: string }>[] = [];
  voltageHistoricalColumns: Column<VoltageHistorical>[] = [];
  voltageForecastColumns: Column<VoltageForecast>[] = [];
  voltageSegmentColumns: Column<VoltageSegment & { id: string }>[] = [];
  frequencyBlockColumns: Column<FrequencyBlock & { id: string }>[] = [];
  frequencyHistoricalColumns: Column<FrequencyHistorical>[] = [];
  frequencyForecastColumns: Column<FrequencyForecast>[] = [];
  frequencyEquipmentTypeColumns: Column<FrequencyEquipmentType & { id: string }>[] = [];
  systemPowerFactorHistoricalColumns: Column<SystemPowerFactorHistorical>[] = [];
  systemPowerFactorForecastColumns: Column<SystemPowerFactorForecast>[] = [];
  systemPowerFactorSegmentColumns: Column<SystemPowerFactorSegment & { id: string }>[] = [];

  constructor(
    private dataService: PowerQualityDataService,
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
    this.outageSummary = this.dataService.getOutageSummary();
    this.outageIntervals = this.dataService.getOutageIntervals();
    this.outageHistorical = this.dataService.getOutageHistorical();
    this.outageForecast = this.dataService.getOutageForecast();
    this.outageSegments = this.dataService.getOutageSegments();

    // Topic 2
    this.voltageDeviationSummary = this.dataService.getVoltageDeviationSummary();
    this.voltageIntervals = this.dataService.getVoltageIntervals();
    this.voltageHistorical = this.dataService.getVoltageHistorical();
    this.voltageForecast = this.dataService.getVoltageForecast();
    this.voltageSegments = this.dataService.getVoltageSegments();

    // Topic 3
    this.frequencyDeviationSummary = this.dataService.getFrequencyDeviationSummary();
    this.frequencyBlocks = this.dataService.getFrequencyBlocks();
    this.frequencyHistorical = this.dataService.getFrequencyHistorical();
    this.frequencyForecast = this.dataService.getFrequencyForecast();
    this.frequencyEquipmentTypes = this.dataService.getFrequencyEquipmentTypes();

    // Topic 4
    this.systemPowerFactorSummary = this.dataService.getSystemPowerFactorSummary();
    this.systemPowerFactorHistorical = this.dataService.getSystemPowerFactorHistorical();
    this.systemPowerFactorForecast = this.dataService.getSystemPowerFactorForecast();
    this.systemPowerFactorSegments = this.dataService.getSystemPowerFactorSegments();
  }

  setupColumns() {
    this.outageIntervalColumns = [
      { header: 'Interval ID', accessor: 'intervalID' },
      { header: 'Time Interval', accessor: 'timeInterval' },
      { header: 'Category', accessor: 'category' },
    ];

    this.outageHistoricalColumns = [
      { header: 'Interval', accessor: 'interval' },
      { header: 'Avg. Outages', accessor: 'avgOutages', className: 'text-right' },
      { header: 'Max Outages (per feeder)', accessor: 'maxOutages', className: 'text-right' },
      { header: 'Consumers Affected', accessor: (row) => row.consumersAffected.toLocaleString(), className: 'text-right' },
      { header: 'Share of Total Outages', accessor: 'shareOfTotalOutages', className: 'text-right' },
      { header: 'Peak Outage Date', accessor: 'peakOutageDate' },
    ];

    this.outageForecastColumns = [
      { header: 'Interval', accessor: 'interval' },
      { header: 'Forecasted Avg. Outages', accessor: 'forecastedAvgOutages', className: 'text-right' },
      { header: 'Expected Change (%)', accessor: (row) => `${row.expectedChangePercent > 0 ? '+' : ''}${row.expectedChangePercent}%`, className: 'text-right' },
      { header: 'Contributing Factors', accessor: 'contributingFactors' },
      { header: 'Risk Indicators', accessor: 'riskIndicators' },
    ];

    this.outageSegmentColumns = [
      { header: 'Consumer Type', accessor: 'consumerType' },
      { header: 'Most Affected Interval', accessor: 'mostAffectedInterval' },
      { header: 'Share of Total Outages', accessor: 'shareOfTotalOutages', className: 'text-right' },
      { header: 'Notes', accessor: 'notes' },
    ];

    this.voltageIntervalColumns = [
      { header: 'Interval ID', accessor: 'intervalID' },
      { header: 'Time Interval', accessor: 'timeInterval' },
      { header: 'Category', accessor: 'category' },
    ];

    this.voltageHistoricalColumns = [
      { header: 'Interval', accessor: 'interval' },
      { header: 'Avg. Voltage Deviation (%)', accessor: (row) => `${row.avgVoltageDeviation}%`, className: 'text-right' },
      { header: 'Max Deviation (%)', accessor: (row) => `${row.maxDeviation}%`, className: 'text-right' },
      { header: 'Feeders Monitored', accessor: 'feedersMonitored', className: 'text-right' },
      { header: 'Share of Total Deviations', accessor: 'shareOfTotalDeviations', className: 'text-right' },
      { header: 'Peak Deviation Date', accessor: 'peakDeviationDate' },
    ];

    this.voltageForecastColumns = [
      { header: 'Interval', accessor: 'interval' },
      { header: 'Forecasted Max Deviation (%)', accessor: (row) => `${row.forecastedMaxDeviation}%`, className: 'text-right' },
      { header: 'Expected Change (%)', accessor: (row) => `${row.expectedChangePercent > 0 ? '+' : ''}${row.expectedChangePercent}%`, className: 'text-right' },
      { header: 'Contributing Factors', accessor: 'contributingFactors' },
      { header: 'Risk Factors', accessor: 'riskFactors' },
    ];

    this.voltageSegmentColumns = [
      { header: 'Consumer Type', accessor: 'consumerType' },
      { header: 'Worst Interval', accessor: 'worstInterval' },
      { header: 'Share of Total Deviations', accessor: 'shareOfTotalDeviations', className: 'text-right' },
      { header: 'Notes', accessor: 'notes' },
    ];

    this.frequencyBlockColumns = [
      { header: 'Block ID', accessor: 'blockID' },
      { header: 'Frequency Range (Hz)', accessor: 'frequencyRange' },
      { header: 'Category', accessor: 'category' },
    ];

    this.frequencyHistoricalColumns = [
      { header: 'Block ID', accessor: 'blockID' },
      { header: 'Avg. Occurrence Time (mins/day)', accessor: 'avgOccurrenceTime', className: 'text-right' },
      { header: 'Max Continuous Duration (mins)', accessor: 'maxContinuousDuration', className: 'text-right' },
      { header: 'No. of Equipment Affected', accessor: 'noOfEquipmentAffected', className: 'text-right' },
      { header: 'Share of Total Deviations (%)', accessor: 'shareOfTotalDeviations', className: 'text-right' },
      { header: 'Worst Date', accessor: 'worstDate' },
    ];

    this.frequencyForecastColumns = [
      { header: 'Equipment Type', accessor: 'equipmentType' },
      { header: 'Forecasted Avg. F-DI', accessor: 'forecastedAvgFDI', className: 'text-right' },
      { header: 'Expected Growth (%)', accessor: (row) => `${row.expectedGrowthPercent > 0 ? '+' : ''}${row.expectedGrowthPercent}%`, className: 'text-right' },
      { header: 'Contributing Factors', accessor: 'contributingFactors' },
      { header: 'Risk Factors', accessor: 'riskFactors' },
    ];

    this.frequencyEquipmentTypeColumns = [
      { header: 'Equipment Type', accessor: 'equipmentType' },
      { header: 'Share of Total Deviations', accessor: 'shareOfTotalDeviations', className: 'text-right' },
      { header: 'Notes', accessor: 'notes' },
    ];

    this.systemPowerFactorHistoricalColumns = [
      { header: 'Day', accessor: 'day' },
      { header: 'Avg. PF (Feeder)', accessor: 'avgPFFeeder', className: 'text-right' },
      { header: 'Avg. PF (DT)', accessor: 'avgPFDT', className: 'text-right' },
      { header: 'Lowest PF Recorded', accessor: 'lowestPFRecorded', className: 'text-right' },
      { header: 'No. of Affected Feeders', accessor: 'noOfAffectedFeeders', className: 'text-right' },
      { header: 'No. of Affected DTs', accessor: 'noOfAffectedDTs', className: 'text-right' },
    ];

    this.systemPowerFactorForecastColumns = [
      { header: 'Category', accessor: 'category' },
      { header: 'Forecasted Avg. PF', accessor: 'forecastedAvgPF' },
      { header: 'Expected Change', accessor: 'expectedChange' },
      { header: 'Contributing Factors', accessor: 'contributingFactors' },
      { header: 'Risk Level', accessor: (row) => ({ status: row.riskLevel, variant: this.getRiskLevelVariant(row.riskLevel) }), className: '' },
    ];

    this.systemPowerFactorSegmentColumns = [
      { header: 'Consumer Type', accessor: 'consumerType' },
      { header: 'Typical PF', accessor: (row) => row.typicalPF > 0 ? row.typicalPF.toFixed(2) : 'N/A', className: 'text-right' },
      { header: 'Impact', accessor: 'impact' },
      { header: 'Notes', accessor: 'notes' },
    ];
  }

  getRiskLevelVariant(riskLevel: string): 'success' | 'warning' | 'danger' | 'default' | 'info' {
    const lowerRisk = riskLevel.toLowerCase();
    if (lowerRisk.includes('high')) return 'danger';
    if (lowerRisk.includes('medium')) return 'warning';
    return 'info';
  }

  // Helper methods for data with IDs
  getOutageIntervalsWithIds() {
    return this.outageIntervals.map((i, idx) => ({ ...i, id: String(idx) }));
  }

  getOutageSegmentsWithIds() {
    return this.outageSegments.map((s, idx) => ({ ...s, id: String(idx) }));
  }

  getVoltageIntervalsWithIds() {
    return this.voltageIntervals.map((i, idx) => ({ ...i, id: String(idx) }));
  }

  getVoltageSegmentsWithIds() {
    return this.voltageSegments.map((s, idx) => ({ ...s, id: String(idx) }));
  }

  getFrequencyBlocksWithIds() {
    return this.frequencyBlocks.map((b, idx) => ({ ...b, id: String(idx) }));
  }

  getFrequencyEquipmentTypesWithIds() {
    return this.frequencyEquipmentTypes.map((e, idx) => ({ ...e, id: String(idx) }));
  }

  getSystemPowerFactorSegmentsWithIds() {
    return this.systemPowerFactorSegments.map((s, idx) => ({ ...s, id: String(idx) }));
  }
}
