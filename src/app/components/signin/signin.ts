import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [],
  templateUrl: './signin.html',
  styleUrl: './signin.scss',
})
export class SigninComponent  {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/main']);
  }
}