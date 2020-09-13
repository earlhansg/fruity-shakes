import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RestService } from '@shared/service';
import { HttpMethodEnum } from '@shared/enums';

import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();


@Injectable({ providedIn: 'root' })
export class AuthService extends RestService {
  url = '/user/login';

  constructor(http: HttpClient,
              @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

  login(entryId: number): Observable<any> {
    return this.request(this.url, HttpMethodEnum.POST, {entryId}); 
  }

  getToken(): string {
    let loggedUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = loggedUser && loggedUser.token;
    return token ? token : '';
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token != '' ? !jwtHelper.isTokenExpired(token) : false;
  }

  logout(): void {
    localStorage.removeItem('currentUser')
  }

}