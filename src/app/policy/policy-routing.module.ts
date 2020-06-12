import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PolicyComponent } from './policy.component';

const routes: Routes = [{
  path: '', component: PolicyComponent,
  data: {
    meta: {
      title: 'policy.title',
      description: 'policy.description'
    }
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyRoutingModule { }
