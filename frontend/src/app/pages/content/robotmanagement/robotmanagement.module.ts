import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobotRoutingModule } from './robotmanagement-routing.module';
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
import { RobotManagementService } from './services/robotmanagement.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RobotManagementComponent } from './components/robotmanagement.component';

@NgModule({
  declarations: [RobotManagementComponent],
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
    AuthGuard, RobotManagementService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ]
})
export class RobotManagementModule { }
