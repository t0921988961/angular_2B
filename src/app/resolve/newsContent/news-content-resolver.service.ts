import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class NewsContentResolverService implements Resolve<any> {

  apiNewsContentPath = 'https://pro.xyzprinting.com//getContentById/';


  constructor(
    private callApiService: CallApiService,
    private http: HttpClient,
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    const getNewsID = route.paramMap.get('id');
    return this.http.get(this.apiNewsContentPath + getNewsID);
  }
}
