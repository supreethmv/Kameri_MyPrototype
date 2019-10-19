import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobotRoutingModule } from './robot-routing.module';
import { RobotComponent } from './components/robot.component';
import { AuthGuard } from '../../../awccore/auth/guards/auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from '../../../awccore/auth/interceptors/token-interceptor.service';
import {
  NbButtonModule,
  NbCardModule,
  NbAlertModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbSelectModule,
} from '@nebular/theme';
import { RobotService } from './services/robot.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RobotComponent],
  imports: [
    CommonModule,
    RobotRoutingModule,
    NbButtonModule,
    NbCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NbAlertModule,
    NbCheckboxModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbSelectModule,

  ],
  providers: [
    AuthGuard, RobotService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ]
})
export class RobotModule { }
