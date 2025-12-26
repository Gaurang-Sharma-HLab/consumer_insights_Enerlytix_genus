import { Injectable } from '@angular/core';

// Reliability Indices Tracking & Analysis Report
export interface ReliabilityIndicesSummary {
  label: string;
  value: string;
  notes?: string;
}

export interface ReliabilityIndicesHistorical {
  month: string;
  saifi: number;
  saidi: number;
  notes: string;
}

export interface FeederReliabilityPerformance {
  feederID: string;
  saifi: number;
  saidi: number;
  benchmarkCompliance: string;
  keyIssue: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReliabilityIndicesDataService {
  constructor() { }

  getReliabilityIndicesSummary(): ReliabilityIndicesSummary[] {
    return [
      { label: 'Avg. SAIFI (Feeder Level)', value: '3.12', notes: 'Interruptions per consumer/year' },
      { label: 'Avg. SAIDI (Feeder Level)', value: '5.8 hrs', notes: 'Total outage duration per consumer/year' },
      { label: 'Best Performing Feeder', value: 'FDR-07', notes: 'SAIFI: 1.2, SAIDI: 2.3 hrs' },
      { label: 'Most Improved Feeder', value: 'FDR-12', notes: '15% reduction in SAIFI vs last month' },
      { label: 'Areas Above Benchmark', value: '3', notes: 'Require targeted maintenance' },
      { label: 'Improvement vs LY', value: 'SAIFI: -8.2%, SAIDI: -6.5%', notes: '' },
    ];
  }

  getReliabilityIndicesHistorical(): ReliabilityIndicesHistorical[] {
    return [
      { month: 'Mar 2025', saifi: 3.45, saidi: 6.4, notes: 'High storm-related outages' },
      { month: 'Apr 2025', saifi: 3.32, saidi: 6.1, notes: 'Slight improvement' },
      { month: 'May 2025', saifi: 3.21, saidi: 5.9, notes: 'Preventive maintenance in Zone-B' },
      { month: 'Jun 2025', saifi: 3.18, saidi: 5.7, notes: 'New RMUs installed' },
      { month: 'Jul 2025', saifi: 3.15, saidi: 5.8, notes: 'Minor regression due to transformer fault' },
      { month: 'Aug 2025', saifi: 3.12, saidi: 5.8, notes: 'Stabilized performance' },
    ];
  }

  getFeederReliabilityPerformance(): FeederReliabilityPerformance[] {
    return [
      { feederID: 'FDR-01', saifi: 2.5, saidi: 4.3, benchmarkCompliance: 'Yes', keyIssue: 'None' },
      { feederID: 'FDR-07', saifi: 1.2, saidi: 2.3, benchmarkCompliance: 'Yes', keyIssue: 'None' },
      { feederID: 'FDR-12', saifi: 3.4, saidi: 5.1, benchmarkCompliance: 'Yes', keyIssue: 'Cable faults' },
      { feederID: 'FDR-16', saifi: 4.1, saidi: 7.2, benchmarkCompliance: 'No', keyIssue: 'Overhead line vegetation' },
      { feederID: 'FDR-21', saifi: 3.0, saidi: 5.6, benchmarkCompliance: 'Yes', keyIssue: 'None' },
    ];
  }
}

