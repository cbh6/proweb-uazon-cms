import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UazMenuComponent } from './menu/menu.component';
import { UazHeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UazHeaderComponent, UazMenuComponent]
})
export class HeaderModule {}
