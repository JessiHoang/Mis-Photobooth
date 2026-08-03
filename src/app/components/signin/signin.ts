import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.scss',
})
export class SigninComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  signin() {
    console.log('Signin started');
    console.log(this.user);

    this.http.post('http://localhost:3000/signin', this.user).subscribe({
      next: (response) => {
        console.log('Signin successful', response);
        alert('Signin successful!');

        this.router.navigate(['/main']);
      },

      error: (error) => {
        console.log('Signin failed', error);
        alert(error.error.message);
      },
    });
  }
}
