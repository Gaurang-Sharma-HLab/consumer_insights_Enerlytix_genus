import { Injectable } from '@angular/core';

// Topic 1: Potential Revenue Loss Report – Due to No Power Supply
export interface NoPowerSupplySummary {
  label: string;
  value: number | string;
}

export interface NoPowerSupplyArea {
  id: string;
  sNo: number;
  feederNameArea: string;
  consumerCategory: string;
  noSupplyStart: string;
  noSupplyEnd: string;
  durationHrs: number;
  avgLoad: number;
  estEnergyLoss: number;
  estRevenueLoss: number;
}

// Topic 2: Phase Unbalance Analysis Report – DT Level
export interface PhaseUnbalanceSummary {
  label: string;
  value: number | string;
}

export interface PhaseUnbalanceDT {
  id: string;
  sNo: number;
  dtCode: string;
  location: string;
  capacity: string;
  phaseWiseLoad: string;
  unbalancePercent: number;
  remarks: string;
}

// Topic 3: Analytics Report – Meter Burnt Cases
export interface MeterBurntSummary {
  label: string;
  value: number | string;
}

export interface MeterBurntConsumer {
  id: string;
  sNo: number;
  consumerNo: string;
  consumerName: string;
  meterNo: string;
  meterType: string;
  meterInstallationDate: string;
  burntDates: string;
  noOfTimesBurnt: number;
  loadAtBurn: number;
  causeIdentified: string;
  replacedBy: string;
  remarks: string;
}

export interface MeterBurntArea {
  id: string;
  feederLocation: string;
  totalBurntCases: number;
  repeatCases: number;
  highLoadCases: number;
  commonCauseIdentified: string;
  lastMaintenanceDate: string;
  actionTaken: string;
}

export interface MeterBurntRootCause {
  rootCause: string;
  noOfCases: number;
  percentOfTotal: number;
  remarks: string;
}

// Topic 4: Load Violation & Enhancement Recommendation Report
export interface LoadViolationSummary {
  label: string;
  value: number | string;
}

export interface LoadViolationConsumer {
  id: string;
  sNo: number;
  consumerNo: string;
  consumerName: string;
  feederDT: string;
  sanctionedLoad: number;
  mdLastMonths: string;
  noOfMonthsGreaterThanSL: number;
  percentOverloadMax: number;
  recommendation: string;
  remarks: string;
}

export interface LoadViolationPriority {
  priorityLevel: string;
  criteria: string;
  noOfConsumers: number;
}

export interface LoadEnhancementProcess {
  stepNo: number;
  activity: string;
  responsibility: string;
  timeline: string;
}

// Topic 5: Exception Billing Report for Smart Meter Consumers
export interface ExceptionBillingSummary {
  label: string;
  value: number | string;
}

export interface ExceptionBillingConsumer {
  id: string;
  sNo: number;
  consumerNo: string;
  consumerName: string;
  meterNo: string;
  feederDT: string;
  sanctionedLoad: number;
  billingMethodUsed: string;
  reasonForExceptionBilling: string;
  consumptionUsedForBilling: number;
  actualExpected: string;
  remarksActionRequired: string;
}

export interface ExceptionBillingCategory {
  reason: string;
  noOfConsumers: number;
  percentShare: number;
  suggestedAction: string;
}

// Topic 6: Revenue Protection Report – Revenue analytics
export interface RevenueAnalyticsSummary {
  label: string;
  value: number | string;
}

export interface RevenueAnalyticsSegment {
  consumerSegment: string;
  energySold: string;
  revenue: string;
  avgTariff: string;
  compensationPaid: string;
  notes: string;
}

export interface AutomaticCompensationSummary {
  cause: string;
  consumersAffected: number;
  totalAmountPaid: string;
  avgAmountPerConsumer: string;
  remarks: string;
}

// Topic 7: Low Power Factor Analysis Report
export interface PowerFactorSummary {
  label: string;
  value: number | string;
}

export interface PowerFactorClassification {
  pfRange: string;
  category: string;
}

export interface PowerFactorHistorical {
  date: string;
  avgPF: number;
  noOfConsumersBelowLimit: number;
  estimatedKVAhPenalty: string;
  revenueLoss: string;
}

export interface PowerFactorForecast {
  pfRange: string;
  forecastedNoOfConsumers: number;
  expectedChangePercent: number;
  revenueRisk: string;
  keyRiskSegments: string;
}

export interface PowerFactorSegment {
  consumerType: string;
  avgPF: number;
  shareOfLowPFCases: string;
  notes: string;
}

// Topic 8: Revenue Protection Analysis Report: Recharge Trends vs Consumption
export interface RechargeTrendsSummary {
  label: string;
  value: number | string;
}

export interface RechargeTrendsSegment {
  segment: string;
  consumersAnalyzed: number;
  greaterThanThresholdGaps: number;
  avgPositiveGapPercent: number;
  avgNegativeGapPercent: number;
  riskNotes: string;
}

export interface RechargeTrendsConsumer {
  id: string;
  consumerID: string;
  name: string;
  circle: string;
  division: string;
  recharge: string;
  consumption: string;
  creditBalance: string;
  gapPercent: string;
  riskLevel: string;
}

// Topic 9: Revenue Protection – Defective Meter Analysis Report
export interface DefectiveMeterSummary {
  label: string;
  value: number | string;
}

export interface DefectiveMeterDetail {
  id: string;
  circle: string;
  division: string;
  subdivision: string;
  consumerNo: string;
  name: string;
  meterNo: string;
  category: string;
  defectReason: string;
  ageing: number;
  dateReported: string;
  status: string;
}

export interface DefectiveMeterForecast {
  circle: string;
  forecastedDefectiveCases: number;
  expectedGrowthPercent: number;
  keyRiskFactors: string;
}

export interface DefectiveMeterReason {
  reason: string;
  shareOfTotalCases: string;
  notes: string;
}

// Topic 10: Disconnected Prepaid Consumers Report
export interface DisconnectedPrepaidSummary {
  label: string;
  value: number | string;
}

export interface DisconnectedPrepaidConsumer {
  id: string;
  sNo: number;
  consumerNo: string;
  name: string;
  mobileNo: string;
  feederDT: string;
  lastRechargeDate: string;
  daysSinceLastRecharge: number;
  balance: string;
  relayStatus: string;
  disconnectionDate: string;
  remarks: string;
}

export interface DisconnectedPrepaidCategory {
  daysSinceLastRecharge: string;
  noOfConsumers: number;
  percentOfTotal: string;
  cumulativeBalance: string;
}

@Injectable({
  providedIn: 'root'
})
export class RevenueProtectionDataService {
  constructor() { }

  // Topic 1: Potential Revenue Loss Report – Due to No Power Supply
  getNoPowerSupplySummary(): NoPowerSupplySummary[] {
    return [
      { label: 'Total Affected Consumers', value: 'XXXX' },
      { label: 'Total No-Supply Duration (Hrs)', value: 'XXXX' },
      { label: 'Estimated Consumption Loss (kWh)', value: 'XXXX' },
      { label: 'Average Tariff (₹/kWh)', value: 'X.XX' },
      { label: 'Estimated Revenue Loss (₹)', value: '₹XXXX' },
    ];
  }

  getNoPowerSupplyAreas(): NoPowerSupplyArea[] {
    return [
      { id: '1', sNo: 1, feederNameArea: 'Feeder-01 / Zone A', consumerCategory: 'Domestic', noSupplyStart: '01-Aug-2025 10:00', noSupplyEnd: '01-Aug-2025 14:30', durationHrs: 4.5, avgLoad: 2.5, estEnergyLoss: 11.25, estRevenueLoss: 63.00 },
      { id: '2', sNo: 2, feederNameArea: 'Feeder-05 / Zone B', consumerCategory: 'Commercial', noSupplyStart: '02-Aug-2025 09:00', noSupplyEnd: '02-Aug-2025 16:00', durationHrs: 7.0, avgLoad: 8.0, estEnergyLoss: 56.00, estRevenueLoss: 392.00 },
      { id: '3', sNo: 3, feederNameArea: 'Feeder-12 / Zone C', consumerCategory: 'Industrial', noSupplyStart: '03-Aug-2025 11:00', noSupplyEnd: '03-Aug-2025 13:00', durationHrs: 2.0, avgLoad: 15.0, estEnergyLoss: 30.00, estRevenueLoss: 210.00 },
    ];
  }

  // Topic 2: Phase Unbalance Analysis Report – DT Level
  getPhaseUnbalanceSummary(): PhaseUnbalanceSummary[] {
    return [
      { label: 'Total DTs Analyzed', value: 'XXX' },
      { label: 'DTs with High Phase Unbalance (>20%)', value: 'XX' },
      { label: 'Average Technical Loss Before Correction', value: 'XX.X%' },
      { label: 'Average Technical Loss After Correction (Projected)', value: 'XX.X%' },
      { label: 'Estimated Loss Reduction (kWh)', value: 'XXXX' },
      { label: 'Estimated Monetary Savings (₹)', value: '₹XXXX' },
    ];
  }

  getPhaseUnbalanceDTs(): PhaseUnbalanceDT[] {
    return [
      { id: '1', sNo: 1, dtCode: 'DT-001', location: 'Zone A', capacity: '100', phaseWiseLoad: '20 – 45 – 35', unbalancePercent: 31.5, remarks: 'Load shifted on-site' },
      { id: '2', sNo: 2, dtCode: 'DT-002', location: 'Zone B', capacity: '200', phaseWiseLoad: '70 – 90 – 100', unbalancePercent: 14.3, remarks: 'Minor correction done' },
      { id: '3', sNo: 3, dtCode: 'DT-003', location: 'Zone C', capacity: '63', phaseWiseLoad: '10 – 35 – 18', unbalancePercent: 47.6, remarks: 'Feeder balancing done' },
    ];
  }

  // Topic 3: Analytics Report – Meter Burnt Cases
  getMeterBurntSummary(): MeterBurntSummary[] {
    return [
      { label: 'Total Meter Burnt Cases', value: 'XXXX' },
      { label: 'Repeat Burnt Cases (Same Consumer)', value: 'XXX' },
      { label: 'High-Risk Areas Identified', value: 'XXX' },
      { label: 'Avg. Time to Restore (Days)', value: 'X.X Days' },
      { label: 'Avg. Meter Age (at Burn)', value: 'X.X Years' },
    ];
  }

  getMeterBurntConsumers(): MeterBurntConsumer[] {
    return [
      { id: '1', sNo: 1, consumerNo: '1234567890', consumerName: 'Mr. A. Singh', meterNo: 'MTR000123', meterType: 'Single Phase', meterInstallationDate: '12-04-2022', burntDates: '10-10-2023, 15-06-2025', noOfTimesBurnt: 2, loadAtBurn: 5.8, causeIdentified: 'Loose terminal', replacedBy: 'MTR0456', remarks: 'Field vigilance advised' },
      { id: '2', sNo: 2, consumerNo: '9876543210', consumerName: 'Ms. R. Gupta', meterNo: 'MTR000456', meterType: 'Three Phase', meterInstallationDate: '08-01-2021', burntDates: '02-09-2024, 06-07-2025', noOfTimesBurnt: 2, loadAtBurn: 12.2, causeIdentified: 'Overload', replacedBy: 'MTR0789', remarks: 'Upgrade suggested' },
      { id: '3', sNo: 3, consumerNo: '1357924680', consumerName: 'M/s XYZ Traders', meterNo: 'MTR001122', meterType: 'CT Operated', meterInstallationDate: '05-06-2020', burntDates: '22-05-2025', noOfTimesBurnt: 1, loadAtBurn: 45.0, causeIdentified: 'Unknown', replacedBy: 'MTR0990', remarks: 'Investigate earthing' },
    ];
  }

  getMeterBurntAreas(): MeterBurntArea[] {
    return [
      { id: '1', feederLocation: 'Feeder-01 / Zone A', totalBurntCases: 18, repeatCases: 5, highLoadCases: 12, commonCauseIdentified: 'Loose neutral', lastMaintenanceDate: '12-05-2025', actionTaken: 'Load balancing' },
      { id: '2', feederLocation: 'Feeder-04 / Zone C', totalBurntCases: 10, repeatCases: 2, highLoadCases: 7, commonCauseIdentified: 'Overload (peak hours)', lastMaintenanceDate: '25-06-2025', actionTaken: 'Cable upgrade' },
      { id: '3', feederLocation: 'Feeder-06 / Zone D', totalBurntCases: 14, repeatCases: 3, highLoadCases: 9, commonCauseIdentified: 'Improper earthing', lastMaintenanceDate: '01-07-2025', actionTaken: 'Team deployed' },
    ];
  }

  getMeterBurntRootCauses(): MeterBurntRootCause[] {
    return [
      { rootCause: 'Loose Connections', noOfCases: 145, percentOfTotal: 35.2, remarks: 'Field verification needed' },
      { rootCause: 'Overload', noOfCases: 98, percentOfTotal: 23.8, remarks: 'Recommend meter upgradation' },
      { rootCause: 'Poor Earthing', noOfCases: 82, percentOfTotal: 19.9, remarks: 'GIS & earthing audit needed' },
      { rootCause: 'Tamper / External Heat', noOfCases: 67, percentOfTotal: 16.3, remarks: 'Possible theft' },
      { rootCause: 'Others / Unknown', noOfCases: 20, percentOfTotal: 4.8, remarks: 'Investigation pending' },
    ];
  }

  // Topic 4: Load Violation & Enhancement Recommendation Report
  getLoadViolationSummary(): LoadViolationSummary[] {
    return [
      { label: 'Total Consumers Analyzed', value: 'XXXX' },
      { label: 'Consumers with MD > SL (≥3 Months)', value: 'XXX' },
      { label: 'Consumers with MD > SL (≥6 Months)', value: 'XXX' },
      { label: 'Load Enhancement Recommended', value: 'XXX' },
    ];
  }

  getLoadViolationConsumers(): LoadViolationConsumer[] {
    return [
      { id: '1', sNo: 1, consumerNo: '1000123456', consumerName: 'M/s ABC Pvt Ltd', feederDT: 'Feeder-12 / DT-03', sanctionedLoad: 50.0, mdLastMonths: '62.5, 65.1, 61.3', noOfMonthsGreaterThanSL: 3, percentOverloadMax: 30, recommendation: 'Load enhancement to 70 kW', remarks: 'Letter issued' },
      { id: '2', sNo: 2, consumerNo: '1000456789', consumerName: 'M/s XYZ Ltd.', feederDT: 'Feeder-21 / DT-09', sanctionedLoad: 25.0, mdLastMonths: '31.2, 34.5, 33.0, 36.0, 32.5, 35.8', noOfMonthsGreaterThanSL: 6, percentOverloadMax: 44, recommendation: 'Load enhancement to 40 kW', remarks: 'High overload' },
      { id: '3', sNo: 3, consumerNo: '1000789123', consumerName: 'Mr. Raj Singh', feederDT: 'Feeder-07 / DT-02', sanctionedLoad: 10.0, mdLastMonths: '10.5, 11.0, 10.2', noOfMonthsGreaterThanSL: 3, percentOverloadMax: 10, recommendation: 'Review needed', remarks: 'Slightly over' },
    ];
  }

  getLoadViolationPriorities(): LoadViolationPriority[] {
    return [
      { priorityLevel: 'High', criteria: '>40% Overload for ≥3 Months', noOfConsumers: 45 },
      { priorityLevel: 'Medium', criteria: '20–40% Overload for ≥3 Months', noOfConsumers: 128 },
      { priorityLevel: 'Low', criteria: '0–20% Overload or <3 Months', noOfConsumers: 234 },
    ];
  }

  getLoadEnhancementProcess(): LoadEnhancementProcess[] {
    return [
      { stepNo: 1, activity: 'Identify consumer with >MD vs SL', responsibility: 'AMISP / MDMS', timeline: 'Monthly' },
      { stepNo: 2, activity: 'Verify meter health and demand trends', responsibility: 'AMISP / M&P', timeline: '3 Days' },
      { stepNo: 3, activity: 'Notify consumer for voluntary load enhancement', responsibility: 'Discom', timeline: '7 Days' },
      { stepNo: 4, activity: 'If no action, initiate enforcement/penalty', responsibility: 'Vigilance Cell', timeline: '15 Days' },
      { stepNo: 5, activity: 'Update sanctioned load post consumer approval', responsibility: 'Billing Team', timeline: '3–5 Days' },
    ];
  }

  // Topic 5: Exception Billing Report for Smart Meter Consumers
  getExceptionBillingSummary(): ExceptionBillingSummary[] {
    return [
      { label: 'Total Smart Meter Consumers', value: 'XXXXX' },
      { label: 'Billed Normally', value: 'XXXX' },
      { label: 'Billed on Exception Basis', value: 'XXX' },
      { label: '% on Exception Billing', value: 'X.X%' },
      { label: 'Action Required', value: 'Yes' },
    ];
  }

  getExceptionBillingConsumers(): ExceptionBillingConsumer[] {
    return [
      { id: '1', sNo: 1, consumerNo: '1234567890', consumerName: 'Mr. Rakesh S.', meterNo: 'SMTR00123', feederDT: 'FDR-10 / DT-3', sanctionedLoad: 3.0, billingMethodUsed: 'Average', reasonForExceptionBilling: 'Meter Not Communicating', consumptionUsedForBilling: 182, actualExpected: '210 (Last 3 months avg)', remarksActionRequired: 'Replace modem' },
      { id: '2', sNo: 2, consumerNo: '9876543210', consumerName: 'Ms. Neeta P.', meterNo: 'SMTR00876', feederDT: 'FDR-12 / DT-5', sanctionedLoad: 5.0, billingMethodUsed: 'Manual Entry', reasonForExceptionBilling: 'Tamper Lock / Billing Halt', consumptionUsedForBilling: 0, actualExpected: '295', remarksActionRequired: 'Tamper inspection pending' },
      { id: '3', sNo: 3, consumerNo: '1122334455', consumerName: 'Mr. Vinod M.', meterNo: 'SMTR00456', feederDT: 'FDR-11 / DT-4', sanctionedLoad: 4.0, billingMethodUsed: 'Provisional', reasonForExceptionBilling: 'Event Overflow / System Error', consumptionUsedForBilling: 250, actualExpected: 'Not available', remarksActionRequired: 'Rebill required' },
    ];
  }

  getExceptionBillingCategories(): ExceptionBillingCategory[] {
    return [
      { reason: 'Meter not communicating (>48 hrs)', noOfConsumers: 245, percentShare: 42, suggestedAction: 'Check modem/network health' },
      { reason: 'Tamper events', noOfConsumers: 128, percentShare: 22, suggestedAction: 'Field inspection needed' },
      { reason: 'Zero consumption billed', noOfConsumers: 98, percentShare: 17, suggestedAction: 'Cross-check with profile data' },
      { reason: 'Manual data upload', noOfConsumers: 67, percentShare: 11, suggestedAction: 'Investigate override source' },
      { reason: 'System errors', noOfConsumers: 48, percentShare: 8, suggestedAction: 'Rebilling from MDMS data' },
    ];
  }

  // Topic 6: Revenue Protection Report – Revenue analytics
  getRevenueAnalyticsSummary(): RevenueAnalyticsSummary[] {
    return [
      { label: 'Total Billed Revenue (₹ Cr)', value: '258.4' },
      { label: 'Total Energy Sold (MU)', value: '1,247' },
      { label: 'Avg. Billing Efficiency (%)', value: '94.6%' },
      { label: 'Revenue Loss Estimate (₹ Cr)', value: '14.7' },
      { label: 'Automatic Compensation Paid (₹ Cr)', value: '0.82' },
      { label: '% Consumers Receiving Compensation', value: '1.8%' },
    ];
  }

  getRevenueAnalyticsSegments(): RevenueAnalyticsSegment[] {
    return [
      { consumerSegment: 'Domestic (Urban)', energySold: '420.6', revenue: '94.2', avgTariff: '5.61', compensationPaid: '0.32', notes: 'Peak billing during summer evenings' },
      { consumerSegment: 'Domestic (Rural)', energySold: '198.3', revenue: '36.4', avgTariff: '4.52', compensationPaid: '0.18', notes: 'Higher outage compensation due to rural feeder faults' },
      { consumerSegment: 'Industrial LT', energySold: '302.1', revenue: '64.8', avgTariff: '5.38', compensationPaid: '0.05', notes: 'Minimal outage impact' },
      { consumerSegment: 'Industrial HT', energySold: '185.7', revenue: '52.9', avgTariff: '7.15', compensationPaid: '0.02', notes: 'Contract demand penalties recovered' },
      { consumerSegment: 'Commercial', energySold: '106.4', revenue: '36.3', avgTariff: '6.91', compensationPaid: '0.15', notes: 'Shops/offices affected during peak' },
      { consumerSegment: 'Agricultural', energySold: '34.9', revenue: '4.7', avgTariff: '1.35', compensationPaid: '0.10', notes: 'Govt. subsidy portion excluded' },
    ];
  }

  getAutomaticCompensationSummary(): AutomaticCompensationSummary[] {
    return [
      { cause: 'Sustained Outages (> X hrs)', consumersAffected: 12482, totalAmountPaid: '0.62', avgAmountPerConsumer: '497', remarks: 'Mostly rural areas' },
      { cause: 'Voltage Fluctuations', consumersAffected: 1420, totalAmountPaid: '0.08', avgAmountPerConsumer: '563', remarks: 'Urban commercial feeders' },
      { cause: 'Other (Billing Disputes, Meter Issues)', consumersAffected: 2185, totalAmountPaid: '0.12', avgAmountPerConsumer: '549', remarks: 'Domestic urban mix' },
    ];
  }

  // Topic 7: Low Power Factor Analysis Report
  getPowerFactorSummary(): PowerFactorSummary[] {
    return [
      { label: 'Total Consumers Analyzed', value: '12,450' },
      { label: 'Avg. Power Factor', value: '0.82' },
      { label: 'Consumers Below Threshold', value: '2,145 (17.2%)' },
      { label: 'Highest PF Defaulter', value: '0.54' },
      { label: 'Estimated Revenue Loss', value: '₹ 18.6 Cr / month' },
      { label: 'Improvement Potential', value: '₹ 14.2 Cr / month if PF ≥ 0.90' },
    ];
  }

  getPowerFactorClassifications(): PowerFactorClassification[] {
    return [
      { pfRange: '≥ 0.95', category: 'Excellent' },
      { pfRange: '0.90 – 0.95', category: 'Good' },
      { pfRange: '0.85 – 0.90', category: 'Moderate' },
      { pfRange: '0.75 – 0.85', category: 'Poor' },
      { pfRange: '< 0.75', category: 'Critical' },
    ];
  }

  getPowerFactorHistorical(): PowerFactorHistorical[] {
    return [
      { date: '01-Aug-2025', avgPF: 0.81, noOfConsumersBelowLimit: 2320, estimatedKVAhPenalty: '12.4 Lakh', revenueLoss: '0.62' },
      { date: '02-Aug-2025', avgPF: 0.83, noOfConsumersBelowLimit: 2145, estimatedKVAhPenalty: '11.8 Lakh', revenueLoss: '0.59' },
    ];
  }

  getPowerFactorForecast(): PowerFactorForecast[] {
    return [
      { pfRange: '< 0.75', forecastedNoOfConsumers: 550, expectedChangePercent: 5, revenueRisk: '3.5', keyRiskSegments: 'Industrial HT' },
      { pfRange: '0.75 – 0.85', forecastedNoOfConsumers: 1850, expectedChangePercent: 3, revenueRisk: '10.7', keyRiskSegments: 'Industrial LT' },
      { pfRange: '0.85 – 0.90', forecastedNoOfConsumers: 2420, expectedChangePercent: -2, revenueRisk: '4.4', keyRiskSegments: 'Commercial' },
      { pfRange: '≥ 0.90', forecastedNoOfConsumers: 7630, expectedChangePercent: 1, revenueRisk: '—', keyRiskSegments: 'Domestic' },
    ];
  }

  getPowerFactorSegments(): PowerFactorSegment[] {
    return [
      { consumerType: 'Industrial HT', avgPF: 0.79, shareOfLowPFCases: '42%', notes: 'Heavy motor loads, low capacitor use' },
      { consumerType: 'Industrial LT', avgPF: 0.81, shareOfLowPFCases: '31%', notes: 'Mixed machinery usage' },
      { consumerType: 'Commercial', avgPF: 0.84, shareOfLowPFCases: '15%', notes: 'HVAC-heavy loads' },
      { consumerType: 'Agricultural', avgPF: 0.77, shareOfLowPFCases: '8%', notes: 'Pump sets without correction' },
      { consumerType: 'Others', avgPF: 0.85, shareOfLowPFCases: '4%', notes: 'Miscellaneous' },
    ];
  }

  // Topic 8: Revenue Protection Analysis Report: Recharge Trends vs Consumption
  getRechargeTrendsSummary(): RechargeTrendsSummary[] {
    return [
      { label: 'Total Consumers Analyzed', value: '84,562' },
      { label: 'Consumers with Gap > Threshold', value: '3,412 (4.03%)' },
      { label: 'Max Positive Gap (Recharge > Consumption)', value: '₹ 14,200' },
      { label: 'Max Negative Gap (Consumption > Recharge)', value: '₹ 9,870' },
      { label: 'Avg. Gap % (Positive)', value: '+12.4%' },
      { label: 'Avg. Gap % (Negative)', value: '-9.7%' },
      { label: 'Top Risk Category', value: 'High-consumption domestic in T5 ToD' },
    ];
  }

  getRechargeTrendsSegments(): RechargeTrendsSegment[] {
    return [
      { segment: 'Domestic Urban', consumersAnalyzed: 42315, greaterThanThresholdGaps: 1280, avgPositiveGapPercent: 14.8, avgNegativeGapPercent: 11.3, riskNotes: 'High ToD usage' },
      { segment: 'Industrial LT', consumersAnalyzed: 8204, greaterThanThresholdGaps: 610, avgPositiveGapPercent: 9.2, avgNegativeGapPercent: 8.5, riskNotes: 'Stable patterns' },
      { segment: 'Commercial', consumersAnalyzed: 12075, greaterThanThresholdGaps: 524, avgPositiveGapPercent: 11.0, avgNegativeGapPercent: 9.1, riskNotes: 'Peak hour variations' },
      { segment: 'Agricultural', consumersAnalyzed: 5640, greaterThanThresholdGaps: 315, avgPositiveGapPercent: 8.1, avgNegativeGapPercent: 7.5, riskNotes: 'Seasonal impact' },
      { segment: 'Others', consumersAnalyzed: 16328, greaterThanThresholdGaps: 683, avgPositiveGapPercent: 10.4, avgNegativeGapPercent: 8.0, riskNotes: 'Mixed patterns' },
    ];
  }

  getRechargeTrendsConsumers(): RechargeTrendsConsumer[] {
    return [
      { id: '1', consumerID: 'C10245', name: 'Rajesh Kumar', circle: 'Central', division: 'Div-A', recharge: '5,200', consumption: '7,800', creditBalance: '150', gapPercent: '-33%', riskLevel: 'High' },
      { id: '2', consumerID: 'C54211', name: 'Sunil Traders', circle: 'North', division: 'Div-C', recharge: '14,000', consumption: '12,400', creditBalance: '1,800', gapPercent: '+12%', riskLevel: 'Medium' },
      { id: '3', consumerID: 'C89324', name: 'MegaTech Ltd', circle: 'West', division: 'Div-B', recharge: '8,500', consumption: '9,900', creditBalance: '0', gapPercent: '-14%', riskLevel: 'High' },
    ];
  }

  // Topic 9: Revenue Protection – Defective Meter Analysis Report
  getDefectiveMeterSummary(): DefectiveMeterSummary[] {
    return [
      { label: 'Total Defective Meters Identified', value: '2,385' },
      { label: '% of Total Consumer Base', value: '1.9%' },
      { label: 'Highest Defective Meter Count – Circle', value: 'Chennai North (462)' },
      { label: 'Average Meter Age at Failure', value: '6.3 years' },
      { label: 'Commonest Defect Cause', value: 'Communication Failure (36%)' },
      { label: 'Average Resolution Time', value: '18 days' },
    ];
  }

  getDefectiveMeterDetails(): DefectiveMeterDetail[] {
    return [
      { id: '1', circle: 'Chennai North', division: 'Div-A', subdivision: 'Sub-1', consumerNo: '1234567890', name: 'Mr. A. Kumar', meterNo: 'MTR00123', category: 'Domestic', defectReason: 'Communication Failure', ageing: 45, dateReported: '15-Jul-2025', status: 'Pending' },
      { id: '2', circle: 'Madurai South', division: 'Div-B', subdivision: 'Sub-2', consumerNo: '9876543210', name: 'Ms. R. Devi', meterNo: 'MTR00456', category: 'Commercial', defectReason: 'Burnt Meter', ageing: 32, dateReported: '28-Jul-2025', status: 'In Progress' },
      { id: '3', circle: 'Coimbatore East', division: 'Div-C', subdivision: 'Sub-3', consumerNo: '1122334455', name: 'M/s XYZ Industries', meterNo: 'MTR00987', category: 'Industrial', defectReason: 'Energy Circuit Fault', ageing: 28, dateReported: '01-Aug-2025', status: 'Pending' },
    ];
  }

  getDefectiveMeterForecast(): DefectiveMeterForecast[] {
    return [
      { circle: 'Chennai North', forecastedDefectiveCases: 480, expectedGrowthPercent: 3.8, keyRiskFactors: 'High ageing meter population' },
      { circle: 'Madurai South', forecastedDefectiveCases: 305, expectedGrowthPercent: 2.9, keyRiskFactors: 'Overloaded industrial feeders' },
      { circle: 'Coimbatore East', forecastedDefectiveCases: 255, expectedGrowthPercent: 4.4, keyRiskFactors: 'Poor meter sealing quality' },
    ];
  }

  getDefectiveMeterReasons(): DefectiveMeterReason[] {
    return [
      { reason: 'Communication Failure', shareOfTotalCases: '36%', notes: 'Frequent in AMR-connected meters' },
      { reason: 'Burnt Meter / CT/PT', shareOfTotalCases: '24%', notes: 'Often during summer high load' },
      { reason: 'Energy Circuit Fault', shareOfTotalCases: '20%', notes: 'Internal component ageing' },
      { reason: 'Display Failure', shareOfTotalCases: '12%', notes: 'Common in >7 year old meters' },
      { reason: 'Others', shareOfTotalCases: '8%', notes: 'Physical damage, tampering' },
    ];
  }

  // Topic 10: Disconnected Prepaid Consumers Report
  getDisconnectedPrepaidSummary(): DisconnectedPrepaidSummary[] {
    return [
      { label: 'Total Prepaid Consumers', value: 'XXXXX' },
      { label: 'Consumers with Negative Balance', value: 'XXXX' },
      { label: 'Negative Balance > 3 Days', value: 'XXX' },
      { label: 'Disconnected by Meter (Relay OFF)', value: 'XX%' },
      { label: 'Suspected Vacant / Inactive', value: 'XXX' },
      { label: 'Revenue At Risk (₹)', value: '₹XXXX.XX' },
    ];
  }

  getDisconnectedPrepaidConsumers(): DisconnectedPrepaidConsumer[] {
    return [
      { id: '1', sNo: 1, consumerNo: '1234567890', name: 'Mr. A. Sharma', mobileNo: '9876543210', feederDT: 'FDR-12 / DT-5', lastRechargeDate: '01-Aug-2025', daysSinceLastRecharge: 6, balance: '-₹45.60', relayStatus: 'OFF', disconnectionDate: '04-Aug-2025', remarks: 'Possible vacant' },
      { id: '2', sNo: 2, consumerNo: '9876543211', name: 'Mrs. N. Verma', mobileNo: '7890123456', feederDT: 'FDR-14 / DT-2', lastRechargeDate: '02-Aug-2025', daysSinceLastRecharge: 5, balance: '-₹12.35', relayStatus: 'OFF', disconnectionDate: '05-Aug-2025', remarks: 'Auto disconnect' },
      { id: '3', sNo: 3, consumerNo: '1122334455', name: 'Mr. Z. Khan', mobileNo: '9090909090', feederDT: 'FDR-10 / DT-3', lastRechargeDate: '31-Jul-2025', daysSinceLastRecharge: 7, balance: '-₹78.00', relayStatus: 'OFF', disconnectionDate: '03-Aug-2025', remarks: 'High arrear risk' },
    ];
  }

  getDisconnectedPrepaidCategories(): DisconnectedPrepaidCategory[] {
    return [
      { daysSinceLastRecharge: '4–7 days', noOfConsumers: 245, percentOfTotal: '45.2%', cumulativeBalance: '₹12,450.50' },
      { daysSinceLastRecharge: '8–15 days', noOfConsumers: 178, percentOfTotal: '32.8%', cumulativeBalance: '₹18,920.75' },
      { daysSinceLastRecharge: '>15 days', noOfConsumers: 119, percentOfTotal: '22.0%', cumulativeBalance: '₹28,340.25' },
    ];
  }
}

