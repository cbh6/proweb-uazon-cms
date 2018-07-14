import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../shared/models/book.model';
import { ApiService } from '../shared/services/api/api.service';
import { ResourceService } from '../shared/services/api/resource.service';
import * as moment from 'moment';
@Injectable()
export class BooksService extends ResourceService<Book> {
  public url: string;

  constructor(_apiService: ApiService, http: HttpClient) {
    super('libros', _apiService);
  }

  getAutoresFromLibro(token, id): Observable<any> {
    return this._apiService.Get(`libros/${id}/autores`, token);
  }

  getAutores(token): Observable<any> {
    return this._apiService.Get(`autores`, token);
  }

  updateAutorLibro(token, idAutor, idLibro): Observable<any> {
    const item = { fecha: moment().format('Y-M-d')};
    console.log(item);
    const params = `json=${JSON.stringify(item)}`;
    return this._apiService.Put(`libros/${idLibro}/autores/${idAutor}`, params, token);
  }
}
