import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../shared/services/auth-guard.service';

// Components
import { LoginComponent } from '../authentification/login/login.component';
import { RegisterComponent } from '../authentification/register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BooksComponent } from '../books/books.component';
import { BooksDetailComponent } from '../books/books-detail/books-detail.component';
import { BooksCreateComponent } from '../books/books-create/books-create.component';
import { AuthorsComponent } from '../authors/authors.component';
import { AuthorsCreateComponent } from '../authors/authors-create/authors-create.component';
import { CommentsComponent } from '../comments/comments.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout/:sure', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
  { path: 'books/:id', component: BooksDetailComponent, canActivate: [AuthGuard] },
  { path: 'books-new', component: BooksCreateComponent, canActivate: [AuthGuard] },
  { path: 'authors', component: AuthorsComponent, canActivate: [AuthGuard] },
  { path: 'authors-new', component: AuthorsCreateComponent, canActivate: [AuthGuard] },
  { path: 'comments', component: CommentsComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
