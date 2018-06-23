import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../orders.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Order } from '../../shared/models/order.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';

export interface IContext {
  data: object;
}

@Component({
  selector: 'uaz-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  public orders: Order[];
  @ViewChild('modalTemplate') public modalTemplate: ModalTemplate<IContext, object, object>;

  constructor(
    private _router: Router,
    private _ordersService: OrdersService,
    private _authService: AuthService,
    private _toastr: ToastrService,
    public modalService: SuiModalService
  ) {
    this.orders = [];
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orders = [];
    this._ordersService.list(this._authService.getToken()).subscribe(
      response => {
        this.orders = response.data.map(orderData => new Order(orderData));
      },
      error => {
        console.log(error as any);
      }
    );
  }

  deleteOrder(id) {
    this._ordersService.delete(this._authService.getToken(), id).subscribe(
      response => {
        this._toastr.success('Pedido eliminado correctamente');
        this.getOrders();
      },
      error => {
        this._toastr.error('Se ha producido un error inesperado al eliminar el pedido');
        console.log(error as any);
      }
    );
  }

  openModal(dynamicContent: Order) {
    const config = new TemplateModalConfig<IContext, object, object>(this.modalTemplate);

    config.context = { data: dynamicContent };
    config.isBasic = true;

    this.modalService
      .open(config)
      .onApprove(result => {
        this.deleteOrder(dynamicContent.id);
      })
      .onDeny(result => {
        /* deny callback */
      });
  }
}
