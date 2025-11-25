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

  registerStudent(email: string, password: string) {
    const registerData = {email, password,};
    return this.http.post(this.apiUrlRegisterStudent, registerData);
  }

  loginStudent(email: string, password: string) {
    const loginData = { email, password };
    return this.http.post(this.apiUrlLoginStudent, loginData);
  }


  registerInstructor(email: string, password: string) {
    const registerData = {email, password,};
    return this.http.post(this.apiUrlRegisterInstructor, registerData);
  }

  loginInstructor(email: string, password: string) {
    const loginData = { email, password };
    return this.http.post(this.apiUrlLoginInstructor, loginData);
  }
}
