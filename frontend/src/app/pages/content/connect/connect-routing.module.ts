import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../awccore/auth/guards/auth.guard';
import { ConnectComponent } from './components/connect.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RobotRoutingModule { }
