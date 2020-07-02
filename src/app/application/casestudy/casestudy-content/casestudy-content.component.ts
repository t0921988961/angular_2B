import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/service/language/language.service';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { ResizeService } from 'src/app/service/resize/resize.service';

@Component({
  selector: 'app-casestudy-content',
  templateUrl: './casestudy-content.component.html',
  styleUrls: ['./casestudy-content.component.scss']
})
export class CasestudyContentComponent implements OnInit {

  constructor(
    public languageService: LanguageService,
    public callApiService: CallApiService,
    public resizeService: ResizeService,
  ) { }



  langCode = this.languageService.nowUrlPathlangCode;

  topBgImage = '';

  // Set API
  apiUse = this.callApiService.checkSitePath();
  apiUseCaseStudy = this.apiUse.caseStudy;
  isCaseStudyMainContentApiPath = this.callApiService.caseStudyApiUrl + this.apiUseCaseStudy + '/Appstudyurl/' + this.langCode + '/ ' + 'MfgPro230xS_TrySight';

  apiCaseStudyMainContent$: Observable<any>;

  ngOnInit(
  ) {
    console.log('this.resizeService.imgSize:', this.resizeService.imgSize);

    // Call LangCode API
    this.apiCaseStudyMainContent$ = this.callApiService.get(this.isCaseStudyMainContentApiPath, 'apiCaseStudyMainContent_API');
  }

  setBannerSize() {
    // tslint:disable-next-line: no-unused-expression
    this.resizeService.imgSize === 'lg' ? 'item.Img_b' : 'item.Img_s';
    // if (mobile_mode) {
    //   bgImage = mobileBarBg;
    // } else {
    //   bgImage = desktopBarBg;
    // }
  }

}
