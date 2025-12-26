// Consumer Analytics Data - 7 Topics

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

export const abnormalConsumptionSummary: AbnormalConsumptionSummary[] = [
  { label: 'Total Consumers Analyzed', value: 45678 },
  { label: 'High Consumption Cases Identified', value: 1234 },
  { label: 'Low Consumption Cases Identified', value: 567 },
  { label: 'Consumers with Sudden Drop (>50%)', value: 189 },
  { label: 'Consumers with Sudden Spike (>200%)', value: 78 },
];

export const highConsumptionCases: ConsumptionCase[] = [
  { id: '1', circle: 'North', division: 'Div-A', subdivision: 'Sub-1', consumerNo: '1100458877', avgConsumption: 450, currentMonth: 1350, percentChange: 200, meterStatus: 'Working', remarks: 'Industrial unit expansion' },
  { id: '2', circle: 'South', division: 'Div-B', subdivision: 'Sub-2', consumerNo: '9988776655', avgConsumption: 320, currentMonth: 890, percentChange: 178, meterStatus: 'Pending', remarks: 'New machinery installed' },
  { id: '3', circle: 'East', division: 'Div-C', subdivision: 'Sub-3', consumerNo: '7766554433', avgConsumption: 280, currentMonth: 756, percentChange: 170, meterStatus: 'Working', remarks: 'Seasonal increase' },
  { id: '4', circle: 'West', division: 'Div-D', subdivision: 'Sub-4', consumerNo: '5544332211', avgConsumption: 520, currentMonth: 1300, percentChange: 150, meterStatus: 'Working', remarks: 'AC usage spike' },
  { id: '5', circle: 'Central', division: 'Div-E', subdivision: 'Sub-5', consumerNo: '3322114455', avgConsumption: 180, currentMonth: 432, percentChange: 140, meterStatus: 'Faulty', remarks: 'Meter check required' },
];

export const lowConsumptionCases: ConsumptionCase[] = [
  { id: '1', circle: 'North', division: 'Div-A', subdivision: 'Sub-1', consumerNo: '1234567890', avgConsumption: 650, currentMonth: 45, percentChange: -93, meterStatus: 'Faulty', remarks: 'Suspected meter fault' },
  { id: '2', circle: 'South', division: 'Div-B', subdivision: 'Sub-2', consumerNo: '0987654321', avgConsumption: 420, currentMonth: 85, percentChange: -80, meterStatus: 'Working', remarks: 'Vacation mode' },
  { id: '3', circle: 'East', division: 'Div-C', subdivision: 'Sub-3', consumerNo: '1122334455', avgConsumption: 380, currentMonth: 95, percentChange: -75, meterStatus: 'Pending', remarks: 'Site verification needed' },
  { id: '4', circle: 'West', division: 'Div-D', subdivision: 'Sub-4', consumerNo: '5566778899', avgConsumption: 290, currentMonth: 87, percentChange: -70, meterStatus: 'Working', remarks: 'Reduced operations' },
  { id: '5', circle: 'Central', division: 'Div-E', subdivision: 'Sub-5', consumerNo: '9900112233', avgConsumption: 510, currentMonth: 178, percentChange: -65, meterStatus: 'Faulty', remarks: 'Bypass suspected' },
];

export const spikeChartData = [
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

export const dropChartData = [
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

export const zeroConsumptionMetrics: ZeroConsumptionMetric[] = [
  { label: 'Total Smart Consumers Analyzed', value: 32450 },
  { label: 'Zero Consumption (1 Month)', value: 1245 },
  { label: 'Zero Consumption (2+ Consecutive Months)', value: 456 },
  { label: 'Communication Healthy but Zero Units', value: 312 },
  { label: 'Communication Fail + Zero Units', value: 589 },
  { label: 'Meter Installed but Not Energized', value: 178 },
  { label: 'Zero Billing Instances', value: 234 },
];

export const zeroConsumptionCategories: ZeroConsumptionCategory[] = [
  { category: 'Meter Installed – Not Energized', count: 178, percentage: 14.3, comments: 'New connections not yet energized' },
  { category: 'Communication Failure', count: 312, percentage: 25.1, comments: 'Last data received >30 days ago' },
  { category: 'Physical Bypass/Tampering Suspected', count: 234, percentage: 18.8, comments: 'Site verification needed' },
  { category: 'Meter Data Present – Zero Billing', count: 156, percentage: 12.5, comments: 'MDM sync or billing logic issue' },
  { category: 'Meter Fault (Technical Failure)', count: 189, percentage: 15.2, comments: 'AMISP to raise MCO' },
  { category: 'Disconnected Supply', count: 176, percentage: 14.1, comments: 'Permanent disconnection or dues' },
];

export const zeroConsumptionConsumers: ZeroConsumptionConsumer[] = [
  { id: '1', circle: 'North', division: 'Div-A', subdivision: 'Sub-1', consumerNo: '1100458877', meterSerialNo: 'SMTR9876543', lastDataReceived: '12-Apr-2025', lastConsumption: 0, communicationStatus: 'Healthy', remarks: 'Suspect bypass – verify physically' },
  { id: '2', circle: 'South', division: 'Div-B', subdivision: 'Sub-2', consumerNo: '9988776655', meterSerialNo: 'SMTR8765432', lastDataReceived: '04-Mar-2025', lastConsumption: 0, communicationStatus: 'Fail', remarks: 'Meter offline – MDM escalation required' },
  { id: '3', circle: 'East', division: 'Div-C', subdivision: 'Sub-3', consumerNo: '7766554433', meterSerialNo: 'SMTR5432187', lastDataReceived: '20-Jun-2025', lastConsumption: 0, communicationStatus: 'Healthy', remarks: 'Likely disconnected supply' },
  { id: '4', circle: 'West', division: 'Div-D', subdivision: 'Sub-4', consumerNo: '5544332211', meterSerialNo: 'SMTR3214567', lastDataReceived: '15-May-2025', lastConsumption: 0, communicationStatus: 'Fail', remarks: 'Network coverage issue' },
  { id: '5', circle: 'Central', division: 'Div-E', subdivision: 'Sub-5', consumerNo: '3322114455', meterSerialNo: 'SMTR7654321', lastDataReceived: '08-Jun-2025', lastConsumption: 0, communicationStatus: 'Healthy', remarks: 'Meter not energized' },
];

export const zeroConsumptionTrendData = [
  { month: 'Jan', count: 1120 },
  { month: 'Feb', count: 1180 },
  { month: 'Mar', count: 1150 },
  { month: 'Apr', count: 1245 },
  { month: 'May', count: 1198 },
  { month: 'Jun', count: 1245 },
];

export const circleZeroConsumptionData = [
  { name: 'North', count: 312 },
  { name: 'South', count: 287 },
  { name: 'East', count: 256 },
  { name: 'West', count: 198 },
  { name: 'Central', count: 192 },
];

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

export const consumptionDropSummary: ConsumptionDropSummary[] = [
  { parameter: 'Current Month vs. Same Month Last Year', consumerCount: 1234, totalDrop: 45678, avgDropPercent: 23.5 },
  { parameter: 'Current Month vs. Last Month', consumerCount: 987, totalDrop: 32456, avgDropPercent: 18.2 },
  { parameter: 'Current Month vs. Avg. of Last 3 Months', consumerCount: 856, totalDrop: 28934, avgDropPercent: 15.8 },
];

export const consumptionDropConsumers: ConsumptionDropConsumer[] = [
  { id: '1', sNo: 1, consumerNo: '1234567890', consumerName: 'M/s ABC Industries', installedDate: '15-Jan-2024', currentMonth: 850, sameMonthLastYear: 1450, lastMonth: 1200, avgLast3Months: 1180, dropPercent: -41.4, dropPercentVsLastMonth: -29.2 },
  { id: '2', sNo: 2, consumerNo: '0987654321', consumerName: 'XYZ Corporation', installedDate: '22-Feb-2024', currentMonth: 620, sameMonthLastYear: 980, lastMonth: 890, avgLast3Months: 920, dropPercent: -36.7, dropPercentVsLastMonth: -30.3 },
  { id: '3', sNo: 3, consumerNo: '1122334455', consumerName: 'PQR Enterprises', installedDate: '10-Mar-2024', currentMonth: 340, sameMonthLastYear: 520, lastMonth: 480, avgLast3Months: 490, dropPercent: -34.6, dropPercentVsLastMonth: -29.2 },
  { id: '4', sNo: 4, consumerNo: '5566778899', consumerName: 'LMN Trading Co.', installedDate: '05-Apr-2024', currentMonth: 190, sameMonthLastYear: 280, lastMonth: 265, avgLast3Months: 270, dropPercent: -32.1, dropPercentVsLastMonth: -28.3 },
  { id: '5', sNo: 5, consumerNo: '9900112233', consumerName: 'DEF Manufacturing', installedDate: '18-May-2024', currentMonth: 1120, sameMonthLastYear: 1580, lastMonth: 1450, avgLast3Months: 1490, dropPercent: -29.1, dropPercentVsLastMonth: -22.8 },
];

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

export const lowConsumptionSummary: LowConsumptionSummary[] = [
  { category: '>30% Lower Consumption than SLD', consumerCount: 567, percentOfTotal: 12.4 },
  { category: 'Excluded Zero Consumption Cases', consumerCount: 0, percentOfTotal: 0 },
  { category: 'Total Consumers Analyzed', consumerCount: 4567, percentOfTotal: 100 },
];

export const lowConsumptionConsumers: LowConsumptionConsumer[] = [
  { id: '1', sNo: 1, consumerNo: '10000012', name: 'M/s ABC Ltd.', sanctionedLoad: 15.0, avgMonthlyConsumption: 320, expectedConsumption: 540, deviation: -40.74, meterStatus: 'Normal', remarks: 'To be verified' },
  { id: '2', sNo: 2, consumerNo: '10000056', name: 'M/s XYZ Traders', sanctionedLoad: 10.0, avgMonthlyConsumption: 210, expectedConsumption: 360, deviation: -41.67, meterStatus: 'Communication Issue', remarks: 'Consumption low' },
  { id: '3', sNo: 3, consumerNo: '10000089', name: 'PQR Industries', sanctionedLoad: 8.0, avgMonthlyConsumption: 150, expectedConsumption: 288, deviation: -47.92, meterStatus: 'Normal', remarks: 'Seasonal variation' },
  { id: '4', sNo: 4, consumerNo: '10000123', name: 'LMN Enterprises', sanctionedLoad: 12.0, avgMonthlyConsumption: 280, expectedConsumption: 432, deviation: -35.19, meterStatus: 'Normal', remarks: 'Load optimization' },
  { id: '5', sNo: 5, consumerNo: '10000156', name: 'DEF Corporation', sanctionedLoad: 20.0, avgMonthlyConsumption: 480, expectedConsumption: 720, deviation: -33.33, meterStatus: 'Faulty', remarks: 'Meter check needed' },
];

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

export const lowerThanExpectedConsumers: LowerThanExpectedConsumer[] = [
  { id: '1', srNo: 1, consumerNo: '12345678', consumerName: 'ABC Traders', meterNo: 'CM1001', avgMonthlyLastYear: 540, currentMonthConsumption: 280, deviation: -48.1, expectedRange: '459 – 621', remarks: 'Suspected bypass' },
  { id: '2', srNo: 2, consumerNo: '98765432', consumerName: 'XYZ Industries', meterNo: 'CM1004', avgMonthlyLastYear: 1200, currentMonthConsumption: 1015, deviation: -15.4, expectedRange: '1020 – 1380', remarks: 'Needs site verification' },
  { id: '3', srNo: 3, consumerNo: '11223344', consumerName: 'PQR Enterprises', meterNo: 'CM1007', avgMonthlyLastYear: 780, currentMonthConsumption: 390, deviation: -50.0, expectedRange: '663 – 897', remarks: 'Under investigation' },
  { id: '4', srNo: 4, consumerNo: '55667788', consumerName: 'LMN Trading', meterNo: 'CM1010', avgMonthlyLastYear: 450, currentMonthConsumption: 320, deviation: -28.9, expectedRange: '382 – 518', remarks: 'Monitor next month' },
  { id: '5', srNo: 5, consumerNo: '99001122', consumerName: 'DEF Corp', meterNo: 'CM1013', avgMonthlyLastYear: 920, currentMonthConsumption: 580, deviation: -37.0, expectedRange: '782 – 1058', remarks: 'Field verification scheduled' },
];

// Topic 6: Day Use with Zero Night Consumption
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
  dailyUsagePercent: number;
  meterStatus: string;
  suspicionFlag: 'YES' | 'NO' | 'Borderline';
  remarks: string;
}

export const dayNightSummary: DayNightSummary[] = [
  { label: 'Total Domestic Consumers Analyzed', value: 28450 },
  { label: 'Consumers with Day-Only Consumption', value: 342 },
  { label: '% of Total', value: '1.2%' },
  { label: 'Action Recommended', value: 'Field verification' },
];

export const dayNightConsumers: DayNightConsumer[] = [
  { id: '1', sNo: 1, consumerNo: '12345', consumerName: 'Mr. A. Sharma', meterNo: 'MTR00123', connectedLoad: 5.0, dayConsumption: 14.5, nightConsumption: 0.0, totalConsumption: 14.5, dailyUsagePercent: 100, meterStatus: 'Communicating', suspicionFlag: 'YES', remarks: 'Possible bypass at night' },
  { id: '2', sNo: 2, consumerNo: '98765', consumerName: 'Ms. R. Gupta', meterNo: 'MTR00456', connectedLoad: 3.0, dayConsumption: 9.8, nightConsumption: 0.0, totalConsumption: 9.8, dailyUsagePercent: 100, meterStatus: 'Normal', suspicionFlag: 'YES', remarks: 'Requires check' },
  { id: '3', sNo: 3, consumerNo: '11223', consumerName: 'Mr. K. Yadav', meterNo: 'MTR00987', connectedLoad: 2.5, dayConsumption: 8.3, nightConsumption: 0.2, totalConsumption: 8.5, dailyUsagePercent: 97.6, meterStatus: 'Communicating', suspicionFlag: 'Borderline', remarks: 'Monitor next 7 days' },
  { id: '4', sNo: 4, consumerNo: '44556', consumerName: 'Mrs. S. Patel', meterNo: 'MTR01234', connectedLoad: 4.0, dayConsumption: 12.4, nightConsumption: 0.0, totalConsumption: 12.4, dailyUsagePercent: 100, meterStatus: 'Normal', suspicionFlag: 'YES', remarks: 'Night disconnect suspected' },
  { id: '5', sNo: 5, consumerNo: '77889', consumerName: 'Mr. R. Singh', meterNo: 'MTR01567', connectedLoad: 3.5, dayConsumption: 10.2, nightConsumption: 0.1, totalConsumption: 10.3, dailyUsagePercent: 99.0, meterStatus: 'Communicating', suspicionFlag: 'Borderline', remarks: 'Under observation' },
];

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

export const bucketLogic: BucketLogic[] = [
  { bucketName: 'High Risk', description: 'Abnormal usage, tamper events, mismatch with sanctioned load, theft-prone', criteriaExample: '>30% variation, frequent tamper events, MD > SL for 3+ months', purpose: 'Site inspection, Load enhancement, Vigilance' },
  { bucketName: 'Medium Risk', description: 'Moderate variation, occasional tamper or billing issues', criteriaExample: 'Consumption spike/drop 10–30%, MD ≈ SL', purpose: 'Monitoring, Alerts' },
  { bucketName: 'Low Risk', description: 'Stable and expected consumption patterns', criteriaExample: 'Monthly variation <10%, MD < 80% of SL', purpose: 'Normal billing' },
  { bucketName: 'Zero/Near Zero', description: 'Very low consumption with active connection', criteriaExample: '<10 kWh/month, connected load >2 kW', purpose: 'Door locked / theft suspicion' },
  { bucketName: 'Seasonal', description: 'Usage fluctuates with season (agriculture, AC users)', criteriaExample: 'Peak usage in select months', purpose: 'Load planning, tariff suggestion' },
  { bucketName: 'High Usage', description: 'Usage consistently much higher than sanctioned load', criteriaExample: 'Avg MD >120% of SL over 3+ months', purpose: 'Load enhancement action' },
  { bucketName: 'Erratic', description: 'Large random spikes/dips in daily/monthly use', criteriaExample: 'Std Dev > threshold', purpose: 'Meter health check, site visit' },
];

export const consumerProfiles: ConsumerProfile[] = [
  { id: '1', sNo: 1, consumerNo: '1234567', name: 'Mr. A. Kumar', category: 'Domestic', sanctionedLoad: 4.0, avgMD: 6.2, avgMonthlyConsumption: 550, bucket: 'High Risk', tamperEvents: 3, previousTheft: 'Yes (1)', actionsRequired: 'Load enhancement' },
  { id: '2', sNo: 2, consumerNo: '9876543', name: 'S.S. Traders', category: 'Commercial', sanctionedLoad: 10.0, avgMD: 9.2, avgMonthlyConsumption: 920, bucket: 'Medium Risk', tamperEvents: 1, previousTheft: 'No', actionsRequired: 'Monitor next 2 months' },
  { id: '3', sNo: 3, consumerNo: '1122334', name: 'Ms. Rani P.', category: 'Domestic', sanctionedLoad: 2.0, avgMD: 0.1, avgMonthlyConsumption: 6, bucket: 'Zero Use', tamperEvents: 0, previousTheft: 'No', actionsRequired: 'Suspected vacant / bypass' },
  { id: '4', sNo: 4, consumerNo: '4455667', name: 'Green Farms', category: 'Agricultural', sanctionedLoad: 15.0, avgMD: 14.5, avgMonthlyConsumption: 1200, bucket: 'Seasonal', tamperEvents: 0, previousTheft: 'No', actionsRequired: 'Normal - seasonal pattern' },
  { id: '5', sNo: 5, consumerNo: '7788990', name: 'ABC Industries', category: 'HT', sanctionedLoad: 50.0, avgMD: 65.0, avgMonthlyConsumption: 4500, bucket: 'High Usage', tamperEvents: 0, previousTheft: 'No', actionsRequired: 'Load enhancement notice' },
];

export const bucketSummary: BucketSummary[] = [
  { category: 'Domestic', highRisk: 1200, mediumRisk: 3450, lowRisk: 9800, zeroUse: 900, total: 15350 },
  { category: 'Commercial', highRisk: 850, mediumRisk: 1200, lowRisk: 3100, zeroUse: 250, total: 5400 },
  { category: 'HT', highRisk: 120, mediumRisk: 180, lowRisk: 500, zeroUse: 10, total: 810 },
  { category: 'Agricultural', highRisk: 400, mediumRisk: 900, lowRisk: 2800, zeroUse: 300, total: 4400 },
  { category: 'Total', highRisk: 2570, mediumRisk: 5730, lowRisk: 16200, zeroUse: 1460, total: 25960 },
];
