import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MetricCardData {
  title: string;
  value: string;
  description: string;
  color: 'blue' | 'green' | 'red' | 'orange';
  iconUrl?: string;
}

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.css'
})
export class MetricCardComponent {
  @Input() metric!: MetricCardData;

  getVariantStyles() {
    const variantMap = {
      blue: {
        icon: 'text-[#3c83f6]',
        glow: 'bg-[#3c83f6]',
        border: 'hover:border-[#3c83f6]/50'
      },
      green: {
        icon: 'text-[#16a249]',
        glow: 'bg-[#16a249]',
        border: 'hover:border-[#16a249]/50'
      },
      red: {
        icon: 'text-[#ef4343]',
        glow: 'bg-[#ef4343]',
        border: 'hover:border-[#ef4343]/50'
      },
      orange: {
        icon: 'text-[#f59f0a]',
        glow: 'bg-[#f59f0a]',
        border: 'hover:border-[#f59f0a]/50'
      }
    };
    return variantMap[this.metric.color] || variantMap.blue;
  }

  getIconColorClass(): string {
    return this.getVariantStyles().icon;
  }

  getGlowColorClass(): string {
    return this.getVariantStyles().glow;
  }

  getBorderHoverClass(): string {
    return this.getVariantStyles().border;
  }

  getValueColorClass(): string {
    return this.getVariantStyles().icon;
  }
}
