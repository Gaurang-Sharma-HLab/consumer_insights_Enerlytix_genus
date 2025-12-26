export interface ConsumerData {
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

export interface SummaryData {
  totalConsumers: number;
  highConsumptionCases: number;
  lowConsumptionCases: number;
  suddenDropCases: number;
  suddenSpikeCases: number;
  reportDate: string;
}

export const summaryData: SummaryData = {
  totalConsumers: 45678,
  highConsumptionCases: 1234,
  lowConsumptionCases: 892,
  suddenDropCases: 156,
  suddenSpikeCases: 243,
  reportDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
};

export const highConsumptionData: ConsumerData[] = [
  { id: '1', circle: 'North', division: 'Urban-1', subdivision: 'Sub-A', consumerNo: 'NC-2024-0012', avgConsumption: 450, currentMonth: 1280, percentChange: 184.4, meterStatus: 'Working', remarks: 'Industrial expansion' },
  { id: '2', circle: 'East', division: 'Rural-3', subdivision: 'Sub-C', consumerNo: 'EC-2024-0089', avgConsumption: 280, currentMonth: 890, percentChange: 217.9, meterStatus: 'Working', remarks: 'New equipment installed' },
  { id: '3', circle: 'South', division: 'Urban-2', subdivision: 'Sub-B', consumerNo: 'SC-2024-0156', avgConsumption: 520, currentMonth: 1560, percentChange: 200.0, meterStatus: 'Pending', remarks: 'Under investigation' },
  { id: '4', circle: 'West', division: 'Industrial', subdivision: 'Sub-I1', consumerNo: 'WC-2024-0234', avgConsumption: 890, currentMonth: 2450, percentChange: 175.3, meterStatus: 'Working', remarks: 'Seasonal increase' },
  { id: '5', circle: 'North', division: 'Commercial', subdivision: 'Sub-C2', consumerNo: 'NC-2024-0321', avgConsumption: 670, currentMonth: 1890, percentChange: 182.1, meterStatus: 'Faulty', remarks: 'Meter check required' },
  { id: '6', circle: 'East', division: 'Urban-1', subdivision: 'Sub-A', consumerNo: 'EC-2024-0412', avgConsumption: 340, currentMonth: 980, percentChange: 188.2, meterStatus: 'Working', remarks: 'AC usage spike' },
  { id: '7', circle: 'South', division: 'Rural-1', subdivision: 'Sub-R', consumerNo: 'SC-2024-0523', avgConsumption: 180, currentMonth: 540, percentChange: 200.0, meterStatus: 'Working', remarks: 'Agriculture pumps' },
  { id: '8', circle: 'Central', division: 'Urban-3', subdivision: 'Sub-U', consumerNo: 'CC-2024-0634', avgConsumption: 420, currentMonth: 1150, percentChange: 173.8, meterStatus: 'Working', remarks: 'Normal variation' },
];

export const lowConsumptionData: ConsumerData[] = [
  { id: '1', circle: 'North', division: 'Urban-1', subdivision: 'Sub-A', consumerNo: 'NC-2024-0045', avgConsumption: 350, currentMonth: 45, percentChange: -87.1, meterStatus: 'Faulty', remarks: 'Possible meter fault' },
  { id: '2', circle: 'East', division: 'Rural-2', subdivision: 'Sub-R', consumerNo: 'EC-2024-0078', avgConsumption: 220, currentMonth: 0, percentChange: -100.0, meterStatus: 'Pending', remarks: 'Site inspection needed' },
  { id: '3', circle: 'South', division: 'Urban-1', subdivision: 'Sub-A', consumerNo: 'SC-2024-0123', avgConsumption: 480, currentMonth: 95, percentChange: -80.2, meterStatus: 'Working', remarks: 'Premises vacated' },
  { id: '4', circle: 'West', division: 'Commercial', subdivision: 'Sub-C', consumerNo: 'WC-2024-0189', avgConsumption: 670, currentMonth: 120, percentChange: -82.1, meterStatus: 'Faulty', remarks: 'Display error' },
  { id: '5', circle: 'North', division: 'Industrial', subdivision: 'Sub-I', consumerNo: 'NC-2024-0256', avgConsumption: 1200, currentMonth: 0, percentChange: -100.0, meterStatus: 'Pending', remarks: 'Business closure' },
  { id: '6', circle: 'Central', division: 'Urban-2', subdivision: 'Sub-B', consumerNo: 'CC-2024-0334', avgConsumption: 290, currentMonth: 58, percentChange: -80.0, meterStatus: 'Working', remarks: 'Seasonal vacancy' },
  { id: '7', circle: 'East', division: 'Rural-1', subdivision: 'Sub-R', consumerNo: 'EC-2024-0445', avgConsumption: 150, currentMonth: 0, percentChange: -100.0, meterStatus: 'Faulty', remarks: 'Connection issue' },
  { id: '8', circle: 'South', division: 'Commercial', subdivision: 'Sub-C', consumerNo: 'SC-2024-0556', avgConsumption: 520, currentMonth: 78, percentChange: -85.0, meterStatus: 'Pending', remarks: 'Under review' },
];

export const spikeChartData = [
  { name: 'EC-2024-0089', current: 890, average: 280 },
  { name: 'SC-2024-0156', current: 1560, average: 520 },
  { name: 'NC-2024-0012', current: 1280, average: 450 },
  { name: 'EC-2024-0412', current: 980, average: 340 },
  { name: 'NC-2024-0321', current: 1890, average: 670 },
  { name: 'WC-2024-0234', current: 2450, average: 890 },
  { name: 'SC-2024-0523', current: 540, average: 180 },
  { name: 'CC-2024-0634', current: 1150, average: 420 },
  { name: 'NC-2024-0745', current: 780, average: 290 },
  { name: 'EC-2024-0856', current: 650, average: 240 },
];

export const dropChartData = [
  { name: 'NC-2024-0045', current: 45, average: 350 },
  { name: 'EC-2024-0078', current: 0, average: 220 },
  { name: 'SC-2024-0123', current: 95, average: 480 },
  { name: 'WC-2024-0189', current: 120, average: 670 },
  { name: 'NC-2024-0256', current: 0, average: 1200 },
  { name: 'CC-2024-0334', current: 58, average: 290 },
  { name: 'EC-2024-0445', current: 0, average: 150 },
  { name: 'SC-2024-0556', current: 78, average: 520 },
  { name: 'WC-2024-0667', current: 35, average: 280 },
  { name: 'NC-2024-0778', current: 42, average: 310 },
];

export const zeroConsumptionTrend = [
  { month: 'Jul', count: 45 },
  { month: 'Aug', count: 52 },
  { month: 'Sep', count: 48 },
  { month: 'Oct', count: 61 },
  { month: 'Nov', count: 78 },
  { month: 'Dec', count: 89 },
];

export const circleDistribution = [
  { name: 'North', high: 312, low: 234 },
  { name: 'East', high: 289, low: 198 },
  { name: 'South', high: 267, low: 187 },
  { name: 'West', high: 198, low: 156 },
  { name: 'Central', high: 168, low: 117 },
];
