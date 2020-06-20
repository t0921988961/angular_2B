import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';

@Component({
  selector: 'app-eeezcure180',
  templateUrl: './eeezcure180.component.html',
  styleUrls: ['./eeezcure180.component.scss']
})
export class Eeezcure180Component implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;


  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
