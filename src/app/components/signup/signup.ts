import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
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

constructor(private router: Router) {}


  signup() {

    if(this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    //Wenn Email schon in der Datenbank vorhanden ist: alert('Email already connected to an account')

    console.log(this.user);

    this.router.navigate(['/signin']);
  }

}
