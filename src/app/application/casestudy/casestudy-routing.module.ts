import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasestudyComponent } from './casestudy.component';

const routes: Routes = [
  { path: '', component: CasestudyComponent },
  { path: ':id', component: CasestudyComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasestudyRoutingModule { }
