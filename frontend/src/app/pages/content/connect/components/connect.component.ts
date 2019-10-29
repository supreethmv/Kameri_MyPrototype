import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConnectService } from '../services/connect.service';

@Component({
  selector: 'ngx-robot',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  _connectionError: Boolean = false;
  _sendSuccess: Boolean = false;

  connectCommandForm: FormGroup;
  private scriptModel: Object = {}
  private devices: any[]=[
    { id: 1, name: 'Device Option 1' },
    { id: 2, name: 'Device Option 2' },
    { id: 3, name: 'Device Option 3' },
    { id: 4, name: 'Device Option 4' },
  ];
  private robots: any[]=[
    { id: 1, name: 'Robot Option 1' },
    { id: 2, name: 'Robot Option 2' },
    { id: 3, name: 'Robot Option 3' },
    { id: 4, name: 'Robot Option 4' },
  ];

  constructor(private _http: HttpClient,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _connectService: ConnectService, ) { }

  ngOnInit() {
    this.connectCommandForm = this._formBuilder.group({
      device: ['', [Validators.required,]],
      robot: ['', [Validators.required,]],
    })
  }

  onSubmit() {
    this.scriptModel = {
      "device": this.connectCommandForm.value.device,
      "robot": this.connectCommandForm.value.robot,
    }
    this._connectService.serviceCall()
    this._sendSuccess=true; //lol
      //.subscribe(
      //  data => {
      //    console.log(data)
      //    this._sendSuccess = true
      //  },
      //  err => {
      //    console.log(err)
      //    this._connectionError = true;
      //  }
      //)
  }

}
