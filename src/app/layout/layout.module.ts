import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './routing';

import { AuthentificationModule } from '../authentification/authentification.module';

// Components
import { MenuComponent } from './header/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [CommonModule, routing, AuthentificationModule],
  declarations: [HeaderComponent, MenuComponent, ContainerComponent],
  exports: [HeaderComponent, ContainerComponent],
  providers: [appRoutingProviders]
})
export class LayoutModule {}
