import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {


  constructor(private _authService: AuthService,
    private _router: Router) { }

  canActivate() {
    return this.isUserLoggedIn();
  }
  canActivateChild() {
    return this.isUserLoggedIn();
  }
  canLoad() {
    return this.isUserLoggedIn();
  }

  isUserLoggedIn() {
    if (this._authService.loggedInCheck()) {
      return true
    } else {
      this._router.navigate(['/auth/login'])
    }
  }
}
