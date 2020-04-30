import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResinComponent } from './resin.component';

const routes: Routes = [
  { path: '', component: ResinComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResinRoutingModule { }
