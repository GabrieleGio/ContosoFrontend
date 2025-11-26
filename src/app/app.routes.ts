 import { Routes } from '@angular/router';
import { CourseDTO } from './services/courses.service';
import { CourseComponent } from './components/course/course.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { LoginInstructorComponent } from './components/login-instructor/login-instructor.component';
import { RegisterInstructorComponent } from './components/register-instructor/register-instructor.component';

export const routes: Routes = [
    {path: "", redirectTo: "course", pathMatch: 'full'},
    {path: "course", component: CourseComponent},
    {path: "login-student", component:LoginStudentComponent},
    {path: "register-student", component:RegisterStudentComponent},
    {path: "login-instructor", component:LoginInstructorComponent},
    {path: "register-instructor", component:RegisterInstructorComponent}
];
