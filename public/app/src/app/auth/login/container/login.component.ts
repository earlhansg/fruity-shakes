import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of, ReplaySubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { AuthService } from '@app/auth/shared/services/auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  error$: Observable<string>;


  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  onSubmittedForm(entryId: string): void {
    this.authService
      .login(parseInt(entryId, 10))
      .pipe(
        tap(user => localStorage.setItem('currentUser', JSON.stringify(user))),
        takeUntil(this.destroyed$)
      )
      .subscribe(
        () => this.router.navigateByUrl('order'),
        ({error}) => this.error$ = of(error.message)
      )
  }

}
