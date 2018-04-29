import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // replaces previous Http service
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from './services/api/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ApiService, apiServiceCreator } from './services/api/api.service';
import { BackButtonComponent } from './components/back-button/back-button.component';

const SHARED_MODULES = [
  BrowserModule,
  FormsModule,
  RouterModule,
  CommonModule,
  HttpClientModule,
  HttpModule,
  BrowserAnimationsModule
];
@NgModule({
  imports: [...SHARED_MODULES, ToastrModule.forRoot()],
  providers: [
    AuthService,
    AuthGuardService,
    // Providing the ApplicationHttpClient so it could be used as a service.
    {
      provide: ApiService,
      useFactory: apiServiceCreator,
      deps: [HttpClient]
    }
  ],
  exports: [...SHARED_MODULES, BackButtonComponent],
  declarations: [PageNotFoundComponent, BackButtonComponent]
})
export class SharedModule {}
