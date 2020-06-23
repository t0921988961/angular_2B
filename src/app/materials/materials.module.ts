import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { FilamentComponent } from './filament/filament.component';
import { ResinComponent } from './resin/resin.component';
import { SharedTranslateModule } from '../sharedModule/shared-translate/shared-translate.module';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [FilamentComponent, ResinComponent],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    SharedTranslateModule,
    // scrollTo pluging
    ScrollToModule
  ]
})
export class MaterialsModule { }
