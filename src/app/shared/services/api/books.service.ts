import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ApiService } from './api.service';
import { Book } from '../../models/book.model';
@Injectable()
export class BooksService {
  // es private porque no queremos que nadie envie eventos
  private books$: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  // cada vez  que alguien se suscribe, le llga el ultimo valor que tuviera
  // con subject no pasaria, no le llegaria el ultimo valor, solo el siguiente

  public get book() {
    return this.books$.asObservable();
  }

  constructor(private apiService: ApiService) {}

  // esto se implementa en resource, bookservice extenderá resource por lo que estará disponible
  list() {
    this.apiService.get('books').map((res: any[]) => this.books$.next(res.map(item => new Book(item))));
  }

  // get from codesandbox example
  detail() {}
}

// en el componente habiendo inyectado el servicio
/**
 * this.loading = true
 * this.booksService.list().subscribe(
 *  books => {
 *      this.loading = false;
 *      this.books = books;
 *  }
 * )
 */

// al mapear el observable en lugar de hacer .do
// en el list, no nos hace falta el behaviorsubject

// detail
/**
 * this.booksService.detail(routeParams, id).subscribe(
 *     (book: Book) => this.book = book
 * )
 */
// html
/**
 * <h1 [style.color]="book.isCheap() ? 'red' : 'black'">{{book.title}}</h1>
 *
 */
