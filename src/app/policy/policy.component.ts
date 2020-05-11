import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language/language.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  constructor(public translateService: LanguageService) { }

  ngOnInit() {
  }

}
