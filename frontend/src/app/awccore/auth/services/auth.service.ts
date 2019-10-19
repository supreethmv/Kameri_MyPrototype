import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { UsersService } from './users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient,
    private _router: Router,
    private _usersService: UsersService) { }

  loginUser(user) {
    return this._http.post<any>(`${environment.baseUrl}/api/auth/login`, user)
  }

  logoutUser() {
    localStorage.clear()
    this._usersService.cacheUser$ = null
    this._router.navigate(['/api/auth/login'])
  }

  loggedInCheck() {
    return !!localStorage.getItem('token')
  }
}
