import { Component } from '@angular/core';
import { CourseService } from '../../services/courses.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  openCourse(_t2: any) {
  throw new Error('Method not implemented.');
}

courses: any [] = []
annuncio: any;
  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.onView(); 
  }
  onView() {
    this.courseService.see_all().subscribe({
      next: (data) => {
        this.courses = data;
        console.log('Corsi ricevuti:', data);
      },
      error: (err) => console.error('Errore:', err)
      
    });
  }
  openAnnuncio(course: any) {
    console.log('Oggetto passato:', course); 
    if (!course) {
      console.error('ID corso mancante!');
      return;
    }

    this.router.navigate(['/Corso', course.idCourse]);
}

}
