import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SummaryTile {
  label: string;
  value: number | string;
}

@Component({
  selector: 'app-summary-tiles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-tiles.component.html',
  styleUrl: './summary-tiles.component.css'
})
export class SummaryTilesComponent {
  @Input() data: SummaryTile[] = [];

  formatValue(value: number | string): string {
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
    return value;
  }
}
