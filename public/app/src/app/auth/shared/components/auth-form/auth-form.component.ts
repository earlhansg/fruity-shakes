import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: [ './auth-form.component.scss' ]
})
export class AuthFormComponent {
@Input()
errorMessage: Observable<string>;

@Output()
submitted: EventEmitter<any> = new EventEmitter<any>();

userForm: FormGroup = new FormGroup({ entryId: new FormControl() });
constructor() {}

onFormSubmit(): void {
    this.submitted.next(this.userForm.get('entryId').value);
    this.userForm.reset();
}

}