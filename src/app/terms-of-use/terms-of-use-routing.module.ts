import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsOfUseComponent } from './terms-of-use.component';

const routes: Routes = [{
  path: '', component: TermsOfUseComponent,
  data: {
    meta: {
      title: 'termsofous.title',
      description: 'termsofous.description'
    }
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsOfUseRoutingModule { }
