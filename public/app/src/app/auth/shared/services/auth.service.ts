import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';

import { RestService } from '@shared/service';
import { HttpMethodEnum } from '@shared/enums';

@Injectable({ providedIn: 'root' })
export class AuthService extends RestService {
  url = '/user/login';

  constructor(http: HttpClient,
              @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

  login(entryId: number): Observable<any> {
    return this.request(this.url, HttpMethodEnum.POST, {entryId}); 
  }

}