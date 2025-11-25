import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-instructor',
  imports: [],
  templateUrl: './register-instructor.component.html',
  styleUrl: './register-instructor.component.scss'
})
export class RegisterInstructorComponent {
  submitted = false;

  registerForm = new FormGroup({
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
    const email = formValues.email ?? '';
    const password = formValues.password ?? '';

  this.authService.registerInstructor(email, password).subscribe({
    next: (response) => {
      console.log('Instructor successfully registered');
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
