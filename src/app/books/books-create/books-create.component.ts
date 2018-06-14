import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BooksService } from '../books.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'uaz-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.scss']
})
export class BooksCreateComponent implements OnInit {
  public book: Book;

  constructor(
    private _toastr: ToastrService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _booksService: BooksService
  ) {}

  ngOnInit() {
    this.book = new Book({});
    this.book.init();
  }

  onSubmit(form) {
    this.book.isbn = parseInt(this.book.isbn.toString().replace(/\-/g, ''), 10);
    this._booksService.create(this._authService.getToken(), this.book).subscribe(
      response => {
        this._toastr.success('Libro creado correctamente');
        this._router.navigate(['books']);
      },
      error => {
        this._toastr.error('Se ha producido un error inesperado al crear el libro');
        console.log(error as any);
      }
    );
  }
}
