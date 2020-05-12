import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { CallApiService } from '../callAPI/call-api.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language$ = new BehaviorSubject({});
  // language$ = new ReplaySubject(1);

  // API URL Domain name
  apiUrl = this.callApiService.apiUrl;

  // For Formal-site
  apiParameter = this.callApiService.apiParameter;
  apiLangParameter = this.callApiService.apiLangParameter;

  nowLangCode = '';
  regionProList = '';

  // get now Url path combination
  isUrlParameters = {
    protocol: window.location.protocol,
    host: window.location.host,
    path: window.location.pathname,
  };
  pathArr = this.isUrlParameters.path.split('/').filter(n => n);
  nowUrlPathlangCode = this.pathArr[0];

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


  constructor(private translateService: TranslateService, public callApiService: CallApiService) { }


  checkUrlPathLang(pathLang: string) {
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


  setInitState() {
    // add language
    this.translateService.addLangs(['en-US', 'en-GB', 'ja-JP', 'fr-FR', 'de-DE', 'zh-TW', 'zh-CN', 'ko-KR']);
    const checkBrowserLang = this.browserLangList[this.getBrowserLang] || 'en-US';

    // console.log('checkBrowserLang:', checkBrowserLang);
    this.setLang(checkBrowserLang);
  }

  setLang(lang: string) {
    this.translateService.onLangChange.pipe(take(1)).subscribe(result => {
      // console.log('result:', result);
      this.language$.next(result);
    });
    this.translateService.use(lang);
    return this.nowLangCode = lang;
  }

  setUrlPath(lang: string) {
    location.href = this.isUrlParameters.protocol + '//' + this.isUrlParameters.host + '/' + lang + this.isUrlParameters.path;
    // console.log('location.href :', location.href);
  }


  switchLang(lang: string) {

    // get now Url path combination
    const getNowUrlParameters = {
      protocol: window.location.protocol,
      host: window.location.host,
      path: window.location.pathname,
    };

    const isSelectLang = this.menuCheckBrowserLangList[lang];
    // console.log('switchLang isSelectLang => ', isSelectLang);

    let newPath = '';
    const oldPath = getNowUrlParameters.path;
    const pathArrRemoveLang = oldPath.split('/').filter(n => n).slice(1);
    pathArrRemoveLang.unshift(isSelectLang);
    newPath = pathArrRemoveLang.join('/');

    location.href = getNowUrlParameters.protocol + '//' + getNowUrlParameters.host + '/' + newPath;
    this.setLang(isSelectLang);


    // Call LangCode API 確認有沒有產品 導頁
    // {
    //   this.callApiService.get('https://web-api.xyzprinting.com/Apitob/PDListToB/' + this.nowLangCode).subscribe((res) => {
    //     // console.log('API lang region product res', res);
    //     if (!res) {
    //       // API Empty
    //       console.log(
    //         'API API lang region product response is empty no data'
    //       );
    //     } else {
    //       this.regionProList = res[0].ToBPDList.split(',');
    //       console.log('this.regionProList:', this.regionProList);
    //     }
    //   },
    //     (error) => {
    //       console.log('Error API langRegion product', error);
    //     }
    //   );
    // }

  }



}
