import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';

@Component({
  selector: 'app-multicure180',
  templateUrl: './multicure180.component.html',
  styleUrls: ['./multicure180.component.scss']
})
export class Multicure180Component implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
