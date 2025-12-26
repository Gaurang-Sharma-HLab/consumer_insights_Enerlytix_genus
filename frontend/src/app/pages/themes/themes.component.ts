import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService, Theme } from '../../services/theme.service';
import { BasePageLayoutComponent } from '../../components/base-page-layout/base-page-layout.component';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [CommonModule, RouterModule, BasePageLayoutComponent],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.css'
})
export class ThemesComponent implements OnInit {
  currentTheme: Theme = 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.currentTheme = this.themeService.getCurrentTheme();
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
