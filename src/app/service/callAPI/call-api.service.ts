import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  // API URL Domain name
  apiUrl = 'https://web-api.xyzprinting.com/Gw/Cache/Website/';
  caseStudyApiUrl = 'https://web-api.xyzprinting.com/';

  // For Formal-site
  allApiFormalSite = {
    apiHead: 'Exp',
    apiLangParameter: 'Cfg',
    caseStudy: 'apitob',
  };

  // For Test-site
  allApiTestSite = {
    apiHead: 'ExpTest',
    apiLangParameter: 'CfgTest',
    caseStudy: 'apitesttob',
  };

  constructor(
    public http: HttpClient,
    public httpBackend: HttpBackend,
    private httpWithoutInterceptor: HttpClient,
  ) {
  }

  checkSitePath() {
    const nowLoactionHostname = location.hostname;
    const isFormalSite = nowLoactionHostname === 'pro.xyzprinting.com';
    const isTestSite = nowLoactionHostname === 'pro-sg.xyzprinting.com';

    // return Formal-site API
    if (isFormalSite) {
      // console.log('isFormalSite:', isFormalSite);
      return this.allApiFormalSite;
    }

    // return Test-site API
    if (isTestSite) {
      // console.log('isTestSite:', isTestSite);
      return this.allApiTestSite;
    }

    // return local-site API
    // console.log('Is local-site');
    // return allApiTestSite;
    return this.allApiFormalSite;
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
        share(),
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
