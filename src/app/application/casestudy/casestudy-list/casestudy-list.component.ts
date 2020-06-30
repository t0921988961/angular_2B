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
  // API URL Domain name
  apiUrl = this.callApiService.apiUrl;
  pathLang = this.languageService.nowUrlPathlangCode;
  // For Formal-site
  apiParameter = this.callApiService.apiParameter;
  apiLangParameter = this.callApiService.apiLangParameter;

  apiCaseStudyList$: Observable<any>;

  constructor(
    public languageService: LanguageService,
    public callApiService: CallApiService,
  ) { }

  ngOnInit() {

    const isCaseStudyListApiPath = 'https://web-api.xyzprinting.com/Apitob/Appstudy/' + this.langCode;
    console.log('isCaseStudyListApiPath:', isCaseStudyListApiPath);
    // Call LangCode API
    this.apiCaseStudyList$ = this.callApiService.get(isCaseStudyListApiPath, 'CaseStudyList_API');
  }

}
