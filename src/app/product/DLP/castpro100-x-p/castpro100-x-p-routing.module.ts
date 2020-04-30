import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Castpro100XPComponent } from './castpro100-x-p.component';

const routes: Routes = [
  { path: '', component: Castpro100XPComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Castpro100XPRoutingModule { }
