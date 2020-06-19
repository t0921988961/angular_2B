import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  // API URL Domain name
  apiUrl = 'https://web-api.xyzprinting.com/Gw/Cache/Website/';

  // For Formal-site
  allApiFormalSite = {
    apiHead: 'Exp',
    apiLangParameter: 'Cfg',
    caseStudy: 'api',
  };

  // For Test-site
  allApiTestSite = {
    apiHead: 'ExpTest',
    apiLangParameter: 'CfgTest',
    caseStudy: 'apitest',
  };

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
    return throwError(
      console.log('error:', error)
    );
  }

  get(path: string, apiName: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${path}`, { params })
      .pipe(
        catchError((err) => {
          console.log(apiName + ' Err: ', '**********', err);
          // this.formatErrors;
          // return throwError(() => { });  // observable line stop
          return of(() => { }); // observable line keep work, and can set 預設的資料
        })
      );
  }

  // tslint:disable-next-line:ban-types
  put(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${path}`,
      JSON.stringify(body),
    ).pipe(catchError(this.formatErrors));
  }



}
