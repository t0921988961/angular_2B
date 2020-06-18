import { Component, OnInit, OnDestroy } from '@angular/core';

// ngx-translate service
import { LanguageService } from 'src/app/service/language/language.service';
// API service
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { ResizeService } from 'src/app/service/resize/resize.service';
import { TranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})

export class HeadComponent implements OnInit, OnDestroy {

  isMenuStickyActived = false;

  // API URL Domain name
  apiUrl = this.callApiService.apiUrl;
  pathLang = this.translateService.nowUrlPathlangCode;

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

  constructor(
    public translateService: LanguageService,
    public translate: TranslateService,
    public callApiService: CallApiService,
    public reizeService: ResizeService,
    private meta: MetaService,
  ) {
  }


  ngOnInit() {

    window.addEventListener('scroll', this.scrollEvent, true);

    {
      this.showMenuLangCode = this.translateService.menuShowLangList[this.pathLang];
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
        this.headMenuLists = res;
      },
        (error) => {
          console.log('Head_API Error => ', error);
        }
      );
    }

    // Call LangCode API
    {
      this.callApiService.get(this.apiUrl + this.apiLangParameter + '/FELangToB/').subscribe((res) => {
        this.langs = res;
      },
        (error) => {
          console.log('Head_API', error);
        }
      );
    }
  }

  ngOnDestroy(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
    this.meta.setTitle('');
    this.meta.setTag('description', '');
  }

  scrollEvent = (event): any => {
    const getPosYoffset = window.pageYOffset;
    const isBigPosYoffset = getPosYoffset > 100;
    const isSmallPosYoffset = getPosYoffset < 100;
    if (isBigPosYoffset) { return this.isMenuStickyActived = true; }
    if (isSmallPosYoffset) { return this.isMenuStickyActived = false; }
  }

  switchMobileSubmenu(item) {
    if (item.Children) { return item.activ = !item.activ; }
    if (!item.Children) {
      this.showMenu_mb = !this.showMenu_mb;
      item.activ = !item.activ;
    }
  }

  checkMobileMenuChildren(subItem, item) {
    if (subItem.Children) { return subItem.activ = !subItem.activ; }
    if (!subItem.Children) {
      this.showMenu_mb = !this.showMenu_mb;
      item.activ = !item.activ;
    }
  }

}
