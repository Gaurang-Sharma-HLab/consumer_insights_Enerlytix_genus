import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatTileProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  variant?: 'default' | 'warning' | 'danger' | 'success';
  onClick?: () => void;
  subtitle?: string;
  className?: string;
}

const variantStyles = {
  default: {
    icon: 'text-primary',
    glow: 'bg-primary',
    border: 'hover:border-primary/50',
  },
  warning: {
    icon: 'text-warning',
    glow: 'bg-warning',
    border: 'hover:border-warning/50',
  },
  danger: {
    icon: 'text-destructive',
    glow: 'bg-destructive',
    border: 'hover:border-destructive/50',
  },
  success: {
    icon: 'text-success',
    glow: 'bg-success',
    border: 'hover:border-success/50',
  },
};

export function StatTile({ title, value, icon, variant = 'default', onClick, subtitle, className }: StatTileProps) {
  const styles = variantStyles[variant];

  return (
    <button
      onClick={onClick}
      className={cn(
        'dashboard-tile text-left w-full group cursor-pointer',
        styles.border,
        className
      )}
    >
      <div className={cn('dashboard-tile-glow', styles.glow)} />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className={cn('p-3 rounded-lg bg-muted/50', styles.icon)}>
            {icon}
          </div>
          <div className="text-xs text-muted-foreground/60 uppercase tracking-wider">
            View Details →
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="stat-label">{title}</p>
          <p className={cn('stat-value', styles.icon)}>{typeof value === 'number' ? value.toLocaleString() : value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-2">{subtitle}</p>
          )}
        </div>
      </div>
    </button>
  );
}
