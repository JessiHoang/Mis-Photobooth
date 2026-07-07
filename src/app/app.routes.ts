import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup';
import { SigninComponent } from './components/signin/signin';
import { MainComponent } from './components/main/main';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'main', component: MainComponent }
];
