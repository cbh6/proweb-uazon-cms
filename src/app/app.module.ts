import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UazHeaderComponent } from './header/header.component';
import { UazMenuComponent } from './header/menu/menu.component';

@NgModule({
  declarations: [AppComponent, UazHeaderComponent, UazMenuComponent],
  imports: [BrowserModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
