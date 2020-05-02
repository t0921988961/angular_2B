import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language$ = new ReplaySubject(1);
  translate = this.translateService;

  constructor(private translateService: TranslateService) { }

  setInitState() {
    // add language
    this.translateService.addLangs(['en-US', 'en-GB', 'ja-JP', 'fr-FR', 'de-DE', 'zh-TW', 'zh-CN', 'ko-KR']);
    console.log('this.translateService.addLangs:', this.translateService.addLangs);

    // 抓取瀏覽器語系
    const browserLang = this.translate.getBrowserCultureLang();

    // 比對語系物件
    const browserLangList = {
      'en-US': 'en-US',
      'en-GB': 'en-GB',
      'ja-JP': 'ja-JP',
      'fr-FR': 'fr-FR',
      'de-DE': 'de-DE',
      'zh-TW': 'zh-TW',
      'zh-CN': 'zh-CN',
      'ko-KR': 'ko-KR',

    };
    const checkBrowserLang = browserLangList[browserLang] || 'en-US';


    console.log('checkBrowserLang:', checkBrowserLang);
    this.setLang(checkBrowserLang);
  }

  setLang(lang: string) {
    this.translateService.onLangChange.pipe(take(1)).subscribe(result => {
      this.language$.next(result);
    });
    this.translateService.use(lang);
    console.log('lang:', lang);

  }

  runs() {
    console.log('this.translate.getBrowserCultureLang()=>', this.translate.getBrowserCultureLang());
  }
}
