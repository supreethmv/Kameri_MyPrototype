import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { MENU_ITEMS_ADMIN } from './pages-menu-admin';

import { RoleService } from '../awccore/auth/services/role.service';
import { Roles } from '../awccore/auth/models/roles';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <nb-menu *ngIf="admin" [items]="menu_admin"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {

  // Set Views for specific Roles
  admin = false;

  // Define Menu Items for specific Roles
  menu = MENU_ITEMS;
  menu_admin = MENU_ITEMS_ADMIN;

  constructor(private _roleService: RoleService, ) { }

  ngOnInit() {
    if (this._roleService.checkRole() === Roles.Admin) this.admin = true
  }
}
