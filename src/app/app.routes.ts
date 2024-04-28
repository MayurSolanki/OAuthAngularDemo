import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'oauthangulardemo/home', component: AppComponent },
  { path: 'oauthangulardemo/login', component: LoginComponent },
  { path: 'oauthangulardemo/dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'oauthangulardemo/login', pathMatch: 'full' }, // Redirect to home if no route specified
  { path: '**', redirectTo: 'oauthangulardemo/login' } // Redirect to home for any other invalid routes

];
