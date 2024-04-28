import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'oauthangulardemo', redirectTo: 'oauthangulardemo/login', pathMatch: 'full' },
  { path: 'oauthangulardemo/login', component: LoginComponent },
  { path: 'oauthangulardemo/dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'oauthangulardemo/login'}//Redirect to login for any  invalid routes
];
