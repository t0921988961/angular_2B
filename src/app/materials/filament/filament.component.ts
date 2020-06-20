import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { ScrollToAnimationEasing, ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-filament',
  templateUrl: './filament.component.html',
  styleUrls: ['./filament.component.scss']
})
export class FilamentComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
