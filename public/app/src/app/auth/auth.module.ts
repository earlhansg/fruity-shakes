import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// module
import { SharedModule } from './shared/share.module';
// routing 
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthRoutingModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule {}