import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from  '@angular/router';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  private getAllUsersUrl = "http://localhost:3000/api/users/profile"

  constructor(private _http: HttpClient) { }
  

}
