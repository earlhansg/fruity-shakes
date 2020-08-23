import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// modules 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// components 
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
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