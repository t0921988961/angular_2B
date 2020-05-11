import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsOfUseRoutingModule } from './terms-of-use-routing.module';
import { TermsOfUseComponent } from './terms-of-use.component';
import { SharedTranslateModule } from '../sharedModule/share_translate/shared-translate/shared-translate.module';


@NgModule({
  declarations: [TermsOfUseComponent],
  imports: [
    CommonModule,
    TermsOfUseRoutingModule,
    SharedTranslateModule
  ]
})
export class TermsOfUseModule { }
