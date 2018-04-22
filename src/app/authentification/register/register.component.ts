import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/api/users.service';

@Component({
  selector: 'uaz-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @HostBinding('class.uaz-register') componentClass = true;

  public user;
  constructor(private _userService: UsersService) {
    this.user = {};
    this.user.role = 'ROLE_CMS_PENDING';
    console.log(this.user);
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.user);
    this._userService.create(this.user).subscribe(
      response => {
        console.log('r', response);
      },
      error => {
        console.log('e', error);
      }
    );
  }
}
