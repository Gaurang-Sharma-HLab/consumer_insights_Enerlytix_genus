import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EnergyAuditDataService,
  FeederLossSummary, FeederLossDetail,
  FeederConsumerSummary, FeederConsumerDetail,
  LTEnergyLossSummary, LTEnergyLossDT,
  PerformanceParameter, BestWorstFeeder, BestWorstDT,
  HighLossAsset, OverloadedAsset, OutageAsset, PowerQualityIssueAsset, HighFailureRateDT } from '../../services/energy-audit-data.service';
import { TopicSectionComponent } from '../../components/topic-section/topic-section.component';
import { ThemeService } from '../../services/theme.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SummaryTilesComponent } from '../../components/summary-tiles/summary-tiles.component';
import { DataTableComponent, Column } from '../../components/data-table/data-table.component';
import { InsightsCardComponent } from '../../components/insights-card/insights-card.component';

@Component({
  selector: 'app-energy-audit',
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
  templateUrl: './energy-audit.component.html',
  styleUrl: './energy-audit.component.css'
})
export class EnergyAuditComponent implements OnInit, AfterViewInit {
  @ViewChildren(TopicSectionComponent) topicSections!: QueryList<TopicSectionComponent>;

  // Topic 1: Feeder Loss Report
  feederLossSummary: FeederLossSummary[] = [];
  feederLossDetails: FeederLossDetail[] = [];

  // Topic 2: Feeder to Consumer Loss Report
  feederConsumerSummary: FeederConsumerSummary[] = [];
  feederConsumerDetails: FeederConsumerDetail[] = [];

  // Topic 3: LT Energy Loss Report
  ltEnergyLossSummary: LTEnergyLossSummary[] = [];
  ltEnergyLossDTs: LTEnergyLossDT[] = [];

  // Topic 4: Performance Evaluation
  performanceParameters: PerformanceParameter[] = [];
  bestFeeders: BestWorstFeeder[] = [];
  worstFeeders: BestWorstFeeder[] = [];
  bestDTs: BestWorstDT[] = [];
  worstDTs: BestWorstDT[] = [];

  // Topic 5: High-Risk Assets
  highLossAssets: HighLossAsset[] = [];
  overloadedAssets: OverloadedAsset[] = [];
  outageAssets: OutageAsset[] = [];
  powerQualityIssueAssets: PowerQualityIssueAsset[] = [];
  highFailureRateDTs: HighFailureRateDT[] = [];

  // Column definitions
  feederLossDetailColumns: Column<FeederLossDetail>[] = [];
  feederConsumerDetailColumns: Column<FeederConsumerDetail>[] = [];
  ltEnergyLossDTColumns: Column<LTEnergyLossDT>[] = [];
  performanceParameterColumns: Column<PerformanceParameter & { id: string }>[] = [];
  bestWorstFeederColumns: Column<BestWorstFeeder>[] = [];
  bestWorstDTColumns: Column<BestWorstDT>[] = [];
  highLossAssetColumns: Column<HighLossAsset>[] = [];
  overloadedAssetColumns: Column<OverloadedAsset>[] = [];
  outageAssetColumns: Column<OutageAsset>[] = [];
  powerQualityIssueAssetColumns: Column<PowerQualityIssueAsset>[] = [];
  highFailureRateDTColumns: Column<HighFailureRateDT>[] = [];

  constructor(
    private dataService: EnergyAuditDataService,
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
    this.feederLossSummary = this.dataService.getFeederLossSummary();
    this.feederLossDetails = this.dataService.getFeederLossDetails();

    // Topic 2
    this.feederConsumerSummary = this.dataService.getFeederConsumerSummary();
    this.feederConsumerDetails = this.dataService.getFeederConsumerDetails();

    // Topic 3
    this.ltEnergyLossSummary = this.dataService.getLTEnergyLossSummary();
    this.ltEnergyLossDTs = this.dataService.getLTEnergyLossDTs();

    // Topic 4
    this.performanceParameters = this.dataService.getPerformanceParameters();
    this.bestFeeders = this.dataService.getBestFeeders();
    this.worstFeeders = this.dataService.getWorstFeeders();
    this.bestDTs = this.dataService.getBestDTs();
    this.worstDTs = this.dataService.getWorstDTs();

    // Topic 5
    this.highLossAssets = this.dataService.getHighLossAssets();
    this.overloadedAssets = this.dataService.getOverloadedAssets();
    this.outageAssets = this.dataService.getOutageAssets();
    this.powerQualityIssueAssets = this.dataService.getPowerQualityIssueAssets();
    this.highFailureRateDTs = this.dataService.getHighFailureRateDTs();
  }

  setupColumns() {
    this.feederLossDetailColumns = [
      { header: 'S. No.', accessor: 'sNo' },
      { header: 'Feeder Name', accessor: 'feederName' },
      { header: 'Circle/Subdivision', accessor: 'circleSubdivision' },
      { header: 'Energy Input at Feeder (kWh)', accessor: (row) => row.energyInputAtFeeder.toLocaleString(), className: 'text-right' },
      { header: 'Sum of DT Meter Readings (kWh)', accessor: (row) => row.sumOfDTMeterReadings.toLocaleString(), className: 'text-right' },
      { header: 'T&D Loss (%)', accessor: (row) => `${row.tdLossPercent}%`, className: 'text-right' },
      { header: 'Billed Energy (kWh)', accessor: (row) => row.billedEnergy.toLocaleString(), className: 'text-right' },
      { header: 'Collection Efficiency (%)', accessor: (row) => `${row.collectionEfficiency}%`, className: 'text-right' },
      { header: 'AT&C Loss (%)', accessor: (row) => `${row.atcLossPercent}%`, className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.feederConsumerDetailColumns = [
      { header: 'S. No.', accessor: 'sNo' },
      { header: 'Feeder Name', accessor: 'feederName' },
      { header: 'Feeder Input (kWh)', accessor: (row) => row.feederInput.toLocaleString(), className: 'text-right' },
      { header: 'Total Consumer Consumption (kWh)', accessor: (row) => row.totalConsumerConsumption.toLocaleString(), className: 'text-right' },
      { header: 'T&D Loss (%)', accessor: (row) => `${row.tdLossPercent}%`, className: 'text-right' },
      { header: 'Billed Units (kWh)', accessor: (row) => row.billedUnits.toLocaleString(), className: 'text-right' },
      { header: 'Billing Efficiency (%)', accessor: (row) => `${row.billingEfficiency}%`, className: 'text-right' },
      { header: 'Amount Billed (₹)', accessor: 'amountBilled', className: 'text-right' },
      { header: 'Amount Collected (₹)', accessor: 'amountCollected', className: 'text-right' },
      { header: 'Collection Efficiency (%)', accessor: (row) => `${row.collectionEfficiency}%`, className: 'text-right' },
      { header: 'AT&C Loss (%)', accessor: (row) => `${row.atcLossPercent}%`, className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.ltEnergyLossDTColumns = [
      { header: 'S. No.', accessor: 'sNo' },
      { header: 'DT Code / Name', accessor: 'dtCodeName' },
      { header: 'DT Capacity (kVA)', accessor: 'dtCapacity' },
      { header: 'DT Output (kWh)', accessor: (row) => row.dtOutput.toLocaleString(), className: 'text-right' },
      { header: 'Sum of LT Consumer Meter Readings (kWh)', accessor: (row) => row.sumOfLTConsumerMeterReadings.toLocaleString(), className: 'text-right' },
      { header: 'T&D Loss (%)', accessor: (row) => `${row.tdLossPercent}%`, className: 'text-right' },
      { header: 'Billed Units (kWh)', accessor: (row) => row.billedUnits.toLocaleString(), className: 'text-right' },
      { header: 'Billing Efficiency (%)', accessor: (row) => `${row.billingEfficiency}%`, className: 'text-right' },
      { header: 'Amount Billed (₹)', accessor: 'amountBilled', className: 'text-right' },
      { header: 'Amount Collected (₹)', accessor: 'amountCollected', className: 'text-right' },
      { header: 'Collection Efficiency (%)', accessor: (row) => `${row.collectionEfficiency}%`, className: 'text-right' },
      { header: 'AT&C Loss (%)', accessor: (row) => `${row.atcLossPercent}%`, className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.performanceParameterColumns = [
      { header: 'Parameter', accessor: 'parameter' },
      { header: 'Weightage (%)', accessor: 'weightage', className: 'text-right' },
      { header: 'Evaluation Basis', accessor: 'evaluationBasis' },
    ];

    this.bestWorstFeederColumns = [
      { header: 'Rank', accessor: 'rank', className: 'text-right font-bold' },
      { header: 'Feeder Name', accessor: 'feederName' },
      { header: 'Division / Substation', accessor: 'divisionSubstation' },
      { header: 'Composite Score', accessor: 'compositeScore', className: 'text-right font-bold' },
      { header: 'T&D Loss (%)', accessor: (row) => `${row.tdLossPercent}%`, className: 'text-right' },
      { header: 'Billing Eff. (%)', accessor: (row) => `${row.billingEff}%`, className: 'text-right' },
      { header: 'Collection Eff. (%)', accessor: (row) => `${row.collectionEff}%`, className: 'text-right' },
      { header: 'Complaints', accessor: 'complaints', className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.bestWorstDTColumns = [
      { header: 'Rank', accessor: 'rank', className: 'text-right font-bold' },
      { header: 'DT Code', accessor: 'dtCode' },
      { header: 'Feeder Name', accessor: 'feederName' },
      { header: 'Composite Score', accessor: 'compositeScore', className: 'text-right font-bold' },
      { header: 'DT Loss (%)', accessor: (row) => `${row.dtLossPercent}%`, className: 'text-right' },
      { header: 'Overload % Time', accessor: (row) => `${row.overloadPercentTime}%`, className: 'text-right' },
      { header: 'Complaints', accessor: 'complaints', className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.highLossAssetColumns = [
      { header: 'Rank', accessor: 'rank', className: 'text-right font-bold' },
      { header: 'Asset Type', accessor: 'assetType' },
      { header: 'Code/Name', accessor: 'codeName' },
      { header: 'Division', accessor: 'division' },
      { header: 'Loss (%)', accessor: 'loss', className: 'text-right text-red-500 font-bold' },
      { header: 'Billing Efficiency', accessor: 'billingEfficiency', className: 'text-right' },
      { header: 'Collection Efficiency', accessor: 'collectionEfficiency', className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.overloadedAssetColumns = [
      { header: 'Rank', accessor: 'rank', className: 'text-right font-bold' },
      { header: 'Asset Type', accessor: 'assetType' },
      { header: 'Code/Name', accessor: 'codeName' },
      { header: 'Division', accessor: 'division' },
      { header: 'Loading %', accessor: (row) => `${row.loadingPercent}%`, className: 'text-right text-red-500 font-bold' },
      { header: 'Rated Capacity (kVA)', accessor: 'ratedCapacity' },
      { header: 'Peak Load (kVA)', accessor: 'peakLoad' },
      { header: '% Time Above 80% Load', accessor: (row) => `${row.percentTimeAbove80Load}%`, className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.outageAssetColumns = [
      { header: 'Rank', accessor: 'rank', className: 'text-right font-bold' },
      { header: 'Asset Type', accessor: 'assetType' },
      { header: 'Code/Name', accessor: 'codeName' },
      { header: 'Division', accessor: 'division' },
      { header: 'No. of Outages', accessor: 'noOfOutages', className: 'text-right' },
      { header: 'Total Outage Duration', accessor: 'totalOutageDuration' },
      { header: 'Avg. Duration', accessor: 'avgDuration' },
      { header: 'Reason (if known)', accessor: 'reason' },
    ];

    this.powerQualityIssueAssetColumns = [
      { header: 'Rank', accessor: 'rank', className: 'text-right font-bold' },
      { header: 'Feeder Name', accessor: 'feederName' },
      { header: 'Division', accessor: 'division' },
      { header: 'Over Voltage Events', accessor: 'overVoltageEvents', className: 'text-right' },
      { header: 'Under Voltage Events', accessor: 'underVoltageEvents', className: 'text-right' },
      { header: 'Current Unbalance (%)', accessor: (row) => `${row.currentUnbalance}%`, className: 'text-right' },
      { header: 'Frequency Violations', accessor: 'frequencyViolations', className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.highFailureRateDTColumns = [
      { header: 'Rank', accessor: 'rank', className: 'text-right font-bold' },
      { header: 'DT Code', accessor: 'dtCode' },
      { header: 'Feeder Name', accessor: 'feederName' },
      { header: 'Division', accessor: 'division' },
      { header: 'Failures in Last 12 Months', accessor: 'failuresInLast12Months', className: 'text-right' },
      { header: 'Last Failure Date', accessor: 'lastFailureDate' },
      { header: 'DT Age (Years)', accessor: 'dtAge', className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];
  }

  getPerformanceParametersWithIds() {
    return this.performanceParameters.map((p, i) => ({ ...p, id: String(i) }));
  }
}
