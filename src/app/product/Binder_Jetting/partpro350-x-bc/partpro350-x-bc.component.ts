import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';


@Component({
  selector: 'app-partpro350-x-bc',
  templateUrl: './partpro350-x-bc.component.html',
  styleUrls: ['./partpro350-x-bc.component.scss']
})
export class Partpro350XBCComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit() {
  }

}
