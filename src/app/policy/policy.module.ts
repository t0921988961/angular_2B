import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from './policy.component';
import { SharedTranslateModule } from '../sharedModule/share_translate/shared-translate/shared-translate.module';


@NgModule({
  declarations: [PolicyComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
    SharedTranslateModule
  ]
})
export class PolicyModule { }
