import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DeviceManagementService } from '../services/devicemanagement.service';

@Component({
  selector: 'ngx-robot',
  templateUrl: './devicemanagement.component.html',
  styleUrls: ['./devicemanagement.component.scss']
})
export class DeviceManagementComponent implements OnInit {

  constructor(private _http: HttpClient,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _deviceManagementService: DeviceManagementService, ) { }

  _connectionError: Boolean = false;
  _sendSuccess: Boolean = false;

  private sendData: Object = {}
  deviceManagementForm: FormGroup;

  private robot_uuids: any[]=[
    { id: 1, name: 'Robot UUID Option 1' },
    { id: 2, name: 'Robot UUID Option 2' },
    { id: 3, name: 'Robot UUID Option 3' },
    { id: 4, name: 'Robot UUID Option 4' },
  ];
  private org_uuids: any[]=[
    { id: 1, name: 'Org UUID Option 1' },
    { id: 2, name: 'Org UUID Option 2' },
    { id: 3, name: 'Org UUID Option 3' },
    { id: 4, name: 'Org UUID Option 4' },
  ];

  ngOnInit() {
    this.deviceManagementForm = this._formBuilder.group({
      description: ['', [Validators.required,]],
      robot_uuid: ['', [Validators.required,]],
      org_uuid: ['', [Validators.required,]],
    })
  }
  onSubmit() {
    this.sendData = {
      "description": this.deviceManagementForm.value.description,
      "robot_uuid": this.deviceManagementForm.value.robot_uuid,
      "org_uuid": this.deviceManagementForm.value.org_uuid
    }
    console.log(this.deviceManagementForm)
    console.log(this.sendData)
  }



}