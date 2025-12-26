import { Injectable } from '@angular/core';

export type IconName = 
  | 'lightning' | 'chart' | 'shield' | 'alert' | 'meter' | 'trend-up' | 'trend-down'
  | 'power' | 'outage' | 'voltage' | 'frequency' | 'transformer' | 'feeder'
  | 'loss' | 'revenue' | 'billing' | 'consumer' | 'complaint' | 'forecast'
  | 'reliability' | 'maintenance' | 'tamper' | 'phase' | 'load' | 'exception'
  | 'recharge' | 'defective' | 'disconnected' | 'zero' | 'drop' | 'low'
  | 'profile' | 'communication' | 'network' | 'evaluation' | 'tod' | 'default';

@Injectable({
  providedIn: 'root'
})
export class TopicIconService {
  private iconMap: Map<string, IconName> = new Map([
    // Consumer Data Analysis
    ['Abnormal Consumption Pattern', 'alert'],
    ['Zero Consumption Analysis Report', 'zero'],
    ['Consumption Drop Analysis Report', 'drop'],
    ['Low Consumption Trend Report', 'low'],
    ['Consumers with Consumption Lower Than Expected Pattern', 'trend-down'],
    ['Consumer Consumption Profiling & Bucketing Report', 'profile'],
    ['Communication Gap & Ageing Analytics Report', 'communication'],
    
    // Theft Protection
    ['Consumers with Consumption Lower Than Expected Pattern', 'trend-down'],
    ['Abnormal Consumption Pattern – Day Use with Zero Night Consumption', 'alert'],
    ['Net Meters with Export During Odd Hours', 'meter'],
    ['Suspected Consumers Report – Tamper Analytics & Profiling', 'tamper'],
    
    // Revenue Protection
    ['Potential Revenue Loss Report – Due to No Power Supply', 'outage'],
    ['Phase Unbalance Analysis Report – DT Level', 'phase'],
    ['Analytics Report – Meter Burnt Cases', 'alert'],
    ['Load Violation & Enhancement Recommendation Report', 'load'],
    ['Exception Billing Report for Smart Meter Consumers', 'exception'],
    ['Revenue Protection Report – Revenue analytics as per consumption pattern', 'revenue'],
    ['Low Power Factor Analysis Report', 'power'],
    ['Revenue Protection Analysis Report: Recharge Trends', 'recharge'],
    ['Revenue Protection – Defective Meter Analysis Report', 'defective'],
    ['Disconnected Prepaid Consumers Report', 'disconnected'],
    
    // Energy Audit
    ['Feeder Loss Report – T&D & AT&C Loss Analysis', 'loss'],
    ['Feeder to Consumer Loss Report', 'loss'],
    ['LT Energy Loss Report – DT Level', 'loss'],
    ['Feeder & DT Performance Evaluation Report', 'evaluation'],
    ['Summary Report: High-Risk & Underperforming Network Assets', 'network'],
    
    // Power Quality
    ['Outage Monitoring & Analysis Report', 'outage'],
    ['Voltage Deviation Index (VDI) Analysis & Forecasting Report', 'voltage'],
    ['Frequency Deviation Index (F-DI) Analysis & Forecasting Report', 'frequency'],
    ['Low Power Factor Analysis & Forecasting Report', 'power'],
    
    // Consumer Grievance
    ['Consumer Complaints Analysis Report', 'complaint'],
    ['Complaint Resolution Time Analysis Report', 'complaint'],
    
    // Forecasting
    ['Load Forecasting Report', 'forecast'],
    ['ToD-wise Consumption Analysis & Forecasting Report', 'tod'],
    
    // Reliability Indices
    ['Reliability Indices Tracking & Analysis Report', 'reliability'],
    
    // VEE Report
    ['VEE Report – Consumer Estimation & Editing Analysis', 'billing'],
    
    // Preventive Maintenance
    ['Distribution Transformer (DT) Loading Report', 'transformer'],
    ['Load Management & Preventive Maintenance Analysis Report', 'maintenance'],
  ]);

  getIconForTopic(title: string): IconName {
    // Try exact match first
    if (this.iconMap.has(title)) {
      return this.iconMap.get(title)!;
    }
    
    // Try partial matches based on keywords
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('revenue') || lowerTitle.includes('billing')) return 'revenue';
    if (lowerTitle.includes('outage') || lowerTitle.includes('power supply')) return 'outage';
    if (lowerTitle.includes('consumption') && lowerTitle.includes('abnormal')) return 'alert';
    if (lowerTitle.includes('zero consumption')) return 'zero';
    if (lowerTitle.includes('drop') || lowerTitle.includes('decline')) return 'drop';
    if (lowerTitle.includes('low consumption') || lowerTitle.includes('lower than expected')) return 'trend-down';
    if (lowerTitle.includes('loss') || lowerTitle.includes('t&d') || lowerTitle.includes('at&c')) return 'loss';
    if (lowerTitle.includes('transformer') || lowerTitle.includes('dt')) return 'transformer';
    if (lowerTitle.includes('feeder')) return 'feeder';
    if (lowerTitle.includes('voltage') || lowerTitle.includes('vdi')) return 'voltage';
    if (lowerTitle.includes('frequency') || lowerTitle.includes('f-di')) return 'frequency';
    if (lowerTitle.includes('power factor')) return 'power';
    if (lowerTitle.includes('phase') || lowerTitle.includes('unbalance')) return 'phase';
    if (lowerTitle.includes('load')) return 'load';
    if (lowerTitle.includes('forecast') || lowerTitle.includes('forecasting')) return 'forecast';
    if (lowerTitle.includes('complaint') || lowerTitle.includes('grievance')) return 'complaint';
    if (lowerTitle.includes('reliability') || lowerTitle.includes('saifi') || lowerTitle.includes('saidi')) return 'reliability';
    if (lowerTitle.includes('maintenance') || lowerTitle.includes('preventive')) return 'maintenance';
    if (lowerTitle.includes('tamper') || lowerTitle.includes('suspected')) return 'tamper';
    if (lowerTitle.includes('meter burnt') || lowerTitle.includes('defective meter')) return 'defective';
    if (lowerTitle.includes('recharge') || lowerTitle.includes('prepaid')) return 'recharge';
    if (lowerTitle.includes('disconnected')) return 'disconnected';
    if (lowerTitle.includes('exception')) return 'exception';
    if (lowerTitle.includes('profile') || lowerTitle.includes('bucketing')) return 'profile';
    if (lowerTitle.includes('communication') || lowerTitle.includes('ageing')) return 'communication';
    if (lowerTitle.includes('evaluation') || lowerTitle.includes('performance')) return 'evaluation';
    if (lowerTitle.includes('network') || lowerTitle.includes('asset')) return 'network';
    if (lowerTitle.includes('tod') || lowerTitle.includes('time of day')) return 'tod';
    if (lowerTitle.includes('consumer') && lowerTitle.includes('analysis')) return 'consumer';
    if (lowerTitle.includes('chart') || lowerTitle.includes('analytics') || lowerTitle.includes('report')) return 'chart';
    
    return 'default';
  }
}

