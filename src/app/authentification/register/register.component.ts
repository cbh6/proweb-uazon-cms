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

  constructor(private _usersService: UsersService) {
    this.user = new User({});
    this.user.role = 'ROLE_CMS_PENDING';
  }

  ngOnInit() {}

  onSubmit(form) {
    console.log(this.user);
    this._usersService.register(this.user).subscribe(
      response => {
        this.status = response.status;
        this.message = response.message;
        if (this.status === 'success') {
          this.user.reset();
          this.user.role = 'ROLE_CMS_PENDING';

          form.reset();
        }
      },
      error => {
        console.log('e', error);
      }
    );
  }
}
