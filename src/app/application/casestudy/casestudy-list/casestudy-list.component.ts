import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-casestudy-list',
  templateUrl: './casestudy-list.component.html',
  styleUrls: ['./casestudy-list.component.scss']
})
export class CasestudyListComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  // Set API
  apiUse = this.callApiService.checkSitePath();
  apiUseCaseStudy = this.apiUse.caseStudy;
  isCaseStudyListApiPath = this.callApiService.caseStudyApiUrl + this.apiUseCaseStudy + '/Appstudy/' + this.langCode;

  apiCaseStudyList$: Observable<any>;

  constructor(
    public languageService: LanguageService,
    public callApiService: CallApiService,
  ) { }

  ngOnInit() {
    // Call LangCode API
    this.apiCaseStudyList$ = this.callApiService.get(this.isCaseStudyListApiPath, 'CaseStudyList_API');
  }

}
