import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Partpro350XBCComponent } from './partpro350-x-bc.component';

const routes: Routes = [
  { path: '', component: Partpro350XBCComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Partpro350XBCRoutingModule { }
