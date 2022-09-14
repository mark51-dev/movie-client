import { Component, OnInit } from '@angular/core';
import { AuthService } from './pages/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}
  ngOnInit(): void {
    // this.authService.refresh().subscribe();
  }
  title = 'FunMovie';
}
