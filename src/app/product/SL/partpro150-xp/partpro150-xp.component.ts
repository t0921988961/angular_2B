import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';

@Component({
  selector: 'app-partpro150-xp',
  templateUrl: './partpro150-xp.component.html',
  styleUrls: ['./partpro150-xp.component.scss']
})
export class Partpro150XpComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}

