import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '@app/auth/shared/services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {


  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${currentUser.token}` }
      });
    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if(error.status === 403 || error.status === 401) {
            this.authService.logout();
            this.router.navigateByUrl('auth/login');
            return throwError(error);
          }
          return throwError(error);
        })
      );
  }

}