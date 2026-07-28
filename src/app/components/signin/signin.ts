import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [ RouterLink ],
  templateUrl: './signin.html',
  styleUrl: './signin.scss',
})
export class SigninComponent  {

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/main']);
  }
}