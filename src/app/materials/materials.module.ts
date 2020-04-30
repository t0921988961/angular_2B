import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { FilamentComponent } from './filament/filament.component';
import { ResinComponent } from './resin/resin.component';


@NgModule({
  declarations: [FilamentComponent, ResinComponent],
  imports: [
    CommonModule,
    MaterialsRoutingModule
  ]
})
export class MaterialsModule { }
