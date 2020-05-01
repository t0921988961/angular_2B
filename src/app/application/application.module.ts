import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { CasestudyListComponent } from './casestudy/casestudy-list/casestudy-list.component';
import { CasestudyContentComponent } from './casestudy/casestudy-content/casestudy-content.component';


@NgModule({
  declarations: [CasestudyListComponent, CasestudyContentComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ],
  exports: [CasestudyListComponent]
})
export class ApplicationModule { }
