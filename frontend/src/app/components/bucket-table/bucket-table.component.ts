import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketLogic, BucketSummary } from '../../services/consumer-analytics-data.service';

@Component({
  selector: 'app-bucket-logic-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket-logic-table.component.html',
  styleUrl: './bucket-table.component.css'
})
export class BucketLogicTableComponent {
  @Input() data: BucketLogic[] = [];
}

@Component({
  selector: 'app-bucket-summary-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket-summary-table.component.html',
  styleUrl: './bucket-table.component.css'
})
export class BucketSummaryTableComponent {
  @Input() data: BucketSummary[] = [];
}
