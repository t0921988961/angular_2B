import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

// swiper slider
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

// import { MetaModule } from '@ngx-meta/core';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NewsEventComponent } from './newsEvent/news-event/news-event.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { PrintServiceContentComponent } from './print-service/print-service-content/print-service-content/print-service-content.component';
import { PrintServiceFormComponent } from './print-service/print-service-form/print-service-form/print-service-form.component';
import { NewsContentComponent } from './newsEvent/news-content/news-content/news-content.component';

// ngx-translate set language json url path
export function createLoader(http: HttpClient) {
  console.log('%c AppModule.ts => createLoader work', 'color:#24b5aa;');

  const isUrlParameters = {
    protocol: window.location.protocol,
    host: window.location.host,
    path: window.location.pathname,
  };
  const getPathArr = isUrlParameters.path.split('/').filter(n => n);
  const isGithubPage = getPathArr[0] === 'angular_2B';

  // 判斷是不是 Github Pages
  if (isGithubPage) { return new TranslateHttpLoader(http, '/angular_2B/assets/i18n/', '.json'); }
  return new TranslateHttpLoader(http);
}

// let page init page Meta and title
export function metaFactory(translate: TranslateService): MetaLoader {
  return new MetaStaticLoader({
    callback: (key: string) => translate.get(key),
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: '',
    defaults: {
      title: 'Mighty mighty mouse',
      description: 'Mighty Mouse is an animated superhero mouse character',
      'og:image': 'https://upload.wikimedia.org/wikipedia/commons/f/f8/superraton.jpg',
      'og:type': 'website',
      'og:locale': 'en_US',
      'og:locale:alternate': 'en_US,nl_NL,tr_TR'
    }
  });
}


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    NewsEventComponent,
    SafeHtmlPipe,
    PrintServiceContentComponent,
    PrintServiceFormComponent,
    NewsContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUsefulSwiperModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createLoader,
        deps: [HttpClient]
      }
    }),
    // MetaModule.forRoot()
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory),
      deps: [TranslateService]
    }),
    // scrollTo pluging
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
