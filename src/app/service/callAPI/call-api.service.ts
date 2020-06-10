import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  // API URL Domain name
  apiUrl = 'https://web-api.xyzprinting.com/Gw/Cache/Website/';

  // For Formal-site
  apiParameter = 'Exp';
  apiLangParameter = 'Cfg';

  // For Test-site
  // apiParameter = 'ExpTest';
  // apiLangParameter = 'CfgTest';


  constructor(
    public http: HttpClient,
    public httpBackend: HttpBackend,
    private httpWithoutInterceptor: HttpClient,
  ) {
  }

  // catch API error and return Observable let keep for Subscribe
  // Retries the caught source Observable again in case of error, similar to retry() operator
  private formatErrors(error: any) {
    return throwError(error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  // tslint:disable-next-line:ban-types
  put(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${path}`,
      JSON.stringify(body),
    ).pipe(catchError(this.formatErrors));
  }



}
