import { Injectable } from '@angular/core';

// VEE Report – Consumer Estimation & Editing Analysis
export interface VEESummary {
  label: string;
  value: string;
}

export interface VEEConsumerDetail {
  id: string;
  circle: string;
  division: string;
  subdivision: string;
  consumerNo: string;
  name: string;
  category: string;
  noOfEstimations: number;
  noOfEditingEvents: number;
  lastEditDate: string;
}

export interface VEECircleForecast {
  circle: string;
  forecastedEstimationCases: number;
  expectedGrowthPercent: number;
  riskFactors: string;
}

export interface VEECategoryBehavior {
  consumerType: string;
  shareOfTotalEstimation: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class VeeReportDataService {
  constructor() { }

  getVEESummary(): VEESummary[] {
    return [
      { label: 'Total Consumers with Regular Estimation', value: '1,285' },
      { label: '% of Total Consumers Affected', value: '2.4%' },
      { label: 'Highest Affected Circle', value: 'Chennai North (325 consumers)' },
      { label: 'Top Consumer Category in Estimation', value: 'Domestic LT' },
      { label: 'Average Estimation Frequency', value: '4.2 times/month' },
      { label: 'Data Editing Cases', value: '426' },
      { label: 'Highest Editing Occurrence', value: 'Industrial LT – 11 kWh correction' },
    ];
  }

  getVEEConsumerDetails(): VEEConsumerDetail[] {
    return [
      { id: '1', circle: 'Chennai North', division: 'Div-A', subdivision: 'Sub-1', consumerNo: '1234567890', name: 'Mr. A. Kumar', category: 'Domestic LT', noOfEstimations: 8, noOfEditingEvents: 3, lastEditDate: '15-Aug-2025' },
      { id: '2', circle: 'Madurai South', division: 'Div-B', subdivision: 'Sub-2', consumerNo: '9876543210', name: 'Ms. R. Devi', category: 'Commercial LT', noOfEstimations: 6, noOfEditingEvents: 2, lastEditDate: '12-Aug-2025' },
      { id: '3', circle: 'Coimbatore East', division: 'Div-C', subdivision: 'Sub-3', consumerNo: '1122334455', name: 'M/s XYZ Industries', category: 'Industrial LT', noOfEstimations: 12, noOfEditingEvents: 5, lastEditDate: '18-Aug-2025' },
    ];
  }

  getVEECircleForecast(): VEECircleForecast[] {
    return [
      { circle: 'Chennai North', forecastedEstimationCases: 360, expectedGrowthPercent: 5.4, riskFactors: 'Meter faults, data gaps' },
      { circle: 'Madurai South', forecastedEstimationCases: 295, expectedGrowthPercent: 3.2, riskFactors: 'Connectivity issues' },
      { circle: 'Coimbatore East', forecastedEstimationCases: 210, expectedGrowthPercent: 4.1, riskFactors: 'Manual reading delays' },
    ];
  }

  getVEECategoryBehavior(): VEECategoryBehavior[] {
    return [
      { consumerType: 'Domestic LT', shareOfTotalEstimation: '42%', notes: 'Many due to meter faults in old housing areas' },
      { consumerType: 'Commercial LT', shareOfTotalEstimation: '28%', notes: 'Seasonal sales fluctuations' },
      { consumerType: 'Industrial LT', shareOfTotalEstimation: '20%', notes: 'Bulk meter data edits due to plant shutdowns' },
      { consumerType: 'Others', shareOfTotalEstimation: '10%', notes: 'Mixed reasons' },
    ];
  }
}

