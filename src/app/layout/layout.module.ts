import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './routing';

// Components
import { MenuComponent } from './header/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [HeaderComponent, MenuComponent, ContainerComponent, LoginComponent, RegisterComponent],
  exports: [HeaderComponent, ContainerComponent],
  providers: [appRoutingProviders]
})
export class LayoutModule {}
