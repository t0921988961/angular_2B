import { Component, OnInit } from '@angular/core';

// ngx-translate service
import { LanguageService } from 'src/app/service/language/language.service';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  langs = ['en-US', 'en-GB', 'ja-JP', 'fr-FR', 'de-DE', 'zh-TW', 'zh-CN', 'ko-KR'];

  constructor(public translateService: LanguageService) {

  }

  ngOnInit() {
    const urlParameters = {
      protocol: window.location.protocol,
      host: window.location.host,
      path: window.location.pathname,
    };

    const pathArr = urlParameters.path.split('/').filter(n => n);
    console.log('pathArr:', pathArr[0]);
    const pathLang = pathArr[0];

    this.translateService.checkUrlPathLang(pathLang);

    // this.translateService.setInitState();
    console.log('this.languageService.translate.currentLang:', this.translateService.translate.currentLang);
  }

  changeLanguage(lang: string) {
    // this.translateService.use(lang);
    // const hello = this.translateService.instant('Hello');
    // console.log('hello:', hello);
  }

}
