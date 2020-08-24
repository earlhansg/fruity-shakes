import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// modules 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// components 
import { HeaderComponent } from './components/header/header.component';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
    declarations: [
        HeaderComponent,
        OrderListComponent
    ],
    exports: [
        HeaderComponent,
        OrderListComponent
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