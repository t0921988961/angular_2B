import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';

@Component({
  selector: 'app-partpro100-x-p',
  templateUrl: './partpro100-x-p.component.html',
  styleUrls: ['./partpro100-x-p.component.scss']
})
export class Partpro100XPComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
