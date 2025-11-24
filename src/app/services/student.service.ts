import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnrollmentDTO } from './enrollment.service';

export interface StudenteDTO {
  idStudente: number;
  nome: string;
  cognome: string;
  dataIscrizione: string;
  enrollments: EnrollmentDTO[];
}

@Injectable({
  providedIn: 'root'
})
export class StudenteService {
  //TODO mettere l'url corretto
  private apiUrl = ''
  constructor(private http: HttpClient) {}

  getStudenti():Observable<StudenteDTO> {
    return this.http.get<StudenteDTO>(this.apiUrl);
  }
}
