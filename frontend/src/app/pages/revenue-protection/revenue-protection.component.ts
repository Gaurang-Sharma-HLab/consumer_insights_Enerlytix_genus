import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RevenueProtectionDataService,
  NoPowerSupplySummary, NoPowerSupplyArea,
  PhaseUnbalanceSummary, PhaseUnbalanceDT,
  MeterBurntSummary, MeterBurntConsumer, MeterBurntArea, MeterBurntRootCause,
  LoadViolationSummary, LoadViolationConsumer, LoadViolationPriority, LoadEnhancementProcess,
  ExceptionBillingSummary, ExceptionBillingConsumer, ExceptionBillingCategory,
  RevenueAnalyticsSummary, RevenueAnalyticsSegment, AutomaticCompensationSummary,
  PowerFactorSummary, PowerFactorClassification, PowerFactorHistorical, PowerFactorForecast, PowerFactorSegment,
  RechargeTrendsSummary, RechargeTrendsSegment, RechargeTrendsConsumer,
  DefectiveMeterSummary, DefectiveMeterDetail, DefectiveMeterForecast, DefectiveMeterReason,
  DisconnectedPrepaidSummary, DisconnectedPrepaidConsumer, DisconnectedPrepaidCategory } from '../../services/revenue-protection-data.service';
import { TopicSectionComponent } from '../../components/topic-section/topic-section.component';
import { ThemeService } from '../../services/theme.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SummaryTilesComponent } from '../../components/summary-tiles/summary-tiles.component';
import { DataTableComponent, Column } from '../../components/data-table/data-table.component';
import { StatusBadgeComponent } from '../../components/status-badge/status-badge.component';
import { InsightsCardComponent } from '../../components/insights-card/insights-card.component';
import { ChartPlaceholderComponent } from '../../components/chart-placeholder/chart-placeholder.component';

@Component({
  selector: 'app-revenue-protection',
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
  templateUrl: './revenue-protection.component.html',
  styleUrl: './revenue-protection.component.css'
})
export class RevenueProtectionComponent implements OnInit, AfterViewInit {
  @ViewChildren(TopicSectionComponent) topicSections!: QueryList<TopicSectionComponent>;

  // Topic 1: Potential Revenue Loss Report – Due to No Power Supply
  noPowerSupplySummary: NoPowerSupplySummary[] = [];
  noPowerSupplyAreas: NoPowerSupplyArea[] = [];

  // Topic 2: Phase Unbalance Analysis Report
  phaseUnbalanceSummary: PhaseUnbalanceSummary[] = [];
  phaseUnbalanceDTs: PhaseUnbalanceDT[] = [];

  // Topic 3: Meter Burnt Cases
  meterBurntSummary: MeterBurntSummary[] = [];
  meterBurntConsumers: MeterBurntConsumer[] = [];
  meterBurntAreas: MeterBurntArea[] = [];
  meterBurntRootCauses: MeterBurntRootCause[] = [];

  // Topic 4: Load Violation & Enhancement
  loadViolationSummary: LoadViolationSummary[] = [];
  loadViolationConsumers: LoadViolationConsumer[] = [];
  loadViolationPriorities: LoadViolationPriority[] = [];
  loadEnhancementProcess: LoadEnhancementProcess[] = [];

  // Topic 5: Exception Billing
  exceptionBillingSummary: ExceptionBillingSummary[] = [];
  exceptionBillingConsumers: ExceptionBillingConsumer[] = [];
  exceptionBillingCategories: ExceptionBillingCategory[] = [];

  // Topic 6: Revenue Analytics
  revenueAnalyticsSummary: RevenueAnalyticsSummary[] = [];
  revenueAnalyticsSegments: RevenueAnalyticsSegment[] = [];
  automaticCompensationSummary: AutomaticCompensationSummary[] = [];

  // Topic 7: Low Power Factor Analysis
  powerFactorSummary: PowerFactorSummary[] = [];
  powerFactorClassifications: PowerFactorClassification[] = [];
  powerFactorHistorical: PowerFactorHistorical[] = [];
  powerFactorForecast: PowerFactorForecast[] = [];
  powerFactorSegments: PowerFactorSegment[] = [];

  // Topic 8: Recharge Trends vs Consumption
  rechargeTrendsSummary: RechargeTrendsSummary[] = [];
  rechargeTrendsSegments: RechargeTrendsSegment[] = [];
  rechargeTrendsConsumers: RechargeTrendsConsumer[] = [];

  // Topic 9: Defective Meter Analysis
  defectiveMeterSummary: DefectiveMeterSummary[] = [];
  defectiveMeterDetails: DefectiveMeterDetail[] = [];
  defectiveMeterForecast: DefectiveMeterForecast[] = [];
  defectiveMeterReasons: DefectiveMeterReason[] = [];

  // Topic 10: Disconnected Prepaid Consumers
  disconnectedPrepaidSummary: DisconnectedPrepaidSummary[] = [];
  disconnectedPrepaidConsumers: DisconnectedPrepaidConsumer[] = [];
  disconnectedPrepaidCategories: DisconnectedPrepaidCategory[] = [];

  // Column definitions
  noPowerSupplyAreaColumns: Column<NoPowerSupplyArea>[] = [];
  phaseUnbalanceDTColumns: Column<PhaseUnbalanceDT>[] = [];
  meterBurntConsumerColumns: Column<MeterBurntConsumer>[] = [];
  meterBurntAreaColumns: Column<MeterBurntArea>[] = [];
  meterBurntRootCauseColumns: Column<MeterBurntRootCause & { id: string }>[] = [];
  loadViolationConsumerColumns: Column<LoadViolationConsumer>[] = [];
  loadViolationPriorityColumns: Column<LoadViolationPriority & { id: string }>[] = [];
  loadEnhancementProcessColumns: Column<LoadEnhancementProcess & { id: string }>[] = [];
  exceptionBillingConsumerColumns: Column<ExceptionBillingConsumer>[] = [];
  exceptionBillingCategoryColumns: Column<ExceptionBillingCategory & { id: string }>[] = [];
  revenueAnalyticsSegmentColumns: Column<RevenueAnalyticsSegment & { id: string }>[] = [];
  automaticCompensationColumns: Column<AutomaticCompensationSummary & { id: string }>[] = [];
  powerFactorClassificationColumns: Column<PowerFactorClassification & { id: string }>[] = [];
  powerFactorHistoricalColumns: Column<PowerFactorHistorical & { id: string }>[] = [];
  powerFactorForecastColumns: Column<PowerFactorForecast & { id: string }>[] = [];
  powerFactorSegmentColumns: Column<PowerFactorSegment & { id: string }>[] = [];
  rechargeTrendsSegmentColumns: Column<RechargeTrendsSegment & { id: string }>[] = [];
  rechargeTrendsConsumerColumns: Column<RechargeTrendsConsumer>[] = [];
  defectiveMeterDetailColumns: Column<DefectiveMeterDetail>[] = [];
  defectiveMeterForecastColumns: Column<DefectiveMeterForecast & { id: string }>[] = [];
  defectiveMeterReasonColumns: Column<DefectiveMeterReason & { id: string }>[] = [];
  disconnectedPrepaidConsumerColumns: Column<DisconnectedPrepaidConsumer>[] = [];
  disconnectedPrepaidCategoryColumns: Column<DisconnectedPrepaidCategory & { id: string }>[] = [];

  constructor(
    private dataService: RevenueProtectionDataService,
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
    // Load all data
    this.loadAllData();
    this.setupColumns();
  }

  loadAllData() {
    // Topic 1
    this.noPowerSupplySummary = this.dataService.getNoPowerSupplySummary();
    this.noPowerSupplyAreas = this.dataService.getNoPowerSupplyAreas();

    // Topic 2
    this.phaseUnbalanceSummary = this.dataService.getPhaseUnbalanceSummary();
    this.phaseUnbalanceDTs = this.dataService.getPhaseUnbalanceDTs();

    // Topic 3
    this.meterBurntSummary = this.dataService.getMeterBurntSummary();
    this.meterBurntConsumers = this.dataService.getMeterBurntConsumers();
    this.meterBurntAreas = this.dataService.getMeterBurntAreas();
    this.meterBurntRootCauses = this.dataService.getMeterBurntRootCauses();

    // Topic 4
    this.loadViolationSummary = this.dataService.getLoadViolationSummary();
    this.loadViolationConsumers = this.dataService.getLoadViolationConsumers();
    this.loadViolationPriorities = this.dataService.getLoadViolationPriorities();
    this.loadEnhancementProcess = this.dataService.getLoadEnhancementProcess();

    // Topic 5
    this.exceptionBillingSummary = this.dataService.getExceptionBillingSummary();
    this.exceptionBillingConsumers = this.dataService.getExceptionBillingConsumers();
    this.exceptionBillingCategories = this.dataService.getExceptionBillingCategories();

    // Topic 6
    this.revenueAnalyticsSummary = this.dataService.getRevenueAnalyticsSummary();
    this.revenueAnalyticsSegments = this.dataService.getRevenueAnalyticsSegments();
    this.automaticCompensationSummary = this.dataService.getAutomaticCompensationSummary();

    // Topic 7
    this.powerFactorSummary = this.dataService.getPowerFactorSummary();
    this.powerFactorClassifications = this.dataService.getPowerFactorClassifications();
    this.powerFactorHistorical = this.dataService.getPowerFactorHistorical();
    this.powerFactorForecast = this.dataService.getPowerFactorForecast();
    this.powerFactorSegments = this.dataService.getPowerFactorSegments();

    // Topic 8
    this.rechargeTrendsSummary = this.dataService.getRechargeTrendsSummary();
    this.rechargeTrendsSegments = this.dataService.getRechargeTrendsSegments();
    this.rechargeTrendsConsumers = this.dataService.getRechargeTrendsConsumers();

    // Topic 9
    this.defectiveMeterSummary = this.dataService.getDefectiveMeterSummary();
    this.defectiveMeterDetails = this.dataService.getDefectiveMeterDetails();
    this.defectiveMeterForecast = this.dataService.getDefectiveMeterForecast();
    this.defectiveMeterReasons = this.dataService.getDefectiveMeterReasons();

    // Topic 10
    this.disconnectedPrepaidSummary = this.dataService.getDisconnectedPrepaidSummary();
    this.disconnectedPrepaidConsumers = this.dataService.getDisconnectedPrepaidConsumers();
    this.disconnectedPrepaidCategories = this.dataService.getDisconnectedPrepaidCategories();
  }

  setupColumns() {
    // Topic 1 columns
    this.noPowerSupplyAreaColumns = [
      { header: 'S. No.', accessor: 'sNo' },
      { header: 'Feeder Name / Area', accessor: 'feederNameArea' },
      { header: 'Consumer Category', accessor: 'consumerCategory' },
      { header: 'No Supply Start', accessor: 'noSupplyStart' },
      { header: 'No Supply End', accessor: 'noSupplyEnd' },
      { header: 'Duration (Hrs)', accessor: 'durationHrs', className: 'text-right' },
      { header: 'Avg Load (kW)', accessor: 'avgLoad', className: 'text-right' },
      { header: 'Est. Energy Loss (kWh)', accessor: 'estEnergyLoss', className: 'text-right' },
      { header: 'Est. Revenue Loss (₹)', accessor: (row) => `₹${row.estRevenueLoss.toFixed(2)}`, className: 'text-right' },
    ];

    // Topic 2 columns
    this.phaseUnbalanceDTColumns = [
      { header: 'S. No.', accessor: 'sNo' },
      { header: 'DT Code', accessor: 'dtCode' },
      { header: 'Location', accessor: 'location' },
      { header: 'Capacity (kVA)', accessor: 'capacity' },
      { header: 'Phase-wise Load (R-Y-B in kW)', accessor: 'phaseWiseLoad' },
      { header: 'Unbalance %', accessor: (row) => `${row.unbalancePercent}%`, className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    // Topic 3 columns
    this.meterBurntConsumerColumns = [
      { header: 'S. No.', accessor: 'sNo' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Consumer Name', accessor: 'consumerName' },
      { header: 'Meter No.', accessor: 'meterNo' },
      { header: 'Meter Type', accessor: 'meterType' },
      { header: 'Installation Date', accessor: 'meterInstallationDate' },
      { header: 'Burnt Date(s)', accessor: 'burntDates' },
      { header: 'No. of Times Burnt', accessor: 'noOfTimesBurnt', className: 'text-right' },
      { header: 'Load at Burn (kW)', accessor: 'loadAtBurn', className: 'text-right' },
      { header: 'Cause Identified', accessor: 'causeIdentified' },
      { header: 'Replaced By', accessor: 'replacedBy' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.meterBurntAreaColumns = [
      { header: 'Feeder / Location', accessor: 'feederLocation' },
      { header: 'Total Burnt Cases', accessor: 'totalBurntCases', className: 'text-right' },
      { header: 'Repeat Cases', accessor: 'repeatCases', className: 'text-right' },
      { header: 'High Load Cases', accessor: 'highLoadCases', className: 'text-right' },
      { header: 'Common Cause Identified', accessor: 'commonCauseIdentified' },
      { header: 'Last Maintenance Date', accessor: 'lastMaintenanceDate' },
      { header: 'Action Taken', accessor: 'actionTaken' },
    ];

    this.meterBurntRootCauseColumns = [
      { header: 'Root Cause', accessor: 'rootCause' },
      { header: 'No. of Cases', accessor: 'noOfCases', className: 'text-right' },
      { header: '% of Total', accessor: (row) => `${row.percentOfTotal}%`, className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    // Topic 4 columns
    this.loadViolationConsumerColumns = [
      { header: 'S. No.', accessor: 'sNo' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Consumer Name', accessor: 'consumerName' },
      { header: 'Feeder / DT', accessor: 'feederDT' },
      { header: 'Sanctioned Load (kW)', accessor: 'sanctionedLoad', className: 'text-right' },
      { header: 'MD (Last 3/6 Months) kW', accessor: 'mdLastMonths' },
      { header: 'No. of Months > SL', accessor: 'noOfMonthsGreaterThanSL', className: 'text-right' },
      { header: '% Overload (Max)', accessor: (row) => `${row.percentOverloadMax}%`, className: 'text-right text-red-500' },
      { header: 'Recommendation', accessor: 'recommendation' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.loadViolationPriorityColumns = [
      { header: 'Priority Level', accessor: 'priorityLevel' },
      { header: 'Criteria', accessor: 'criteria' },
      { header: 'No. of Consumers', accessor: 'noOfConsumers', className: 'text-right' },
    ];

    this.loadEnhancementProcessColumns = [
      { header: 'Step No.', accessor: 'stepNo' },
      { header: 'Activity', accessor: 'activity' },
      { header: 'Responsibility', accessor: 'responsibility' },
      { header: 'Timeline', accessor: 'timeline' },
    ];

    // Topic 5 columns
    this.exceptionBillingConsumerColumns = [
      { header: 'S. No.', accessor: 'sNo' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Consumer Name', accessor: 'consumerName' },
      { header: 'Meter No.', accessor: 'meterNo' },
      { header: 'Feeder / DT', accessor: 'feederDT' },
      { header: 'Sanctioned Load (kW)', accessor: 'sanctionedLoad', className: 'text-right' },
      { header: 'Billing Method Used', accessor: 'billingMethodUsed' },
      { header: 'Reason for Exception Billing', accessor: 'reasonForExceptionBilling' },
      { header: 'Consumption Used (kWh)', accessor: 'consumptionUsedForBilling', className: 'text-right' },
      { header: 'Actual Expected', accessor: 'actualExpected' },
      { header: 'Remarks / Action Required', accessor: 'remarksActionRequired' },
    ];

    this.exceptionBillingCategoryColumns = [
      { header: 'Reason for Exception Billing', accessor: 'reason' },
      { header: 'No. of Consumers', accessor: 'noOfConsumers', className: 'text-right' },
      { header: '% Share', accessor: (row) => `${row.percentShare}%`, className: 'text-right' },
      { header: 'Suggested Action', accessor: 'suggestedAction' },
    ];

    // Topic 6 columns
    this.revenueAnalyticsSegmentColumns = [
      { header: 'Consumer Segment', accessor: 'consumerSegment' },
      { header: 'Energy Sold (MU)', accessor: 'energySold', className: 'text-right' },
      { header: 'Revenue (₹ Cr)', accessor: 'revenue', className: 'text-right' },
      { header: 'Avg. Tariff (₹/kWh)', accessor: 'avgTariff', className: 'text-right' },
      { header: 'Compensation Paid (₹ Cr)', accessor: 'compensationPaid', className: 'text-right' },
      { header: 'Notes', accessor: 'notes' },
    ];

    this.automaticCompensationColumns = [
      { header: 'Cause', accessor: 'cause' },
      { header: 'Consumers Affected', accessor: 'consumersAffected', className: 'text-right' },
      { header: 'Total Amount Paid (₹ Cr)', accessor: 'totalAmountPaid', className: 'text-right' },
      { header: 'Avg. Amount / Consumer (₹)', accessor: 'avgAmountPerConsumer', className: 'text-right' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    // Topic 7 columns
    this.powerFactorClassificationColumns = [
      { header: 'PF Range', accessor: 'pfRange' },
      { header: 'Category', accessor: 'category' },
    ];

    this.powerFactorHistoricalColumns = [
      { header: 'Date', accessor: 'date' },
      { header: 'Avg. PF', accessor: 'avgPF', className: 'text-right' },
      { header: 'No. of Consumers Below Limit', accessor: 'noOfConsumersBelowLimit', className: 'text-right' },
      { header: 'Estimated kVAh Penalty', accessor: 'estimatedKVAhPenalty', className: 'text-right' },
      { header: 'Revenue Loss (₹ Cr)', accessor: 'revenueLoss', className: 'text-right' },
    ];

    this.powerFactorForecastColumns = [
      { header: 'PF Range', accessor: 'pfRange' },
      { header: 'Forecasted No. of Consumers', accessor: 'forecastedNoOfConsumers', className: 'text-right' },
      { header: 'Expected Change (%)', accessor: (row) => `${row.expectedChangePercent > 0 ? '+' : ''}${row.expectedChangePercent}%`, className: 'text-right' },
      { header: 'Revenue Risk (₹ Cr)', accessor: 'revenueRisk', className: 'text-right' },
      { header: 'Key Risk Segments', accessor: 'keyRiskSegments' },
    ];

    this.powerFactorSegmentColumns = [
      { header: 'Consumer Type', accessor: 'consumerType' },
      { header: 'Avg. PF', accessor: 'avgPF', className: 'text-right' },
      { header: 'Share of Low PF Cases', accessor: 'shareOfLowPFCases', className: 'text-right' },
      { header: 'Notes', accessor: 'notes' },
    ];

    // Topic 8 columns
    this.rechargeTrendsSegmentColumns = [
      { header: 'Segment', accessor: 'segment' },
      { header: 'Consumers Analyzed', accessor: 'consumersAnalyzed', className: 'text-right' },
      { header: '>Threshold Gaps', accessor: 'greaterThanThresholdGaps', className: 'text-right' },
      { header: 'Avg. Positive Gap %', accessor: (row) => `+${row.avgPositiveGapPercent}%`, className: 'text-right' },
      { header: 'Avg. Negative Gap %', accessor: (row) => `-${row.avgNegativeGapPercent}%`, className: 'text-right' },
      { header: 'Risk Notes', accessor: 'riskNotes' },
    ];

    this.rechargeTrendsConsumerColumns = [
      { header: 'Consumer ID', accessor: 'consumerID', className: 'font-mono text-[#3c83f6]' },
      { header: 'Name', accessor: 'name' },
      { header: 'Circle', accessor: 'circle' },
      { header: 'Division', accessor: 'division' },
      { header: 'Recharge ₹', accessor: 'recharge', className: 'text-right' },
      { header: 'Consumption ₹', accessor: 'consumption', className: 'text-right' },
      { header: 'Credit Balance ₹', accessor: 'creditBalance', className: 'text-right' },
      { header: 'Gap %', accessor: 'gapPercent', className: 'text-right' },
      { header: 'Risk Level', accessor: (row) => ({ status: row.riskLevel, variant: this.getRiskLevelVariant(row.riskLevel) }), className: '' },
    ];

    // Topic 9 columns
    this.defectiveMeterDetailColumns = [
      { header: 'Circle', accessor: 'circle' },
      { header: 'Division', accessor: 'division' },
      { header: 'Sub-division', accessor: 'subdivision' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Name', accessor: 'name' },
      { header: 'Meter No.', accessor: 'meterNo' },
      { header: 'Category', accessor: 'category' },
      { header: 'Defect Reason', accessor: 'defectReason' },
      { header: 'Ageing (Days)', accessor: 'ageing', className: 'text-right' },
      { header: 'Date Reported', accessor: 'dateReported' },
      { header: 'Status', accessor: (row) => ({ status: row.status, variant: this.getStatusVariant(row.status) }), className: '' },
    ];

    this.defectiveMeterForecastColumns = [
      { header: 'Circle', accessor: 'circle' },
      { header: 'Forecasted Defective Cases', accessor: 'forecastedDefectiveCases', className: 'text-right' },
      { header: 'Expected Growth %', accessor: (row) => `+${row.expectedGrowthPercent}%`, className: 'text-right' },
      { header: 'Key Risk Factors', accessor: 'keyRiskFactors' },
    ];

    this.defectiveMeterReasonColumns = [
      { header: 'Reason for Defect', accessor: 'reason' },
      { header: 'Share of Total Cases', accessor: 'shareOfTotalCases', className: 'text-right' },
      { header: 'Notes', accessor: 'notes' },
    ];

    // Topic 10 columns
    this.disconnectedPrepaidConsumerColumns = [
      { header: 'S. No.', accessor: 'sNo' },
      { header: 'Consumer No.', accessor: 'consumerNo', className: 'font-mono text-[#3c83f6]' },
      { header: 'Name', accessor: 'name' },
      { header: 'Mobile No.', accessor: 'mobileNo' },
      { header: 'Feeder/DT', accessor: 'feederDT' },
      { header: 'Last Recharge Date', accessor: 'lastRechargeDate' },
      { header: 'Days Since Last Recharge', accessor: 'daysSinceLastRecharge', className: 'text-right' },
      { header: 'Balance (₹)', accessor: 'balance', className: 'text-right' },
      { header: 'Relay Status', accessor: (row) => ({ status: row.relayStatus, variant: this.getRelayStatusVariant(row.relayStatus) }), className: '' },
      { header: 'Disconnection Date', accessor: 'disconnectionDate' },
      { header: 'Remarks', accessor: 'remarks' },
    ];

    this.disconnectedPrepaidCategoryColumns = [
      { header: 'Days Since Last Recharge', accessor: 'daysSinceLastRecharge' },
      { header: 'No. of Consumers', accessor: 'noOfConsumers', className: 'text-right' },
      { header: '% of Total', accessor: 'percentOfTotal', className: 'text-right' },
      { header: 'Cumulative Balance (₹)', accessor: 'cumulativeBalance', className: 'text-right' },
    ];
  }

  getStatusVariant(status: string): 'success' | 'warning' | 'danger' | 'default' | 'info' {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes('working') || lowerStatus.includes('healthy') || lowerStatus.includes('normal') || lowerStatus.includes('completed')) {
      return 'success';
    }
    if (lowerStatus.includes('pending') || lowerStatus.includes('borderline') || lowerStatus.includes('issue') || lowerStatus.includes('progress')) {
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

  getRiskLevelVariant(riskLevel: string): 'success' | 'warning' | 'danger' | 'default' | 'info' {
    const lowerRisk = riskLevel.toLowerCase();
    if (lowerRisk.includes('high')) return 'danger';
    if (lowerRisk.includes('medium')) return 'warning';
    return 'info';
  }

  getRelayStatusVariant(status: string): 'success' | 'warning' | 'danger' | 'default' | 'info' {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes('on')) return 'success';
    if (lowerStatus.includes('off')) return 'danger';
    return 'default';
  }

  // Helper methods for data with IDs
  getMeterBurntRootCausesWithIds() {
    return this.meterBurntRootCauses.map((c, i) => ({ ...c, id: String(i) }));
  }

  getLoadViolationPrioritiesWithIds() {
    return this.loadViolationPriorities.map((p, i) => ({ ...p, id: String(i) }));
  }

  getLoadEnhancementProcessWithIds() {
    return this.loadEnhancementProcess.map((p, i) => ({ ...p, id: String(i) }));
  }

  getExceptionBillingCategoriesWithIds() {
    return this.exceptionBillingCategories.map((c, i) => ({ ...c, id: String(i) }));
  }

  getRevenueAnalyticsSegmentsWithIds() {
    return this.revenueAnalyticsSegments.map((s, i) => ({ ...s, id: String(i) }));
  }

  getAutomaticCompensationWithIds() {
    return this.automaticCompensationSummary.map((c, i) => ({ ...c, id: String(i) }));
  }

  getPowerFactorClassificationsWithIds() {
    return this.powerFactorClassifications.map((c, i) => ({ ...c, id: String(i) }));
  }

  getPowerFactorHistoricalWithIds() {
    return this.powerFactorHistorical.map((h, i) => ({ ...h, id: String(i) }));
  }

  getPowerFactorForecastWithIds() {
    return this.powerFactorForecast.map((f, i) => ({ ...f, id: String(i) }));
  }

  getPowerFactorSegmentsWithIds() {
    return this.powerFactorSegments.map((s, i) => ({ ...s, id: String(i) }));
  }

  getRechargeTrendsSegmentsWithIds() {
    return this.rechargeTrendsSegments.map((s, i) => ({ ...s, id: String(i) }));
  }

  getDefectiveMeterForecastWithIds() {
    return this.defectiveMeterForecast.map((f, i) => ({ ...f, id: String(i) }));
  }

  getDefectiveMeterReasonsWithIds() {
    return this.defectiveMeterReasons.map((r, i) => ({ ...r, id: String(i) }));
  }

  getDisconnectedPrepaidCategoriesWithIds() {
    return this.disconnectedPrepaidCategories.map((c, i) => ({ ...c, id: String(i) }));
  }
}
