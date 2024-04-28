import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'oauthangulardemo', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'oauthangulardemo/dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'login'}//Redirect to login for any  invalid routes
];
