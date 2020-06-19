import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';

@Component({
  selector: 'app-partpro300-x-t',
  templateUrl: './partpro300-x-t.component.html',
  styleUrls: ['./partpro300-x-t.component.scss']
})
export class Partpro300XTComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
