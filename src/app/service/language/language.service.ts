import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { ReplaySubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language$ = new BehaviorSubject({});
  // language$ = new ReplaySubject(1);

  nowLangCode = '';
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


  constructor(private translateService: TranslateService) { }


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
    const urlParameters = {
      protocol: window.location.protocol,
      host: window.location.host,
      path: window.location.pathname,
    };

    location.href = urlParameters.protocol + '//' + urlParameters.host + '/' + lang + urlParameters.path;
    console.log('location.href :', location.href);
  }


  switchLang(lang: string) {
    const browserLangList = {
      'US-English': 'en-US',
      'EU-English': 'en-GB',
      '日本-日本語': 'ja-JP',
      'FR-French': 'fr-FR',
      'DE-Germany': 'de-DE',
      '台灣-繁體中文': 'zh-TW',
      '中国-简体中文': 'zh-CN',
      'KR-한국어': 'ko-KR',
    };
    const isSelectLang = browserLangList[lang];
    console.log('switchLang isSelectLang => ', isSelectLang);
    const urlParameters = {
      protocol: window.location.protocol,
      host: window.location.host,
      path: window.location.pathname,
    };

    let newPath = '';
    const oldPath = urlParameters.path;
    const pathArrRemoveLang = oldPath.split('/').filter(n => n).slice(1);
    pathArrRemoveLang.unshift(isSelectLang);
    newPath = pathArrRemoveLang.join('/');

    location.href = urlParameters.protocol + '//' + urlParameters.host + '/' + newPath;
    this.setLang(isSelectLang);
  }



}
