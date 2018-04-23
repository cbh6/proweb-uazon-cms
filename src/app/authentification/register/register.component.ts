import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/api/users.service';
import { Observable } from 'rxjs/Observable';

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

  constructor(private _userService: UsersService) {
    this.user = new User({});
    this.user.role = 'ROLE_CMS_PENDING';
  }

  ngOnInit() {}

  onSubmit(form) {
    console.log(this.user);
    this._userService.register(this.user).subscribe(
      response => {
        console.log(response);
        this.status = response.status;
        if (this.status === 'success') {
          this.message = response.message;

          this.user.reset();
          this.user.role = 'ROLE_CMS_PENDING';

          form.reset();
        }
        if (this.status === 'error') {
          this.message = response.message;
        }
      },
      error => {
        console.log('e', error);
      }
    );
  }
}
