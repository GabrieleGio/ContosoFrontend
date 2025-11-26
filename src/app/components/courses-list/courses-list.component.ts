import { Component } from '@angular/core';
import { CourseService } from '../../services/courses.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    
  ],
  templateUrl: './courses-list.component.html', 
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent {

courses: any [] = []
constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.onView(); 
  }
  onView() {
    this.courseService.see_all().subscribe({
      next: (data) => {
        this.courses = data;
        //console.log('Corsi ricevuti:', data);
      },
      error: (err) => console.error('Errore:', err)
      
    });
  }

  openCourse(course: any) {
    console.log('Oggetto passato:', course);
    if(!course) {
      console.log("Oggetto non presente");
      return
    }
    
    this.router.navigate(['/course/', course.corsoID]);
}


}
