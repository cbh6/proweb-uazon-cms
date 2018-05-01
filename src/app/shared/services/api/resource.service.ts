import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { Resource } from '../../models/resource';

export class ResourceService<T extends Resource> {
  constructor(private endpoint: string, public _apiService: ApiService) {}

  public create(token, item: T): Observable<any> {
    const params = `json=${JSON.stringify(item)}`;
    return this._apiService.Post(this.endpoint, params, token);
  }

  public update(token, item: T): Observable<any> {
    const params = `json=${JSON.stringify(item)}`;
    return this._apiService.Put(`${this.endpoint}/${item.id}`, params, token);
  }

  read(token, id: number): Observable<any> {
    return this._apiService.Get(`${this.endpoint}/${id}`, token);
  }

  list(token): Observable<any> {
    return this._apiService.Get(this.endpoint, token);
  }

  delete(token, id: number): Observable<any> {
    return this._apiService.Delete(`${this.endpoint}/${id}`, token);
  }
}
