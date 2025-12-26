import { Injectable } from '@angular/core';

// Topic 1: Feeder Loss Report – T&D & AT&C Loss Analysis
export interface FeederLossSummary {
  label: string;
  value: number | string;
}

export interface FeederLossDetail {
  id: string;
  sNo: number;
  feederName: string;
  circleSubdivision: string;
  energyInputAtFeeder: number;
  sumOfDTMeterReadings: number;
  tdLossPercent: number;
  billedEnergy: number;
  collectionEfficiency: number;
  atcLossPercent: number;
  remarks: string;
}

// Topic 2: Feeder to Consumer Loss Report
export interface FeederConsumerSummary {
  label: string;
  value: number | string;
}

export interface FeederConsumerDetail {
  id: string;
  sNo: number;
  feederName: string;
  feederInput: number;
  totalConsumerConsumption: number;
  tdLossPercent: number;
  billedUnits: number;
  billingEfficiency: number;
  amountBilled: string;
  amountCollected: string;
  collectionEfficiency: number;
  atcLossPercent: number;
  remarks: string;
}

// Topic 3: LT Energy Loss Report – DT Level
export interface LTEnergyLossSummary {
  label: string;
  value: number | string;
}

export interface LTEnergyLossDT {
  id: string;
  sNo: number;
  dtCodeName: string;
  dtCapacity: string;
  dtOutput: number;
  sumOfLTConsumerMeterReadings: number;
  tdLossPercent: number;
  billedUnits: number;
  billingEfficiency: number;
  amountBilled: string;
  amountCollected: string;
  collectionEfficiency: number;
  atcLossPercent: number;
  remarks: string;
}

// Topic 4: Feeder & DT Performance Evaluation Report
export interface PerformanceParameter {
  parameter: string;
  weightage: string;
  evaluationBasis: string;
}

export interface BestWorstFeeder {
  id: string;
  rank: number;
  feederName: string;
  divisionSubstation: string;
  compositeScore: number;
  tdLossPercent: number;
  billingEff: number;
  collectionEff: number;
  complaints: number;
  remarks: string;
}

export interface BestWorstDT {
  id: string;
  rank: number;
  dtCode: string;
  feederName: string;
  compositeScore: number;
  dtLossPercent: number;
  overloadPercentTime: number;
  complaints: number;
  remarks: string;
}

// Topic 5: Summary Report: High-Risk & Underperforming Network Assets
export interface HighLossAsset {
  id: string;
  rank: number;
  assetType: string;
  codeName: string;
  division: string;
  loss: string;
  billingEfficiency: string;
  collectionEfficiency: string;
  remarks: string;
}

export interface OverloadedAsset {
  id: string;
  rank: number;
  assetType: string;
  codeName: string;
  division: string;
  loadingPercent: number;
  ratedCapacity: string;
  peakLoad: string;
  percentTimeAbove80Load: number;
  remarks: string;
}

export interface OutageAsset {
  id: string;
  rank: number;
  assetType: string;
  codeName: string;
  division: string;
  noOfOutages: number;
  totalOutageDuration: string;
  avgDuration: string;
  reason: string;
}

export interface PowerQualityIssueAsset {
  id: string;
  rank: number;
  feederName: string;
  division: string;
  overVoltageEvents: number;
  underVoltageEvents: number;
  currentUnbalance: number;
  frequencyViolations: number;
  remarks: string;
}

export interface HighFailureRateDT {
  id: string;
  rank: number;
  dtCode: string;
  feederName: string;
  division: string;
  failuresInLast12Months: number;
  lastFailureDate: string;
  dtAge: number;
  remarks: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnergyAuditDataService {
  constructor() { }

  // Topic 1: Feeder Loss Report – T&D & AT&C Loss Analysis
  getFeederLossSummary(): FeederLossSummary[] {
    return [
      { label: 'Feeder Count', value: 'XX' },
      { label: 'Avg. T&D Loss (%)', value: 'XX.X%' },
      { label: 'Avg. AT&C Loss (%)', value: 'XX.X%' },
      { label: 'Total Energy Input (kWh)', value: 'XXXXXXX' },
      { label: 'Total DT Consumption (kWh)', value: 'XXXXXXX' },
      { label: 'Billed Energy (kWh)', value: 'XXXXXXX' },
      { label: 'Collection Efficiency (%)', value: 'XX.X%' },
    ];
  }

  getFeederLossDetails(): FeederLossDetail[] {
    return [
      { id: '1', sNo: 1, feederName: 'FDR-001', circleSubdivision: 'Zone A', energyInputAtFeeder: 1000000, sumOfDTMeterReadings: 920000, tdLossPercent: 8.0, billedEnergy: 850000, collectionEfficiency: 90, atcLossPercent: 23.0, remarks: 'High billing gap' },
      { id: '2', sNo: 2, feederName: 'FDR-002', circleSubdivision: 'Zone B', energyInputAtFeeder: 800000, sumOfDTMeterReadings: 760000, tdLossPercent: 5.0, billedEnergy: 740000, collectionEfficiency: 95, atcLossPercent: 11.25, remarks: 'Within limit' },
      { id: '3', sNo: 3, feederName: 'FDR-003', circleSubdivision: 'Zone C', energyInputAtFeeder: 1200000, sumOfDTMeterReadings: 1050000, tdLossPercent: 12.5, billedEnergy: 950000, collectionEfficiency: 85, atcLossPercent: 33.13, remarks: 'Needs attention' },
    ];
  }

  // Topic 2: Feeder to Consumer Loss Report
  getFeederConsumerSummary(): FeederConsumerSummary[] {
    return [
      { label: 'Total Feeders', value: 'XX' },
      { label: 'Avg. T&D Loss (%)', value: 'XX.X%' },
      { label: 'Avg. AT&C Loss (%)', value: 'XX.X%' },
      { label: 'Avg. Billing Efficiency (%)', value: 'XX.X%' },
      { label: 'Avg. Collection Efficiency (%)', value: 'XX.X%' },
    ];
  }

  getFeederConsumerDetails(): FeederConsumerDetail[] {
    return [
      { id: '1', sNo: 1, feederName: 'FDR-001', feederInput: 1000000, totalConsumerConsumption: 900000, tdLossPercent: 10.0, billedUnits: 870000, billingEfficiency: 96.67, amountBilled: '₹80,00,000', amountCollected: '₹72,00,000', collectionEfficiency: 90.00, atcLossPercent: 20.7, remarks: 'High AT&C loss' },
      { id: '2', sNo: 2, feederName: 'FDR-002', feederInput: 850000, totalConsumerConsumption: 810000, tdLossPercent: 4.7, billedUnits: 790000, billingEfficiency: 97.5, amountBilled: '₹68,00,000', amountCollected: '₹66,00,000', collectionEfficiency: 97.06, atcLossPercent: 8.2, remarks: 'Within control limits' },
      { id: '3', sNo: 3, feederName: 'FDR-003', feederInput: 1200000, totalConsumerConsumption: 1000000, tdLossPercent: 16.67, billedUnits: 920000, billingEfficiency: 92.00, amountBilled: '₹92,00,000', amountCollected: '₹78,20,000', collectionEfficiency: 85.00, atcLossPercent: 33.3, remarks: 'Investigation suggested' },
    ];
  }

  // Topic 3: LT Energy Loss Report – DT Level
  getLTEnergyLossSummary(): LTEnergyLossSummary[] {
    return [
      { label: 'Total DTs Analyzed', value: 'XXX' },
      { label: 'Avg. T&D Loss (%)', value: 'XX.X%' },
      { label: 'Avg. Billing Efficiency (%)', value: 'XX.X%' },
      { label: 'Avg. Collection Efficiency (%)', value: 'XX.X%' },
      { label: 'Avg. AT&C Loss (%)', value: 'XX.X%' },
    ];
  }

  getLTEnergyLossDTs(): LTEnergyLossDT[] {
    return [
      { id: '1', sNo: 1, dtCodeName: 'DT-001', dtCapacity: '100', dtOutput: 95000, sumOfLTConsumerMeterReadings: 87000, tdLossPercent: 8.42, billedUnits: 85000, billingEfficiency: 97.70, amountBilled: '₹7,65,000', amountCollected: '₹6,88,500', collectionEfficiency: 90.00, atcLossPercent: 18.52, remarks: 'Billing gap & delay' },
      { id: '2', sNo: 2, dtCodeName: 'DT-002', dtCapacity: '63', dtOutput: 58000, sumOfLTConsumerMeterReadings: 56200, tdLossPercent: 3.10, billedUnits: 55000, billingEfficiency: 97.86, amountBilled: '₹4,95,000', amountCollected: '₹4,70,000', collectionEfficiency: 94.95, atcLossPercent: 7.41, remarks: 'Within acceptable range' },
      { id: '3', sNo: 3, dtCodeName: 'DT-003', dtCapacity: '200', dtOutput: 160000, sumOfLTConsumerMeterReadings: 140000, tdLossPercent: 12.5, billedUnits: 132000, billingEfficiency: 94.29, amountBilled: '₹11,88,000', amountCollected: '₹9,50,400', collectionEfficiency: 80.00, atcLossPercent: 40.63, remarks: 'Low collection efficiency' },
    ];
  }

  // Topic 4: Feeder & DT Performance Evaluation Report
  getPerformanceParameters(): PerformanceParameter[] {
    return [
      { parameter: 'Technical & Commercial Loss %', weightage: '30%', evaluationBasis: 'T&D Loss = Input – Output' },
      { parameter: 'Billing Efficiency', weightage: '20%', evaluationBasis: 'Billed Units / Total Energy Delivered' },
      { parameter: 'Collection Efficiency', weightage: '20%', evaluationBasis: 'Collection / Billed Amount' },
      { parameter: 'Reliability Index (SAIFI/SAIDI)', weightage: '10%', evaluationBasis: 'Avg. interruptions per consumer' },
      { parameter: 'Complaints/1000 Consumers', weightage: '10%', evaluationBasis: 'From CRM system' },
      { parameter: 'Overloading/Unbalance', weightage: '10%', evaluationBasis: '% time above rated capacity' },
    ];
  }

  getBestFeeders(): BestWorstFeeder[] {
    return [
      { id: '1', rank: 1, feederName: 'FDR-102', divisionSubstation: 'North Zone / SS-1', compositeScore: 92.5, tdLossPercent: 4.2, billingEff: 98.1, collectionEff: 99.5, complaints: 1, remarks: 'Excellent zone' },
      { id: '2', rank: 2, feederName: 'FDR-208', divisionSubstation: 'West Zone / SS-3', compositeScore: 91.0, tdLossPercent: 5.0, billingEff: 97.6, collectionEff: 98.9, complaints: 0, remarks: 'Reliable feeder' },
    ];
  }

  getWorstFeeders(): BestWorstFeeder[] {
    return [
      { id: '1', rank: 1, feederName: 'FDR-317', divisionSubstation: 'East Zone / SS-5', compositeScore: 43.2, tdLossPercent: 38.0, billingEff: 64.5, collectionEff: 55.0, complaints: 17, remarks: 'Theft-prone, overloaded' },
      { id: '2', rank: 2, feederName: 'FDR-402', divisionSubstation: 'South Zone / SS-6', compositeScore: 45.8, tdLossPercent: 30.5, billingEff: 69.0, collectionEff: 60.3, complaints: 13, remarks: 'Frequent downtime' },
    ];
  }

  getBestDTs(): BestWorstDT[] {
    return [
      { id: '1', rank: 1, dtCode: 'DT-101', feederName: 'FDR-102', compositeScore: 94.1, dtLossPercent: 1.5, overloadPercentTime: 0.0, complaints: 0, remarks: 'Optimal health' },
      { id: '2', rank: 2, dtCode: 'DT-215', feederName: 'FDR-208', compositeScore: 93.5, dtLossPercent: 2.2, overloadPercentTime: 3.1, complaints: 0, remarks: 'Stable DT' },
    ];
  }

  getWorstDTs(): BestWorstDT[] {
    return [
      { id: '1', rank: 1, dtCode: 'DT-522', feederName: 'FDR-317', compositeScore: 41.0, dtLossPercent: 22.5, overloadPercentTime: 70.0, complaints: 9, remarks: 'Likely undersized' },
      { id: '2', rank: 2, dtCode: 'DT-663', feederName: 'FDR-402', compositeScore: 43.8, dtLossPercent: 18.4, overloadPercentTime: 55.0, complaints: 7, remarks: 'High downtime area' },
    ];
  }

  // Topic 5: Summary Report: High-Risk & Underperforming Network Assets
  getHighLossAssets(): HighLossAsset[] {
    return [
      { id: '1', rank: 1, assetType: 'Feeder', codeName: 'FDR-305', division: 'East', loss: '42.6%', billingEfficiency: '62.1%', collectionEfficiency: '55.2%', remarks: 'Suspected theft zone' },
      { id: '2', rank: 2, assetType: 'DT', codeName: 'DT-451', division: 'Central', loss: '39.8%', billingEfficiency: '70.5%', collectionEfficiency: '60.1%', remarks: 'Long-standing issues' },
    ];
  }

  getOverloadedAssets(): OverloadedAsset[] {
    return [
      { id: '1', rank: 1, assetType: 'DT', codeName: 'DT-225', division: 'South', loadingPercent: 136, ratedCapacity: '63', peakLoad: '86', percentTimeAbove80Load: 74, remarks: 'Needs resizing' },
      { id: '2', rank: 2, assetType: 'Feeder', codeName: 'FDR-122', division: 'North', loadingPercent: 124, ratedCapacity: '400', peakLoad: '496', percentTimeAbove80Load: 65, remarks: 'Frequent tripping' },
    ];
  }

  getOutageAssets(): OutageAsset[] {
    return [
      { id: '1', rank: 1, assetType: 'Feeder', codeName: 'FDR-118', division: 'West', noOfOutages: 17, totalOutageDuration: '34:45', avgDuration: '2:03', reason: 'Recurrent tripping' },
      { id: '2', rank: 2, assetType: 'DT', codeName: 'DT-611', division: 'East', noOfOutages: 14, totalOutageDuration: '29:20', avgDuration: '2:05', reason: 'Feeder back-end issue' },
    ];
  }

  getPowerQualityIssueAssets(): PowerQualityIssueAsset[] {
    return [
      { id: '1', rank: 1, feederName: 'FDR-140', division: 'Central', overVoltageEvents: 18, underVoltageEvents: 25, currentUnbalance: 19, frequencyViolations: 4, remarks: 'Industrial feeder' },
      { id: '2', rank: 2, feederName: 'FDR-412', division: 'South', overVoltageEvents: 12, underVoltageEvents: 30, currentUnbalance: 23, frequencyViolations: 6, remarks: 'Poor neutral earthing' },
    ];
  }

  getHighFailureRateDTs(): HighFailureRateDT[] {
    return [
      { id: '1', rank: 1, dtCode: 'DT-578', feederName: 'FDR-102', division: 'West', failuresInLast12Months: 4, lastFailureDate: '21-Jul-2025', dtAge: 6, remarks: 'Likely internal fault' },
      { id: '2', rank: 2, dtCode: 'DT-330', feederName: 'FDR-108', division: 'East', failuresInLast12Months: 3, lastFailureDate: '14-Jun-2025', dtAge: 10, remarks: 'Needs replacement' },
    ];
  }
}

