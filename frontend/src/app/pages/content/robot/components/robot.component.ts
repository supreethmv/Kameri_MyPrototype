import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RobotService } from '../services/robot.service';

@Component({
  selector: 'ngx-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {

  _connectionError: Boolean = false;
  _sendSuccess: Boolean = false;

  robotCommandForm: FormGroup;
  private robotUrl: String;
  private sendData: Object = {}

  constructor(private _http: HttpClient,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _robotService: RobotService, ) { }

  ngOnInit() {
    this.robotCommandForm = this._formBuilder.group({
      url: ['', [Validators.required,]],
      prefix: ['', [Validators.required,]],
      commandId: ['', [Validators.required,]],
      commandName: ['Kameri Testweek'],
      commandDescription: ['Kameri Testweek'],
      value: ['', [Validators.required,]],
    })
  }

  onSubmit() {
    let prefix = this.robotCommandForm.value.prefix
    let url = this.robotCommandForm.value.url
    this.robotUrl = prefix + "://" + url
    this.sendData = {
      "commandId": this.robotCommandForm.value.commandId,
      "commandName": this.robotCommandForm.value.commandName,
      "commandDescription": this.robotCommandForm.value.commandName,
      "value": this.robotCommandForm.value.value
    }
    console.log(this.robotUrl)
    console.log(this.sendData)
    this._robotService.sendData(this.robotUrl, this.sendData)
      .subscribe(
        data => {
          console.log(data)
          this._sendSuccess = true
        },
        err => {
          console.log(err)
          this._connectionError = true;
        }
      )
  }

}
