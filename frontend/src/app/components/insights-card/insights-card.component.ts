import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insights-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insights-card.component.html',
  styleUrl: './insights-card.component.css'
})
export class InsightsCardComponent {
  @Input() insights: string[] = [];
  @Input() title: string = 'Key Insights';
}
