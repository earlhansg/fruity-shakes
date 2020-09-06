import { Component } from '@angular/core';
import { Router } from "@angular/router";
// service
import { AuthService } from '@app/auth/shared/services/auth.service';
// rxjs
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {
  error: Observable<string>;
  
  constructor(private authService: AuthService,
              private router: Router) {}

  onSubmittedForm(event) {
    this.authService.login(parseInt(event))
      .subscribe((user) => {
        this.router.navigateByUrl('order');
      },(msg) => this.error = of(msg.error))
  }

}