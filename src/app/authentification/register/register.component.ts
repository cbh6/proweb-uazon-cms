import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../shared/services/api/auth.service';
import { Observable } from 'rxjs/Observable';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'uaz-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @HostBinding('class.uaz-register') componentClass = true;

  public user: User;
  public status: string;
  public message: string;

  constructor(private _authService: AuthService, private _toastr: ToastrService, private _router: Router) {
    this.user = new User({});
    this.user.role = 'ROLE_CMS_PENDING';
  }

  ngOnInit() {
    this.user.name = '';
    this.user.email = '';
    this.user.address = '';
    this.user.cp = null;
    this.user.password = '';
    this.user.passwordRepeat = '';
  }

  onSubmit(form) {
    console.log(this.user);
    this._authService.register(this.user).subscribe(
      response => {
        this.status = response.status;
        if (this.status === 'success') {
          this._toastr.success('Usuario registrado correctamente');
          this._router.navigate(['dashboard']);

          // this.user.reset();
          // this.user.role = 'ROLE_CMS_PENDING';

          form.reset();
        } else {
          this.message = response.message;
        }
      },
      error => {
        console.log('e', error);
      }
    );
  }
}
