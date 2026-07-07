import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})

export class SignupComponent  {
  constructor(private router: Router) {}

  signup() {
    // API + MongoDB
    this.router.navigate(['/signin']);
  }
}
