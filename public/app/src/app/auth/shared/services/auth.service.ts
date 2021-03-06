import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

import { RestService } from '@shared/service';
import { HttpMethodEnum } from '@shared/enums';

const jwtHelper = new JwtHelperService();


@Injectable({ providedIn: 'root' })
export class AuthService extends RestService {

  url = '/user/login';


  constructor(
    http: HttpClient,
    @Inject('API_URL') protected baseUrl: string
  ) { super(http, baseUrl) }

  login(entryId: number): Observable<any> {
    return this.request(this.url, HttpMethodEnum.POST, {entryId});
  }

  logout(): void {
    localStorage.removeItem('currentUser')
  }

}