import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'vms',
    loadComponent: () =>
      import('./pages/vms-list/vms-list.component').then(m => m.VmsListComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'vms/create',
    loadComponent: () =>
      import('./pages/vms-create/vms-create.component').then(m => m.VmsCreateComponent),
    canActivate: [AuthGuard]
  },

  { path: '**', redirectTo: 'login' }
];
