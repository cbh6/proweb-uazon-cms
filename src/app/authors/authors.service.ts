import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Author } from '../shared/models/author.model';
import { ApiService } from '../shared/services/api/api.service';
import { ResourceService } from '../shared/services/api/resource.service';
@Injectable()
export class AuthorsService extends ResourceService<Author> {
  public url: string;

  constructor(_apiService: ApiService, http: HttpClient) {
    super('autores', _apiService);
  }
}
