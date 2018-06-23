import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/models/user.model';
import { ApiService } from '../shared/services/api/api.service';
import { ResourceService } from '../shared/services/api/resource.service';

@Injectable()
export class UsersService extends ResourceService<User> {
  public url: string;

  constructor(_apiService: ApiService, http: HttpClient) {
    super('usuarios', _apiService);
  }
}
