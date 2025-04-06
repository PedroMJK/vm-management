import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VmsListComponent } from './pages/vms-list/vms-list.component';
import { VmsCreateComponent } from './pages/vms-create/vms-create.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'vms', component: VmsListComponent, canActivate: [AuthGuard] },
    { path: 'vms/create', component: VmsCreateComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'login' }
  ];
  