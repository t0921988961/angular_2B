import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Partpro100XPRoutingModule } from './partpro100-x-p-routing.module';
import { Partpro100XPComponent } from './partpro100-x-p.component';


@NgModule({
  declarations: [Partpro100XPComponent],
  imports: [
    CommonModule,
    Partpro100XPRoutingModule
  ]
})
export class Partpro100XPModule { }
