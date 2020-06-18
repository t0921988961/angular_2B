import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';

@Component({
  selector: 'app-partpro120-x-p',
  templateUrl: './partpro120-x-p.component.html',
  styleUrls: ['./partpro120-x-p.component.scss']
})
export class Partpro120XPComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
