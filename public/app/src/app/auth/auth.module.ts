import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// module 
import { SharedModule } from './shared/share.module';
// routing 
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AuthRoutingModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {}