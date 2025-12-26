import { Injectable } from '@angular/core';

// Topic 1: Distribution Transformer (DT) Loading Report
export interface DTLoadingSummary {
  category: string;
  noOfDTs: string;
  percentOfTotalDTs: string;
  totalConnectedLoad: string;
  remarks: string;
}

export interface DTLoadingDetail {
  id: string;
  sNo: number;
  dtCode: string;
  location: string;
  capacity: number;
  maxLoad: number;
  loadingPercent: number;
  category: string;
  noOfConnectedConsumers: number;
  remarks: string;
}

// Topic 2: Load Management & Preventive Maintenance Analysis Report
export interface PreventiveMaintenanceSummary {
  label: string;
  value: string;
}

export interface OverloadedDT {
  id: string;
  rank: number;
  dtCode: string;
  location: string;
  capacity: number;
  peakLoad: number;
  loadPercent: number;
  overloadDays: number;
  growthTrend: string;
  riskLevel: 'High' | 'Medium' | 'Low';
  maintenanceAction: string;
}

export interface LoadRisingTrend {
  id: string;
  dtCode: string;
  capacity: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  trend: string;
  momAvgGrowth: string;
}

@Injectable({
  providedIn: 'root'
})
export class PreventiveMaintenanceDataService {
  constructor() { }

  // Topic 1: Distribution Transformer (DT) Loading Report
  getDTLoadingSummary(): DTLoadingSummary[] {
    return [
      { category: 'Overloaded (>100%)', noOfDTs: 'XX', percentOfTotalDTs: 'XX.X%', totalConnectedLoad: 'XXXX', remarks: 'High loss & risk of failure' },
      { category: 'Near Optimal (90-100%)', noOfDTs: 'XX', percentOfTotalDTs: 'XX.X%', totalConnectedLoad: 'XXXX', remarks: 'Acceptable' },
      { category: 'Optimal (60-90%)', noOfDTs: 'XX', percentOfTotalDTs: 'XX.X%', totalConnectedLoad: 'XXXX', remarks: 'Ideal operating range' },
      { category: 'Under Loaded (<60%)', noOfDTs: 'XX', percentOfTotalDTs: 'XX.X%', totalConnectedLoad: 'XXXX', remarks: 'May be right-sized/replaced' },
      { category: 'Total', noOfDTs: 'XXX', percentOfTotalDTs: '100%', totalConnectedLoad: 'XXXXX', remarks: '' },
    ];
  }

  getDTLoadingDetails(): DTLoadingDetail[] {
    return [
      { id: '1', sNo: 1, dtCode: 'DT-0001', location: 'Zone A - Feeder 1', capacity: 100, maxLoad: 120, loadingPercent: 120, category: 'Overloaded', noOfConnectedConsumers: 55, remarks: 'Risk of tripping' },
      { id: '2', sNo: 2, dtCode: 'DT-0002', location: 'Zone B - Feeder 3', capacity: 200, maxLoad: 178, loadingPercent: 89, category: 'Optimal', noOfConnectedConsumers: 85, remarks: 'Within acceptable range' },
      { id: '3', sNo: 3, dtCode: 'DT-0003', location: 'Zone C - Feeder 2', capacity: 63, maxLoad: 32, loadingPercent: 51, category: 'Under Loaded', noOfConnectedConsumers: 24, remarks: 'Reassessment suggested' },
    ];
  }

  // Topic 2: Load Management & Preventive Maintenance Analysis Report
  getPreventiveMaintenanceSummary(): PreventiveMaintenanceSummary[] {
    return [
      { label: 'Total DTs Monitored', value: 'XXXX' },
      { label: 'Overloaded DTs (>100%)', value: 'XX' },
      { label: 'DTs at Risk (90–100%)', value: 'XX' },
      { label: 'Avg. Monthly Growth Rate', value: '+X.X%' },
      { label: 'DTs Recommended for Preventive Maintenance', value: 'XX' },
    ];
  }

  getOverloadedDTs(): OverloadedDT[] {
    return [
      { id: '1', rank: 1, dtCode: 'DT-0147', location: 'Sector 5', capacity: 100, peakLoad: 142, loadPercent: 142, overloadDays: 21, growthTrend: '📈', riskLevel: 'High', maintenanceAction: 'Immediate augmentation & oil check' },
      { id: '2', rank: 2, dtCode: 'DT-0293', location: 'Ward 3', capacity: 63, peakLoad: 80, loadPercent: 127, overloadDays: 18, growthTrend: '📈', riskLevel: 'High', maintenanceAction: 'Cooling inspection & load balancing' },
      { id: '3', rank: 3, dtCode: 'DT-0330', location: 'Zone A', capacity: 250, peakLoad: 305, loadPercent: 122, overloadDays: 24, growthTrend: '📈', riskLevel: 'Medium', maintenanceAction: 'Oil quality test & tap setting review' },
      { id: '4', rank: 4, dtCode: 'DT-0411', location: 'Street 7', capacity: 100, peakLoad: 115, loadPercent: 115, overloadDays: 14, growthTrend: '📈', riskLevel: 'Medium', maintenanceAction: 'Cable terminal inspection' },
      { id: '5', rank: 5, dtCode: 'DT-0562', location: 'Village X', capacity: 160, peakLoad: 180, loadPercent: 112, overloadDays: 10, growthTrend: '➡️', riskLevel: 'Medium', maintenanceAction: 'Thermographic scan' },
    ];
  }

  getLoadRisingTrends(): LoadRisingTrend[] {
    return [
      { id: '1', dtCode: 'DT-0147', capacity: 100, feb: 110, mar: 120, apr: 124, may: 128, jun: 135, jul: 142, trend: '📈', momAvgGrowth: '+5.2%' },
      { id: '2', dtCode: 'DT-0293', capacity: 63, feb: 68, mar: 70, apr: 73, may: 75, jun: 78, jul: 80, trend: '📈', momAvgGrowth: '+3.4%' },
      { id: '3', dtCode: 'DT-0330', capacity: 250, feb: 270, mar: 275, apr: 280, may: 288, jun: 298, jul: 305, trend: '📈', momAvgGrowth: '+2.5%' },
      { id: '4', dtCode: 'DT-0411', capacity: 100, feb: 106, mar: 108, apr: 110, may: 111, jun: 113, jul: 115, trend: '➡️', momAvgGrowth: '+1.5%' },
    ];
  }
}

