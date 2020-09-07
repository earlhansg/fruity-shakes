import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RestService } from '@shared/service';
// enum
import { HttpMethodEnum } from '@shared/enums';
// model
import { Order } from '@order/shared/models/order.model';

@Injectable({ providedIn: 'root' })
export class SnackService extends RestService {
  url = '/snack';

  constructor(http: HttpClient,
              @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

  getSnacks(): Observable<Order[]> {
    return this.request(this.url, HttpMethodEnum.GET); 
  }

}