import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RestService } from '@shared/service';

import { HttpMethodEnum } from '@shared/enums';

import { Order } from '@app/order/shared/models/order.model';


@Injectable({
  providedIn: 'root'
})
export class ShakeService extends RestService {

  url = '/shake';


  constructor(
    http: HttpClient,
    @Inject('API_URL') protected baseUrl: string
  ) { super(http, baseUrl) }

  getShakes(): Observable<Order[]> {
    return this.request(this.url, HttpMethodEnum.GET);
  }

}