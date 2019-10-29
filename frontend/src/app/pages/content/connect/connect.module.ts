import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobotRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './components/connect.component';
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
import { ConnectService } from './services/connect.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConnectComponent],
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
    AuthGuard, ConnectService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ]
})
export class ConnectModule { }
