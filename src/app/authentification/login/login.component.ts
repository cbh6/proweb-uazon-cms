import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/api/users.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'uaz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @HostBinding('class.uaz-login') componentClass = true;

  public user: User;
  public token: string;
  public identity: object;
  public status: string;
  public message: string;

  constructor(private _userService: UsersService, private _route: ActivatedRoute, private _router: Router) {
    this.user = new User({});
  }

  ngOnInit() {
    this.logout();
  }

  onSubmit(form) {
    // Obtain login token
    this._userService.login(this.user).subscribe(
      tokenRes => {
        this.status = tokenRes.status;
        if (tokenRes.status === 'error') {
          this.message = tokenRes.message;
        }

        this.token = tokenRes;
        localStorage.setItem('token', JSON.stringify(tokenRes));

        // Obtain user login data
        this._userService.login(this.user, true).subscribe(
          identityRes => {
            this.identity = identityRes;
            localStorage.setItem('identity', JSON.stringify(identityRes));
          },
          error => {
            console.log('e', error);
          }
        );
      },
      error => {
        console.log('e', error);
      }
    );
  }

  logout() {
    this._route.params.subscribe(params => {
      console.log('1');
      const logout = +params['sure'];

      if (logout === 1) {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        this._router.navigate(['login']);
      }
    });
  }
}
