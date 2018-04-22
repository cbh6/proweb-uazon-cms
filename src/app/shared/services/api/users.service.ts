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

  create(user: User): Observable<any> {
    const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    console.log(this.url, params, headers);
    return this.http.post(this.url + '/register', params, { headers });
  }
}
