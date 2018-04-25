import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './routing';

// Modules
import { AuthentificationModule } from '../authentification/authentification.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { MenuComponent } from './header/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [SharedModule, routing, AuthentificationModule, DashboardModule],
  declarations: [HeaderComponent, MenuComponent, ContainerComponent],
  exports: [HeaderComponent, ContainerComponent],
  providers: [appRoutingProviders]
})
export class LayoutModule {}
