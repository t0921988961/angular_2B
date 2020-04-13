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

  constructor(private translateService: TranslateService) {
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
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    const hello = this.translateService.instant('Hello');
    console.log('hello:', hello);
  }
}
