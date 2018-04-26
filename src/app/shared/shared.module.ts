import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // replaces previous Http service
import { HttpModule } from '@angular/http';
import { UsersService } from './services/api/users.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const SHARED_MODULES = [BrowserModule, FormsModule, RouterModule, CommonModule, HttpClientModule, HttpModule];
@NgModule({
  imports: [...SHARED_MODULES],
  providers: [UsersService],
  exports: [...SHARED_MODULES],
  declarations: [PageNotFoundComponent]
})
export class SharedModule {}
