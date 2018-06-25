import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/mergeMap';
import { UsersService } from '../users.service';
import { AuthService } from '../../shared/services/api/auth.service';
import { User } from '../../shared/models/user.model';

export interface IRole {
  id: number;
  value: string;
  text: string;
}

@Component({
  selector: 'uaz-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  public user: User;
  public editing: boolean;
  public loading: boolean;
  public options: string[];
  public selectedOption: string;
  public roles: IRole[];

  constructor(
    private _toastr: ToastrService,
    private _route: ActivatedRoute,
    private _authService: AuthService,
    private _usersService: UsersService
  ) {
    this.roles = [
      { id: 0, value: 'ROLE_USER', text: 'Usuario' },
      { id: 1, value: 'ROLE_ADMIN', text: 'Administrador' }
    ];
  }

  ngOnInit() {
    this.user = new User({});
    this.editing = false;
    this.loading = true;
    this.options = [];
    this.selectedOption = '';

    this.getUserData();
  }

  getUserData() {
    // Get user id from url and then fetch user data using apiService
    this._route.params
      .flatMap((v: any, index: number) => {
        return this._usersService.read(this._authService.getToken(), v.id);
      })
      .subscribe(response => {
        this.user = new User(response.data);
        console.log(this.user);
        console.log(this.roles);
        this.loading = false;
      });
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  onSubmit(form) {
    this._usersService.update(this._authService.getToken(), this.user).subscribe(
      response => {
        this._toastr.success('Usuario modificado correctamente');
      },
      error => {
        this._toastr.error('Se ha producido un error inesperado al modificar el usuario');
        console.log(error as any);
      }
    );
  }

  selectChange($event) {
    const newRole = this.roles.find(role => (role.text = $event.target.value));
    this.user.role = newRole.value;
  }
}
