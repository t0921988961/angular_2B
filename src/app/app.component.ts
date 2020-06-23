import { Component, OnInit, DoCheck } from '@angular/core';

// ngx-translate service
import { LanguageService } from './service/language/language.service';
import { TranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';
import { filter, map, mergeMap } from 'rxjs/operators';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {

  constructor(
    public languageService: LanguageService,
    public translate: TranslateService,
    private meta: MetaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    // console.log('Appcomponent.ts => constructor work');
    console.log('%c Appcomponent.ts => Appcomponent work', 'color:#24b5aa;');
  }

  ngOnInit() {
    // console.log('Appcomponent.ts => ngOnInit work');

    const pathLang = this.languageService.nowUrlPathlangCode;

    // init url langCode
    this.languageService.checkUrlPathLang(pathLang);

    // change router , change <meta>, <title>
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) { route = route.firstChild; }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe(
        (e) => {
          this.meta.setTitle(this.translate.instant(e.meta.title));
          this.meta.setTag('description', this.translate.instant(e.meta.description));
        }
      );
  }

  ngDoCheck() {
  }

}
