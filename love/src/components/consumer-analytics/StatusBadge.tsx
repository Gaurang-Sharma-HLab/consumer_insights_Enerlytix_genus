import { cn } from '@/lib/utils';

type BadgeVariant = 'success' | 'warning' | 'danger' | 'default' | 'info';

interface StatusBadgeProps {
  status: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  danger: 'bg-red-500/10 text-red-500 border-red-500/20',
  default: 'bg-muted text-muted-foreground border-border',
  info: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
};

export function StatusBadge({ status, variant = 'default' }: StatusBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium border",
      variantStyles[variant]
    )}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

// Helper function to determine variant based on status text
export function getStatusVariant(status: string): BadgeVariant {
  const lowerStatus = status.toLowerCase();
  if (lowerStatus.includes('working') || lowerStatus.includes('healthy') || lowerStatus.includes('normal') || lowerStatus.includes('communicating')) {
    return 'success';
  }
  if (lowerStatus.includes('pending') || lowerStatus.includes('borderline') || lowerStatus.includes('issue')) {
    return 'warning';
  }
  if (lowerStatus.includes('faulty') || lowerStatus.includes('fail') || lowerStatus.includes('yes')) {
    return 'danger';
  }
  if (lowerStatus.includes('no')) {
    return 'info';
  }
  return 'default';
}
