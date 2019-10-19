import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { UsersService } from '../../../../../awccore/auth/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from '../../../../../awccore/auth/models/roles';
import { Observable } from 'rxjs';
import { RoleService } from '../../../../../awccore/auth/services/role.service';
import { User } from '../../../../../awccore/auth/models/user';

@Component({
  selector: 'ngx-usermanagement-detail',
  templateUrl: './usermanagement-detail.component.html',
  styleUrls: ['./usermanagement-detail.component.scss']
})
export class UsermanagementDetailComponent implements OnInit {

  updateUserForm: FormGroup;
  private _userRoles$: Observable<Role[]>;
  private id;
  user: User;

  constructor(private _usersService: UsersService,
    private _roleService: RoleService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this._route.snapshot.params['index']
    // this.loadUser()
    // this.updateUserForm = this._formBuilder.group({
    //   username: [''],
    //   firstName: [''],
    //   lastName: [''],
    //   email: [''],
    //   password: [''],
    //   role: [''],
    // })
    // this.loadRoles()
  }

  // loadRoles() {
  //   this._userRoles$ = this._roleService.getRoles();
  // }

  // Load the cached USER need an API for USER by ID
  // loadUser() {
  //   this._usersService.getUserbyId(this.id)
  //     .subscribe(data => {
  //       this.user = data;
  //       this.initUser();
  //     });
  // }

  // initUser() {
  //   this.updateUserForm.patchValue({
  //     username: this.user.username,
  //     lastName: this.user.lastName,
  //     firstName: this.user.firstName,
  //     email: this.user.email,
  //     role: this.user.role
  //   })
  // }

  // saveUser(user) {
  //   this._usersService.updateUser(user)
  //     .subscribe(data => console.log(data), err => console.log(err))
  //   this._router.navigate(['/pages/usermanagement'])
  // }

  // onSubmit() {
  //   console.log(this.updateUserForm.value)
  //   this.saveUser(this.updateUserForm.value)
  // }
}
