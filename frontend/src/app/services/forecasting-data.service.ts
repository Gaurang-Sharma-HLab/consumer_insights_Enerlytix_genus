import { Injectable } from '@angular/core';

// Topic 1: Load Forecasting Report
export interface LoadForecastSummary {
  label: string;
  value: string;
}

export interface LoadForecastByCategory {
  category: string;
  noOfConsumers: number;
  avgDailyLoad: number;
  forecastedPeak: number;
  yoyChange: string;
  notes: string;
}

export interface ConsumerBehaviorCategory {
  consumerID: string;
  type: string;
  avgUsage: number;
  peakUsageTime: string;
  category: string;
  notes: string;
}

// Topic 2: ToD-wise Consumption Analysis & Forecasting Report
export interface ToDSummary {
  label: string;
  value: string;
}

export interface ToDInterval {
  todBlockID: string;
  timeInterval: string;
  category: string;
}

export interface ToDHistorical {
  id: string;
  todBlock: string;
  avgConsumption: string;
  maxLoad: string;
  noOfConsumersActive: number;
  loadPercentShare: string;
  peakLoadDate: string;
}

export interface ToDForecast {
  id: string;
  todBlock: string;
  forecastedLoad: string;
  expectedGrowthPercent: number;
  contributingSegments: string;
  riskFactors: string;
}

export interface ToDSegment {
  consumerType: string;
  peakTimeBlock: string;
  shareOfTotalLoad: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class ForecastingDataService {
  constructor() { }

  // Topic 1: Load Forecasting Report
  getLoadForecastSummary(): LoadForecastSummary[] {
    return [
      { label: 'Forecast Period', value: 'Sep-Nov 2025' },
      { label: 'Peak Demand Forecast', value: '465 MW' },
      { label: 'Avg. Daily Load', value: '342 MW' },
      { label: '% Expected Increase', value: '+12% (vs last year)' },
      { label: 'Key Drivers', value: 'High temps, Diwali' },
    ];
  }

  getLoadForecastByCategory(): LoadForecastByCategory[] {
    return [
      { category: 'Domestic', noOfConsumers: 120000, avgDailyLoad: 7.8, forecastedPeak: 10.2, yoyChange: '+8%', notes: 'Rise due to festive cooking' },
      { category: 'Commercial', noOfConsumers: 22000, avgDailyLoad: 54.2, forecastedPeak: 68.9, yoyChange: '+14%', notes: 'AC usage + festival lighting' },
      { category: 'Industrial LT', noOfConsumers: 3500, avgDailyLoad: 480.5, forecastedPeak: 590.2, yoyChange: '+9%', notes: 'Steady rise' },
      { category: 'Agricultural', noOfConsumers: 9000, avgDailyLoad: 35.1, forecastedPeak: 45.6, yoyChange: '+3%', notes: 'Monsoon impact' },
      { category: 'EV Charging', noOfConsumers: 600, avgDailyLoad: 102.3, forecastedPeak: 144.8, yoyChange: '+22%', notes: 'Infrastructure expansion' },
    ];
  }

  getConsumerBehaviorCategories(): ConsumerBehaviorCategory[] {
    return [
      { consumerID: '1234567890', type: 'Domestic', avgUsage: 5.1, peakUsageTime: '18:00–21:00', category: 'Peak-Heavy', notes: 'Lighting & cooling load' },
      { consumerID: '2345678901', type: 'Commercial', avgUsage: 63.3, peakUsageTime: '11:00–16:00', category: 'Solar User', notes: 'Rooftop solar observed' },
      { consumerID: '3456789012', type: 'Domestic', avgUsage: 1.8, peakUsageTime: '19:00–22:00', category: 'Low User', notes: 'Possibly vacant or low use' },
      { consumerID: '4567890123', type: 'Industrial LT', avgUsage: 580.1, peakUsageTime: '08:00–18:00', category: 'Base Load', notes: 'Steady production operation' },
      { consumerID: '5678901234', type: 'EV Charger', avgUsage: 110.7, peakUsageTime: '20:00–01:00', category: 'Night Peak', notes: 'Fast charger at mall area' },
    ];
  }

  // Topic 2: ToD-wise Consumption Analysis & Forecasting Report
  getToDSummary(): ToDSummary[] {
    return [
      { label: 'Peak Load Period', value: '18:00 – 22:00 hrs' },
      { label: 'Avg. Peak Load (kWh)', value: '412 MW' },
      { label: 'Valley Period', value: '00:00 – 05:00 hrs' },
      { label: 'Avg. Valley Load (kWh)', value: '176 MW' },
      { label: 'Forecasted Next Month Peak', value: '435 MW' },
      { label: 'Peak Load Growth vs LY', value: '+9.1%' },
    ];
  }

  getToDIntervals(): ToDInterval[] {
    return [
      { todBlockID: 'T1', timeInterval: '00:00 – 06:00 hrs', category: 'Night Valley' },
      { todBlockID: 'T2', timeInterval: '06:00 – 10:00 hrs', category: 'Morning Rise' },
      { todBlockID: 'T3', timeInterval: '10:00 – 14:00 hrs', category: 'Midday Normal' },
      { todBlockID: 'T4', timeInterval: '14:00 – 18:00 hrs', category: 'Afternoon Peak' },
      { todBlockID: 'T5', timeInterval: '18:00 – 22:00 hrs', category: 'Evening Peak' },
      { todBlockID: 'T6', timeInterval: '22:00 – 00:00 hrs', category: 'Night Normal' },
    ];
  }

  getToDHistorical(): ToDHistorical[] {
    return [
      { id: '1', todBlock: 'T1', avgConsumption: '6.2 Cr', maxLoad: '160', noOfConsumersActive: 38220, loadPercentShare: '14.8%', peakLoadDate: '02-Aug-2025' },
      { id: '2', todBlock: 'T2', avgConsumption: '7.5 Cr', maxLoad: '205', noOfConsumersActive: 50230, loadPercentShare: '17.5%', peakLoadDate: '01-Aug-2025' },
      { id: '3', todBlock: 'T3', avgConsumption: '8.8 Cr', maxLoad: '232', noOfConsumersActive: 62120, loadPercentShare: '19.3%', peakLoadDate: '04-Aug-2025' },
      { id: '4', todBlock: 'T4', avgConsumption: '9.1 Cr', maxLoad: '251', noOfConsumersActive: 64780, loadPercentShare: '20.1%', peakLoadDate: '06-Aug-2025' },
      { id: '5', todBlock: 'T5', avgConsumption: '10.4 Cr', maxLoad: '290', noOfConsumersActive: 79420, loadPercentShare: '22.9%', peakLoadDate: '05-Aug-2025' },
      { id: '6', todBlock: 'T6', avgConsumption: '6.9 Cr', maxLoad: '185', noOfConsumersActive: 42300, loadPercentShare: '15.4%', peakLoadDate: '03-Aug-2025' },
    ];
  }

  getToDForecast(): ToDForecast[] {
    return [
      { id: '1', todBlock: 'T1', forecastedLoad: '170', expectedGrowthPercent: 6.25, contributingSegments: 'EV Charging, Cold Storage', riskFactors: 'Low solar availability' },
      { id: '2', todBlock: 'T2', forecastedLoad: '215', expectedGrowthPercent: 4.8, contributingSegments: 'Domestic, Commercial Start-Up', riskFactors: 'Temperature fluctuations' },
      { id: '3', todBlock: 'T3', forecastedLoad: '245', expectedGrowthPercent: 5.6, contributingSegments: 'Commercial, Light Industries', riskFactors: 'Normal' },
      { id: '4', todBlock: 'T4', forecastedLoad: '260', expectedGrowthPercent: 3.6, contributingSegments: 'Agriculture, Office HVAC', riskFactors: 'Moderate solar gain' },
      { id: '5', todBlock: 'T5', forecastedLoad: '305', expectedGrowthPercent: 5.1, contributingSegments: 'Domestic Peak, Lighting Loads', riskFactors: 'Festival season spike expected' },
      { id: '6', todBlock: 'T6', forecastedLoad: '190', expectedGrowthPercent: 2.7, contributingSegments: 'Domestic Post-Dinner Loads', riskFactors: 'Less predictable' },
    ];
  }

  getToDSegments(): ToDSegment[] {
    return [
      { consumerType: 'Domestic (Urban)', peakTimeBlock: 'T5 (18–22 hrs)', shareOfTotalLoad: '29.2%', notes: 'ACs, Lights, TV' },
      { consumerType: 'Industrial LT', peakTimeBlock: 'T3/T4 (10–18 hrs)', shareOfTotalLoad: '24.7%', notes: 'Steady day consumption' },
      { consumerType: 'Commercial', peakTimeBlock: 'T2/T3 (06–14 hrs)', shareOfTotalLoad: '18.9%', notes: 'Office & shop usage' },
      { consumerType: 'EV Charging', peakTimeBlock: 'T1/T6 (00–06 hrs)', shareOfTotalLoad: '9.5%', notes: 'Most chargers operate post-midnight' },
      { consumerType: 'Agricultural', peakTimeBlock: 'T4 (14–18 hrs)', shareOfTotalLoad: '8.7%', notes: 'Controlled irrigation hours' },
      { consumerType: 'Others', peakTimeBlock: 'Mixed', shareOfTotalLoad: '9.0%', notes: 'Miscellaneous' },
    ];
  }
}

