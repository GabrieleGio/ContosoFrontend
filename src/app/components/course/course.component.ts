import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './../../services/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})

export class CourseComponent {

  id:number;

  constructor(
    private courseService: CourseService, 
    private router: Router,
    private route: ActivatedRoute  
  ) {
    console.log(this.route);
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id')?? "");
  }

  course: any

  ngOnInit(): void {
    
    if (this.id) this.onView(this.id);
  }

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
