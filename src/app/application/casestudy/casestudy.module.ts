import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasestudyRoutingModule } from './casestudy-routing.module';
import { CasestudyComponent } from './casestudy.component';


@NgModule({
  declarations: [CasestudyComponent],
  imports: [
    CommonModule,
    CasestudyRoutingModule
  ]
})
export class CasestudyModule { }
