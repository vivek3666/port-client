import { Routes } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import { SignupComponent } from './authorization/signup/signup.component';

export const mainRoutes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: SignupComponent
  },
  {
    path: 'moments',
    loadChildren: () => import('./moments-home/moments-home.module').then(m => m.MomentsHomeModule),
  }
];
