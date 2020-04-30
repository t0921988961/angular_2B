import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResinRoutingModule } from './resin-routing.module';
import { ResinComponent } from './resin.component';


@NgModule({
  declarations: [ResinComponent],
  imports: [
    CommonModule,
    ResinRoutingModule
  ]
})
export class ResinModule { }
