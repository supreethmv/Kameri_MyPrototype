import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../awccore/auth/services/users.service';
import { User } from '../../../../awccore/auth/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit {

  private _currentUser$: Observable<User>;

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    let uuid = localStorage.getItem('uuid');
    this._currentUser$ = this._usersService.getUserbyId(uuid);
  }
}
