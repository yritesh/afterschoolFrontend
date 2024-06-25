import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div style="text-align:center">
      <h1>Welcome to Angular API Consumer!</h1>
      <p>{{ data }}</p>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data!: String;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getApi().subscribe(
      (response) => {
        this.data = response.data;
      },
      (error) => {
        console.error('Error fetching hello message:', error);
        this.data = 'Error fetching hello message';
      }
    );
  }
}