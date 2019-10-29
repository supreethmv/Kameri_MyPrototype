import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../awccore/auth/guards/auth.guard';
import { RobotManagementComponent } from './components/robotmanagement.component';

const routes: Routes = [
  {
    path: '',
    component: RobotManagementComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobotRoutingModule { }
