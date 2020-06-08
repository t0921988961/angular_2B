import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LanguageService } from '../service/language/language.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  cssStyleLangFontFamily = '';

  constructor(public translateService: LanguageService, public changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('layout.component.html:');
    this.cssStyleLangFontFamily = 'lang-' + this.translateService.nowLangCode;
    console.log('this.translateService.nowLangCode:', this.translateService.nowLangCode);

    this.changeDetector.detectChanges();
  }

}
