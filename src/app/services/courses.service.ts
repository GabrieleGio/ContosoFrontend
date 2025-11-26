import { Injectable } from '@angular/core';
import { EnrollmentDTO } from './enrollment.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CourseDTO {
  idCourse: number;
  title: string;
  credits: number;
  enrollments: EnrollmentDTO[];
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:5294/api'
  constructor(private http: HttpClient) {}

  see_all(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Corso`)
  }

  see(idCourse: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Corso/${idCourse}`)
  }
}
