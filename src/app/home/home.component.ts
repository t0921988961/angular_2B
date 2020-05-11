import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language/language.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public translateService: LanguageService) { }

  // swiper slider config
  config: SwiperOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: { el: '.swiper-pagination', clickable: true, },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };

  ngOnInit() {
  }

}
