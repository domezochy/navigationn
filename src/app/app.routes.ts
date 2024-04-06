import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { AuthClassGuard } from './auth-class.guard';
import { roleGuard } from './role.guard';

export const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: 'login', 
        component : LoginComponent
   //     canActivate: [authGuard]
    },
    {
        path : 'dashboard', 
        component : DashboardComponent,
        canActivate : [authGuard, roleGuard],// and condition both have to be true
    //    canActivate: [AuthClassGuard]
        data: {
            role : 'ADMIN'
            }
    }
];
