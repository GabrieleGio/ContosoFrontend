import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-student',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.scss'
})
export class RegisterStudentComponent {
  submitted = false;

  registerForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    cognome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]),
  },);

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      console.log('Invalid form');
      Object.keys(this.registerForm.controls).forEach(key => {
        const control = this.registerForm.get(key);
        if (control?.invalid) {
          console.log(`Field ${key} is not valid:`, control.errors);
        }
      });
      return;
    }
    
    const formValues = this.registerForm.value;
    const nome = formValues.nome ?? '';
    const cognome = formValues.cognome ?? '';
    const email = formValues.email ?? '';
    const password = formValues.password ?? '';
    const dataIscrizione = new Date().toISOString();

  this.authService.registerStudent(nome, cognome, email, password, dataIscrizione).subscribe({
    next: (response) => {
      console.log('Student successfully registered');
      alert('Registration completed successfully');
      this.router.navigate(['/login']);
    },
    error: (err) => {
      console.error('Error during registration', err);

      if (err.status === 400) {
        alert('Invalid data');
      } else if (err.status === 409) {
        alert('Email already in use');
      } else if (err.status === 500) {
        alert('Internal server error. Try again later');
      } else {
        alert('Unknown error: ' + (err?.message || err.statusText));
      }
    }
  });
  }
}
