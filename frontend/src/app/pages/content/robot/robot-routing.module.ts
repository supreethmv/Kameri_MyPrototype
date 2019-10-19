import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../awccore/auth/guards/auth.guard';
import { RobotComponent } from './components/robot.component';

const routes: Routes = [
  {
    path: '',
    component: RobotComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobotRoutingModule { }
