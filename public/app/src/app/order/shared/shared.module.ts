import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// modules 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule} from '@angular/router';
// components 
import { HeaderComponent } from './components/header/header.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        OrderListComponent,
        CartComponent
    ],
    exports: [
        HeaderComponent,
        OrderListComponent,
        CartComponent
    ],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
          ngModule: SharedModule,
          providers: []
        };
    }
}