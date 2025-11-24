import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudenteDTO } from './studente.service';
import { CorsoDTO } from './corso.service';

export interface EnrollmentDTO {
  idEnrollment: number;
  idStudente: number;
  idCorso: number;
  studente: StudenteDTO;
  corso: CorsoDTO;
}

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  //TODO mettere l'url corretto
  private apiUrl = ''
  constructor(private http: HttpClient) {}

  getEnrollments():Observable<EnrollmentDTO> {
    return this.http.get<EnrollmentDTO>(this.apiUrl);
  }
}
