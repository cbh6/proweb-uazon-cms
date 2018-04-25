import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from '../authentification/login/login.component';
import { RegisterComponent } from '../authentification/register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BooksComponent } from '../books/books.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout/:sure', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'libros', component: BooksComponent },
  { path: '**', component: LoginComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
