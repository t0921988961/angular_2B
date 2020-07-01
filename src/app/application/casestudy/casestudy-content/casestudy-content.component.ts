import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/service/language/language.service';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';

@Component({
  selector: 'app-casestudy-content',
  templateUrl: './casestudy-content.component.html',
  styleUrls: ['./casestudy-content.component.scss']
})
export class CasestudyContentComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  // Set API
  apiUse = this.callApiService.checkSitePath();
  apiUseCaseStudy = this.apiUse.caseStudy;
  isCaseStudyListApiPath = this.callApiService.caseStudyApiUrl + this.apiUseCaseStudy + '/Appstudyurl/' + this.langCode + '/ ' + 'MfgPro230xS_TrySight';
  // isCaseStudyListApiPath = this.callApiService.caseStudyApiUrl + this.apiUseCaseStudy + '/StudyPd/' + this.langCode + 'MfgPro230xS_TrySight';

  apiCaseStudyContent$: Observable<any>;

  constructor(
    public languageService: LanguageService,
    public callApiService: CallApiService,
  ) { }

  ngOnInit(
  ) {
    // Call LangCode API
    this.apiCaseStudyContent$ = this.callApiService.get(this.isCaseStudyListApiPath, 'apiCaseStudyContent_API');
  }

}
