import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrdersService } from './orders.service';
import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersDetailComponent } from './orders-detail/orders-detail.component';


@NgModule({
  imports: [SharedModule],
  providers: [OrdersService],
  declarations: [OrdersComponent, OrdersListComponent, OrdersDetailComponent],
  exports: [OrdersComponent]
})
export class OrdersModule {}
