import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Partpro200XTCSRoutingModule } from './partpro200-x-tcs-routing.module';
import { Partpro200XTCSComponent } from './partpro200-x-tcs.component';


@NgModule({
  declarations: [Partpro200XTCSComponent],
  imports: [
    CommonModule,
    Partpro200XTCSRoutingModule
  ]
})
export class Partpro200XTCSModule { }
