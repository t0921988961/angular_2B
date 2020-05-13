import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language/language.service';
import { SwiperOptions } from 'swiper';
import { ResizeService } from '../service/resize/resize.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public translateService: LanguageService, public resizeService: ResizeService) { }

  // swiper slider config
  config: SwiperOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    parallax: true,
    speed: 600,
    autoplay: {
      delay: 5000,
    },
    pagination: { el: '.swiper-pagination', clickable: true, },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };

  bannerLists = null;

  ngOnInit() {
    this.bannerLists = [
      //  Major Banner
      {
        region: ['en-US', 'en-GB', 'fr-FR', 'de-DE', 'ja-JP', 'zh-TW', 'zh-CN', 'ko-KR'],
        bgImg: 'https://xyzwebsite.blob.core.windows.net/b2b-landing/renew-b2b-20190902/index/banner/banner_Covid_',
        bgImgFormat: '.jpg',
        img: '',
        video: '',
        video_bg: '',
        productName: '',
        title: '',
        desc: '',
        moreBtn_link: 'mailto:info_Pro@@xyzprinting.com?subject=COVID-19 Enquiry&body=Hello',
        moreBtn_text: '',
        otherBtn_link: '',
        otherBtn_text: '',
      },
      {
        region: ['en-US', 'en-GB', 'fr-FR', 'de-DE', 'ja-JP', 'zh-TW', 'zh-CN', 'ko-KR', 'th-TH'],
        bgImg: '',
        bgImgFormat: '',
        img: '',
        video: 'https://xyzwebsite.blob.core.windows.net/b2b-landing/renew-b2b-20190902/index/video/2B_Support.mp4',
        video_bg: 'https://xyzwebsite.blob.core.windows.net/b2b-landing/renew-b2b-20190902/index/video/2B_Support.png',
        productName: '',
        title: '"partpro200xTCS.banner.title"|translate',
        desc: '"partpro200xTCS.banner.desc"|translate',
        moreBtn_link: '',
        moreBtn_text: '',
        otherBtn_link: '',
        otherBtn_text: '',
      },
      {
        region: ['en-US', 'en-GB', 'fr-FR', 'de-DE', 'ja-JP', 'zh-TW', 'zh-CN', 'ko-KR', 'th-TH'],
        bgImg: 'https://xyzwebsite.blob.core.windows.net/b2b-landing/renew-b2b-20190902/index/banner/banner_230_bg_',
        bgImgFormat: '.jpg',
        img: 'https://xyzwebsite.blob.core.windows.net/b2b-landing/renew-b2b-20190902/index/banner/banner_230.png',
        video: '',
        video_bg: '',
        productName: '"index.banner2.productName"|translate',
        title: '"index.banner2.title"|translate',
        desc: '',
        moreBtn_link: '/' + this.translateService.nowLangCode + '/product/SLS/MfgPro230_xS',
        moreBtn_text: '',
        otherBtn_link: '',
        otherBtn_text: '',
      },
    ];
  }

}
