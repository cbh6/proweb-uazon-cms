import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'uaz-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @HostBinding('class.uaz-register') componentClass = true;

  public user: User;
  constructor() {
    this.user = new User();
    console.log(this.user);
  }

  ngOnInit() {}
}
