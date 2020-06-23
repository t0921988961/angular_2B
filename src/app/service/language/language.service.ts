import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { CallApiService } from '../callAPI/call-api.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language$ = new BehaviorSubject({});
  // language$ = new ReplaySubject(1);

  nowLangCode = '';

  isLocalHost = '';
  isGitHost = '';

  // get now Url path combination
  isUrlParameters = {
    protocol: window.location.protocol,
    host: window.location.host,
    path: window.location.pathname,
  };

  pathArr = this.isUrlParameters.path.split('/').filter(n => n);
  nowUrlPathlangCode = this.pathArr[0] === 'angular_2B' ? this.pathArr[1] : this.pathArr[0];
  isGithubWindowPath = this.pathArr.filter(n => n !== 'angular_2B').join('/');

  translate = this.translateService;
  getBrowserLang = this.translate.getBrowserCultureLang();

  browserLangList = {
    'en-US': 'en-US',
    'en-GB': 'en-GB',
    'ja-JP': 'ja-JP',
    'fr-FR': 'fr-FR',
    'de-DE': 'de-DE',
    'zh-TW': 'zh-TW',
    'zh-CN': 'zh-CN',
    'ko-KR': 'ko-KR',
  };

  menuShowLangList = {
    'en-US': 'US-English',
    'en-GB': 'EU-English',
    'ja-JP': '日本-日本語',
    'fr-FR': 'FR-French',
    'de-DE': 'DE-Germany',
    'zh-TW': '台灣-繁體中文',
    'zh-CN': '中国-简体中文',
    'ko-KR': 'KR-한국어',
  };

  menuCheckBrowserLangList = {
    'US-English': 'en-US',
    'EU-English': 'en-GB',
    '日本-日本語': 'ja-JP',
    'FR-French': 'fr-FR',
    'DE-Germany': 'de-DE',
    '台灣-繁體中文': 'zh-TW',
    '中国-简体中文': 'zh-CN',
    'KR-한국어': 'ko-KR',
  };

  constructor(
    private router: Router,
    private translateService: TranslateService,
    public callApiService: CallApiService,
  ) {
    // console.log('LanguageService.ts => LanguageService constructor work');
  }


  checkUrlPathLang(pathLang: string) {
    console.log('%c LanguageService.ts => LanguageService work', 'color:#aab524;');


    // add language
    this.translateService.addLangs(['en-US', 'en-GB', 'ja-JP', 'fr-FR', 'de-DE', 'zh-TW', 'zh-CN', 'ko-KR']);

    if (this.browserLangList[pathLang]) {
      // 網址有語系
      // 設定語系成網址的語系
      const browserHaveLang = this.browserLangList[pathLang];
      this.setLang(browserHaveLang);

    } else {
      // 網址沒有語系
      // 抓取瀏覽器語系
      // 設定語系成網址的語系
      // 網址加入語系
      const checkBrowserLang = this.browserLangList[this.getBrowserLang] || 'en-US';
      this.setLang(checkBrowserLang);
      this.setUrlPath(checkBrowserLang);
    }

  }

  setLang(lang: string) {
    this.translateService.onLangChange.pipe(take(1)).subscribe(result => {
      this.language$.next(result);
    });
    this.translateService.use(lang);
    return this.nowLangCode = lang;
  }

  setUrlPath(lang: string) {
    const formalSitePath = this.isUrlParameters.protocol + '//' + this.isUrlParameters.host + '/' + lang + this.isUrlParameters.path;
    // tslint:disable-next-line:max-line-length
    const githubPageUrl = this.isUrlParameters.protocol + '//' + this.isUrlParameters.host + '/angular_2B/' + lang + this.isGithubWindowPath;
    const isGithubPages = this.pathArr[0] === 'angular_2B';
    if (isGithubPages) { return location.href = githubPageUrl; }
    return location.href = formalSitePath;
  }

  switchLang(lang: string) {

    let newPath = '';
    // get now Url path combination
    const getNowUrlParameters = this.isUrlParameters;
    const isSelectLang = this.menuCheckBrowserLangList[lang];
    const oldPath = getNowUrlParameters.path;

    const isGithubPage = oldPath.split('/').filter(n => n);

    const notGithubPagePath = this.router.url.split('/').filter(n => n).splice(1);
    notGithubPagePath.unshift(isSelectLang);
    newPath = notGithubPagePath.join('/');

    const formalOnline = getNowUrlParameters.protocol + '//' + getNowUrlParameters.host + '/' + newPath;
    console.log('newPath:', newPath);
    this.setLang(isSelectLang);
    // this.router.navigate([newPath]);
    location.href = formalOnline;

    // if is githubPage
    if (isGithubPage[0] === 'angular_2B') {
      const isNewGithubPath = this.router.url.split('/').filter(n => n);
      isNewGithubPath.unshift('angular_2B');
      isNewGithubPath.splice(1, 1, isSelectLang);
      const isGitNewPath = isNewGithubPath.join('/');
      const isNewGithubPagePath = getNowUrlParameters.protocol + '//' + getNowUrlParameters.host + '/' + isGitNewPath;
      // this.router.navigate([isGitNewPath]);
      location.href = isNewGithubPagePath;
    }

  }



}
