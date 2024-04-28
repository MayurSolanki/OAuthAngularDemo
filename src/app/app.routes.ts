import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to home if no route specified
  { path: '**', redirectTo: 'login' } // Redirect to home for any other invalid routes

];
