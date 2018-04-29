import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from '../authentification/login/login.component';
import { RegisterComponent } from '../authentification/register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BooksComponent } from '../books/books.component';
import { BooksDetailComponent } from '../books/books-detail/books-detail.component';
import { BooksCreateComponent } from '../books/books-create/books-create.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout/:sure', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BooksDetailComponent },
  { path: 'books-new', component: BooksCreateComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
