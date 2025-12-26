import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MetricCardComponent, MetricCardData } from '../components/metric-card/metric-card.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MetricCardComponent, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // Consumer Data Analysis
  consumerDataMetrics: MetricCardData[] = [
    { title: 'Active Consumers', value: '12,450', description: 'Currently active', color: 'blue', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/9f1cc2c1-01c5-43d8-b5d0-6269510c0900.png' },
    { title: 'New Connections', value: '245', description: 'This month', color: 'green', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/eb4d4e9f-a70c-404f-b6a9-7a8ace339153.png' },
    { title: 'Disconnections', value: '32', description: 'Pending review', color: 'red', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/c55bfdf0-a31a-4636-bc69-f12ac2c8ee6e.png' },
    { title: 'Meter Changes', value: '89', description: 'Completed', color: 'blue', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/ddc9f9df-098d-4167-bdd6-a180b07aeb3d.png' }
  ];

  // Revenue Protection
  revenueProtectionMetrics: MetricCardData[] = [
    { title: 'Suspected Theft', value: '156', description: 'Under investigation', color: 'red', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/b93de24c-1778-4d18-ab7e-9f4759e6fba0.png' },
    { title: 'Verified Cases', value: '42', description: 'Confirmed theft', color: 'orange', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/e7b55275-9be2-481c-87ba-5c82ef7631f9.png' },
    { title: 'Revenue Recovered', value: '₹4.2L', description: 'This quarter', color: 'green', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/aceb7471-7080-40c3-8c2b-f72ad7f85737.png' },
    { title: 'Pending Actions', value: '78', description: 'Awaiting action', color: 'blue', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/ad10c694-715c-485f-8bd7-4a5479919066.png' }
  ];

  // Preventive Maintenance Analysis
  preventiveMaintenanceMetrics: MetricCardData[] = [
    { title: 'Meters Due', value: '1,234', description: 'For maintenance', color: 'orange', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/c66426cc-9fb3-47ec-a816-8ad1785c55a5.png' },
    { title: 'Completed', value: '890', description: 'This month', color: 'green', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/c02ead70-e0cb-4d14-b127-c1d184e6f021.png' },
    { title: 'Overdue', value: '56', description: 'Needs attention', color: 'red', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/952e31f7-5020-4e0c-a2e8-d5c0a79cc5db.png' },
    { title: 'Scheduled', value: '288', description: 'Next month', color: 'blue', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/6cf8b5df-db3a-41a6-905a-299fddb7e0e7.png' }
  ];

  // Energy Audit
  energyAuditMetrics: MetricCardData[] = [
    { title: 'Audits Completed', value: '156', description: 'This quarter', color: 'green', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/809d4ddc-0f22-4800-aabb-4ab7cfd5dd52.png' },
    { title: 'Pending Audits', value: '34', description: 'In progress', color: 'orange', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/7778cab3-a3cb-4b61-b8cf-ba99f7223700.png' },
    { title: 'Issues Found', value: '89', description: 'Requires action', color: 'red', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/24bf83e8-6d40-4ec9-b97f-db50f3b9d64c.png' },
    { title: 'Efficiency Score', value: '87%', description: 'Average', color: 'blue', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/9e99479d-45b2-4ea6-980e-f00aae98b36e.png' }
  ];

  // Theft Protection Analysis
  theftProtectionMetrics: MetricCardData[] = [
    { title: 'Alerts Generated', value: '234', description: 'This week', color: 'orange', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/ef68f4bc-971b-4801-a69e-fafbe8d55163.png' },
    { title: 'Verified Theft', value: '18', description: 'Confirmed', color: 'red', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/191ccac8-19d9-48ad-b288-398fdd45efc7.png' },
    { title: 'False Positives', value: '45', description: 'Cleared', color: 'blue', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/17ede43c-fc03-405a-ba0c-7f6c10500260.png' },
    { title: 'Under Review', value: '171', description: 'Pending', color: 'orange', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/dbed4c0a-e125-4b28-b5f9-d43ba606dd5b.png' }
  ];

  // Power Quality
  powerQualityMetrics: MetricCardData[] = [
    { title: 'Voltage Deviation', value: '12', description: 'Detected', color: 'red', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/28de6e6c-74fa-4e02-a656-0cbf2c6acccf.png' },
    { title: 'Frequency Deviation', value: '8', description: 'Critical', color: 'red', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/34703087-45e7-4423-ae2c-85ebed247afb.png' },
    { title: 'Power Factor', value: '0.92', description: 'Average', color: 'green', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/34703087-45e7-4423-ae2c-85ebed247afb.png' },
    { title: 'Harmonics', value: '12', description: 'Detected', color: 'blue', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/28de6e6c-74fa-4e02-a656-0cbf2c6acccf.png' }
  ];

  // Reliability Indices
  reliabilityIndicesMetrics: MetricCardData[] = [
    { title: 'SAIDI', value: '2.4h', description: 'Avg interruption', color: 'blue', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/2f2ca73f-ec97-4f66-9e5c-f552f949fcfd.png' },
    { title: 'SAIFI', value: '1.2', description: 'Frequency index', color: 'blue', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/639ec5af-9062-468e-9ca9-6fad4c6bc569.png' },
    { title: 'CAIDI', value: '2.0h', description: 'Duration index', color: 'orange', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/5c849b99-d396-4f69-bdbf-711b61def6c0.png' },
    { title: 'ASAI', value: '99.7%', description: 'Availability', color: 'green', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/47b2577b-ac59-45b7-8de5-f94e0371e141.png' }
  ];

  // VEE Report
  veeReportMetrics: MetricCardData[] = [
    { title: 'VEE Processed', value: '98.5%', description: 'Data validated', color: 'green', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/f3f134f9-a6dd-4ea4-aa49-a9bda3be2163.png' },
    { title: 'Estimation Cases', value: '245', description: 'Data estimated', color: 'orange', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/02017d3b-971f-4336-a389-d11a321fb8c7.png' },
    { title: 'Edit Cases', value: '67', description: 'Manual edits', color: 'blue', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/3acf0f68-3c3b-4e83-8d00-d89682bcf21e.png' },
    { title: 'Failed Validation', value: '23', description: 'Needs review', color: 'red', iconUrl: 'https://codia-f2c.s3.us-west-1.amazonaws.com/default/image/2025-12-25/1449f8b3-5009-46dd-9dd9-c3b196653e44.png' }
  ];

}
