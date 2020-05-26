import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../service/language/language.service';
import { SwiperOptions } from 'swiper';
import { ResizeService } from '../service/resize/resize.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public translateService: LanguageService,
    public translate: TranslateService,
    public resizeService: ResizeService,
  ) { }

  // swiper slider config
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true, },
    direction: 'horizontal', //  竖屏 vertical  、 横屏 horizontal
    initialSlide: 0,
    slidesPerView: 'auto',
    autoHeight: true,
    watchSlidesVisibility: true,
    // spaceBetween: 30,
    loop: true,
    parallax: true,
    speed: 300,
    grabCursor: true, //  抓手光标
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false, // false: 触碰后自动切换也不会停止
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  bannerLists = null;

  ngOnInit() {
    this.translate.instant('contact.title');

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
        title: 'partpro200xTCS.banner.title',
        desc: 'partpro200xTCS.banner.desc',
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
        productName: 'index.banner2.productName',
        title: 'index.banner2.title',
        desc: '',
        moreBtn_link: '/' + this.translateService.nowLangCode + '/product/SLS/MfgPro230_xS',
        moreBtn_text: '',
        otherBtn_link: '',
        otherBtn_text: '',
      },
    ];
  }

}
