import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthorsService } from '../authors.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Author } from '../../shared/models/author.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';
export interface IContext {
  data: object;
}
@Component({
  selector: 'uaz-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  public authors: Author[];
  @ViewChild('modalTemplate') public modalTemplate: ModalTemplate<IContext, object, object>;

  constructor(
    private _router: Router,
    private _authorsService: AuthorsService,
    private _authService: AuthService,
    private _toastr: ToastrService,
    public modalService: SuiModalService
  ) {
    this.authors = [];
  }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.authors = [];
    this._authorsService.list(this._authService.getToken()).subscribe(
      response => {
        this.authors = response.data;
      },
      error => {
        console.log(error as any);
      }
    );
  }

  deleteAuthor(id) {
    this._authorsService.delete(this._authService.getToken(), id).subscribe(
      response => {
        this._toastr.success('Autor eliminado correctamente');
        this.getAuthors();
      },
      error => {
        this._toastr.error('Se ha producido un error inesperado al eliminar el autor');
        console.log(error as any);
      }
    );
  }

  openModal(dynamicContent: Author) {
    const config = new TemplateModalConfig<IContext, object, object>(this.modalTemplate);

    config.context = { data: dynamicContent };
    config.isBasic = true;

    this.modalService
      .open(config)
      .onApprove(result => {
        this.deleteAuthor(dynamicContent.id);
      })
      .onDeny(result => {
        /* deny callback */
      });
  }
}
