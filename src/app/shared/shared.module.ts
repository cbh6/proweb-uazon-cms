import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // replaces previous Http service
import { HttpModule } from '@angular/http';
import { UsersService } from './services/api/users.service';

const SHARED_MODULES = [BrowserModule, FormsModule, CommonModule, HttpClientModule, HttpModule];
@NgModule({
  imports: [...SHARED_MODULES],
  providers: [UsersService],
  exports: [...SHARED_MODULES]
})
export class SharedModule {}
