import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from '../shared/models/order.model';
import { ApiService } from '../shared/services/api/api.service';
import { ResourceService } from '../shared/services/api/resource.service';
@Injectable()
export class OrdersService extends ResourceService<Order> {
  public url: string;

  constructor(_apiService: ApiService, http: HttpClient) {
    super('pedidos', _apiService);
  }
}
