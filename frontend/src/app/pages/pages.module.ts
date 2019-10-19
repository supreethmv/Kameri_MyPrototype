import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { StarterModule } from './content/starter/starter.module';
import { UsermanagementModule } from './admin/usermanagement/usermanagement.module';
import { RoleGuard } from '../awccore/auth/guards/role.guard';
import { AuthGuard } from '../awccore/auth/guards/auth.guard';
import { RobotModule } from './content/robot/robot.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    StarterModule,
    RobotModule,
    UsermanagementModule
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [RoleGuard, AuthGuard]
})
export class PagesModule {
}
