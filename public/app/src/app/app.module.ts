import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// routing
import { AppRoutingModule } from '@app/app-routing.module';
// module
import { AuthModule } from '@app/auth/auth.module';
import { OrderModule } from '@app/order/order.module';
// component
import { AppComponent } from '@app/app.component';
// environtment
import { environment } from '@root/environments/environment';

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
  providers: [
    { provide: 'API_URL', useValue: environment.apiUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
