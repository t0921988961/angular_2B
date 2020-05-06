import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(
    public http: HttpClient,
    public httpBackend: HttpBackend,
    private httpWithoutInterceptor: HttpClient,
  ) {
    // this.httpWithoutInterceptor = new HttpClient(httpBackend);
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

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${path}`,
      JSON.stringify(body),
    ).pipe(catchError(this.formatErrors));
  }

  runs() { console.log('CallApiService'); }


}
