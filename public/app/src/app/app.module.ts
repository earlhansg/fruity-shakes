import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// routing
import { AppRoutingModule } from '@app/app-routing.module';
// module
import { AuthModule } from '@app/auth/auth.module';
import { OrderModule } from '@app/order/order.module';
// component
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
