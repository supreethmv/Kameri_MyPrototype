import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter.routing';
import { StarterComponent } from './components/starter.component';
import { AuthGuard } from '../../../awccore/auth/guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../../../awccore/auth/interceptors/token-interceptor.service';
import { StarterService } from './services/starter.service';
import {
  NbButtonModule,
  NbCardModule, 
} from '@nebular/theme';

@NgModule({
  declarations: [StarterComponent],
  imports: [
    CommonModule,
    StarterRoutingModule,
    NbButtonModule,
    NbCardModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, StarterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ]
})
export class StarterModule { }
