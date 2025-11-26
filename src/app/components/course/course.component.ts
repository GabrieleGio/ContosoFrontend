import { Router } from '@angular/router';
import { CourseService } from './../../services/courses.service';
import { Component } from '@angular/core';
import { Badge } from "primeng/badge";
import { Card } from "primeng/card";

@Component({
  selector: 'app-course',
  imports: [Badge, Card],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {

  constructor(private courseService: CourseService, private router: Router  ) {}

  course: any

  onView(idCourse: number) {
    this.courseService.see(idCourse).subscribe({
      next: (data) => {
        this.course = data;
        console.log('Corso ricevuto:', data);
      },
      error: (err) => console.error('Errore:', err)
    });
  }

  enroll(idCourse: number) {
    console.log('Iscriviti al corso con ID:', idCourse);
    // Logica iscrizione qui
  }
  goBack() {
    this.router.navigate(['/courses-list']);
  }

}
