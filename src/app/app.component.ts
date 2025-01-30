import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BrowserModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
  title = 'login';

  constructor(private readonly authService: AuthService) {
    this.authService.login();
  }
}
