import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

import { MetaModule } from '@ngx-meta/core';

export function createLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
  // return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
  // return new TranslateHttpLoader(http, '/angular_2B/assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    NgxUsefulSwiperModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createLoader,
        deps: [HttpClient]
      }
    }),
    MetaModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
