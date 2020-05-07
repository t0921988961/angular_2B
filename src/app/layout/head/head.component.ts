import { Component, OnInit } from '@angular/core';

// ngx-translate service
import { LanguageService } from 'src/app/service/language/language.service';
// API service
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { ResizeService } from 'src/app/service/resize/resize.service';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {


  // tslint:disable-next-line:variable-name
  mobile_mode = window.innerWidth < 736 ? true : false;
  currentLang = 'currentLang';
  showLang = false;

  _menu_title = '';
  _menu_item_active = '';
  _sub_product_active = '';
  // tslint:disable-next-line:variable-name
  showSubMenu_mb = false;
  // tslint:disable-next-line:variable-name
  showMenu_mb = false;
  headMenuLists = null;

  langs = ['US-English', 'EU-English', '日本-日本語', 'FR-French', 'DE-Germany', '台灣-繁體中文', '中国-简体中文', 'KR-한국어'];


  constructor(public translateService: LanguageService, public callApiService: CallApiService, public reizeService: ResizeService) {
  }



  ngOnInit() {

    const urlParameters = {
      protocol: window.location.protocol,
      host: window.location.host,
      path: window.location.pathname,
    };
    const pathArr = urlParameters.path.split('/').filter(n => n);
    const pathLang = pathArr[0];


    this.translateService.checkUrlPathLang(pathLang);

    // set device size
    const appInitWindowWidth = window.innerWidth;
    this.reizeService.setInitDeviceSize(appInitWindowWidth);


    // Call Head API
    {
      this.callApiService.get('https://web-api.xyzprinting.com/Gw/Cache/Website/Exp/IndexToB/en-US/').subscribe((res) => {
        console.log(res);
        this.headMenuLists = res;
      },
        (error) => {
          console.log('Head_API', error);
        }
      );
    }

  }


  switchMenu(lang: string) {
  }

}
