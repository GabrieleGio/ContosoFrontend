import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProfessoreDTO {
  idProfessore: number;
  nome: string;
  cognome: string;
  dataAssunzione: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfessoreService {
  //TODO mettere l'url corretto
  private apiUrl = ''
  constructor(private http: HttpClient) {}

  getProfessori():Observable<ProfessoreDTO> {
    return this.http.get<ProfessoreDTO>(this.apiUrl);
  }
}
