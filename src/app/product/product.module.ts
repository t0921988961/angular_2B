import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { Partpro350XBCComponent } from './Binder_Jetting/partpro350-x-bc/partpro350-x-bc.component';
import { Partpro200XTCSComponent } from './Color_fff/partpro200-x-tcs/partpro200-x-tcs.component';
import { Castpro100XPComponent } from './DLP/castpro100-x-p/castpro100-x-p.component';
import { Partpro120XPComponent } from './DLP/partpro120-x-p/partpro120-x-p.component';
import { Partpro100XPComponent } from './DLP/partpro100-x-p/partpro100-x-p.component';
import { Partpro300XTComponent } from './FFF/partpro300-x-t/partpro300-x-t.component';
import { Mfgpro230XSComponent } from './SLS/mfgpro230-x-s/mfgpro230-x-s.component';
import { Partpro150XpComponent } from './SL/partpro150-xp/partpro150-xp.component';
import { Eeezcure180Component } from './UV_Curing/eeezcure180/eeezcure180.component';
import { Multicure180Component } from './UV_Curing/multicure180/multicure180.component';


@NgModule({
  declarations: [Partpro350XBCComponent, Partpro200XTCSComponent, Castpro100XPComponent, Partpro120XPComponent, Partpro100XPComponent, Partpro300XTComponent, Mfgpro230XSComponent, Partpro150XpComponent, Eeezcure180Component, Multicure180Component],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: []
})
export class ProductModule { }
