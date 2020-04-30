import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Partpro120XPRoutingModule } from './partpro120-x-p-routing.module';
import { Partpro120XPComponent } from './partpro120-x-p.component';


@NgModule({
  declarations: [Partpro120XPComponent],
  imports: [
    CommonModule,
    Partpro120XPRoutingModule
  ]
})
export class Partpro120XPModule { }
