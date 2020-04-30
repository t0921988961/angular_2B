import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Partpro100XPComponent } from './partpro100-x-p.component';

const routes: Routes = [{ path: '', component: Partpro100XPComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Partpro100XPRoutingModule { }
