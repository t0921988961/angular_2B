import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { CasestudyListComponent } from './casestudy/casestudy-list/casestudy-list.component';
import { CasestudyContentComponent } from './casestudy/casestudy-content/casestudy-content.component';
import { SharedTranslateModule } from '../sharedModule/shared-translate/shared-translate.module';


@NgModule({
  declarations: [CasestudyListComponent, CasestudyContentComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedTranslateModule
  ],
  exports: [CasestudyListComponent]
})
export class ApplicationModule {
}
