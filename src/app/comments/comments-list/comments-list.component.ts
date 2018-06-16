import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommentsService } from '../comments.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { Comment } from '../../shared/models/comment.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';

export interface IContext {
  data: object;
}

@Component({
  selector: 'uaz-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  public comments: Comment[];
  @ViewChild('modalTemplate') public modalTemplate: ModalTemplate<IContext, object, object>;

  constructor(
    private _router: Router,
    private _commentsService: CommentsService,
    private _authService: AuthService,
    private _toastr: ToastrService,
    public modalService: SuiModalService
  ) {
    this.comments = [];
  }
  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.comments = [];
    this._commentsService.list(this._authService.getToken()).subscribe(
      response => {
        this.comments = response.data;
        console.log(this.comments);
      },
      error => {
        console.log(error as any);
      }
    );
  }

  deleteComment(id) {
    this._commentsService.delete(this._authService.getToken(), id).subscribe(
      response => {
        this._toastr.success('Comentario eliminado correctamente');
        this.getComments();
      },
      error => {
        this._toastr.error('Se ha producido un error inesperado al eliminar el comentario');
        console.log(error as any);
      }
    );
  }

  openModal(dynamicContent: Comment) {
    const config = new TemplateModalConfig<IContext, object, object>(this.modalTemplate);

    config.context = { data: dynamicContent };
    config.isBasic = true;

    this.modalService
      .open(config)
      .onApprove(result => {
        this.deleteComment(dynamicContent.id);
      })
      .onDeny(result => {
        /* deny callback */
      });
  }

}
