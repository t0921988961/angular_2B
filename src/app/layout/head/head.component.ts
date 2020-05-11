import { Component, OnInit, Output } from '@angular/core';

// ngx-translate service
import { LanguageService } from 'src/app/service/language/language.service';
// API service
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { ResizeService } from 'src/app/service/resize/resize.service';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  // @Output urlPathLangCode = new EventEmitter();

  // API URL Domain name
  apiUrl = this.callApiService.apiUrl;

  // For Formal-site
  apiParameter = this.callApiService.apiParameter;
  apiLangParameter = this.callApiService.apiLangParameter;


  // tslint:disable-next-line:variable-name
  mobile_mode = window.innerWidth < 736 ? true : false;
  currentLang = 'currentLang';
  showLang = false;


  menuItemActive = false;
  subProductActive = '';
  // tslint:disable-next-line:variable-name
  showSubMenu_mb = false;
  // tslint:disable-next-line:variable-name
  showMenu_mb = false;
  headMenuLists = null;

  langs = ['US-English', 'EU-English', '日本-日本語', 'FR-French', 'DE-Germany', '台灣-繁體中文', '中国-简体中文', 'KR-한국어'];

  showMenuLangCode = '';
  showLangList = {
    'en-US': 'US-English',
    'en-GB': 'EU-English',
    'ja-JP': '日本-日本語',
    'fr-FR': 'FR-French',
    'de-DE': 'DE-Germany',
    'zh-TW': '台灣-繁體中文',
    'zh-CN': '中国-简体中文',
    'ko-KR': 'KR-한국어',
  };


  constructor(public translateService: LanguageService, public callApiService: CallApiService, public reizeService: ResizeService) {
  }



  ngOnInit() {

    // init url langCode
    {
      const urlParameters = {
        protocol: window.location.protocol,
        host: window.location.host,
        path: window.location.pathname,
      };
      const pathArr = urlParameters.path.split('/').filter(n => n);
      const pathLang = pathArr[0];
      this.translateService.checkUrlPathLang(pathLang);
      this.showMenuLangCode = this.showLangList[pathLang];
    }


    // set device size
    {
      const appInitWindowWidth = window.innerWidth;
      this.reizeService.setInitDeviceSize(appInitWindowWidth);
    }


    // Call Head API
    {
      // tslint:disable-next-line:max-line-length
      this.callApiService.get(this.apiUrl + this.apiParameter + '/IndexToB/' + this.translateService.nowLangCode).subscribe((res) => {
        console.log('Head API res:', res);
        this.headMenuLists = res;
      },
        (error) => {
          console.log('Head_API', error);
        }
      );
    }

    // Call LangCode API
    {
      this.callApiService.get(this.apiUrl + this.apiLangParameter + '/FELangToB/').subscribe((res) => {
        // console.log(res);
        this.langs = res;
      },
        (error) => {
          console.log('Head_API', error);
        }
      );
    }

  }



  switchMobileSubmenu(item) {
    if (item.Children) {
      item.activ = !item.activ;
    } else {
      this.showMenu_mb = !this.showMenu_mb;
      item.activ = !item.activ;
    }
  }

  checkMobileMenuChildren(subItem, item) {
    if (subItem.Children) {
      subItem.activ = !subItem.activ;
    } else {
      this.showMenu_mb = !this.showMenu_mb;
      item.activ = !item.activ;
    }
  }



}
