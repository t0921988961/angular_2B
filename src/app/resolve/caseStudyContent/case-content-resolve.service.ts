import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/service/language/language.service';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';

@Injectable({
  providedIn: 'root'
})
export class CaseContentResolveService {

  constructor(
    public callApiService: CallApiService,
    private http: HttpClient,
    private languageService: LanguageService,
  ) {
  }

  // Set API
  apiUse = this.callApiService.checkSitePath();
  apiUseCaseStudy = this.apiUse.caseStudy;
  getUrlProductName = location.pathname.replace('/', '').split('/').pop();

  // tslint:disable-next-line:max-line-length
  isCaseStudyMainContentApiPath = this.callApiService.caseStudyApiUrl + this.apiUseCaseStudy + '/Appstudyurl/' + this.languageService.nowLangCode + '/' + this.getUrlProductName;

  // tslint:disable-next-line:max-line-length
  isCaseStudySeoMetaCssApiPath = this.callApiService.caseStudyApiUrl + this.apiUseCaseStudy + '/Seo/' + this.languageService.nowLangCode + '?path=casestudy/' + this.getUrlProductName + '&url=' + 'https://pro.xyzprinting.com';


  resolve(
    route: ActivatedRouteSnapshot,
    rstate: RouterStateSnapshot
  ) {
    return [
      this.http.get(this.isCaseStudySeoMetaCssApiPath, { responseType: 'text' }),
      '陣列',
      this.http.get(this.isCaseStudyMainContentApiPath),
    ];
  }

}
