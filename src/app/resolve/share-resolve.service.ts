import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from '../service/language/language.service';
import { CallApiService } from '../service/callAPI/call-api.service';


@Injectable({
  providedIn: 'root'
})
export class ResolveService {

  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
    public callApiService: CallApiService,
  ) {
  }


  // Set case study lists API
  apiUse = this.callApiService.checkSitePath();
  apiUseCaseStudy = this.apiUse.caseStudy;
  isCaseStudyListApiPath = this.callApiService.caseStudyApiUrl + this.apiUseCaseStudy + '/Appstudy/' + this.languageService.nowLangCode;

  resolve(
    route: ActivatedRouteSnapshot,
    rstate: RouterStateSnapshot
  ): Observable<any> {
    // console.log('this.http:', this.http);
    return this.http.get(this.isCaseStudyListApiPath);
  }


}
