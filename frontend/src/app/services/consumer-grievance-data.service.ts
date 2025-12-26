import { Injectable } from '@angular/core';

// Topic 1: Consumer Complaints Analysis Report
export interface ComplaintComparisonSummary {
  label: string;
  beforeSmartMetering: string;
  afterSmartMetering: string;
  percentChange: string;
}

export interface ComplaintCategory {
  complaintType: string;
  beforeCount: string;
  afterCount: string;
  percentChange: string;
  remarks: string;
}

export interface MonthlyComplaintTrend {
  month: string;
  complaintsBefore: string;
  complaintsAfter: string;
}

export interface RootCauseAnalysis {
  rootCause: string;
  percentOfCases: string;
  resolutionMeasuresTaken: string;
}

// Topic 2: Complaint Resolution Time Analysis Report
export interface ResolutionTimeSummary {
  label: string;
  value: string;
}

export interface ResolutionTimeByType {
  complaintType: string;
  noOfComplaints: number;
  avgResolutionTime: string;
  maxTime: string;
  percentResolvedWithinSLA: number;
  slaLimit: string;
  remarks: string;
}

export interface ResolutionTimeDistribution {
  timeBucket: string;
  noOfComplaints: number;
  percentOfTotal: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsumerGrievanceDataService {
  constructor() { }

  // Topic 1: Consumer Complaints Analysis Report
  getComplaintComparisonSummary(): ComplaintComparisonSummary[] {
    return [
      { label: 'Total Complaints Received', beforeSmartMetering: 'XXXX', afterSmartMetering: 'XXXX', percentChange: '[+/-XX%]' },
      { label: 'Avg. Complaints per 1000 Consumers', beforeSmartMetering: 'XX', afterSmartMetering: 'XX', percentChange: '[+/-XX%]' },
      { label: 'Resolved within SLA', beforeSmartMetering: 'XX%', afterSmartMetering: 'XX%', percentChange: '[+/-XX%]' },
      { label: 'Escalated Cases', beforeSmartMetering: 'XXX', afterSmartMetering: 'XXX', percentChange: '[+/-XX%]' },
    ];
  }

  getComplaintCategories(): ComplaintCategory[] {
    return [
      { complaintType: 'Billing Issues', beforeCount: 'XXXX', afterCount: 'XXXX', percentChange: '+X% / -X%', remarks: 'Decrease due to accurate metering' },
      { complaintType: 'Meter Display / No Reading', beforeCount: 'XXX', afterCount: 'XXX', percentChange: '+X% / -X%', remarks: 'Smart meter readability improved' },
      { complaintType: 'Power Supply / Voltage', beforeCount: 'XXX', afterCount: 'XXX', percentChange: '+X% / -X%', remarks: 'Not meter related, tracked' },
      { complaintType: 'Tamper Alerts / Relay Issues', beforeCount: 'XX', afterCount: 'XXX', percentChange: '+X%', remarks: 'New issues due to smart features' },
      { complaintType: 'App / Portal / Recharge', beforeCount: '-', afterCount: 'XXX', percentChange: 'N/A', remarks: 'Post prepaid meter complaints' },
      { complaintType: 'Others (Communication Fail)', beforeCount: 'XX', afterCount: 'XX', percentChange: '+/-X%', remarks: '' },
    ];
  }

  getMonthlyComplaintTrends(): MonthlyComplaintTrend[] {
    return [
      { month: 'Jan 2025', complaintsBefore: 'XXXX', complaintsAfter: 'XXXX' },
      { month: 'Feb 2025', complaintsBefore: 'XXXX', complaintsAfter: 'XXXX' },
      { month: 'Mar 2025', complaintsBefore: 'XXXX', complaintsAfter: 'XXXX' },
      { month: 'Apr 2025', complaintsBefore: 'XXXX', complaintsAfter: 'XXXX' },
      { month: 'May 2025', complaintsBefore: 'XXXX', complaintsAfter: 'XXXX' },
      { month: 'Jun 2025', complaintsBefore: 'XXXX', complaintsAfter: 'XXXX' },
      { month: 'Jul 2025', complaintsBefore: 'XXXX', complaintsAfter: 'XXXX' },
    ];
  }

  getRootCauseAnalysis(): RootCauseAnalysis[] {
    return [
      { rootCause: 'Incorrect configuration (CT/PT)', percentOfCases: 'XX%', resolutionMeasuresTaken: 'Field rectification' },
      { rootCause: 'Network/Signal Failure', percentOfCases: 'XX%', resolutionMeasuresTaken: 'Repeater installation' },
      { rootCause: 'Relay Disconnection Issues', percentOfCases: 'XX%', resolutionMeasuresTaken: 'Firmware update' },
      { rootCause: 'App or Recharge Process Errors', percentOfCases: 'XX%', resolutionMeasuresTaken: 'Consumer awareness drives' },
      { rootCause: 'No Fault Found', percentOfCases: 'XX%', resolutionMeasuresTaken: 'Consumer education via call centre' },
    ];
  }

  // Topic 2: Complaint Resolution Time Analysis Report
  getResolutionTimeSummary(): ResolutionTimeSummary[] {
    return [
      { label: 'Total Complaints', value: 'XXXX' },
      { label: 'Avg. Resolution Time (hh:mm)', value: 'XX:XX' },
      { label: '% Resolved Within SLA', value: 'XX.X%' },
      { label: 'Fastest Resolved Type', value: '[Type] – [XX:XX]' },
      { label: 'Slowest Resolved Type', value: '[Type] – [XX:XX]' },
    ];
  }

  getResolutionTimeByType(): ResolutionTimeByType[] {
    return [
      { complaintType: 'No Power Complaint', noOfComplaints: 245, avgResolutionTime: '03:25', maxTime: '15:30', percentResolvedWithinSLA: 88, slaLimit: '04:00', remarks: 'Delays in rural areas' },
      { complaintType: 'Billing Dispute', noOfComplaints: 89, avgResolutionTime: '18:45', maxTime: '72:00', percentResolvedWithinSLA: 76, slaLimit: '24:00', remarks: 'Manual investigation needed' },
      { complaintType: 'Meter Display Issue', noOfComplaints: 67, avgResolutionTime: '12:10', maxTime: '30:00', percentResolvedWithinSLA: 91, slaLimit: '24:00', remarks: 'Hardware issues' },
      { complaintType: 'Relay OFF Complaint', noOfComplaints: 134, avgResolutionTime: '05:30', maxTime: '12:00', percentResolvedWithinSLA: 94, slaLimit: '06:00', remarks: 'Mostly resolved remotely' },
      { complaintType: 'Smart App/Recharge', noOfComplaints: 156, avgResolutionTime: '01:20', maxTime: '08:00', percentResolvedWithinSLA: 97, slaLimit: '12:00', remarks: 'Customer support driven' },
      { complaintType: 'Tamper Alert Related', noOfComplaints: 78, avgResolutionTime: '36:50', maxTime: '96:00', percentResolvedWithinSLA: 58, slaLimit: '24:00', remarks: 'Field visit dependency' },
    ];
  }

  getResolutionTimeDistribution(): ResolutionTimeDistribution[] {
    return [
      { timeBucket: '< 1 hour', noOfComplaints: 145, percentOfTotal: '22.5%' },
      { timeBucket: '1 – 4 hours', noOfComplaints: 234, percentOfTotal: '36.3%' },
      { timeBucket: '4 – 8 hours', noOfComplaints: 156, percentOfTotal: '24.2%' },
      { timeBucket: '8 – 24 hours', noOfComplaints: 78, percentOfTotal: '12.1%' },
      { timeBucket: '> 24 hours', noOfComplaints: 31, percentOfTotal: '4.8%' },
    ];
  }
}

