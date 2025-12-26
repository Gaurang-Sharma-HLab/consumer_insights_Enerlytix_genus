import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart-placeholder.component.html',
  styleUrl: './chart-placeholder.component.css'
})
export class ChartPlaceholderComponent {
  @Input() title: string = '';
  @Input() type: 'bar' | 'line' | 'pie' = 'bar';
  @Input() data: any[] = [];
}
