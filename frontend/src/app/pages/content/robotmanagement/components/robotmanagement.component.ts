import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RobotManagementService } from '../services/robotmanagement.service';

@Component({
  selector: 'ngx-robot',
  templateUrl: './robotmanagement.component.html',
  styleUrls: ['./robotmanagement.component.scss']
})
export class RobotManagementComponent implements OnInit {

  
  _connectionError: Boolean = false;
  _sendSuccess: Boolean = false;

  
  robotManagementForm: FormGroup;
  private sendData: Object = {}

  constructor( private _http: HttpClient,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _robotManagementService: RobotManagementService ) { }

  ngOnInit() {
    this.robotManagementForm = this._formBuilder.group({
      robotDescription: ['',[Validators.required,]]
    })
  }
  onSubmit() {
    this.sendData = {
      "robotDescription": this.robotManagementForm.value.robotDescription
    }
    console.log(this.robotManagementForm)
    console.log(this.sendData)
  }
}
