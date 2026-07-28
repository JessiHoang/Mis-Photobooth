import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})

export class SignupComponent  {
  

  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

constructor(
  private router: Router,
  private http: HttpClient
) {}


 signup() {

  console.log("Signup gestartet");
  console.log(this.user);

  if(this.user.password !== this.user.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  this.http.post(
    'http://localhost:3000/signup',
    this.user
  )

  .subscribe({
    next: (response) => {
      alert("Account successfully created!");
      console.log("Signup successful", response);
      this.router.navigate(['/signin']);
    },

    error: (error) => {
      console.log("Signup failed", error);
    }
    
  });

}
}

