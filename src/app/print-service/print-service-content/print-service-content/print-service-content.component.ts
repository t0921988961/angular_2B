import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';

@Component({
  selector: 'app-print-service-content',
  templateUrl: './print-service-content.component.html',
  styleUrls: ['./print-service-content.component.scss']
})
export class PrintServiceContentComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  constructor(
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
  }

}
