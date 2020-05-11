import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language/language.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public translateService: LanguageService) { }

  ngOnInit() {
  }

}
