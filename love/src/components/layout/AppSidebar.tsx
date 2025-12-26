import {
  LayoutDashboard,
  Users,
  Shield,
  Wrench,
  ClipboardCheck,
  Lock,
  MessageSquare,
  TrendingUp,
  Gauge,
  Activity,
  FileText,
  Settings2,
  Palette,
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';
import genusLogo from '@/assets/genus-logo.png';

const menuItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Consumer Data Analysis', url: '/consumer-data', icon: Users },
  { title: 'Revenue Protection', url: '/revenue-protection', icon: Shield },
  { title: 'Preventive Maintenance Analysis', url: '/preventive-maintenance', icon: Wrench },
  { title: 'Energy Audit', url: '/energy-audit', icon: ClipboardCheck },
  { title: 'Theft Protection Analysis', url: '/theft-protection', icon: Lock },
  { title: 'Consumer Grievance', url: '/consumer-grievance', icon: MessageSquare },
  { title: 'Forecasting', url: '/forecasting', icon: TrendingUp },
  { title: 'Power Quality', url: '/power-quality', icon: Gauge },
  { title: 'Reliability Indices', url: '/reliability-indices', icon: Activity },
  { title: 'VEE Report', url: '/vee-report', icon: FileText },
  { title: 'Operational Reports', url: '/operational-reports', icon: Settings2 },
  { title: 'Themes', url: '/themes', icon: Palette },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-3">
          <img 
            src={genusLogo} 
            alt="Genus Logo" 
            className={collapsed ? "h-8 w-8 object-contain" : "h-10 object-contain"}
          />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === '/'}
                      className="flex items-center gap-2"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
