import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  selector: 'uaz-books-create',
  templateUrl: './books-create.component.html',
  styleUrls: ['./books-create.component.scss']
})
export class BooksCreateComponent implements OnInit {
  public book: Book;
  public categorias: ICategoria[];
  public autorSeleccionado: number;
  public autores: Author[];

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
    this.book.init();
    this.getAuthors();
    this.autores = [];
    this.autorSeleccionado = null;
  }

  onSubmit() {
    this.book.isbn = parseInt(this.book.isbn.toString().replace(/\-/g, ''), 10);
    this._booksService.create(this._authService.getToken(), this.book).subscribe(
      response => {
        this._toastr.success('Libro creado correctamente');
        this._booksService
          .updateAutorLibro(this._authService.getToken(), this.autorSeleccionado, response.libro.id)
          .subscribe(
            res => {
              console.log(response);
              this._router.navigate(['books']);
            },
            error => {
              console.log(error as any);
            }
          );
      },
      error => {
        this._toastr.error('Se ha producido un error inesperado al crear el libro');
        console.log(error as any);
      }
    );
  }

  getAuthors() {
    this._booksService.getAutores(this._authService.getToken()).subscribe(response => {
      response.data.forEach(autor => {
        this.autores.push(new Author(autor));
      });
    });
  }

  categoriaChange($event) {
    const newCategoria = this.categorias.find(categoria => categoria.text === $event.target.value);
    this.book.categoria = newCategoria.value;
  }

  autorChange($event) {
    this.autorSeleccionado = this.autores.find(autor => autor.nombre === $event.target.value).id;
    console.log(this.autorSeleccionado);
  }
}
