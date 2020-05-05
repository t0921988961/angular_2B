import { Component, OnInit } from '@angular/core';

// ngx-translate service
import { LanguageService } from 'src/app/service/language/language.service';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  mobile_mode = window.innerWidth < 736 ? true : false;
  currentLang = 'currentLang';
  showLang = false;

  langs = ['US-English', 'EU-English', '日本-日本語', 'FR-French', 'DE-Germany', '台灣-繁體中文', '中国-简体中文', 'KR-한국어'];

  constructor(public translateService: LanguageService) {

  }

  ngOnInit() {
    console.log('mobile_mode => ', this.mobile_mode);
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
