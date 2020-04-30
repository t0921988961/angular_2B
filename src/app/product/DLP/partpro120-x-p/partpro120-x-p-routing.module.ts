import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Partpro120XPComponent } from './partpro120-x-p.component';

const routes: Routes = [{ path: '', component: Partpro120XPComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Partpro120XPRoutingModule { }
