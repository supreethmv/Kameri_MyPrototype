import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../../../../awccore/auth/services/users.service';
import { Router } from '@angular/router';
import { User } from '../../../../../awccore/auth/models/user';
import { Role } from '../../../../../awccore/auth/models/roles';
import { Observable } from 'rxjs';
import { RoleService } from '../../../../../awccore/auth/services/role.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'ngx-usermanagement-create',
  templateUrl: './usermanagement-create.component.html',
  styleUrls: ['./usermanagement-create.component.scss']
})
export class UsermanagementCreateComponent implements OnInit {

  createUserForm: FormGroup;
  private _userRoles$: Observable<Role[]>;

  constructor(private _http: HttpClient,
    private _usersService: UsersService,
    private _roleService: RoleService,
    private _router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadRoles()
    this.createUserForm = this._formBuilder.group({
      username: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      role: [''],
      // roles: [[]],
    })
  }

  loadRoles() {
    this._userRoles$ = this._roleService.getRoles();
  }

  saveUser(user) {
    this._usersService.createUser(user)
      .subscribe(data => {
        console.log(data);
        this._router.navigate(['/pages/usermanagement']);    
      }, err => console.log(err));
  }

  onSubmit() {
    console.log(this.createUserForm.value)
    this.saveUser(this.createUserForm.value)
  }
}
