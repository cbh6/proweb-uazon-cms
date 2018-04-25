import { Component, OnInit, DoCheck, HostBinding } from '@angular/core';
import { UsersService } from '../../shared/services/api/users.service';

@Component({
  selector: 'uaz-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  @HostBinding('class.uaz-header') componentClass = true;

  public identity: object;
  public token: string;

  constructor(private _userService: UsersService) {}

  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
