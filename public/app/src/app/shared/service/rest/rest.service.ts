import { HttpClient } from '@angular/common/http';
// rxjs
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// enum 
import { HttpMethodEnum } from '@app/shared/enums';


export abstract class RestService {

  constructor(private http: HttpClient,
              protected baseUrl: string) {}

  protected request(relativeUrl: string, method: HttpMethodEnum, data?: any): Observable<any> {
    const url     = this.baseUrl + relativeUrl;

    return this.http.post(url, data)
      .pipe(catchError(err => throwError(err)));
  }

}