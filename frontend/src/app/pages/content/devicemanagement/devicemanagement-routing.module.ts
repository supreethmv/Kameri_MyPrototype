import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../awccore/auth/guards/auth.guard';
import { DeviceManagementComponent } from './components/devicemanagement.component';

const routes: Routes = [
  {
    path: '',
    component: DeviceManagementComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceManagementRoutingModule { }
