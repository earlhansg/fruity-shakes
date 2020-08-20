import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/auth/shared/share.module';

import { LoginComponent } from './container/login.component';

import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule {}