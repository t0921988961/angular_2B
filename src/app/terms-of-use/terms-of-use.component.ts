import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language/language.service';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss']
})
export class TermsOfUseComponent implements OnInit {

  constructor(public translateService: LanguageService) { }

  ngOnInit() {
  }

}
