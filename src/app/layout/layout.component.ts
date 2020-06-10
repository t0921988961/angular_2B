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
    this.cssStyleLangFontFamily = 'lang-' + this.translateService.nowLangCode;

    this.changeDetector.detectChanges();
  }

}
