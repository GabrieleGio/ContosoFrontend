import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-instructor',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login-instructor.component.html',
  styleUrl: './login-instructor.component.scss'
})
export class LoginInstructorComponent {
  submitted = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(255)])
  });

  returnUrl: string = '/home';

  constructor(
    private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe(params => {
      if (params['returnUrl']) {
        this.returnUrl = params['returnUrl'];
      }
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      console.log('Invalid form');
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        if (control?.invalid) {
          console.log(`Field ${key} is not valid:`, control.errors);
        }
      });
      return;
    }

    const { email, password } = this.loginForm.value;

    if (!email || !password) {
      console.error('Email or password is missing');
      return;
    }

    this.authService.loginInstructor(email, password).subscribe({
      next: (response) => {
        //this.authService.saveToken(response.token);
        this.router.navigate([this.returnUrl]);
      },
      error: (err) => {
        console.error('Error during login', err);

        if (err.status === 400) {
          alert('Invalid credentials');
        } else if (err.status === 404) {
          alert('Endpoint not found (404)');
        } else {
          alert('Unknown error: ' + (err.message || err.statusText));
        }
      }
    });
 }
}
