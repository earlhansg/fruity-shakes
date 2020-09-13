import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// component
import { AuthFormComponent } from './components/auth-form/auth-form.component';
// service
import { AuthService } from './services/auth.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [AuthFormComponent],
    exports: [AuthFormComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
          ngModule: SharedModule,
          providers: [AuthService]
        };
    }
}