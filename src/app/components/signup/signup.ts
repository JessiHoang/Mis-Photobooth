import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  signup() {
    console.log('Signup started');
    console.log(this.user);

    if (this.user.password.length < 6 || this.user.password.length > 15) {
      alert('Password must be between 6 and 15 characters!');
      return;
    }

    if (!this.user.email.includes('@')) {
      alert('Please enter a valid email!');
      return;
    }

    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    const newUser = {
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
    };

    this.http
      .post('http://localhost:3000/signup', newUser)

      .subscribe({
        next: (response) => {
          alert('Account successfully created!');
          console.log('Signup successful', response);
          this.router.navigate(['/signin']);
        },

        error: (error) => {
          console.log('Signup failed', error);
        },
      });
  }
}
