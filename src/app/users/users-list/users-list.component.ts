import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../users.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { User } from '../../shared/models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';

export interface IContext {
  data: object;
}

@Component({
  selector: 'uaz-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  public users: User[];
  @ViewChild('modalTemplate') public modalTemplate: ModalTemplate<IContext, object, object>;

  constructor(
    private _router: Router,
    private _usersService: UsersService,
    private _authService: AuthService,
    private _toastr: ToastrService,
    public modalService: SuiModalService
  ) {
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = [];
    this._usersService.list(this._authService.getToken()).subscribe(
      response => {
        this.users = response.data.map(userData => new User(userData));
      },
      error => {
        console.log(error as any);
      }
    );
  }

  deleteUser(id) {
    this._usersService.delete(this._authService.getToken(), id).subscribe(
      response => {
        this._toastr.success('Usuario eliminado correctamente');
        this.getUsers();
      },
      error => {
        this._toastr.error('Se ha producido un error inesperado al eliminar el usuario');
        console.log(error as any);
      }
    );
  }

  openModal(dynamicContent: User) {
    const config = new TemplateModalConfig<IContext, object, object>(this.modalTemplate);

    config.context = { data: dynamicContent };
    config.isBasic = true;

    this.modalService
      .open(config)
      .onApprove(result => {
        this.deleteUser(dynamicContent.id);
      })
      .onDeny(result => {
        /* deny callback */
      });
  }
}
