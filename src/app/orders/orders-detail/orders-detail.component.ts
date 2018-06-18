import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import { OrdersService } from '../orders.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Order } from '../../shared/models/order.model';

@Component({
  selector: 'uaz-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.css']
})
export class OrdersDetailComponent implements OnInit {
  public order: Order;
  public loading: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _ordersService: OrdersService
  ) {}

  ngOnInit() {
    this.order = new Order({});
    this.loading = true;

    this.getOrderData();
  }

  getOrderData() {
    // Get order id from url and then fetch book data using apiService
    this._route.params
      .flatMap((v: any, index: number) => {
        return this._ordersService.read(this._authService.getToken(), v.id);
      })
      .subscribe(response => {
        this.order = response.data;
        this.loading = false;
      });
  }
}
