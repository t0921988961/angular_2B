import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';

@Component({
  selector: 'app-partpro200-x-tcs',
  templateUrl: './partpro200-x-tcs.component.html',
  styleUrls: ['./partpro200-x-tcs.component.scss']
})
export class Partpro200XTCSComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
