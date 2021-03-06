import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {

  @Input()
  errorMessage: string;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();

  userForm: FormGroup = new FormGroup({ entryId: new FormControl() });


  constructor() { }

  onFormSubmit(): void {
    this.submitted.next(this.userForm.get('entryId').value);
    this.userForm.reset();
  }

}
