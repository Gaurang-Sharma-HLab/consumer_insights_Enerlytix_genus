export interface ZeroConsumptionSummary {
  totalSmartConsumers: number;
  zeroConsumption1Month: number;
  zeroConsumption2PlusMonths: number;
  communicationHealthyZeroUnits: number;
  communicationFailZeroUnits: number;
  meterInstalledNotEnergized: number;
  zeroBillingInstances: number;
  periodOfAnalysis: string;
  reportPreparedOn: string;
}

export interface CategoryBreakdown {
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

export interface ActionPlan {
  rootCause: string;
  action: string;
  owner: string;
  deadline: string;
  status: 'Pending' | 'In Progress' | 'Scheduled' | 'Completed';
}

export interface HeatmapData {
  subdivision: string;
  zeroConsumption: number;
  communicationFail: number;
  meterFault: number;
  tampering: number;
}

export const zeroConsumptionSummary: ZeroConsumptionSummary = {
  totalSmartConsumers: 45678,
  zeroConsumption1Month: 892,
  zeroConsumption2PlusMonths: 234,
  communicationHealthyZeroUnits: 156,
  communicationFailZeroUnits: 478,
  meterInstalledNotEnergized: 89,
  zeroBillingInstances: 312,
  periodOfAnalysis: 'April 2025 – June 2025',
  reportPreparedOn: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
};

export const categoryBreakdown: CategoryBreakdown[] = [
  { category: 'Meter Installed – Not Energized', count: 89, percentage: 10.0, comments: 'New connections not yet energized' },
  { category: 'Communication Failure', count: 178, percentage: 20.0, comments: 'Last data received >30 days ago' },
  { category: 'Physical Bypass/Tampering Suspected', count: 67, percentage: 7.5, comments: 'Site verification needed' },
  { category: 'Meter Data Present – Zero Billing', count: 134, percentage: 15.0, comments: 'MDM sync or billing logic issue' },
  { category: 'Meter Fault (Technical Failure)', count: 223, percentage: 25.0, comments: 'AMISP to raise MCO' },
  { category: 'Disconnected Supply', count: 201, percentage: 22.5, comments: 'Permanent disconnection or dues' },
];

export const zeroConsumptionConsumers: ZeroConsumptionConsumer[] = [
  { id: '1', circle: 'North', division: 'Urban-1', subdivision: 'Sub-A', consumerNo: '1100458877', meterSerialNo: 'SMTR9876543', lastDataReceived: '12-Apr-2025', lastConsumption: 0, communicationStatus: 'Healthy', remarks: 'Suspect bypass – verify physically' },
  { id: '2', circle: 'East', division: 'Rural-3', subdivision: 'Sub-C', consumerNo: '9988776655', meterSerialNo: 'SMTR8765432', lastDataReceived: '04-Mar-2025', lastConsumption: 0, communicationStatus: 'Fail', remarks: 'Meter offline – MDM escalation required' },
  { id: '3', circle: 'South', division: 'Urban-2', subdivision: 'Sub-B', consumerNo: '7766554433', meterSerialNo: 'SMTR5432187', lastDataReceived: '20-Jun-2025', lastConsumption: 0, communicationStatus: 'Healthy', remarks: 'Likely disconnected supply' },
  { id: '4', circle: 'West', division: 'Industrial', subdivision: 'Sub-I1', consumerNo: '5544332211', meterSerialNo: 'SMTR3219876', lastDataReceived: '15-May-2025', lastConsumption: 0, communicationStatus: 'Fail', remarks: 'Communication module fault' },
  { id: '5', circle: 'North', division: 'Commercial', subdivision: 'Sub-C2', consumerNo: '3322110099', meterSerialNo: 'SMTR9871234', lastDataReceived: '02-Jun-2025', lastConsumption: 0, communicationStatus: 'Healthy', remarks: 'Business closure suspected' },
  { id: '6', circle: 'Central', division: 'Urban-3', subdivision: 'Sub-U', consumerNo: '2211009988', meterSerialNo: 'SMTR1234567', lastDataReceived: '28-Apr-2025', lastConsumption: 0, communicationStatus: 'Fail', remarks: 'Meter replacement needed' },
  { id: '7', circle: 'East', division: 'Rural-1', subdivision: 'Sub-R', consumerNo: '1100998877', meterSerialNo: 'SMTR7654321', lastDataReceived: '10-May-2025', lastConsumption: 0, communicationStatus: 'Healthy', remarks: 'Seasonal vacancy' },
  { id: '8', circle: 'South', division: 'Commercial', subdivision: 'Sub-C', consumerNo: '9988001122', meterSerialNo: 'SMTR4567890', lastDataReceived: '22-Mar-2025', lastConsumption: 0, communicationStatus: 'Fail', remarks: 'Site inspection scheduled' },
];

export const actionPlanData: ActionPlan[] = [
  { rootCause: 'Communication Failure', action: 'Recheck modem/network, replace faulty modems', owner: 'AMISP Field Team', deadline: '15-Jul-2025', status: 'In Progress' },
  { rootCause: 'Meter Not Energized', action: 'Cross-check energization status with DISCOM', owner: 'AMISP + DISCOM', deadline: '20-Jul-2025', status: 'Pending' },
  { rootCause: 'Meter Fault', action: 'Raise MCO for replacement', owner: 'AMISP', deadline: '25-Jul-2025', status: 'In Progress' },
  { rootCause: 'Suspected Tampering', action: 'Conduct site verification, report to DISCOM', owner: 'AMISP', deadline: '30-Jul-2025', status: 'Scheduled' },
];

export const heatmapData: HeatmapData[] = [
  { subdivision: 'Sub-A', zeroConsumption: 45, communicationFail: 23, meterFault: 12, tampering: 8 },
  { subdivision: 'Sub-B', zeroConsumption: 67, communicationFail: 34, meterFault: 18, tampering: 5 },
  { subdivision: 'Sub-C', zeroConsumption: 89, communicationFail: 56, meterFault: 25, tampering: 15 },
  { subdivision: 'Sub-D', zeroConsumption: 34, communicationFail: 12, meterFault: 8, tampering: 3 },
  { subdivision: 'Sub-E', zeroConsumption: 78, communicationFail: 45, meterFault: 22, tampering: 11 },
  { subdivision: 'Sub-F', zeroConsumption: 56, communicationFail: 28, meterFault: 15, tampering: 7 },
  { subdivision: 'Sub-G', zeroConsumption: 92, communicationFail: 61, meterFault: 31, tampering: 18 },
  { subdivision: 'Sub-H', zeroConsumption: 41, communicationFail: 19, meterFault: 10, tampering: 4 },
];

export const circleZeroConsumption = [
  { name: 'North', count: 234, percentage: 26.2 },
  { name: 'East', count: 198, percentage: 22.2 },
  { name: 'South', count: 187, percentage: 21.0 },
  { name: 'West', count: 156, percentage: 17.5 },
  { name: 'Central', count: 117, percentage: 13.1 },
];

export const rootCauseDistribution = [
  { name: 'Meter Fault', value: 223, fill: 'hsl(0, 84%, 60%)' },
  { name: 'Disconnected', value: 201, fill: 'hsl(38, 92%, 50%)' },
  { name: 'Comm Failure', value: 178, fill: 'hsl(217, 91%, 60%)' },
  { name: 'Zero Billing', value: 134, fill: 'hsl(142, 76%, 36%)' },
  { name: 'Not Energized', value: 89, fill: 'hsl(280, 85%, 65%)' },
  { name: 'Tampering', value: 67, fill: 'hsl(199, 89%, 48%)' },
];

export const keyObservations = [
  '75% of zero consumption cases are from non-communicating meters.',
  'Repeated cases from Sub-C subdivision indicating possible field process issue.',
  '15% cases have meter energy data but not billed – MDMS to UBS sync issue suspected.',
  'North circle has the highest zero consumption count at 234 cases.',
  'Communication failure is the second most common root cause after meter faults.',
];
