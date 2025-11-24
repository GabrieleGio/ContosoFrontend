import { Injectable } from '@angular/core';
import { EnrollmentDTO } from './enrollment.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CorsoDTO {
  idCorso: number;
  titolo: string;
  crediti: number;
  enrollments: EnrollmentDTO[];
}

@Injectable({
  providedIn: 'root'
})
export class CorsoService {
  //TODO mettere l'url corretto
  private apiUrl = ''
  constructor(private http: HttpClient) {}

  getCorsi():Observable<CorsoDTO> {
    return this.http.get<CorsoDTO>(this.apiUrl);
  }
}
