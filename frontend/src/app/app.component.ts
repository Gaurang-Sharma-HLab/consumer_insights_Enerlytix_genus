import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Consumer Insights Hub';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Initialize theme on app load
    this.themeService.setTheme(this.themeService.getCurrentTheme());
  }
}
