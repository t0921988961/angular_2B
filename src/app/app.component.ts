import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  langs = ['zh-TW', 'en-US', 'ja-JP'];

  helloNames = { helloName: 'Luke' };

  urlParameters = {
    protocol: window.location.protocol,
    host: window.location.host,
    path: window.location.pathname,
    acceptLanguge: window.navigator.language
  };

  constructor(public translateService: TranslateService) {
    // this.translateService.setTranslation('zh-TW', {
    //   Hello: '哈囉'
    // });
    // this.translateService.setTranslation('en-US', {
    //   Hello: 'Hello Hello'
    // });
    // this.translateService.setTranslation('ja-JP', {
    //   Hello: 'やあ やあ'
    // });
  }

  ngOnInit(): void {
    this.translateService.use('zh-TW');
    console.log('window.navigator.language => ' + window.navigator.language);
    location.href =
      this.urlParameters.protocol + '//' + this.urlParameters.host + '/' + '#/' + this.urlParameters.acceptLanguge;
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    const hello = this.translateService.instant('Hello');
    console.log('hello:', hello);
  }
}
