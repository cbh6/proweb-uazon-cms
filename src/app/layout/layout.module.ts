import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './routing';

// Modules
import { AuthentificationModule } from '../authentification/authentification.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { BooksModule } from '../books/books.module';
import { AuthorsModule } from '../authors/authors.module';
import { CommentsModule } from '../comments/comments.module';
import { OrdersModule } from '../orders/orders.module';
import { UsersModule } from '../users/users.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { MenuComponent } from './header/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    SharedModule,
    routing,
    AuthentificationModule,
    DashboardModule,
    BooksModule,
    AuthorsModule,
    CommentsModule,
    OrdersModule,
    UsersModule
  ],
  declarations: [HeaderComponent, MenuComponent, ContainerComponent],
  exports: [HeaderComponent, ContainerComponent],
  providers: [appRoutingProviders]
})
export class LayoutModule {}
