import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';

@Component({
  selector: 'app-mfgpro230-x-s',
  templateUrl: './mfgpro230-x-s.component.html',
  styleUrls: ['./mfgpro230-x-s.component.scss']
})
export class Mfgpro230XSComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
