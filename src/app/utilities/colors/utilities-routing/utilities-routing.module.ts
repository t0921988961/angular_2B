import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingRoutingModule } from './utilities-routing-routing.module';
import { ColorsComponent } from '../colors.component';
import { SharedModule } from '../../../share/shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/color/', '.json');
}

@NgModule({
  declarations: [ColorsComponent],
  imports: [
    CommonModule,
    UtilitiesRoutingRoutingModule,
    // SharedModule
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class UtilitiesRoutingModule { }
