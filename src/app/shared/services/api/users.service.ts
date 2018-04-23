import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';

@Injectable()
export class UsersService {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = environment.apiPath;
  }

  register(user: User): Observable<any> {
    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.url + '/register', params, { headers });
  }

  login(user: User, getIdentity = null): Observable<any> {
    const options = {} as any;
    Object.assign(options, user);
    console.log(options);
    if (getIdentity != null) {
      options.getIdentity = 'true';
    }

    const params = 'json=' + JSON.stringify(options);
    console.log(params);
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.url + '/login', params, { headers });
  }

  getIdentity() {
    return JSON.parse(localStorage.getItem('identity'));
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
