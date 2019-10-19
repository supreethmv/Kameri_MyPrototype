import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { AuthService } from './auth.service';
import { Role } from '../models/roles';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  token = localStorage.getItem('token');
  tokenPayload = decode(this.token);

  constructor(private _http: HttpClient,
    private _router: Router,
    private _authService: AuthService) { }

  checkUserRole(expectedRole) {
    if (!this._authService.loggedInCheck || this.tokenPayload.role !== expectedRole) {
      this._router.navigate(['/pages/starter']);
      return false;
    }
    return true;
  }

  checkRole() {
    return this.tokenPayload.role
  }

  getRoles(): Observable<Role[]> {
    return this._http.get<Role[]>(`${environment.baseUrl}/api/user_role`)
      .pipe(
        retry(3),
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten!');
    return throwError(error);
  }
}


