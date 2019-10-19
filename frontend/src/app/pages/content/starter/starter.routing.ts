import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './components/starter.component';
import { AuthGuard } from '../../../awccore/auth/guards/auth.guard'


const routes: Routes = [
  {
    path: '',
    component: StarterComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
