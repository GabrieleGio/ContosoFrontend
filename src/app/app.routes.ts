 import { Routes } from '@angular/router';
import { CourseDTO } from './services/courses.service';
import { CourseComponent } from './components/course/course.component';

export const routes: Routes = [
    {path: "", redirectTo: "course", pathMatch: 'full'},
    {path: "course", component: CourseComponent}
];
