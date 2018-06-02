import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/mergeMap';
import { BooksService } from '../books.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Book } from '../../shared/models/book.model';
import { Author } from '../../shared/models/author.model';

@Component({
  selector: 'uaz-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {
  public book: Book;
  public autores: Author[];
  public editing: boolean;
  public loading: boolean;
  public options: string[];
  public selectedOption: string;

  constructor(
    private _toastr: ToastrService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _booksService: BooksService
  ) {}

  ngOnInit() {
    this.book = new Book({});
    this.editing = false;
    this.loading = true;
    this.options = [];
    this.selectedOption = '';

    this.getBookData();
    this.getAuthors();
  }

  getBookData() {
    // Get book id from url and then fetch book data using apiService
    this._route.params
      .flatMap((v: any, index: number) => {
        return this._booksService.read(this._authService.getToken(), v.id);
      })
      .subscribe(response => {
        this.book = response.data;
        this.loading = false;
      });
  }

  getAuthors() {
    // Get book id from url and then fetch book data using apiService
    this._booksService.getAutores(this._authService.getToken()).subscribe(response => {
      this.autores = response.data;
      response.data.forEach(autor => {
        this.options.push(autor.nombre);
      });
    });
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  onSubmit(form) {
    this.book.isbn = parseInt(this.book.isbn.toString().replace(/\-/g, ''), 10);
    this._booksService.update(this._authService.getToken(), this.book).subscribe(
      response => {
        this._toastr.success('Libro modificado correctamente');
      },
      error => {
        this._toastr.error('Se ha producido un error inesperado al modificar el libro');
        console.log(error as any);
      }
    );
  }
}
