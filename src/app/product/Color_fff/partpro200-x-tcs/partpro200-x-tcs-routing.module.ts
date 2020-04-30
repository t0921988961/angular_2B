import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Partpro200XTCSComponent } from './partpro200-x-tcs.component';

const routes: Routes = [{ path: '', component: Partpro200XTCSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Partpro200XTCSRoutingModule { }
