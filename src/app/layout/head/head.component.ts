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
    // this.translateService.use('zh-TW');
    this.translateService.setInitState();
    this.translateService.runs();
    console.log('this.languageService.translate.currentLang:', this.translateService.translate.currentLang);
  }

  changeLanguage(lang: string) {
    // this.translateService.use(lang);
    // const hello = this.translateService.instant('Hello');
    // console.log('hello:', hello);
  }

}
