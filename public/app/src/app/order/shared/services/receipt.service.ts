import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RestService } from '@shared/service';

import { HttpMethodEnum } from '@shared/enums';

import { Receipt } from '@order/shared/models/receipt.model';


@Injectable({
  providedIn: 'root'
})
export class ReceiptService extends RestService {

  url = '/receipt';


  constructor(
    http: HttpClient,
    @Inject('API_URL') protected baseUrl: string
  ) { super(http, baseUrl) }

  addReceipt(body: Receipt): Promise<Receipt> {
    return this.request(this.url, HttpMethodEnum.POST, body).toPromise();
  }

}