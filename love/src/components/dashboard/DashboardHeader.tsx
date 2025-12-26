import { Zap, Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  showBack?: boolean;
  onBack?: () => void;
  title?: string;
  subtitle?: string;
}

export function DashboardHeader({ showBack, onBack, title, subtitle }: DashboardHeaderProps) {
  const reportDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBack && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onBack}
                className="hover:bg-primary/10 hover:text-primary"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 animate-pulse-glow">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">
                  {title || 'Consumption Analytics'}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {subtitle || 'Abnormal Pattern Detection Dashboard'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="font-mono">{reportDate}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
