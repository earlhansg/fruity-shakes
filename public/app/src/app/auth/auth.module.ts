import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/share.module';

import { AuthRoutingModule } from './auth-routing.module';

import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthRoutingModule,
        SharedModule.forRoot()
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ]
})
export class AuthModule {}