import { Injectable } from '@angular/core';

// Topic 1: Outage Monitoring & Analysis Report
export interface OutageSummary {
  label: string;
  value: number | string;
}

export interface OutageInterval {
  intervalID: string;
  timeInterval: string;
  category: string;
}

export interface OutageHistorical {
  id: string;
  interval: string;
  avgOutages: number;
  maxOutages: number;
  consumersAffected: number;
  shareOfTotalOutages: string;
  peakOutageDate: string;
}

export interface OutageForecast {
  id: string;
  interval: string;
  forecastedAvgOutages: number;
  expectedChangePercent: number;
  contributingFactors: string;
  riskIndicators: string;
}

export interface OutageSegment {
  consumerType: string;
  mostAffectedInterval: string;
  shareOfTotalOutages: string;
  notes: string;
}

// Topic 2: Voltage Deviation Index (VDI) Analysis & Forecasting Report
export interface VoltageDeviationSummary {
  label: string;
  value: number | string;
}

export interface VoltageInterval {
  intervalID: string;
  timeInterval: string;
  category: string;
}

export interface VoltageHistorical {
  id: string;
  interval: string;
  avgVoltageDeviation: number;
  maxDeviation: number;
  feedersMonitored: number;
  shareOfTotalDeviations: string;
  peakDeviationDate: string;
}

export interface VoltageForecast {
  id: string;
  interval: string;
  forecastedMaxDeviation: number;
  expectedChangePercent: number;
  contributingFactors: string;
  riskFactors: string;
}

export interface VoltageSegment {
  consumerType: string;
  worstInterval: string;
  shareOfTotalDeviations: string;
  notes: string;
}

// Topic 3: Frequency Deviation Index (F-DI) Analysis & Forecasting Report
export interface FrequencyDeviationSummary {
  label: string;
  value: number | string;
}

export interface FrequencyBlock {
  blockID: string;
  frequencyRange: string;
  category: string;
}

export interface FrequencyHistorical {
  id: string;
  blockID: string;
  avgOccurrenceTime: number;
  maxContinuousDuration: number;
  noOfEquipmentAffected: number;
  shareOfTotalDeviations: string;
  worstDate: string;
}

export interface FrequencyForecast {
  id: string;
  equipmentType: string;
  forecastedAvgFDI: number;
  expectedGrowthPercent: number;
  contributingFactors: string;
  riskFactors: string;
}

export interface FrequencyEquipmentType {
  equipmentType: string;
  shareOfTotalDeviations: string;
  notes: string;
}

// Topic 4: Low Power Factor Analysis & Forecasting Report– System Meters (DT/Feeder)
export interface SystemPowerFactorSummary {
  label: string;
  value: number | string;
}

export interface SystemPowerFactorHistorical {
  id: string;
  day: string;
  avgPFFeeder: number;
  avgPFDT: number;
  lowestPFRecorded: number;
  noOfAffectedFeeders: number;
  noOfAffectedDTs: number;
}

export interface SystemPowerFactorForecast {
  id: string;
  category: string;
  forecastedAvgPF: string;
  expectedChange: string;
  contributingFactors: string;
  riskLevel: string;
}

export interface SystemPowerFactorSegment {
  consumerType: string;
  typicalPF: number;
  impact: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class PowerQualityDataService {
  constructor() { }

  // Topic 1: Outage Monitoring & Analysis Report
  getOutageSummary(): OutageSummary[] {
    return [
      { label: 'Most Affected Period', value: '18:00 – 22:00 hrs' },
      { label: 'Avg. Outages/Consumer/Day', value: '2.8' },
      { label: 'Least Affected Period', value: '00:00 – 06:00 hrs' },
      { label: 'Circle with Max Outages', value: 'South Division' },
      { label: 'Forecasted Next Month Avg. Outages/Consumer', value: '3.1' },
      { label: 'Outage Frequency Growth vs LY', value: '+12.4%' },
    ];
  }

  getOutageIntervals(): OutageInterval[] {
    return [
      { intervalID: 'O1', timeInterval: '00:00 – 06:00 hrs', category: 'Night Low Activity' },
      { intervalID: 'O2', timeInterval: '06:00 – 10:00 hrs', category: 'Morning Peak Start' },
      { intervalID: 'O3', timeInterval: '10:00 – 14:00 hrs', category: 'Midday Operational' },
      { intervalID: 'O4', timeInterval: '14:00 – 18:00 hrs', category: 'Afternoon Load Rise' },
      { intervalID: 'O5', timeInterval: '18:00 – 22:00 hrs', category: 'Evening Peak' },
      { intervalID: 'O6', timeInterval: '22:00 – 00:00 hrs', category: 'Night Normal' },
    ];
  }

  getOutageHistorical(): OutageHistorical[] {
    return [
      { id: '1', interval: 'O1', avgOutages: 0.3, maxOutages: 4, consumersAffected: 4520, shareOfTotalOutages: '5.2%', peakOutageDate: '03-Aug-2025' },
      { id: '2', interval: 'O2', avgOutages: 0.8, maxOutages: 7, consumersAffected: 10220, shareOfTotalOutages: '13.9%', peakOutageDate: '02-Aug-2025' },
      { id: '3', interval: 'O3', avgOutages: 1.0, maxOutages: 8, consumersAffected: 12430, shareOfTotalOutages: '17.3%', peakOutageDate: '05-Aug-2025' },
      { id: '4', interval: 'O4', avgOutages: 1.2, maxOutages: 9, consumersAffected: 15780, shareOfTotalOutages: '19.8%', peakOutageDate: '06-Aug-2025' },
      { id: '5', interval: 'O5', avgOutages: 1.5, maxOutages: 12, consumersAffected: 18960, shareOfTotalOutages: '24.8%', peakOutageDate: '04-Aug-2025' },
      { id: '6', interval: 'O6', avgOutages: 0.9, maxOutages: 6, consumersAffected: 9830, shareOfTotalOutages: '19.0%', peakOutageDate: '01-Aug-2025' },
    ];
  }

  getOutageForecast(): OutageForecast[] {
    return [
      { id: '1', interval: 'O1', forecastedAvgOutages: 0.35, expectedChangePercent: 5, contributingFactors: 'Night maintenance, low load reliability', riskIndicators: 'Isolated maintenance spikes' },
      { id: '2', interval: 'O2', forecastedAvgOutages: 0.85, expectedChangePercent: 6, contributingFactors: 'Morning load surge', riskIndicators: 'Transformer stress' },
      { id: '3', interval: 'O3', forecastedAvgOutages: 1.05, expectedChangePercent: 4, contributingFactors: 'Commercial operations', riskIndicators: 'Midday voltage dips' },
      { id: '4', interval: 'O4', forecastedAvgOutages: 1.25, expectedChangePercent: 4.2, contributingFactors: 'Agricultural pump loads', riskIndicators: 'High feeder load' },
      { id: '5', interval: 'O5', forecastedAvgOutages: 1.65, expectedChangePercent: 10, contributingFactors: 'Peak domestic usage', riskIndicators: 'Overloading, weather' },
      { id: '6', interval: 'O6', forecastedAvgOutages: 0.95, expectedChangePercent: 5.5, contributingFactors: 'Post-dinner domestic usage', riskIndicators: 'Cable faults' },
    ];
  }

  getOutageSegments(): OutageSegment[] {
    return [
      { consumerType: 'Domestic (Urban)', mostAffectedInterval: 'O5 (18–22 hrs)', shareOfTotalOutages: '32.1%', notes: 'ACs, lighting, appliance load surges' },
      { consumerType: 'Industrial LT', mostAffectedInterval: 'O3/O4 (10–18 hrs)', shareOfTotalOutages: '27.8%', notes: 'Motor load trips, equipment protection' },
      { consumerType: 'Commercial', mostAffectedInterval: 'O2/O3 (06–14 hrs)', shareOfTotalOutages: '15.4%', notes: 'Business downtime losses' },
      { consumerType: 'Agricultural', mostAffectedInterval: 'O4 (14–18 hrs)', shareOfTotalOutages: '11.2%', notes: 'Irrigation schedule interruptions' },
      { consumerType: 'EV Charging', mostAffectedInterval: 'O1/O6 (00–06 hrs, 22–00 hrs)', shareOfTotalOutages: '7.6%', notes: 'Charging disruption' },
      { consumerType: 'Others', mostAffectedInterval: 'Mixed', shareOfTotalOutages: '6.0%', notes: 'Miscellaneous' },
    ];
  }

  // Topic 2: Voltage Deviation Index (VDI) Analysis & Forecasting Report
  getVoltageDeviationSummary(): VoltageDeviationSummary[] {
    return [
      { label: 'Worst Performing Period', value: '18:00 – 22:00 hrs' },
      { label: 'Avg. Deviation (All Feeders)', value: '4.3%' },
      { label: 'Best Performing Period', value: '00:00 – 06:00 hrs' },
      { label: 'Lowest Avg. Deviation', value: '1.8%' },
      { label: 'Forecasted Next Month Max Deviation', value: '4.7%' },
      { label: 'Change vs Last Year', value: '+0.5%' },
    ];
  }

  getVoltageIntervals(): VoltageInterval[] {
    return [
      { intervalID: 'V1', timeInterval: '00:00 – 06:00 hrs', category: 'Night Valley' },
      { intervalID: 'V2', timeInterval: '06:00 – 10:00 hrs', category: 'Morning Rise' },
      { intervalID: 'V3', timeInterval: '10:00 – 14:00 hrs', category: 'Midday Normal' },
      { intervalID: 'V4', timeInterval: '14:00 – 18:00 hrs', category: 'Afternoon Load Rise' },
      { intervalID: 'V5', timeInterval: '18:00 – 22:00 hrs', category: 'Evening Peak' },
      { intervalID: 'V6', timeInterval: '22:00 – 00:00 hrs', category: 'Night Normal' },
    ];
  }

  getVoltageHistorical(): VoltageHistorical[] {
    return [
      { id: '1', interval: 'V1', avgVoltageDeviation: 1.8, maxDeviation: 3.2, feedersMonitored: 420, shareOfTotalDeviations: '12.4%', peakDeviationDate: '02-Aug-2025' },
      { id: '2', interval: 'V2', avgVoltageDeviation: 2.5, maxDeviation: 4.0, feedersMonitored: 450, shareOfTotalDeviations: '14.7%', peakDeviationDate: '01-Aug-2025' },
      { id: '3', interval: 'V3', avgVoltageDeviation: 3.1, maxDeviation: 4.6, feedersMonitored: 490, shareOfTotalDeviations: '18.1%', peakDeviationDate: '04-Aug-2025' },
      { id: '4', interval: 'V4', avgVoltageDeviation: 3.8, maxDeviation: 5.2, feedersMonitored: 500, shareOfTotalDeviations: '19.5%', peakDeviationDate: '06-Aug-2025' },
      { id: '5', interval: 'V5', avgVoltageDeviation: 4.3, maxDeviation: 6.0, feedersMonitored: 510, shareOfTotalDeviations: '22.8%', peakDeviationDate: '05-Aug-2025' },
      { id: '6', interval: 'V6', avgVoltageDeviation: 2.7, maxDeviation: 4.1, feedersMonitored: 460, shareOfTotalDeviations: '12.5%', peakDeviationDate: '03-Aug-2025' },
    ];
  }

  getVoltageForecast(): VoltageForecast[] {
    return [
      { id: '1', interval: 'V1', forecastedMaxDeviation: 2.0, expectedChangePercent: 0.2, contributingFactors: 'Low load, steady grid', riskFactors: 'Isolated feeder faults' },
      { id: '2', interval: 'V2', forecastedMaxDeviation: 2.8, expectedChangePercent: 0.3, contributingFactors: 'Morning domestic ramp-up', riskFactors: 'Seasonal load changes' },
      { id: '3', interval: 'V3', forecastedMaxDeviation: 3.4, expectedChangePercent: 0.3, contributingFactors: 'Industrial & commercial', riskFactors: 'Midday voltage dips' },
      { id: '4', interval: 'V4', forecastedMaxDeviation: 4.1, expectedChangePercent: 0.3, contributingFactors: 'Agricultural pumps', riskFactors: 'Weather-driven demand' },
      { id: '5', interval: 'V5', forecastedMaxDeviation: 4.7, expectedChangePercent: 0.4, contributingFactors: 'Evening peak', riskFactors: 'Festival season spikes' },
      { id: '6', interval: 'V6', forecastedMaxDeviation: 2.9, expectedChangePercent: 0.2, contributingFactors: 'Post-dinner usage', riskFactors: 'Sudden load changes' },
    ];
  }

  getVoltageSegments(): VoltageSegment[] {
    return [
      { consumerType: 'Domestic (Urban)', worstInterval: 'V5', shareOfTotalDeviations: '28.0%', notes: 'Heavy AC, lighting loads' },
      { consumerType: 'Industrial LT', worstInterval: 'V3/V4', shareOfTotalDeviations: '26.5%', notes: 'Machine start-up spikes' },
      { consumerType: 'Commercial', worstInterval: 'V2/V3', shareOfTotalDeviations: '17.5%', notes: 'Office/shop load changes' },
      { consumerType: 'Agricultural', worstInterval: 'V4', shareOfTotalDeviations: '12.0%', notes: 'Pump set motor surges' },
      { consumerType: 'EV Charging', worstInterval: 'V1/V6', shareOfTotalDeviations: '8.5%', notes: 'Night charging dips' },
      { consumerType: 'Others', worstInterval: 'Mixed', shareOfTotalDeviations: '7.5%', notes: 'Miscellaneous impacts' },
    ];
  }

  // Topic 3: Frequency Deviation Index (F-DI) Analysis & Forecasting Report
  getFrequencyDeviationSummary(): FrequencyDeviationSummary[] {
    return [
      { label: 'Avg. Frequency (Hz)', value: '49.92' },
      { label: 'Avg. Frequency Deviation Index', value: '0.86' },
      { label: 'Worst Recorded F-DI (DT)', value: '0.72' },
      { label: 'Worst Recorded F-DI (Feeder)', value: '0.75' },
      { label: '% of DTs below 0.85 F-DI', value: '11.3%' },
      { label: '% of Feeders below 0.85 F-DI', value: '9.1%' },
      { label: 'Forecasted Next Month Avg. F-DI', value: '0.88' },
      { label: 'Improvement Target vs LY', value: '+2.8%' },
    ];
  }

  getFrequencyBlocks(): FrequencyBlock[] {
    return [
      { blockID: 'F1', frequencyRange: '49.85 – 49.90', category: 'Mild Deviation' },
      { blockID: 'F2', frequencyRange: '49.80 – 49.85', category: 'Moderate Deviation' },
      { blockID: 'F3', frequencyRange: '49.75 – 49.80', category: 'Significant Deviation' },
      { blockID: 'F4', frequencyRange: '< 49.75', category: 'Severe Deviation' },
      { blockID: 'F5', frequencyRange: '> 50.05', category: 'High-side Overshoot' },
    ];
  }

  getFrequencyHistorical(): FrequencyHistorical[] {
    return [
      { id: '1', blockID: 'F1', avgOccurrenceTime: 45, maxContinuousDuration: 12, noOfEquipmentAffected: 52, shareOfTotalDeviations: '28.4%', worstDate: '02-Aug-2025' },
      { id: '2', blockID: 'F2', avgOccurrenceTime: 32, maxContinuousDuration: 9, noOfEquipmentAffected: 38, shareOfTotalDeviations: '20.1%', worstDate: '04-Aug-2025' },
      { id: '3', blockID: 'F3', avgOccurrenceTime: 25, maxContinuousDuration: 7, noOfEquipmentAffected: 24, shareOfTotalDeviations: '13.6%', worstDate: '06-Aug-2025' },
      { id: '4', blockID: 'F4', avgOccurrenceTime: 18, maxContinuousDuration: 5, noOfEquipmentAffected: 16, shareOfTotalDeviations: '10.2%', worstDate: '05-Aug-2025' },
      { id: '5', blockID: 'F5', avgOccurrenceTime: 39, maxContinuousDuration: 11, noOfEquipmentAffected: 46, shareOfTotalDeviations: '27.7%', worstDate: '03-Aug-2025' },
    ];
  }

  getFrequencyForecast(): FrequencyForecast[] {
    return [
      { id: '1', equipmentType: 'DT', forecastedAvgFDI: 0.87, expectedGrowthPercent: 4.9, contributingFactors: 'Load balancing, preventive maintenance', riskFactors: 'Agricultural pump loads' },
      { id: '2', equipmentType: 'Feeder', forecastedAvgFDI: 0.89, expectedGrowthPercent: 3.8, contributingFactors: 'Voltage regulation schemes', riskFactors: 'Industrial load surges' },
      { id: '3', equipmentType: 'DT', forecastedAvgFDI: 0.88, expectedGrowthPercent: 2.7, contributingFactors: 'Improved capacitor bank operation', riskFactors: 'Weather-driven demand' },
      { id: '4', equipmentType: 'Feeder', forecastedAvgFDI: 0.90, expectedGrowthPercent: 4.2, contributingFactors: 'SCADA-based frequency correction', riskFactors: 'Seasonal peak stress' },
      { id: '5', equipmentType: 'DT', forecastedAvgFDI: 0.89, expectedGrowthPercent: 3.3, contributingFactors: 'Distribution automation upgrades', riskFactors: 'Low response to deviation alerts' },
    ];
  }

  getFrequencyEquipmentTypes(): FrequencyEquipmentType[] {
    return [
      { equipmentType: 'DT', shareOfTotalDeviations: '62.8%', notes: 'Higher deviation during low-load rural hours' },
      { equipmentType: 'Feeder', shareOfTotalDeviations: '37.2%', notes: 'Linked to high-demand industrial and urban feeders' },
    ];
  }

  // Topic 4: Low Power Factor Analysis & Forecasting Report– System Meters (DT/Feeder)
  getSystemPowerFactorSummary(): SystemPowerFactorSummary[] {
    return [
      { label: 'Analysis Scope', value: 'Feeder & DT-level power factor performance' },
      { label: 'Total Feeders Analyzed', value: '128' },
      { label: 'Total DTs Analyzed', value: '1,524' },
      { label: 'Avg. System Power Factor', value: '0.86' },
      { label: 'Lowest Recorded PF', value: '0.62' },
      { label: 'Number of Low PF Feeders (<0.90)', value: '42' },
      { label: 'Number of Low PF DTs (<0.90)', value: '396' },
      { label: 'Estimated Reactive Power Loss', value: '4.2 MVAR' },
      { label: 'Expected Impact if Corrected', value: '+3.8% Energy Efficiency Improvement' },
    ];
  }

  getSystemPowerFactorHistorical(): SystemPowerFactorHistorical[] {
    return [
      { id: '1', day: '01-Aug-2025', avgPFFeeder: 0.87, avgPFDT: 0.85, lowestPFRecorded: 0.64, noOfAffectedFeeders: 40, noOfAffectedDTs: 392 },
      { id: '2', day: '02-Aug-2025', avgPFFeeder: 0.86, avgPFDT: 0.84, lowestPFRecorded: 0.63, noOfAffectedFeeders: 42, noOfAffectedDTs: 400 },
      { id: '3', day: '03-Aug-2025', avgPFFeeder: 0.88, avgPFDT: 0.86, lowestPFRecorded: 0.65, noOfAffectedFeeders: 39, noOfAffectedDTs: 388 },
      { id: '4', day: '04-Aug-2025', avgPFFeeder: 0.85, avgPFDT: 0.83, lowestPFRecorded: 0.62, noOfAffectedFeeders: 45, noOfAffectedDTs: 410 },
      { id: '5', day: '05-Aug-2025', avgPFFeeder: 0.87, avgPFDT: 0.85, lowestPFRecorded: 0.64, noOfAffectedFeeders: 41, noOfAffectedDTs: 395 },
      { id: '6', day: '06-Aug-2025', avgPFFeeder: 0.86, avgPFDT: 0.84, lowestPFRecorded: 0.63, noOfAffectedFeeders: 44, noOfAffectedDTs: 402 },
      { id: '7', day: '07-Aug-2025', avgPFFeeder: 0.87, avgPFDT: 0.85, lowestPFRecorded: 0.64, noOfAffectedFeeders: 40, noOfAffectedDTs: 390 },
    ];
  }

  getSystemPowerFactorForecast(): SystemPowerFactorForecast[] {
    return [
      { id: '1', category: 'Feeder Level', forecastedAvgPF: '0.86 → 0.88', expectedChange: '+2.3%', contributingFactors: 'Capacitor bank maintenance', riskLevel: 'Medium' },
      { id: '2', category: 'DT Level', forecastedAvgPF: '0.84 → 0.86', expectedChange: '+2.4%', contributingFactors: 'Consumer-end PF correction', riskLevel: 'Medium' },
      { id: '3', category: 'Critical Feeders', forecastedAvgPF: '0.64 → 0.70', expectedChange: '+9.4%', contributingFactors: 'Targeted reactive compensation', riskLevel: 'High' },
      { id: '4', category: 'Critical DTs', forecastedAvgPF: '0.62 → 0.69', expectedChange: '+11.3%', contributingFactors: 'Awareness + hardware upgrade', riskLevel: 'High' },
    ];
  }

  getSystemPowerFactorSegments(): SystemPowerFactorSegment[] {
    return [
      { consumerType: 'LT Industrial', typicalPF: 0.78, impact: 'High reactive draw', notes: 'Welding & motor loads' },
      { consumerType: 'Commercial', typicalPF: 0.82, impact: 'Medium', notes: 'AC compressors, refrigeration' },
      { consumerType: 'Agricultural', typicalPF: 0.76, impact: 'High', notes: 'Pump sets without PF correction' },
      { consumerType: 'Domestic', typicalPF: 0.89, impact: 'Low', notes: 'Generally compliant' },
      { consumerType: 'EV Charging', typicalPF: 0.84, impact: 'Medium', notes: 'High load during night valley' },
      { consumerType: 'Others', typicalPF: 0, impact: 'Variable', notes: 'Depends on connected load' },
    ];
  }
}

