import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '../../../awccore/auth/guards/role.guard'
import { Roles } from '../../../awccore/auth/models/roles';
import { UsermanagementComponent } from './components/list/usermanagement.component';
import { UsermanagementCreateComponent } from './components/create/usermanagement-create.component';
import { UsermanagementDetailComponent } from './components/detail/usermanagement-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UsermanagementComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: Roles.Admin
    },
  },
  {
    path: 'create',
    component: UsermanagementCreateComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: Roles.Admin
    }
  },
  {
    path: 'detail/:index',
    component: UsermanagementDetailComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: Roles.Admin
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanagementRoutingModule { }
