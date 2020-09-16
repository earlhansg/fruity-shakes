import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { SharedModule } from '@app/auth/shared/share.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// components
import { LoginComponent } from './container/login.component';
// routing
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