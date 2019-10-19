import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { AuthGuard } from '../awccore/auth/guards/auth.guard';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  canActivateChild: [AuthGuard],
  children: [
    {
      path: 'starter',
      loadChildren: () => import('./content/starter/starter.module')
        .then(m => m.StarterModule),
    },
    {
      path: 'robot',
      loadChildren: () => import('./content/robot/robot.module')
        .then(m => m.RobotModule),
    },
    // {
    //   path: 'usermanagement',
    //   loadChildren: () => import('./admin/usermanagement/usermanagement.module')
    //     .then(m => m.UsermanagementModule),
    // },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
