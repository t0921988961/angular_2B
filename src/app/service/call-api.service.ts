import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  // private httpWithoutInterceptor: HttpClient;

  constructor(
    // public http: HttpClient,
    // public httpBackend: HttpBackend
  ) {
    // this.httpWithoutInterceptor = new HttpClient(httpBackend);
  }

  // private formatErrors(error: any) {
  //   return throwError(error.error);
  // }

  // get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
  //   return this.http.get(`${path}`, { params })
  //     .pipe(catchError(this.formatErrors));
  // }

  runs() { console.log('CallApiService'); }


}
