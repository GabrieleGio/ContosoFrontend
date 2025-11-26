import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrlRegisterStudent = '';
  private apiUrlLoginStudent = '';

  private apiUrlRegisterInstructor = '';
  private apiUrlLoginInstructor = '';


  constructor(private http: HttpClient) {}

  registerStudent(nome: string, cognome: string, dataIscrizione: string, email: string, password: string) {
    const registerData = {nome, cognome, dataIscrizione, email, password };
    return this.http.post(this.apiUrlRegisterStudent, registerData);
  }

  loginStudent(email: string, password: string) {
    const loginData = { email, password };
    return this.http.post(this.apiUrlLoginStudent, loginData);
  }

  registerInstructor(nome: string, cognome: string, email: string, password: string, dataAssunzione: string) {
    const registerData = {nome, cognome, email, password, dataAssunzione};
    return this.http.post(this.apiUrlRegisterInstructor, registerData);
  }

  loginInstructor(email: string, password: string) {
    const loginData = { email, password };
    return this.http.post(this.apiUrlLoginInstructor, loginData);
  }
}
