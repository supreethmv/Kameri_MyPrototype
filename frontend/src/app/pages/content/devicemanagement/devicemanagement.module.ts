import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceManagementRoutingModule } from './devicemanagement-routing.module';
import { DeviceManagementComponent } from './components/devicemanagement.component';
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
import { DeviceManagementService } from './services/devicemanagement.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DeviceManagementComponent],
  imports: [
    CommonModule,
    DeviceManagementRoutingModule,
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
    AuthGuard, DeviceManagementService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ]
})
export class DeviceManagementModule { }
