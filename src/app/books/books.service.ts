import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Book } from '../shared/models/book.model';

@Injectable()
export class BooksService {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = environment.apiPath;
  }

  create(token, book: Book): Observable<any> {
    const json = JSON.stringify(book);
    const params = 'json=' + json;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token);

    return this.http.post(this.url + '/libros', params, { headers });
  }

  list(token): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(this.url + '/libros', { headers });
  }
}
