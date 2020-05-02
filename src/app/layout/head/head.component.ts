import { Component, OnInit } from '@angular/core';


// ngx-translate
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  langs = ['zh-TW', 'en-US', 'ja-JP'];

  constructor(private translateService: TranslateService) {

  }

  ngOnInit() {
    this.translateService.use('zh-TW');
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    const hello = this.translateService.instant('Hello');
    console.log('hello:', hello);
  }

}
