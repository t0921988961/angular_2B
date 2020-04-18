import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilitiesRoutingRoutingModule } from './utilities-routing-routing.module';
import { ColorsComponent } from '../colors.component';
import { SharedModule } from '../../../share/shared/shared.module';


@NgModule({
  declarations: [ColorsComponent],
  imports: [
    CommonModule,
    UtilitiesRoutingRoutingModule,
    SharedModule
  ]
})
export class UtilitiesRoutingModule { }
