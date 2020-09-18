import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '@app/auth/shared/share.module';

import { LoginComponent } from './container/login.component';

import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule {}