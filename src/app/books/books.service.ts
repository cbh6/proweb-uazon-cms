import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../shared/models/book.model';
import { ApiService } from '../shared/services/api/api.service';
import { ResourceService } from '../shared/services/api/resource.service';
@Injectable()
export class BooksService extends ResourceService<Book> {
  public url: string;

  constructor(_apiService: ApiService, http: HttpClient) {
    super('libros', _apiService);
  }

  // create(token, book: Book): Observable<any> {
  //   const params = `json=${JSON.stringify(book)}`;
  //   return this._apiService.Post('libros', params, token);
  // }

  // edit(token, book: Book): Observable<any> {
  //   const params = `json=${JSON.stringify(book)}`;
  //   return this._apiService.Put(`libros/${book.id}`, params, token);
  // }

  // list(token): Observable<any> {
  //   // const headers = new HttpHeaders().set('Authorization', token);
  //   // return this.http.get(this.url + '/libros', { headers });
  //   return this._apiService.Get('libros', token);
  // }

  // detail(token, id): Observable<any> {
  //   // const headers = new HttpHeaders().set('Authorization', token);
  //   // return this.http.get(this.url + '/libros', { headers });
  //   return this._apiService.Get(`libros/${id}`, token);
  // }

  // delete(token, id): Observable<any> {
  //   return this._apiService.Delete(`libros/${id}`, token);
  // }

  getAutoresFromLibro(token, id): Observable<any> {
    return this._apiService.Get(`libros/${id}/autores`, token);
  }
}
