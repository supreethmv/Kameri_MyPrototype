import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { UsermanagementRoutingModule } from './usermanagement.routing';
import { UsermanagementComponent } from './components/list/usermanagement.component';
import { AuthGuard } from '../../../awccore/auth/guards/auth.guard';
import { RoleGuard } from '../../../awccore/auth/guards/role.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../../awccore/auth/interceptors/token-interceptor.service';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbSelectModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsermanagementService } from './services/usermanagement.service';
import { UsermanagementDetailComponent } from './components/detail/usermanagement-detail.component';
import { UsermanagementCreateComponent } from './components/create/usermanagement-create.component';


@NgModule({
  declarations: [UsermanagementComponent, UsermanagementDetailComponent, UsermanagementCreateComponent],
  imports: [
    CommonModule,
    UsermanagementRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbCheckboxModule,
    HttpClientModule,
    NbAlertModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbSelectModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard, RoleGuard, UsermanagementService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },  
  ]
})
export class UsermanagementModule { }
