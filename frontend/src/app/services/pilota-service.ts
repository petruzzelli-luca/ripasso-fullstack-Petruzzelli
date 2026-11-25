import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilota } from '../models/pilota.model';

@Injectable({ providedIn: 'root' })

export class PilotaService {
  private http = inject(HttpClient);
  private url = '/api/piloti';

  getPiloti(): Observable<Pilota[]> {
    return this.http.get<Pilota[]>(this.url);
  }
  // getPilota(id) lo aggiungerai nella sezione 7,
  // creaIscrizione(...) nella sezione 8
}