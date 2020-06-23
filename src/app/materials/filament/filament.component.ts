import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language/language.service';
import { ResizeService } from 'src/app/service/resize/resize.service';


@Component({
  selector: 'app-filament',
  templateUrl: './filament.component.html',
  styleUrls: ['./filament.component.scss']
})

export class FilamentComponent implements OnInit {

  langCode = this.languageService.nowUrlPathlangCode;
  isScrollOffset = '';

  constructor(
    public languageService: LanguageService,
    private resizeService: ResizeService
  ) { }

  ngOnInit() {
    this.isScrollOffset = this.resizeService.setScrollOffset();
    console.log('this.isScrollOffset:', this.isScrollOffset);
  }

}
