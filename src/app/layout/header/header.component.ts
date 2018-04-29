import { Component, OnInit, DoCheck, HostBinding } from '@angular/core';
import { AuthService } from '../../shared/services/api/auth.service';

@Component({
  selector: 'uaz-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  @HostBinding('class.uaz-header') componentClass = true;

  public identity: object;
  public token: string;

  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this.identity = this._authService.getIdentity();
  }

  ngDoCheck() {
    this.identity = this._authService.getIdentity();
  }
}
