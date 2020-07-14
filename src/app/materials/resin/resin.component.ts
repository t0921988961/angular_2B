import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { ResizeService } from 'src/app/service/resize/resize.service';

@Component({
  selector: 'app-resin',
  templateUrl: './resin.component.html',
  styleUrls: ['./resin.component.scss']
})
export class ResinComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;

  constructor(
    public languageService: LanguageService,
    public resizeService: ResizeService
  ) { }

  ngOnInit() {
    this.resizeService.setInitDeviceSize(window.innerWidth);
  }

}