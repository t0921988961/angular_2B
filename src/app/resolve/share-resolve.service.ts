import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any> {

  constructor(
    private http: HttpClient
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<any> {
    console.log('Hello resolveService', route);
    return this.http.get('https://web-api.xyzprinting.com/Apitesttob/Appstudy/en-US');
  }

}
