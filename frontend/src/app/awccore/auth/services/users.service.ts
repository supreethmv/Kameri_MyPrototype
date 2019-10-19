import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user';
import { UserRaw } from '../factory/raw/user-raw';
import { UserFactory } from '../factory/user-factory';
import { throwError, Observable } from 'rxjs';
import { retry, map, catchError, shareReplay } from 'rxjs/operators';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // token = localStorage.getItem('token');
  // tokenPayload = decode(this.token);

  constructor(private _http: HttpClient) { }

  public cacheUser$: Observable<User>;

  // Current User is cached
  // Cache is reassigned after event "Logout" in auth.service is triggered
  getUser(uuid): Observable<User> {
    if (!this.cacheUser$) {
      this.cacheUser$ = this._http.get<UserRaw>(`${environment.baseUrl}/api/auth/user/${uuid}`)
        .pipe(
          retry(3),
          map(user => UserFactory.fromRaw(user)),
          catchError(this.errorHandler),
          shareReplay()
        );
    }
    return this.cacheUser$;
  }

  getAllUsers(): Observable<User[]> {
    return this._http.get<UserRaw[]>(`${environment.baseUrl}/api/user`)
      .pipe(
        retry(3),
        map(usersRaw => usersRaw.map(b => UserFactory.fromRaw(b))),
        catchError(this.errorHandler)
      );
  }

  // Implement API for USER by ID
  // getUserbyId(userId): Observable<User> {
  //   return this._http.get<User>(`${environment.baseUrl}/api/auth/user/${userId}`)
  //     .pipe(
  //       retry(3),
  //       catchError(this.errorHandler),
  //     );
  // }

  getUserbyId(userId): Observable<User>{
    return this._http.get<User>(`${environment.baseUrl}/api/auth/user/${userId}`)
      .pipe(
        retry(3),
        catchError(this.errorHandler),
      );
  }

  deleteUser(userId): any {
    return this._http.delete(`${environment.baseUrl}/api/user/${userId}`)
  }

  updateUser(user: User): Observable<any> {
    return this._http.put(`${environment.baseUrl}/api/user`, user)
  }

  createUser(user: User): Observable<any> {
    return this._http.post(`${environment.baseUrl}/api/user`, user)
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten!');
    return throwError(error);
  }
}
