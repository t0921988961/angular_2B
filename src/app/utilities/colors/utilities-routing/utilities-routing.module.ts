import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingRoutingModule } from './utilities-routing-routing.module';
import { ColorsComponent } from '../colors.component';


@NgModule({
  declarations: [ColorsComponent],
  imports: [
    CommonModule,
    UtilitiesRoutingRoutingModule
  ]
})
export class UtilitiesRoutingModule { }
