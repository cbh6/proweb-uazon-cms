import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './api/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (this.auth.getIdentity() == null || !this.auth.getIdentity().sub) {
      console.log('sin acceso');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
