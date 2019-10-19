import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../../../awccore/auth/services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../../../../awccore/auth/models/user';

@Component({
  selector: 'ngx-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {

  private _allUsers$: Observable<User[]>;


  constructor(private _router: Router,
    private _usersService: UsersService) {
  }

  ngOnInit() {
    this.reloadData()
  }

  newUser() {
    this._router.navigate(['/pages/usermanagement/create'])
  }

  reloadData() {
    this._allUsers$ = this._usersService.getAllUsers();
  }

  editUser(userId: string) {
    this._router.navigate(['/pages/usermanagement/detail', userId]);
  }

  deleteUser(userId: string) {
    this._usersService.deleteUser(userId)
      .subscribe(
        () => {
          this.reloadData();
        },
        error => console.log(error));
  }

  
}
