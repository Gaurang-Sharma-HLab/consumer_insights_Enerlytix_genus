import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsumerDataAnalysisComponent } from './pages/consumer-data-analysis/consumer-data-analysis.component';
import { RevenueProtectionComponent } from './pages/revenue-protection/revenue-protection.component';
import { PreventiveMaintenanceComponent } from './pages/preventive-maintenance/preventive-maintenance.component';
import { EnergyAuditComponent } from './pages/energy-audit/energy-audit.component';
import { TheftProtectionComponent } from './pages/theft-protection/theft-protection.component';
import { ConsumerGrievanceComponent } from './pages/consumer-grievance/consumer-grievance.component';
import { ForecastingComponent } from './pages/forecasting/forecasting.component';
import { PowerQualityComponent } from './pages/power-quality/power-quality.component';
import { ReliabilityIndicesComponent } from './pages/reliability-indices/reliability-indices.component';
import { VeeReportComponent } from './pages/vee-report/vee-report.component';
import { ThemesComponent } from './pages/themes/themes.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'consumer-data-analysis', component: ConsumerDataAnalysisComponent },
  { path: 'revenue-protection', component: RevenueProtectionComponent },
  { path: 'preventive-maintenance', component: PreventiveMaintenanceComponent },
  { path: 'energy-audit', component: EnergyAuditComponent },
  { path: 'theft-protection', component: TheftProtectionComponent },
  { path: 'consumer-grievance', component: ConsumerGrievanceComponent },
  { path: 'forecasting', component: ForecastingComponent },
  { path: 'power-quality', component: PowerQualityComponent },
  { path: 'reliability-indices', component: ReliabilityIndicesComponent },
  { path: 'vee-report', component: VeeReportComponent },
  { path: 'themes', component: ThemesComponent },
];
