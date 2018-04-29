import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';

@Injectable()
export class UsersService {
  constructor(private _apiService: ApiService) {}

  register(user: User): Observable<any> {
    const params = `json=${JSON.stringify(user)}`;
    return this._apiService.Post('register', params);
  }

  login(user: User, getIdentity = null): Observable<any> {
    const options = {} as any;
    Object.assign(options, user);
    if (getIdentity != null) {
      options.getIdentity = 'true';
    }

    const params = 'json=' + JSON.stringify(options);
    return this._apiService.Post('login', params);
  }

  getIdentity() {
    return JSON.parse(localStorage.getItem('identity'));
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
