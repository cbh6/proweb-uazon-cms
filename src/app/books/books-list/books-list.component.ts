import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BooksService } from '../books.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Book } from '../../shared/models/book.model';
import { Author } from '../../shared/models/author.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';
export interface IContext {
  data: object;
}
@Component({
  selector: 'uaz-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public books: Book[];
  @ViewChild('modalTemplate') public modalTemplate: ModalTemplate<IContext, object, object>;

  constructor(
    private _router: Router,
    private _booksService: BooksService,
    private _authService: AuthService,
    private _toastr: ToastrService,
    public modalService: SuiModalService
  ) {
    this.books = [];
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.books = [];
    this._booksService.list(this._authService.getToken()).subscribe(
      response => {
        this.books = response.data;
      },
      error => {
        console.log(error as any);
      }
    );
  }

  deleteBook(id) {
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

  openModal(dynamicContent: Book) {
    const config = new TemplateModalConfig<IContext, object, object>(this.modalTemplate);

    config.context = { data: dynamicContent };
    config.isBasic = true;

    this.modalService
      .open(config)
      .onApprove(result => {
        this.deleteBook(dynamicContent.id);
      })
      .onDeny(result => {
        /* deny callback */
      });
  }
}
