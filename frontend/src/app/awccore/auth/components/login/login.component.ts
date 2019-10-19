import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _loginError: Boolean = false
  loginForm: FormGroup
  
  private currentUser = []

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _authService: AuthService) { }


  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  loginUser() {
    this._authService.loginUser(this.loginForm.value)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          localStorage.setItem('uuid', res.uuid)
          this._router.navigate(['/pages/starter'])
        },
        err => {
          console.log(err)
          this._loginError = true
        } 
      )
  }

  get identifier() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

}
