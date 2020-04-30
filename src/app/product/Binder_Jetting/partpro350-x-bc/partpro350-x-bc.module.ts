import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Partpro350XBCRoutingModule } from './partpro350-x-bc-routing.module';
import { Partpro350XBCComponent } from './partpro350-x-bc.component';


@NgModule({
  declarations: [Partpro350XBCComponent],
  imports: [
    CommonModule,
    Partpro350XBCRoutingModule
  ]
})
export class Partpro350XBCModule { }
