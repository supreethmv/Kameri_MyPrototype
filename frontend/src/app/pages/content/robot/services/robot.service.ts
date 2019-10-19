import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor(private _http: HttpClient, ) { }

  sendData(url, data) {
    return this._http.post<any>(url, data)
  }
}
