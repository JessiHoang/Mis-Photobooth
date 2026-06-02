import { Routes } from '@angular/router';
import { Signin } from './components/signin/signin';
import { Signup } from './components/signup/signup';
import { Main } from './components/main/main';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: Signin },
  { path: 'signup', component: Signup },
  { path: 'main', component: Main }
];
