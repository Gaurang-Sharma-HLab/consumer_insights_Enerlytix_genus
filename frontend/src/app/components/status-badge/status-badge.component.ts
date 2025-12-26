import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type BadgeVariant = 'success' | 'warning' | 'danger' | 'default' | 'info';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.css'
})
export class StatusBadgeComponent {
  @Input() status: string = '';
  @Input() variant?: BadgeVariant;

  getVariantClass(): string {
    const variant = this.variant || this.getStatusVariant(this.status);
    const variantStyles: Record<BadgeVariant, string> = {
      success: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
      warning: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
      danger: 'bg-red-500/10 text-red-500 border-red-500/20',
      default: 'bg-[rgba(117,136,163,0.1)] text-[#7588a3] border-[#1d283a]',
      info: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    };
    return variantStyles[variant] || variantStyles.default;
  }

  getStatusVariant(status: string): BadgeVariant {
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
}
