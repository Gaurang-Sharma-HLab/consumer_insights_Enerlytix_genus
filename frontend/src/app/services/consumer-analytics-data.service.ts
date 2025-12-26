import { Injectable } from '@angular/core';

// Topic 1: Abnormal Consumption Pattern
export interface AbnormalConsumptionSummary {
  label: string;
  value: number | string;
}

export interface ConsumptionCase {
  id: string;
  circle: string;
  division: string;
  subdivision: string;
  consumerNo: string;
  avgConsumption: number;
  currentMonth: number;
  percentChange: number;
  meterStatus: 'Working' | 'Faulty' | 'Pending';
  remarks: string;
}

// Topic 2: Zero Consumption Analysis
export interface ZeroConsumptionMetric {
  label: string;
  value: number | string;
}

export interface ZeroConsumptionCategory {
  category: string;
  count: number;
  percentage: number;
  comments: string;
}

export interface ZeroConsumptionConsumer {
  id: string;
  circle: string;
  division: string;
  subdivision: string;
  consumerNo: string;
  meterSerialNo: string;
  lastDataReceived: string;
  lastConsumption: number;
  communicationStatus: 'Healthy' | 'Fail';
  remarks: string;
}

// Topic 3: Consumption Drop Analysis
export interface ConsumptionDropSummary {
  parameter: string;
  consumerCount: number;
  totalDrop: number;
  avgDropPercent: number;
}

export interface ConsumptionDropConsumer {
  id: string;
  sNo: number;
  consumerNo: string;
  consumerName: string;
  installedDate: string;
  currentMonth: number;
  sameMonthLastYear: number;
  lastMonth: number;
  avgLast3Months: number;
  dropPercent: number;
  dropPercentVsLastMonth: number;
}

// Topic 4: Low Consumption Trend
export interface LowConsumptionSummary {
  category: string;
  consumerCount: number;
  percentOfTotal: number;
}

export interface LowConsumptionConsumer {
  id: string;
  sNo: number;
  consumerNo: string;
  name: string;
  sanctionedLoad: number;
  avgMonthlyConsumption: number;
  expectedConsumption: number;
  deviation: number;
  meterStatus: string;
  remarks: string;
}

// Topic 5: Consumption Lower Than Expected
export interface LowerThanExpectedConsumer {
  id: string;
  srNo: number;
  consumerNo: string;
  consumerName: string;
  meterNo: string;
  avgMonthlyLastYear: number;
  currentMonthConsumption: number;
  deviation: number;
  expectedRange: string;
  remarks: string;
}

// Topic 6: Day Use with Zero Night Consumption
// Topic 7: Consumer Profiling & Bucketing
export interface BucketLogic {
  bucketName: string;
  description: string;
  criteriaExample: string;
  purpose: string;
}

export interface ConsumerProfile {
  id: string;
  sNo: number;
  consumerNo: string;
  name: string;
  category: 'Domestic' | 'Commercial' | 'HT' | 'Agricultural';
  sanctionedLoad: number;
  avgMD: number;
  avgMonthlyConsumption: number;
  bucket: 'High Risk' | 'Medium Risk' | 'Low Risk' | 'Zero Use' | 'Seasonal' | 'High Usage' | 'Erratic';
  tamperEvents: number;
  previousTheft: string;
  actionsRequired: string;
}

export interface BucketSummary {
  category: string;
  highRisk: number;
  mediumRisk: number;
  lowRisk: number;
  zeroUse: number;
  total: number;
}

// Topic 8: Communication Gap & Ageing Analytics
export interface CommunicationGapSummary {
  label: string;
  value: number | string;
}

export interface CommunicationAgeingCategory {
  ageingCategory: string;
  count: number;
  percentOfTotalFailures: number;
  comments: string;
}

export interface CommunicationCircleBreakdown {
  id: string;
  circle: string;
  division: string;
  subdivision: string;
  totalMeters: number;
  communicationFailures: number;
  ageing30Days: number;
  neverCommunicated: number;
  remarks: string;
}

export interface CommunicationMeterDetail {
  id: string;
  consumerNo: string;
  meterNo: string;
  circle: string;
  lastDataReceived: string;
  daysSilent: number;
  commMode: string;
  signalStrength: string;
  siteVisitDone: 'Yes' | 'No';
  remarks: string;
}

export interface CommunicationRootCause {
  rootCause: string;
  caseCount: number;
  percentage: number;
  actionNeeded: string;
}

export interface CommunicationActionTracker {
  id: string;
  circle: string;
  category: string;
  meterCount: number;
  actionOwner: string;
  deadline: string;
  status: 'In Progress' | 'Pending' | 'Escalated' | 'Completed';
}

// Chart Data
export interface ChartDataPoint {
  name?: string;
  spike?: number;
  drop?: number;
  count?: number;
  month?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsumerAnalyticsDataService {
  // Topic 1: Abnormal Consumption Pattern
  getAbnormalConsumptionSummary(): AbnormalConsumptionSummary[] {
    return [
      { label: 'Total Consumers Analyzed', value: 45678 },
      { label: 'High Consumption Cases Identified', value: 1234 },
      { label: 'Low Consumption Cases Identified', value: 567 },
      { label: 'Consumers with Sudden Drop (>50%)', value: 189 },
      { label: 'Consumers with Sudden Spike (>200%)', value: 78 },
    ];
  }

  getHighConsumptionCases(): ConsumptionCase[] {
    return [
      { id: '1', circle: 'North', division: 'Div-A', subdivision: 'Sub-1', consumerNo: '1100458877', avgConsumption: 450, currentMonth: 1350, percentChange: 200, meterStatus: 'Working', remarks: 'Industrial unit expansion' },
      { id: '2', circle: 'South', division: 'Div-B', subdivision: 'Sub-2', consumerNo: '9988776655', avgConsumption: 320, currentMonth: 890, percentChange: 178, meterStatus: 'Pending', remarks: 'New machinery installed' },
      { id: '3', circle: 'East', division: 'Div-C', subdivision: 'Sub-3', consumerNo: '7766554433', avgConsumption: 280, currentMonth: 756, percentChange: 170, meterStatus: 'Working', remarks: 'Seasonal increase' },
      { id: '4', circle: 'West', division: 'Div-D', subdivision: 'Sub-4', consumerNo: '5544332211', avgConsumption: 520, currentMonth: 1300, percentChange: 150, meterStatus: 'Working', remarks: 'AC usage spike' },
      { id: '5', circle: 'Central', division: 'Div-E', subdivision: 'Sub-5', consumerNo: '3322114455', avgConsumption: 180, currentMonth: 432, percentChange: 140, meterStatus: 'Faulty', remarks: 'Meter check required' },
    ];
  }

  getLowConsumptionCases(): ConsumptionCase[] {
    return [
      { id: '1', circle: 'North', division: 'Div-A', subdivision: 'Sub-1', consumerNo: '1234567890', avgConsumption: 650, currentMonth: 45, percentChange: -93, meterStatus: 'Faulty', remarks: 'Suspected meter fault' },
      { id: '2', circle: 'South', division: 'Div-B', subdivision: 'Sub-2', consumerNo: '0987654321', avgConsumption: 420, currentMonth: 85, percentChange: -80, meterStatus: 'Working', remarks: 'Vacation mode' },
      { id: '3', circle: 'East', division: 'Div-C', subdivision: 'Sub-3', consumerNo: '1122334455', avgConsumption: 380, currentMonth: 95, percentChange: -75, meterStatus: 'Pending', remarks: 'Site verification needed' },
      { id: '4', circle: 'West', division: 'Div-D', subdivision: 'Sub-4', consumerNo: '5566778899', avgConsumption: 290, currentMonth: 87, percentChange: -70, meterStatus: 'Working', remarks: 'Reduced operations' },
      { id: '5', circle: 'Central', division: 'Div-E', subdivision: 'Sub-5', consumerNo: '9900112233', avgConsumption: 510, currentMonth: 178, percentChange: -65, meterStatus: 'Faulty', remarks: 'Bypass suspected' },
    ];
  }

  getSpikeChartData(): ChartDataPoint[] {
    return [
      { name: 'C-1001', spike: 320 },
      { name: 'C-1002', spike: 285 },
      { name: 'C-1003', spike: 260 },
      { name: 'C-1004', spike: 245 },
      { name: 'C-1005', spike: 230 },
      { name: 'C-1006', spike: 215 },
      { name: 'C-1007', spike: 205 },
      { name: 'C-1008', spike: 198 },
      { name: 'C-1009', spike: 190 },
      { name: 'C-1010', spike: 185 },
    ];
  }

  getDropChartData(): ChartDataPoint[] {
    return [
      { name: 'C-2001', drop: 92 },
      { name: 'C-2002', drop: 88 },
      { name: 'C-2003', drop: 82 },
      { name: 'C-2004', drop: 78 },
      { name: 'C-2005', drop: 72 },
      { name: 'C-2006', drop: 68 },
      { name: 'C-2007', drop: 65 },
      { name: 'C-2008', drop: 60 },
      { name: 'C-2009', drop: 56 },
      { name: 'C-2010', drop: 52 },
    ];
  }

  // Topic 2: Zero Consumption Analysis
  getZeroConsumptionMetrics(): ZeroConsumptionMetric[] {
    return [
      { label: 'Total Smart Consumers Analyzed', value: 32450 },
      { label: 'Zero Consumption (1 Month)', value: 1245 },
      { label: 'Zero Consumption (2+ Consecutive Months)', value: 456 },
      { label: 'Communication Healthy but Zero Units', value: 312 },
      { label: 'Communication Fail + Zero Units', value: 589 },
      { label: 'Meter Installed but Not Energized', value: 178 },
      { label: 'Zero Billing Instances', value: 234 },
    ];
  }

  getZeroConsumptionCategories(): ZeroConsumptionCategory[] {
    return [
      { category: 'Meter Installed – Not Energized', count: 178, percentage: 14.3, comments: 'New connections not yet energized' },
      { category: 'Communication Failure', count: 312, percentage: 25.1, comments: 'Last data received >30 days ago' },
      { category: 'Physical Bypass/Tampering Suspected', count: 234, percentage: 18.8, comments: 'Site verification needed' },
      { category: 'Meter Data Present – Zero Billing', count: 156, percentage: 12.5, comments: 'MDM sync or billing logic issue' },
      { category: 'Meter Fault (Technical Failure)', count: 189, percentage: 15.2, comments: 'AMISP to raise MCO' },
      { category: 'Disconnected Supply', count: 176, percentage: 14.1, comments: 'Permanent disconnection or dues' },
    ];
  }

  getZeroConsumptionConsumers(): ZeroConsumptionConsumer[] {
    return [
      { id: '1', circle: 'North', division: 'Div-A', subdivision: 'Sub-1', consumerNo: '1100458877', meterSerialNo: 'SMTR9876543', lastDataReceived: '12-Apr-2025', lastConsumption: 0, communicationStatus: 'Healthy', remarks: 'Suspect bypass – verify physically' },
      { id: '2', circle: 'South', division: 'Div-B', subdivision: 'Sub-2', consumerNo: '9988776655', meterSerialNo: 'SMTR8765432', lastDataReceived: '04-Mar-2025', lastConsumption: 0, communicationStatus: 'Fail', remarks: 'Meter offline – MDM escalation required' },
      { id: '3', circle: 'East', division: 'Div-C', subdivision: 'Sub-3', consumerNo: '7766554433', meterSerialNo: 'SMTR5432187', lastDataReceived: '20-Jun-2025', lastConsumption: 0, communicationStatus: 'Healthy', remarks: 'Likely disconnected supply' },
      { id: '4', circle: 'West', division: 'Div-D', subdivision: 'Sub-4', consumerNo: '5544332211', meterSerialNo: 'SMTR3214567', lastDataReceived: '15-May-2025', lastConsumption: 0, communicationStatus: 'Fail', remarks: 'Network coverage issue' },
      { id: '5', circle: 'Central', division: 'Div-E', subdivision: 'Sub-5', consumerNo: '3322114455', meterSerialNo: 'SMTR7654321', lastDataReceived: '08-Jun-2025', lastConsumption: 0, communicationStatus: 'Healthy', remarks: 'Meter not energized' },
    ];
  }

  getZeroConsumptionTrendData(): ChartDataPoint[] {
    return [
      { month: 'Jan', count: 1120 },
      { month: 'Feb', count: 1180 },
      { month: 'Mar', count: 1150 },
      { month: 'Apr', count: 1245 },
      { month: 'May', count: 1198 },
      { month: 'Jun', count: 1245 },
    ];
  }

  getCircleZeroConsumptionData(): ChartDataPoint[] {
    return [
      { name: 'North', count: 312 },
      { name: 'South', count: 287 },
      { name: 'East', count: 256 },
      { name: 'West', count: 198 },
      { name: 'Central', count: 192 },
    ];
  }

  // Topic 3: Consumption Drop Analysis
  getConsumptionDropSummary(): ConsumptionDropSummary[] {
    return [
      { parameter: 'Current Month vs. Same Month Last Year', consumerCount: 1234, totalDrop: 45678, avgDropPercent: 23.5 },
      { parameter: 'Current Month vs. Last Month', consumerCount: 987, totalDrop: 32456, avgDropPercent: 18.2 },
      { parameter: 'Current Month vs. Avg. of Last 3 Months', consumerCount: 856, totalDrop: 28934, avgDropPercent: 15.8 },
    ];
  }

  getConsumptionDropConsumers(): ConsumptionDropConsumer[] {
    return [
      { id: '1', sNo: 1, consumerNo: '1234567890', consumerName: 'M/s ABC Industries', installedDate: '15-Jan-2024', currentMonth: 850, sameMonthLastYear: 1450, lastMonth: 1200, avgLast3Months: 1180, dropPercent: -41.4, dropPercentVsLastMonth: -29.2 },
      { id: '2', sNo: 2, consumerNo: '0987654321', consumerName: 'XYZ Corporation', installedDate: '22-Feb-2024', currentMonth: 620, sameMonthLastYear: 980, lastMonth: 890, avgLast3Months: 920, dropPercent: -36.7, dropPercentVsLastMonth: -30.3 },
      { id: '3', sNo: 3, consumerNo: '1122334455', consumerName: 'PQR Enterprises', installedDate: '10-Mar-2024', currentMonth: 340, sameMonthLastYear: 520, lastMonth: 480, avgLast3Months: 490, dropPercent: -34.6, dropPercentVsLastMonth: -29.2 },
      { id: '4', sNo: 4, consumerNo: '5566778899', consumerName: 'LMN Trading Co.', installedDate: '05-Apr-2024', currentMonth: 190, sameMonthLastYear: 280, lastMonth: 265, avgLast3Months: 270, dropPercent: -32.1, dropPercentVsLastMonth: -28.3 },
      { id: '5', sNo: 5, consumerNo: '9900112233', consumerName: 'DEF Manufacturing', installedDate: '18-May-2024', currentMonth: 1120, sameMonthLastYear: 1580, lastMonth: 1450, avgLast3Months: 1490, dropPercent: -29.1, dropPercentVsLastMonth: -22.8 },
    ];
  }

  // Topic 4: Low Consumption Trend
  getLowConsumptionSummary(): LowConsumptionSummary[] {
    return [
      { category: '>30% Lower Consumption than SLD', consumerCount: 567, percentOfTotal: 12.4 },
      { category: 'Excluded Zero Consumption Cases', consumerCount: 0, percentOfTotal: 0 },
      { category: 'Total Consumers Analyzed', consumerCount: 4567, percentOfTotal: 100 },
    ];
  }

  getLowConsumptionConsumers(): LowConsumptionConsumer[] {
    return [
      { id: '1', sNo: 1, consumerNo: '10000012', name: 'M/s ABC Ltd.', sanctionedLoad: 15.0, avgMonthlyConsumption: 320, expectedConsumption: 540, deviation: -40.74, meterStatus: 'Normal', remarks: 'To be verified' },
      { id: '2', sNo: 2, consumerNo: '10000056', name: 'M/s XYZ Traders', sanctionedLoad: 10.0, avgMonthlyConsumption: 210, expectedConsumption: 360, deviation: -41.67, meterStatus: 'Communication Issue', remarks: 'Consumption low' },
      { id: '3', sNo: 3, consumerNo: '10000089', name: 'PQR Industries', sanctionedLoad: 8.0, avgMonthlyConsumption: 150, expectedConsumption: 288, deviation: -47.92, meterStatus: 'Normal', remarks: 'Seasonal variation' },
      { id: '4', sNo: 4, consumerNo: '10000123', name: 'LMN Enterprises', sanctionedLoad: 12.0, avgMonthlyConsumption: 280, expectedConsumption: 432, deviation: -35.19, meterStatus: 'Normal', remarks: 'Load optimization' },
      { id: '5', sNo: 5, consumerNo: '10000156', name: 'DEF Corporation', sanctionedLoad: 20.0, avgMonthlyConsumption: 480, expectedConsumption: 720, deviation: -33.33, meterStatus: 'Faulty', remarks: 'Meter check needed' },
    ];
  }

  // Topic 5: Consumption Lower Than Expected
  getLowerThanExpectedConsumers(): LowerThanExpectedConsumer[] {
    return [
      { id: '1', srNo: 1, consumerNo: '12345678', consumerName: 'ABC Traders', meterNo: 'CM1001', avgMonthlyLastYear: 540, currentMonthConsumption: 280, deviation: -48.1, expectedRange: '459 – 621', remarks: 'Suspected bypass' },
      { id: '2', srNo: 2, consumerNo: '98765432', consumerName: 'XYZ Industries', meterNo: 'CM1004', avgMonthlyLastYear: 1200, currentMonthConsumption: 1015, deviation: -15.4, expectedRange: '1020 – 1380', remarks: 'Needs site verification' },
      { id: '3', srNo: 3, consumerNo: '11223344', consumerName: 'PQR Enterprises', meterNo: 'CM1007', avgMonthlyLastYear: 780, currentMonthConsumption: 390, deviation: -50.0, expectedRange: '663 – 897', remarks: 'Under investigation' },
      { id: '4', srNo: 4, consumerNo: '55667788', consumerName: 'LMN Trading', meterNo: 'CM1010', avgMonthlyLastYear: 450, currentMonthConsumption: 320, deviation: -28.9, expectedRange: '382 – 518', remarks: 'Monitor next month' },
      { id: '5', srNo: 5, consumerNo: '99001122', consumerName: 'DEF Corp', meterNo: 'CM1013', avgMonthlyLastYear: 920, currentMonthConsumption: 580, deviation: -37.0, expectedRange: '782 – 1058', remarks: 'Field verification scheduled' },
    ];
  }

  // Topic 7: Consumer Profiling & Bucketing
  getBucketLogic(): BucketLogic[] {
    return [
      { bucketName: 'High Risk', description: 'Abnormal usage, tamper events, mismatch with sanctioned load, theft-prone', criteriaExample: '>30% variation, frequent tamper events, MD > SL for 3+ months', purpose: 'Site inspection, Load enhancement, Vigilance' },
      { bucketName: 'Medium Risk', description: 'Moderate variation, occasional tamper or billing issues', criteriaExample: 'Consumption spike/drop 10–30%, MD ≈ SL', purpose: 'Monitoring, Alerts' },
      { bucketName: 'Low Risk', description: 'Stable and expected consumption patterns', criteriaExample: 'Monthly variation <10%, MD < 80% of SL', purpose: 'Normal billing' },
      { bucketName: 'Zero/Near Zero', description: 'Very low consumption with active connection', criteriaExample: '<10 kWh/month, connected load >2 kW', purpose: 'Door locked / theft suspicion' },
      { bucketName: 'Seasonal', description: 'Usage fluctuates with season (agriculture, AC users)', criteriaExample: 'Peak usage in select months', purpose: 'Load planning, tariff suggestion' },
      { bucketName: 'High Usage', description: 'Usage consistently much higher than sanctioned load', criteriaExample: 'Avg MD >120% of SL over 3+ months', purpose: 'Load enhancement action' },
      { bucketName: 'Erratic', description: 'Large random spikes/dips in daily/monthly use', criteriaExample: 'Std Dev > threshold', purpose: 'Meter health check, site visit' },
    ];
  }

  getConsumerProfiles(): ConsumerProfile[] {
    return [
      { id: '1', sNo: 1, consumerNo: '1234567', name: 'Mr. A. Kumar', category: 'Domestic', sanctionedLoad: 4.0, avgMD: 6.2, avgMonthlyConsumption: 550, bucket: 'High Risk', tamperEvents: 3, previousTheft: 'Yes (1)', actionsRequired: 'Load enhancement' },
      { id: '2', sNo: 2, consumerNo: '9876543', name: 'S.S. Traders', category: 'Commercial', sanctionedLoad: 10.0, avgMD: 9.2, avgMonthlyConsumption: 920, bucket: 'Medium Risk', tamperEvents: 1, previousTheft: 'No', actionsRequired: 'Monitor next 2 months' },
      { id: '3', sNo: 3, consumerNo: '1122334', name: 'Ms. Rani P.', category: 'Domestic', sanctionedLoad: 2.0, avgMD: 0.1, avgMonthlyConsumption: 6, bucket: 'Zero Use', tamperEvents: 0, previousTheft: 'No', actionsRequired: 'Suspected vacant / bypass' },
      { id: '4', sNo: 4, consumerNo: '4455667', name: 'Green Farms', category: 'Agricultural', sanctionedLoad: 15.0, avgMD: 14.5, avgMonthlyConsumption: 1200, bucket: 'Seasonal', tamperEvents: 0, previousTheft: 'No', actionsRequired: 'Normal - seasonal pattern' },
      { id: '5', sNo: 5, consumerNo: '7788990', name: 'ABC Industries', category: 'HT', sanctionedLoad: 50.0, avgMD: 65.0, avgMonthlyConsumption: 4500, bucket: 'High Usage', tamperEvents: 0, previousTheft: 'No', actionsRequired: 'Load enhancement notice' },
    ];
  }

  getBucketSummary(): BucketSummary[] {
    return [
      { category: 'Domestic', highRisk: 1200, mediumRisk: 3450, lowRisk: 9800, zeroUse: 900, total: 15350 },
      { category: 'Commercial', highRisk: 850, mediumRisk: 1200, lowRisk: 3100, zeroUse: 250, total: 5400 },
      { category: 'HT', highRisk: 120, mediumRisk: 180, lowRisk: 500, zeroUse: 10, total: 810 },
      { category: 'Agricultural', highRisk: 400, mediumRisk: 900, lowRisk: 2800, zeroUse: 300, total: 4400 },
      { category: 'Total', highRisk: 2570, mediumRisk: 5730, lowRisk: 16200, zeroUse: 1460, total: 25960 },
    ];
  }

  // Topic 8: Communication Gap & Ageing Analytics
  getCommunicationGapSummary(): CommunicationGapSummary[] {
    return [
      { label: 'Total Smart Meters Installed', value: 45678 },
      { label: 'Total Communication Failures (Active Meters)', value: 3245 },
      { label: 'Meters Not Communicating for >7 Days', value: 1890 },
      { label: 'Meters Not Communicating for >30 Days', value: 856 },
      { label: 'Meters Not Communicating Since Installation', value: 234 },
      { label: '% of Meters with >30 Days Failure', value: '1.9%' },
    ];
  }

  getCommunicationAgeingCategories(): CommunicationAgeingCategory[] {
    return [
      { ageingCategory: '0-7 Days', count: 1355, percentOfTotalFailures: 41.8, comments: 'Recent failures, likely temporary' },
      { ageingCategory: '8-30 Days', count: 1034, percentOfTotalFailures: 31.9, comments: 'Requires attention' },
      { ageingCategory: '31-90 Days', count: 512, percentOfTotalFailures: 15.8, comments: 'Critical - needs immediate action' },
      { ageingCategory: '91-180 Days', count: 234, percentOfTotalFailures: 7.2, comments: 'Very critical - escalation required' },
      { ageingCategory: '>180 Days', count: 110, percentOfTotalFailures: 3.4, comments: 'Extremely critical - field visit mandatory' },
    ];
  }

  getCommunicationCircleBreakdown(): CommunicationCircleBreakdown[] {
    return [
      { id: '1', circle: 'North', division: 'Div-A', subdivision: 'Sub-1', totalMeters: 12345, communicationFailures: 456, ageing30Days: 189, neverCommunicated: 45, remarks: 'RF coverage issue in remote areas' },
      { id: '2', circle: 'South', division: 'Div-B', subdivision: 'Sub-2', totalMeters: 11234, communicationFailures: 389, ageing30Days: 156, neverCommunicated: 32, remarks: 'SIM activation pending' },
      { id: '3', circle: 'East', division: 'Div-C', subdivision: 'Sub-3', totalMeters: 9876, communicationFailures: 312, ageing30Days: 134, neverCommunicated: 28, remarks: 'Modem replacement needed' },
      { id: '4', circle: 'West', division: 'Div-D', subdivision: 'Sub-4', totalMeters: 8765, communicationFailures: 278, ageing30Days: 112, neverCommunicated: 24, remarks: 'Network infrastructure upgrade required' },
      { id: '5', circle: 'Central', division: 'Div-E', subdivision: 'Sub-5', totalMeters: 3458, communicationFailures: 98, ageing30Days: 45, neverCommunicated: 12, remarks: 'Mostly resolved' },
    ];
  }

  getCommunicationMeterDetails(): CommunicationMeterDetail[] {
    return [
      { id: '1', consumerNo: '1100458877', meterNo: 'SMTR9876543', circle: 'North', lastDataReceived: '15-Apr-2025', daysSilent: 72, commMode: 'RF', signalStrength: 'Weak', siteVisitDone: 'No', remarks: 'RF repeater needed' },
      { id: '2', consumerNo: '9988776655', meterNo: 'SMTR8765432', circle: 'South', lastDataReceived: '20-Mar-2025', daysSilent: 98, commMode: 'Cellular', signalStrength: 'No Signal', siteVisitDone: 'Yes', remarks: 'SIM replacement scheduled' },
      { id: '3', consumerNo: '7766554433', meterNo: 'SMTR5432187', circle: 'East', lastDataReceived: '10-May-2025', daysSilent: 47, commMode: 'RF', signalStrength: 'Medium', siteVisitDone: 'No', remarks: 'Modem fault suspected' },
      { id: '4', consumerNo: '5544332211', meterNo: 'SMTR3214567', circle: 'West', lastDataReceived: '05-Jun-2025', daysSilent: 21, commMode: 'Cellular', signalStrength: 'Good', siteVisitDone: 'Yes', remarks: 'Power supply issue resolved' },
      { id: '5', consumerNo: '3322114455', meterNo: 'SMTR7654321', circle: 'Central', lastDataReceived: 'Never', daysSilent: 365, commMode: 'N/A', signalStrength: 'N/A', siteVisitDone: 'No', remarks: 'Meter never activated in MDM' },
    ];
  }

  getCommunicationRootCauses(): CommunicationRootCause[] {
    return [
      { rootCause: 'RF Coverage Issue', caseCount: 1234, percentage: 38.0, actionNeeded: 'Add relays / repeaters' },
      { rootCause: 'Faulty Modem', caseCount: 856, percentage: 26.4, actionNeeded: 'Replace modem' },
      { rootCause: 'Power Off / No Supply', caseCount: 512, percentage: 15.8, actionNeeded: 'Check energization' },
      { rootCause: 'Meter Never Activated', caseCount: 234, percentage: 7.2, actionNeeded: 'Recheck MDM config' },
      { rootCause: 'SIM Issue (Cellular)', caseCount: 289, percentage: 8.9, actionNeeded: 'Coordinate with ISP' },
      { rootCause: 'Battery/Hardware Fault', caseCount: 120, percentage: 3.7, actionNeeded: 'Raise MCO' },
    ];
  }

  getCommunicationActionTracker(): CommunicationActionTracker[] {
    return [
      { id: '1', circle: 'JPDC', category: '>30 Days Silent', meterCount: 92, actionOwner: 'AMISP', deadline: '30-Jul-2025', status: 'In Progress' },
      { id: '2', circle: 'JCC', category: 'Never Communicated', meterCount: 21, actionOwner: 'AMISP', deadline: '25-Jul-2025', status: 'Escalated' },
      { id: '3', circle: 'TONK', category: 'Faulty Modems', meterCount: 43, actionOwner: 'AMISP', deadline: '28-Jul-2025', status: 'Pending' },
      { id: '4', circle: 'North', category: 'RF Coverage', meterCount: 156, actionOwner: 'AMISP', deadline: '15-Aug-2025', status: 'In Progress' },
      { id: '5', circle: 'South', category: 'SIM Issues', meterCount: 78, actionOwner: 'AMISP', deadline: '10-Aug-2025', status: 'Pending' },
    ];
  }
}
