import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from  '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private _http: HttpClient,
              private _router: Router,) { }

  getToken() {
    return localStorage.getItem('token')
  }  

}
