import { Component, OnInit, OnDestroy } from '@angular/core';

// ngx-translate service
import { LanguageService } from 'src/app/service/language/language.service';
// API service
import { CallApiService } from 'src/app/service/callAPI/call-api.service';
import { ResizeService } from 'src/app/service/resize/resize.service';
import { TranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';
import { Observable } from 'rxjs';


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
  showSubMenu_mb = false;
  showMenu_mb = false;

  apiHeadMenuLists$: Observable<any>;
  apiLangLists$: Observable<any>;


  showMenuLangCode = '';

  constructor(
    public translateService: LanguageService,
    public translate: TranslateService,
    public callApiService: CallApiService,
    public reizeService: ResizeService,
    private meta: MetaService,
  ) {
  }

  test$: Observable<any>;

  ngOnInit() {

    const isLangCodeApiPath = this.apiUrl + this.apiLangParameter + '/FELangToB/';
    const appInitWindowWidth = window.innerWidth;
    const isHeadApiPath = this.apiUrl + this.apiParameter + '/IndexToB/' + this.translateService.nowLangCode;

    // set device size
    this.reizeService.setInitDeviceSize(appInitWindowWidth);
    window.addEventListener('scroll', this.scrollEvent, true);

    this.showMenuLangCode = this.translateService.menuShowLangList[this.pathLang];

    // Call Head API
    this.apiHeadMenuLists$ = this.callApiService.get(isHeadApiPath, 'Head_API');
    // Call LangCode API
    this.apiLangLists$ = this.callApiService.get(isLangCodeApiPath, 'LangCode_API');
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
