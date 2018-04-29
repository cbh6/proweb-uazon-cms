import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../shared/models/book.model';
import { ApiService } from '../shared/services/api/api.service';

@Injectable()
export class BooksService {
  public url: string;

  constructor(private _apiService: ApiService) {}

  create(token, book: Book): Observable<any> {
    const params = `json=${JSON.stringify(book)}`;
    return this._apiService.Post('libros', params, token);
  }

  list(token): Observable<any> {
    // const headers = new HttpHeaders().set('Authorization', token);
    // return this.http.get(this.url + '/libros', { headers });
    return this._apiService.Get('libros', token);
  }
}
