import { Injectable } from '@angular/core';

// Topic 1: Consumers with Consumption Lower Than Expected Pattern
export interface LowerThanExpectedConsumer {
  id: string;
  srNo: number;
  consumerNo: string;
  consumerName: string;
  meterNo: string;
  avgMonthlyConsumptionLastYear: number;
  currentMonthConsumption: number;
  percentDeviation: number;
  expectedRange: string;
  remarks: string;
}

export interface LowerThanExpectedSummary {
  label: string;
  value: number | string;
}

// Topic 2: Day Use with Zero Night Consumption (moved from Consumer Data Analysis)
export interface DayNightSummary {
  label: string;
  value: number | string;
}

export interface DayNightConsumer {
  id: string;
  sNo: number;
  consumerNo: string;
  consumerName: string;
  meterNo: string;
  connectedLoad: number;
  dayConsumption: number;
  nightConsumption: number;
  totalConsumption: number;
  percentNightUse: number;
  meterStatus: string;
  suspicionFlag: 'YES' | 'NO' | 'Borderline';
  remarks: string;
}

// Topic 3: Net Meters with Export During Odd Hours
export interface NetMeterExportSummary {
  label: string;
  value: number | string;
}

export interface NetMeterExport {
  id: string;
  srNo: number;
  consumerNumber: string;
  consumerName: string;
  meterNo: string;
  sanctionedLoad: number;
  exportKwhOddHours: number;
  timeSlotOfExport: string;
  datesOfOccurrence: string;
  remarks: string;
}

// Topic 4: Suspected Consumers Report – Tamper Analytics & Profiling
export interface TamperAnalyticsSummary {
  label: string;
  value: number | string;
}

export interface TamperEvent {
  tamperEvent: string;
  weightage: number;
  description: string;
}

export interface SuspectedTamperConsumer {
  id: string;
  sNo: number;
  consumerNo: string;
  consumerName: string;
  locationFeeder: string;
  tamperEventsLast30Days: string;
  eventScore: number;
  riskCategory: 'High Risk' | 'Medium Risk' | 'Low Risk';
  theftHistory: 'Yes' | 'No';
  noOfPastTheftCases: number;
  remarks: string;
}

export interface AreaWiseTamperHeatmap {
  id: string;
  feederArea: string;
  highRiskConsumers: number;
  mediumRisk: number;
  theftHistoryCount: number;
  recentSiteVisits: number;
  actionTaken: string;
}

@Injectable({
  providedIn: 'root'
})
export class TheftProtectionDataService {
  constructor() { }

  // Topic 1: Consumers with Consumption Lower Than Expected Pattern
  getLowerThanExpectedSummary(): LowerThanExpectedSummary[] {
    return [
      { label: 'Total Consumers Analyzed', value: 'XXXX' },
      { label: 'Consumers with ≥15% Negative Deviation', value: 'XXX' },
      { label: '% of Total', value: 'X.X%' },
      { label: 'Action Recommended', value: 'Field verification' },
    ];
  }

  getLowerThanExpectedConsumers(): LowerThanExpectedConsumer[] {
    return [
      { id: '1', srNo: 1, consumerNo: '1234567890', consumerName: 'ABC Traders', meterNo: 'CM100123', avgMonthlyConsumptionLastYear: 540, currentMonthConsumption: 280, percentDeviation: -48.1, expectedRange: '459 – 621', remarks: 'Suspected bypass' },
      { id: '2', srNo: 2, consumerNo: '9876543210', consumerName: 'XYZ Industries', meterNo: 'CM100456', avgMonthlyConsumptionLastYear: 1200, currentMonthConsumption: 1015, percentDeviation: -15.4, expectedRange: '1020 – 1380', remarks: 'Needs site verification' },
      { id: '3', srNo: 3, consumerNo: '1122334455', consumerName: 'DEF Manufacturing', meterNo: 'CM100789', avgMonthlyConsumptionLastYear: 850, currentMonthConsumption: 620, percentDeviation: -27.1, expectedRange: '723 – 978', remarks: 'Possible load reduction' },
      { id: '4', srNo: 4, consumerNo: '5566778899', consumerName: 'GHI Commercial', meterNo: 'CM101234', avgMonthlyConsumptionLastYear: 680, currentMonthConsumption: 480, percentDeviation: -29.4, expectedRange: '578 – 782', remarks: 'Field inspection required' },
      { id: '5', srNo: 5, consumerNo: '9900112233', consumerName: 'JKL Services', meterNo: 'CM101567', avgMonthlyConsumptionLastYear: 950, currentMonthConsumption: 720, percentDeviation: -24.2, expectedRange: '808 – 1093', remarks: 'Monitor next billing cycle' },
    ];
  }

  // Topic 2: Day Use with Zero Night Consumption
  getDayNightSummary(): DayNightSummary[] {
    return [
      { label: 'Total Domestic Consumers Analyzed', value: 28450 },
      { label: 'Consumers with Day-Only Consumption', value: 342 },
      { label: '% of Total', value: '1.2%' },
      { label: 'Action Recommended', value: 'Field verification' },
    ];
  }

  getDayNightConsumers(): DayNightConsumer[] {
    return [
      { id: '1', sNo: 1, consumerNo: '1234567890', consumerName: 'Mr. A. Sharma', meterNo: 'MTR00123', connectedLoad: 5.0, dayConsumption: 14.5, nightConsumption: 0.0, totalConsumption: 14.5, percentNightUse: 0.00, meterStatus: 'Communicating', suspicionFlag: 'YES', remarks: 'Possible bypass at night' },
      { id: '2', sNo: 2, consumerNo: '9876543210', consumerName: 'Ms. R. Gupta', meterNo: 'MTR00456', connectedLoad: 3.0, dayConsumption: 9.8, nightConsumption: 0.0, totalConsumption: 9.8, percentNightUse: 0.00, meterStatus: 'Normal', suspicionFlag: 'YES', remarks: 'Requires field check' },
      { id: '3', sNo: 3, consumerNo: '1122334455', consumerName: 'Mr. K. Yadav', meterNo: 'MTR00987', connectedLoad: 2.5, dayConsumption: 8.3, nightConsumption: 0.2, totalConsumption: 8.5, percentNightUse: 2.35, meterStatus: 'Communicating', suspicionFlag: 'Borderline', remarks: 'Monitor next 7 days' },
      { id: '4', sNo: 4, consumerNo: '4455667788', consumerName: 'Mrs. S. Patel', meterNo: 'MTR01234', connectedLoad: 4.0, dayConsumption: 12.4, nightConsumption: 0.0, totalConsumption: 12.4, percentNightUse: 0.00, meterStatus: 'Normal', suspicionFlag: 'YES', remarks: 'Night disconnect suspected' },
      { id: '5', sNo: 5, consumerNo: '7788990011', consumerName: 'Mr. R. Singh', meterNo: 'MTR01567', connectedLoad: 3.5, dayConsumption: 10.2, nightConsumption: 0.1, totalConsumption: 10.3, percentNightUse: 0.97, meterStatus: 'Communicating', suspicionFlag: 'Borderline', remarks: 'Under observation' },
    ];
  }

  // Topic 3: Net Meters with Export During Odd Hours
  getNetMeterExportSummary(): NetMeterExportSummary[] {
    return [
      { label: 'Total Net Meters Analyzed', value: 'XXXX' },
      { label: 'Meters with Export During Odd Hours', value: 'XXX' },
      { label: '% of Total', value: 'X.X%' },
      { label: 'Action Recommended', value: 'Site inspection' },
    ];
  }

  getNetMeterExports(): NetMeterExport[] {
    return [
      { id: '1', srNo: 1, consumerNumber: '1234567890', consumerName: 'ABC Traders', meterNo: 'NM100123', sanctionedLoad: 5.0, exportKwhOddHours: 12.6, timeSlotOfExport: '02:00–03:00', datesOfOccurrence: '01-Aug, 03-Aug', remarks: 'Suspected reverse flow' },
      { id: '2', srNo: 2, consumerNumber: '9876543210', consumerName: 'XYZ Industries', meterNo: 'NM100456', sanctionedLoad: 10.0, exportKwhOddHours: 9.2, timeSlotOfExport: '23:30–00:30', datesOfOccurrence: '02-Aug, 05-Aug', remarks: 'Check installation' },
      { id: '3', srNo: 3, consumerNumber: '1122334455', consumerName: 'DEF Solar', meterNo: 'NM100789', sanctionedLoad: 7.5, exportKwhOddHours: 15.3, timeSlotOfExport: '20:00–21:00', datesOfOccurrence: '04-Aug, 06-Aug, 08-Aug', remarks: 'Verify inverter configuration' },
      { id: '4', srNo: 4, consumerNumber: '5566778899', consumerName: 'GHI Renewable', meterNo: 'NM101234', sanctionedLoad: 12.0, exportKwhOddHours: 8.7, timeSlotOfExport: '03:00–04:00', datesOfOccurrence: '05-Aug', remarks: 'Possible polarity issue' },
      { id: '5', srNo: 5, consumerNumber: '9900112233', consumerName: 'JKL Energy', meterNo: 'NM101567', sanctionedLoad: 8.0, exportKwhOddHours: 11.4, timeSlotOfExport: '22:00–23:00', datesOfOccurrence: '07-Aug, 09-Aug', remarks: 'Requires site visit' },
    ];
  }

  // Topic 4: Suspected Consumers Report – Tamper Analytics & Profiling
  getTamperAnalyticsSummary(): TamperAnalyticsSummary[] {
    return [
      { label: 'Total Consumers Analysed', value: 'XXXX' },
      { label: 'High-Risk', value: 'XXX' },
      { label: 'Medium-Risk', value: 'XXX' },
      { label: 'Low-Risk', value: 'XXX' },
      { label: 'Consumers with Theft History', value: 'XXX (Yes: X, No: X)' },
      { label: 'Consumers with Frequent Tamper Events', value: 'XXX' },
    ];
  }

  getTamperEvents(): TamperEvent[] {
    return [
      { tamperEvent: 'CT Bypass', weightage: 5, description: 'Potential bypass of metering circuit' },
      { tamperEvent: 'CT Open', weightage: 4, description: 'May indicate tampering or loose connections' },
      { tamperEvent: 'Neutral Disturbance', weightage: 3, description: 'Suspicious grounding or loop activity' },
      { tamperEvent: 'Magnetic Influence', weightage: 4, description: 'Strong indicator of tamper if repeated' },
      { tamperEvent: 'Cover Open', weightage: 2, description: 'Requires validation, could be maintenance or tamper' },
      { tamperEvent: 'Terminal Cover Open', weightage: 3, description: 'Often leads to meter bypass or jumpers' },
    ];
  }

  getSuspectedTamperConsumers(): SuspectedTamperConsumer[] {
    return [
      { id: '1', sNo: 1, consumerNo: '1000001234', consumerName: 'M/s ABC Power', locationFeeder: 'Feeder-23, Zone A', tamperEventsLast30Days: 'CT Bypass (2), CT Open (1)', eventScore: 14, riskCategory: 'High Risk', theftHistory: 'Yes', noOfPastTheftCases: 2, remarks: 'Site inspection required' },
      { id: '2', sNo: 2, consumerNo: '1000005678', consumerName: 'Mr. D. Kumar', locationFeeder: 'Feeder-14, Zone C', tamperEventsLast30Days: 'CT Open (3), Cover Open (1)', eventScore: 10, riskCategory: 'Medium Risk', theftHistory: 'No', noOfPastTheftCases: 0, remarks: 'Under observation' },
      { id: '3', sNo: 3, consumerNo: '1000009900', consumerName: 'M/s RST Ind.', locationFeeder: 'Feeder-08, Zone B', tamperEventsLast30Days: 'CT Bypass (1), Neutral Dist. (2)', eventScore: 9, riskCategory: 'Medium Risk', theftHistory: 'Yes', noOfPastTheftCases: 1, remarks: 'Historical bypass case' },
      { id: '4', sNo: 4, consumerNo: '1000012345', consumerName: 'Ms. P. Verma', locationFeeder: 'Feeder-15, Zone D', tamperEventsLast30Days: 'Magnetic Influence (2), Terminal Cover Open (1)', eventScore: 11, riskCategory: 'Medium Risk', theftHistory: 'No', noOfPastTheftCases: 0, remarks: 'Monitor closely' },
      { id: '5', sNo: 5, consumerNo: '1000016789', consumerName: 'M/s UVW Corp', locationFeeder: 'Feeder-31, Zone E', tamperEventsLast30Days: 'CT Bypass (3), CT Open (2)', eventScore: 23, riskCategory: 'High Risk', theftHistory: 'Yes', noOfPastTheftCases: 3, remarks: 'Immediate action required' },
    ];
  }

  getAreaWiseTamperHeatmap(): AreaWiseTamperHeatmap[] {
    return [
      { id: '1', feederArea: 'Feeder-23 (Zone A)', highRiskConsumers: 5, mediumRisk: 3, theftHistoryCount: 3, recentSiteVisits: 2, actionTaken: '2 FIRs' },
      { id: '2', feederArea: 'Feeder-14 (Zone C)', highRiskConsumers: 3, mediumRisk: 4, theftHistoryCount: 1, recentSiteVisits: 1, actionTaken: 'Pending' },
      { id: '3', feederArea: 'Feeder-08 (Zone B)', highRiskConsumers: 4, mediumRisk: 2, theftHistoryCount: 2, recentSiteVisits: 3, actionTaken: 'Disconnection' },
      { id: '4', feederArea: 'Feeder-15 (Zone D)', highRiskConsumers: 2, mediumRisk: 5, theftHistoryCount: 0, recentSiteVisits: 1, actionTaken: 'Under Review' },
      { id: '5', feederArea: 'Feeder-31 (Zone E)', highRiskConsumers: 6, mediumRisk: 3, theftHistoryCount: 4, recentSiteVisits: 4, actionTaken: '3 FIRs, 1 Disconnection' },
    ];
  }
}

