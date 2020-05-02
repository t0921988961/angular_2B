import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { RouterModule } from '@angular/router';

import { SharedTranslateModule } from '../sharedModule/share_translate/shared-translate/shared-translate.module';


@NgModule({
  declarations: [HeadComponent, FootComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedTranslateModule
  ],
  exports: [HeadComponent, FootComponent]
})
export class LayoutModule { }
