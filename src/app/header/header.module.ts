import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UazMenuComponent } from './menu/menu.component';
import { UazHeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule, RouterModule.forRoot([])],
  declarations: [UazHeaderComponent, UazMenuComponent],
  exports: [UazHeaderComponent]
})
export class HeaderModule {}
