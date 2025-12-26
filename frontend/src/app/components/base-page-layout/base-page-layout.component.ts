import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-base-page-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './base-page-layout.component.html',
  styleUrl: './base-page-layout.component.css'
})
export class BasePageLayoutComponent {
  @Input() pageTitle: string = '';
  @Input() showHeaderIcons: boolean = true;
}

