import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { ResizeService } from 'src/app/service/resize/resize.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-casestudy-content',
  templateUrl: './casestudy-content.component.html',
  styleUrls: ['./casestudy-content.component.scss']
})

export class CasestudyContentComponent implements OnInit, OnDestroy {

  constructor(
    public languageService: LanguageService,
    public callApiService: CallApiService,
    public resizeService: ResizeService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
    // Use ResolveService *************************************
    this.route.data.subscribe((res) => {
      console.log(res.cres);
      this.listArray = res.cres;
    });

  }
  listArray;

  langCode = this.languageService.nowUrlPathlangCode;
  getUrlProductName = location.pathname.replace('/', '').split('/').pop();
  topBgImage = '';

  // Set API
  apiUse = this.callApiService.checkSitePath();
  apiUseCaseStudy = this.apiUse.caseStudy;
  isCaseStudyMainContentApiPath = this.callApiService.caseStudyApiUrl + this.apiUseCaseStudy + '/Appstudyurl/' + this.langCode + '/' + this.getUrlProductName;

  isCaseStudySeoMetaCssApiPath = this.callApiService.caseStudyApiUrl + this.apiUseCaseStudy + '/Seo/' + this.langCode + '?path=casestudy/' + this.getUrlProductName + '&url=' + 'https://pro.xyzprinting.com';

  isCaseStudyProductApiPath = '';

  oldHeadHTML = document.head.innerHTML;

  apiCaseStudyMainContent;
  apiCaseStudyMainContentObject = {
    desktopBarBg: null,
    mobileBarBg: null,
    barTitle: '',
    barContent: null,
    introduction: null,
    mainContent: null,
    bindProd: null,
    bindProdDownloadCaseStudy: null,
  };

  apiCaseStudySeo;

  apiCaseStudyProduct$: Observable<any>;

  ngOnInit(
  ) {

    // Call SEO API
    {
      this.apiCaseStudySeo = this.http.get(this.isCaseStudySeoMetaCssApiPath, { responseType: 'text' })
        .pipe(
          catchError((err) => {
            console.log('isCaseStudySeoMetaCssApiPath_API Err: ', '**********', err);
            return of(() => { });
          })
        )
        .subscribe(
          res => {
            console.log('apiCaseStudySeo res => ', res);
            document.head.innerHTML = this.oldHeadHTML + res;
          }
        );
    }

    // Call Main Content API
    {
      this.apiCaseStudyMainContent = this.http.get(this.isCaseStudyMainContentApiPath)
        .pipe(
          catchError((err) => {
            console.log('apiCaseStudyMainContent_API Err: ', '**********', err);
            return of(() => { });
          })
        )
        .subscribe(
          res => {
            const resArr = res[0];
            this.apiCaseStudyMainContentObject.barTitle = resArr.BarTitle;
            this.apiCaseStudyMainContentObject.barContent = resArr.BarContent;
            this.apiCaseStudyMainContentObject.bindProd = resArr.Bind;
            this.apiCaseStudyMainContentObject.bindProdDownloadCaseStudy = resArr.Download;
            this.apiCaseStudyMainContentObject.introduction = this.sanitizer.bypassSecurityTrustHtml(resArr.Introduction);
            this.apiCaseStudyMainContentObject.mainContent = this.sanitizer.bypassSecurityTrustHtml(resArr.Content);
            this.apiCaseStudyMainContentObject.desktopBarBg = this.sanitizer.bypassSecurityTrustStyle('url(' + resArr.Img_b + ')');
            this.apiCaseStudyMainContentObject.mobileBarBg = this.sanitizer.bypassSecurityTrustStyle('url(' + resArr.Img_s + ')');

            this.isCaseStudyProductApiPath = this.callApiService.caseStudyApiUrl + this.apiUseCaseStudy + '/StudyPd/' + this.langCode + '/' + this.apiCaseStudyMainContentObject.bindProd;

            this.callProduct();
          }
        );
    }

  }

  ngOnDestroy(): void {
    document.head.innerHTML = this.oldHeadHTML;
  }

  // Call related product API
  callProduct() {
    this.apiCaseStudyProduct$ = this.callApiService.get(this.isCaseStudyProductApiPath, 'isCaseStudyProductApiPath');
  }

}
