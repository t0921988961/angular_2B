import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { FilamentComponent } from './filament/filament.component';
import { ResinComponent } from './resin/resin.component';
import { SharedTranslateModule } from '../sharedModule/shared-translate/shared-translate.module';


@NgModule({
  declarations: [FilamentComponent, ResinComponent],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    SharedTranslateModule
  ],
  exports: [FilamentComponent, ResinComponent]
})
export class MaterialsModule { }
