import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    loadChildren: () =>
      import('./modules/authentication/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'auth/reset-password',
    loadChildren: () =>
      import(
        './modules/authentication/reset-password/reset-password.module'
      ).then((m) => m.ResetPasswordModule),
  },
  {
    path: 'auth/change-password',
    loadChildren: () =>
      import(
        './modules/authentication/change-password/change-password.module'
      ).then((m) => m.ChangePasswordModule),
  },
];
