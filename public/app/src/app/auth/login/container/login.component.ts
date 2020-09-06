import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {
  error: Observable<string>;
  
  constructor() {}

  onSubmittedForm(event) {
    console.log('login form', event);
  }

}