import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { BooksService } from '../books.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Book } from '../../shared/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'uaz-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public books: Book[];

  constructor(
    private _router: Router,
    private _booksService: BooksService,
    private _authService: AuthService,
    private _toastr: ToastrService,
    public ngxSmartModalService: NgxSmartModalService
  ) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this._booksService.list(this._authService.getToken()).subscribe(
      response => {
        this.books = response.data;
      },
      error => {
        console.log(error as any);
      }
    );
  }

  onDelete(id) {
    this._booksService.delete(this._authService.getToken(), id).subscribe(
      response => {
        this._toastr.success('Libro eliminado correctamente');
        this.getBooks();
      },
      error => {
        this._toastr.error('Se ha producido un error inesperado al eliminar el libro');
        console.log(error as any);
      }
    );
  }
}
