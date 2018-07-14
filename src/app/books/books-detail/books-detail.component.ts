import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/mergeMap';
import { BooksService } from '../books.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Book } from '../../shared/models/book.model';
import { Author } from '../../shared/models/author.model';

export interface ICategoria {
  id: number;
  value: string;
  text: string;
}
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
  public categorias: ICategoria[];
  public autorSeleccionado: number;


  constructor(
    private _toastr: ToastrService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _booksService: BooksService
  ) {
    this.categorias = [
      { id: 0, value: 'novelas', text: 'Novela' },
      { id: 1, value: 'ciencia', text: 'Ciencia' },
      { id: 2, value: 'historia', text: 'Historia' },
      { id: 3, value: 'cuentos', text: 'Cuentos' },
      { id: 4, value: 'comics', text: 'Cómics' },
      { id: 5, value: 'poesia', text: 'Poesía' },
      { id: 6, value: 'ficcion', text: 'Ficción' },
      { id: 7, value: 'misterio', text: 'Misterio' },
      { id: 8, value: 'biografia', text: 'Biografía' }
    ];
  }

  ngOnInit() {
    this.book = new Book({});
    this.editing = false;
    this.loading = true;
    this.autores = [];
    this.autorSeleccionado = null;

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
        this.book = new Book(response.data);
        this.loading = false;
      });
  }

  getAuthors() {
    this._booksService.getAutores(this._authService.getToken()).subscribe(response => {
      response.data.forEach(autor => {
        this.autores.push(new Author(autor));
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

    this._booksService.updateAutorLibro(this._authService.getToken(), this.autorSeleccionado, this.book.id).subscribe(
      response => {
        // console.log(response);
      },
      error => {
        console.log(error as any);
      }
    );
  }

  categoriaChange($event) {
    const newCategoria = this.categorias.find(categoria => (categoria.text === $event.target.value));
    this.book.categoria = newCategoria.value;
  }

  autorChange($event) {
    console.log($event.target.value);
    this.autorSeleccionado = this.autores.find(autor => autor.nombre === $event.target.value).id;

  }
}
