import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PilotaService } from './services/pilota-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor() {
    inject(PilotaService).getPiloti().subscribe({
      next:  dati => console.log('B', dati.length),
      error: err  => console.log('Errore', err.status)
    });
  }
}