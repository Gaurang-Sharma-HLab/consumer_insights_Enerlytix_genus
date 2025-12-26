import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';

export interface Column<T = any> {
  header: string;
  accessor: keyof T | ((row: T) => any);
  className?: string;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent<T extends { id: string }> {
  @Input() columns: Column<T>[] = [];
  @Input() data: T[] = [];
  @Input() className: string = '';

  getCellValue(row: T, accessor: Column<T>['accessor']): any {
    if (typeof accessor === 'function') {
      return accessor(row);
    }
    const value = row[accessor as keyof T];
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
    return value;
  }

  isStatusBadge(value: any): boolean {
    return value && typeof value === 'object' && 'status' in value && 'variant' in value;
  }

  isStringOrNumber(value: any): boolean {
    return typeof value === 'string' || typeof value === 'number';
  }
}
